# DEXA VFX LAB — 설계 스펙 v1

2026-08-01. 카탈로그: [CATALOG.md](./CATALOG.md) (16 카테고리 / 214종, append-only 확장)

## 1. 개요

브라우저에서 모션/VFX 이펙트를 **실시간으로 미리보고**, 선택한 이펙트를 **코드로 가져가는** 카탈로그 사이트.

- **포지션**: 프레임워크 중립 모션 이펙트 카탈로그. 내보내기 타깃은 **Remotion + HyperFrames** — W1부터 둘 다 지원.
- **배포**: `dexa.art/vfx` (GitHub Pages — `adxdeck-dexa-daily-main` 레포 하위 디렉토리, `video/`·`virtume/` 패턴과 동일)
- **소스 레포**: `/Volumes/data/Dev/dexa-vfx-lab` (별도), 산출물만 adxdeck에 복사

## 2. 아키텍처 원칙 (하드 룰)

1. **커널은 프레임워크를 import하지 않는다.** `remotion`, `@remotion/*`, hyperframes 관련 코드가 `effects/` 안에 나타나면 빌드 실패. React JSX는 허용하되 훅·상태 금지.
2. **소스 1개 → 실행처 전부.** 같은 커널 파일이 갤러리 라이브 재생, Remotion Player, `remotion render`, HyperFrames 스니펫의 유일한 소스다.
3. **결정성.** 같은 `frame` 입력 → 같은 픽셀. `Math.random`·`Date.now` 사용 금지(린트로 차단), 주입된 시드 PRNG만 사용.
4. **확장 = 파일 드롭.** 이펙트·카테고리 추가에 기존 코드 수정이 필요하면 설계 위반. 카탈로그 문서와의 개수 대조 검증은 하지 않는다(append-only).

## 3. 커널 계약

### 공통 컨텍스트

```ts
interface FxContext {
  frame: number;            // 현재 프레임
  fps: number;
  durationInFrames: number;
  width: number; height: number;
  t: number;                // frame / durationInFrames, 0..1
  random: (key: string) => number;  // 시드 PRNG (이펙트 id + key로 시드 고정)
  params: Record<string, unknown>;  // meta.params 스키마의 값
  subject: FxSubject;       // 피사체 (아래)
  audio?: FxAudioFrame;     // AUDIO 카테고리 전용: { rms, bands[8] } — 사전 분석 JSON에서 샘플
}
```

### kind별 형태

| kind | 형태 |
|---|---|
| `react` | `(ctx: FxContext & { subjectNode: ReactNode }) => ReactNode` — 순수 함수, 훅 금지 |
| `canvas` | 무상태: `draw(g: CanvasRenderingContext2D, ctx) => void` |
| `canvas` (stateful) | `{ init(ctx): S; step(s: S, ctx): S; render(g, s: S, ctx): void }` |
| `webgl` | `{ frag: string; uniforms(ctx): Record<string, number \| number[]> }` — 공용 풀스크린 쿼드 + 공용 버텍스 셰이더 |

**stateful 규칙**: 시뮬레이션형(유체·파티클 물리·오토마타 등)은 `meta.stateful = true`. 시크/스크럽 시 드라이버가 frame 0부터 재생(step)한다 — 기본 6초 × 30fps = 최대 180스텝이므로 저렴. 이펙트 작성자는 신경 쓰지 않는다.

### subject (피사체)

모든 이펙트는 같은 기본 피사체(DEXA 트라이애드 마크 + 짧은 라벨)를 받아 이펙트 차이만 보이게 한다.

- `react` 커널: `subjectNode` (JSX)
- `canvas`/`webgl` 커널: `subject.bitmap` (`ImageBitmap`, 드라이버가 사전 래스터화)
- 상세 페이지에서 교체 가능: 트라이애드 / 사용자 텍스트 / 업로드 이미지 — 전부 드라이버 레이어에서 처리, 커널은 모름

### params 스키마 → 컨트롤 UI 자동 생성

```ts
params: {
  intensity: { type: 'range', min: 0, max: 1, step: 0.01, default: 0.6, label: 'INTENSITY' },
  signal:    { type: 'color', default: '#5EE7F3', label: 'SIGNAL' },
  mode:      { type: 'enum', options: ['slice','shift','tear'], default: 'slice', label: 'MODE' },
  loop:      { type: 'toggle', default: true, label: 'LOOP' },
}
```

이펙트별 UI 코드는 존재하지 않는다. 상세 페이지 컨트롤 패널은 이 스키마에서 100% 생성.

## 4. 파일 규약 & 레지스트리

```
effects/<category>/<ID>_<slug>.meta.ts     ← id·name·category·kind·cost(1|2|3)·wave·tags·stateful?·params·프리셋
effects/<category>/<ID>_<slug>.effect.ts   ← 커널 본체 (.tsx 가능)
src/categories.ts                          ← 카테고리 데이터 (추가 자유)
```

- **meta**: `import.meta.glob('...meta.ts', { eager: true })` — 갤러리가 커널 로드 없이 전 목록 렌더
- **effect**: lazy glob — 카드 활성화/상세 진입 시에만 청크 로드
- **빌드 검증** (위반 시 실패): ID 중복 · meta/effect 쌍 불일치 · params 스키마 위반 · 커널의 프레임워크 import · `Math.random`/`Date.now`

## 5. 드라이버

### 5.1 갤러리 LiveCard

- **공유 rAF 클럭 1개**, 갤러리는 24fps 스로틀. 카드별 rAF 금지.
- IntersectionObserver로 뷰포트 추적, 그리드는 가상 스크롤.
- **부하 예산**: cost 가중치 `●=1, ●●=3, ●●●=8`, 총 예산 **40**. 뷰포트 중심 근접순으로 활성화, 초과분은 썸네일 정지 이미지. 활성/비활성 전환에 히스테리시스(스크롤 스래시 방지). 탭 blur 시 전체 정지.
- 백킹 해상도 **320×180**, CSS 업스케일.
- canvas/webgl 커널은 imperative draw — React 리렌더 없음.

### 5.2 공유 GL 러너 (W2)

WebGL 컨텍스트는 **페이지 전체에 1개**(오프스크린). 활성 GL 카드의 셰이더를 순차 렌더 → 각 카드의 2D 캔버스에 blit. 카드별 컨텍스트 생성 금지(브라우저 ~16개 한도에서 context lost 발생). W1에는 GL 이펙트가 없으므로 W2에서 구현하되, 드라이버 인터페이스는 W1에 정의해 둔다.

### 5.3 Remotion 어댑터

- 어댑터가 `useCurrentFrame()`/`useVideoConfig()`를 읽어 `FxContext`로 변환, 커널 실행.
- `src/remotion/Root.tsx`: 매니페스트 순회로 전 이펙트 `<Composition>` 자동 등록. 기본 1280×720 / 30fps / 6초, `defaultProps = meta 기본 프리셋`.
- canvas 커널은 프레임 동기 draw(rAF 아님 — `frame` prop에 반응). webgl 렌더 시 `--gl=angle`.
- **썸네일 빌드**: `remotion still` 50% 프레임 → `public/thumbs/<id>.webp`. 갤러리 정지 이미지 + 시각 회귀 기준 이미지 겸용.

### 5.4 HyperFrames 어댑터 (W1 포함)

HyperFrames(HeyGen, Apache 2.0)는 HTML+CSS+JS와 `data-start`/`data-duration` 타임라인 속성으로 비디오를 만드는 프레임워크. 어댑터는 **스니펫 생성기**다:

- **DOM 커널**: 타임라인을 `data-*` 속성 + CSS keyframes로 번역한 self-contained HTML 스니펫.
- **canvas/webgl 커널**: HTML + 커널 코드 인라인 + 미니 드라이버(HyperFrames 타임라인에서 frame을 받아 draw) 스니펫.
- 상세 코드 탭에 `HYPERFRAMES` 탭. **W1 26종 전부** 스니펫 제공 + HyperFrames 렌더러로 실 렌더 검증(정확한 CLI는 구현 시 공식 저장소 `heygen-com/hyperframes` 확인).
- 코드 탭은 **어댑터 플러그인 구조** — 탭 추가 = 어댑터 파일 1개.

## 6. 화면

| 라우트 | 내용 |
|---|---|
| `/vfx/` | 갤러리 — 좌측 sticky 필터(카테고리 16 · 렌더 4 · 부하 3 · wave) + 검색 + 가상 스크롤 그리드 |
| `/vfx/#/e/<id>` | 상세 — Remotion Player(스크럽·루프) + 파라미터 패널(스키마 생성) + 피사체 교체 + 코드 탭 + 관련 이펙트 |
| `/vfx/#/about` | 사용법 — Remotion/HyperFrames에 붙여넣는 법, 프리셋 JSON·CLI 설명 |

- 코드 탭: `TSX` · `GLSL`(webgl만) · `HYPERFRAMES` · `PRESET JSON` · `CLI` — 전 탭 복사 버튼. CLI 예: `npx remotion render src/remotion/index.ts G02 out/g02.mp4 --props='<현재 파라미터>'`
- 라우팅은 해시(부모 사이트 404 규칙 무간섭). Vite `base: '/vfx/'`.
- `@remotion/player`는 상세 라우트에서만 lazy 로드 — 갤러리 초기 번들에 Remotion 0KB.

## 7. DEXA 테마

`dexa-theme.css` 토큰 재사용 — hex 재정의 금지.

| 역할 | 토큰 |
|---|---|
| 페이지 셸 · 필터 | Paper `#F5F1E6` |
| 카드 몸체 | Panel `#EBE4D3` (hover Panel2) |
| 프리뷰 베젤 | Ink `#17181B` |
| 이펙트가 그려지는 인셋 면 | `#0D0E10` |
| 이펙트 기본 신호색 | Cyan `#5EE7F3` (다크 캔버스 전용) |
| 필터 활성 · 포커스 · 복사 버튼 | Orange `#FF5A1F` |
| 카드 라벨 | JetBrains Mono 11px 대문자 — `G02 / DATAMOSH SLICE / CV / ●●` |

모든 이펙트의 **기본 프리셋 팔레트 = Ink 바탕 + Cyan** — 갤러리가 하나의 계측기 시스템으로 읽히게. 색은 params로 교체 가능.

## 8. 스택

- **bun** + Vite + React 19 + TypeScript strict
- remotion **4.0.478** (기존 프로젝트와 동일 버전 고정)
- 상태 관리 라이브러리 없음 — URL(해시) + 로컬 상태만
- 스타일: `dexa-theme.css` 복사본 + CSS Modules

## 9. 테스트 / 검증

| 단계 | 내용 |
|---|---|
| typecheck | `tsc --noEmit` |
| 레지스트리 lint | §4 빌드 검증 규칙 |
| Playwright 스모크 | 매니페스트 순회 → `/#/e/<id>` 방문 → 콘솔 에러 0 + 캔버스 non-blank 픽셀 + 파라미터 1회 변경 후 정상 |
| Remotion 렌더 | 전 이펙트 `remotion still` 성공 (썸네일 생성 겸) |
| HyperFrames 렌더 | W1 전 이펙트 스니펫 실 렌더 성공 |

이 스위트가 **Codex 발주물 검수 기준**이다. 통과 못 하면 반려.

## 10. 배포

```
bun run build    # → dist (base '/vfx/')
bun run deploy   # dist → ../adxdeck-dexa-daily-main/vfx/ 복사 (git 커밋·푸시는 별도 수동)
```

## 11. Wave & 발주 계획

| Wave | 범위 |
|---|---|
| **W1** | 인프라 전체(셸·레지스트리·LiveCard·부하 예산·params UI·Remotion 어댑터·썸네일 빌드·**HyperFrames 어댑터**·테스트 스위트·배포 스크립트) + 이펙트 26종 |
| W2 | 이펙트 71종 + 공유 GL 러너 + 오디오 인프라(사전 분석 JSON 파이프라인) |
| W3 | 이펙트 76종 |
| W4 | 이펙트 41종 |

### W1 이펙트 26종

T01 Kinetic Split · T02 Scramble Decode · T04 Mask Reveal · G01 RGB Split · G02 Datamosh Slice · G03 CRT Scanline · L01 Bloom Pulse · L02 Specular Sweep · L03 Neon Flicker · P01 Particle Burst · S01 Stroke Draw · S02 Blob Morph · S03 Grid Wave · S04 Radar Sweep · X01 Iris Wipe · X02 Slice Shuffle · X03 Zoom Punch · C01 Parallax Layers · C02 Ken Burns · C03 Handheld Shake · E01 Film Grain · V02 Counter Odometer · V03 Progress Ring · U01 Terminal Boot · R13 Dot Matrix · M01 Shape Reveal

### 발주 방식 (Codex sol)

1. **인프라 선행 1건**: 셸 + 레지스트리 + 드라이버 + 어댑터 + 테스트 스위트 + 레퍼런스 이펙트 3종(react/canvas 무상태/canvas stateful 각 1) — 계약 검증용.
2. 통과 후 **이펙트 배치 병렬 발주**: 커널 종류별 묶음, 이펙트당 meta+effect 파일 쌍. 검수 = §9 스위트.
3. W2부터는 W1 파이프라인 그대로 배치만 반복.
