# PROGRESS
phase: 500종 구현·로컬 검수 완료 (GitHub·dexa.art 전달 중)
last-update: 2026-08-02T11:06+09:00

## W6~W9 최종 인수 결과 (08-02, Codex)
- 현재 `master`를 유일한 정본으로 삼아 기존 워크트리의 소유권·상태를 먼저 확인하고, 고유 구현만 보존해 통합했다. 오래된 워크트리와 프로세스는 재사용하거나 삭제하지 않았다.
- 구현 수: **500/500** (`meta`/`effect` 쌍 일치), 24개 카테고리. 웨이브별 **W0~W9 = 26 / 71 / 76 / 41 / 30 / 64 / 64 / 64 / 64**.
- 카탈로그·근접 중복: `bun scripts/lint-catalog.mjs` 500/500, `bun scripts/lint-neighbors.mjs` 500 effects / 5,443 relevant pairs 통과.
- HyperFrames: `HF_CONCURRENCY=16 HF_QUIET=1 HF_SUMMARY_ONLY=1 bun scripts/verify-hyperframes.mjs` → **500 passed, 0 failed**.
- 증분 썸네일: `bun run thumbs` → 신규 213장 렌더·287장 재사용, 최종 WebP **500장**; 후속 dry-run은 0 render / 500 skip. TRANS·MASK는 가시 타이밍 프레임 67을 사용한다.
- 시각 검수: `bun run audit:contact-sheets`로 W6~W9 각 64장, 총 256장을 원본 해상도 접촉시트로 확인해 빈 화면·깨짐·클리핑 없음.
- 결정성·성능 smoke: `bun run test:e2e` → **503 passed**. 갤러리/상세/GL 공유 컨텍스트, 3프레임 생존, 반복 시크 픽셀 결정성, 파라미터 변이를 포함한다.
- 전체 빌드: `bun run build` 통과(1,556 modules). 엔트리 376,165 bytes(<500K), Remotion leak 0, 전체 assets 5,277,260 bytes.
- 외부 전달: 소스와 dexa.art 배포 저장소의 커밋·push 및 라이브 자산 확인 후 이 절에 최종 증거를 추가한다.

## 체제: 병렬 트랙 (모놀리식 1차 발주 실패 후 전환)
- 파운데이션(커널 계약·매니페스트 코드젠·subject 래스터라이저·린트·배포 스크립트) = 오케스트레이터 직접 구현, master 76e863c+
- Track A: ✅ 완료·검수 통과·master 머지 + __vfx 훅 통합
- Track B: ✅ 완료·검수 통과·master 머지(0cf91b1)
- Track C: ✅ 완료·검수 통과·master 머지 (verify는 bun 런타임 필요 — node는 확장자 없는 TS import 불가)
- 검수 스위트(playwright smoke + __vfx 훅 계약) = 오케스트레이터 작성 완료
- 통합·게이트 실행 = 오케스트레이터

## W1 배치 발주 (08-01)
| 배치 | 워크트리 | 잡 | 이펙트 |
|---|---|---|---|
| B1 | wt-a | ✅ 검수 통과·머지 | T01 T02 T04 V02 U01 |
| B2 | wt-b | ✅ 검수 통과(사후) | L01 S01 S02 S04 V03 |
| B3 | wt-c | ✅ 검수 통과·머지(14d824e) | G01 S03 R13 L02 L03 M01 |
| B4 | wt-d | ✅ 검수 통과(사후) | X01 X02 X03 C01 C03 |
| B5 | wt-e | ✅ 완료·검수 통과·머지(69a383d) | G02 G03 |


## W2 진행 (08-01)
- 인프라 선행 건: ✅ GL 러너(1 ctx, 10개 스트레스 0 lost)·오디오 파이프라인(결정적 envelope)·D01·A01 — 검수 통과·머지(fc704e4)
- 검수 중 exporter 3픽스: webgl 표준 uniform+subject 텍스처+preserveDrawingBuffer, 오디오 인라인, 스니펫 subject 캐논화
- 배치 계획: docs/BATCHES_W2.md (15배치). 라운드1 발주: GL1(wt-a) GL2(wt-b) CV1(wt-c) CV2(wt-d) RX1(wt-e)
- Codex 샌드박스 제약 확정: 브라우저·네트워크 게이트 불가 → 배치 검증은 gen/lint/typecheck까지, 렌더·HF·스모크는 오케스트레이터

## 500 확장 골 (08-02 시작)
- /goal: 500종 확장 + 검수 + GitHub·dexa.art 양측 푸시 확인 시 종료 (푸시 사전 승인됨)
- 로드맵: W6 64(screen/retro/stylize+심화) → W7 64(broadcast/cinema+data/ui) → W8 64(three+motion/nature/audio) → W9 64(bg+type/pattern+보강) = 500
- 구현: Codex gpt-5.6-sol, 워크트리 8기(wt-a~h) 병렬
- 신규 게이트: 근접 이웃(중복 반려)·증분 썸네일·성능 예산(엔트리<500K)
- 사고 기록: W6 1차 발주 6기 즉사 — 재생성된 워크트리의 구 inode를 문 스테일 codex 브로커/앱서버가 원인. 스테일 121 프로세스 정리 후 재발주 성공. **워크트리 삭제 시 관련 데몬도 함께 정리할 것**

## W5 — 오브젝트 모션 (08-01 오후)
- 사용자 피드백: 화면 전체 효과 위주 → 피사체 자체 모션 30종 추가 결정
- 구현: Codex 대신 **Opus 5 서브에이전트 5기 병렬** (등장 8 · 물리 7 · 아이들 5 · 강조 5 · 텍스트 5)
- 신규 category 'motion'(order 17) + wave 5 + FxMeta.wave 확장(에이전트 3기가 동일 블로커 리포트 → 오케스트레이터 수정)
- 게이트: lint 244 · ts OK · 썸네일 244 · 스모크 247/247 · HF 30/30 — 반려 0건
- **244/244 완료**, 빌드·deploy 카피 완료

## W4 완료 + 최종 게이트 (08-01)
- 41종 전부 구현·검수·머지 → **214/214 완료**
- 반려·수정: U12(의도적 겹침 → layout opt-out + DEXA mono 폰트) 1건 직접 수정
- 최종 게이트: 썸네일 214장 렌더 ✅ · 스모크 217/217 ✅ · HF 전 웨이브 누적 통과 ✅ · 번들(엔트리 428K, remotion 유출 0, dist 8.3M) ✅ · 갤러리 214카드 스크롤 스트레스 에러 0 ✅ · 배포 카피 ✅
- 시뮬레이션형 GL은 결정적 근사로 구현(피드백 버퍼 없음 — 계약·시크 안전)

## 세션 인계 (08-01 오후)
- 세션 B 정지 감지(잡 0·HEAD 15분 정체) → 세션 A(원 오케스트레이터) 인계 재개
- B의 미커밋 W3 라운드2 5배치(23종) 검수·커밋·머지 완료 (still·스모크·HF 전수 통과)
- W3 잔여 7배치(30종) 발주·검수·머지 완료 → **W3 완료: 173/173**
- W3 게이트: 스모크 176/176 · HF 통과 · 썸네일 173장 · 번들 remotion 유출 0 · 배포 카피 완료
- 이슈: 엔트리 청크 996K(kernel-js eager 맵 비대) → W4 게이트 전 지연 로딩 전환 필요

## W3 진행 (08-01)
- 배치 계획: docs/BATCHES_W3.md — 17배치(GL 5 · CV 6 · RX 6), 76종
- 라운드1: 3GL2 ✅(4/4 일발 통과 — 모션 규칙 템플릿 효과) · 3GL1/3CV1/3CV2/3RX1 진행 중 · 3GL3 발주(wt-b)
- 배치 템플릿에 모션 가시성 규칙(지오메트리/픽셀 변화 필수) + GL 무상태 근사 규칙 반영

## 이펙트 상태 (구현 완료된 것만 기록, 나머지는 미착수로 간주)
| ID | 상태 | 비고 |
|---|---|---|
| C02 | pass | 레퍼런스(react). still·시각 검수 통과 |
| E01 | pass | 레퍼런스(canvas 무상태). 그레인 시각 확인 |
| P01 | pass | 레퍼런스(canvas stateful). 결정성 2회 렌더 바이트 동일 |
| T01 | pass | B1. still·스모크·hyperframes 통과 |
| T02 | pass | B1. still·스모크·hyperframes 통과 |
| T04 | pass | B1. still·스모크·hyperframes 통과 |
| V02 | pass | B1. still·스모크·hyperframes 통과 |
| U01 | pass | B1. still·스모크·hyperframes 통과 |
| L01 | pass | B2. still·스모크·hyperframes 통과 |
| S01 | pass | B2. still·스모크·hyperframes 통과 |
| S02 | pass | B2. still·스모크·hyperframes 통과 |
| S04 | pass | B2. still·스모크·hyperframes 통과 |
| V03 | pass | B2. still·스모크·hyperframes 통과 |
| G01 | pass | B3. still·스모크·hyperframes 통과 |
| S03 | pass | B3. still·스모크·hyperframes 통과 |
| R13 | pass | B3. still·스모크·hyperframes 통과 |
| L02 | pass | B3. still·스모크·hyperframes 통과 |
| L03 | pass | B3. still·스모크·hyperframes 통과 |
| M01 | pass | B3. still·스모크·hyperframes 통과 |
| X01 | pass | B4. still·스모크·hyperframes 통과 |
| X02 | pass | B4. still·스모크·hyperframes 통과 |
| X03 | pass | B4. still·스모크·hyperframes 통과 |
| C01 | pass | B4. still·스모크·hyperframes 통과 |
| C03 | pass | B4. still·스모크·hyperframes 통과 |
| G02 | pass | B5. still·스모크·hyperframes 통과 |
| G03 | pass | B5. still·스모크·hyperframes 통과 |
| G02 | pass | B5. still·시각·HF check·스모크 통과 |
| G03 | pass | B5. still·시각·HF check·스모크 통과 |
| T01 | pass | B1 |
| T02 | pass | B1 |
| T04 | pass | B1 |
| V02 | pass | B1 |
| U01 | pass | B1. HF 레이아웃 → subject 어큘루전 옵트아웃으로 해결 |
| L01 | pass | B2 |
| S01 | pass | B2 |
| S02 | pass | B2 |
| S04 | pass | B2 |
| V03 | pass | B2 |
| X01 | pass | B4 |
| X02 | pass | B4. 캡션 잉크-온-잉크 대비 결함 → 칩 배경 수정 |
| X03 | pass | B4. 스니펫 subject 라벨 제거로 해결 |
| C01 | pass | B4 |
| C03 | pass | B4 |
| G01 | pass | B3. 스니펫 라벨 겹침 → exporter 픽스로 해결 |
| S03 | pass | B3 |
| R13 | pass | B3 |
| L02 | pass | B3 |
| L03 | pass | B3. 라벨 중복 코스메틱 백로그 |
| M01 | pass | B3 |
| D01 | pass | W2 인프라 레퍼런스(webgl) |
| A01 | pass | W2 인프라 레퍼런스(audio) |
| X12 | pass | 3GL2 |
| X15 | pass | 3GL2 |
| C08 | pass | 3GL2 |
| D03 | pass | 3GL2 |

## W1 완료 게이트 (08-01)
| 항목 | 결과 |
|---|---|
| 26/26 이펙트 pass | ✅ |
| 스모크 전수 28/28 (3프레임 alive 체크로 강화) | ✅ |
| HyperFrames check 26/26 | ✅ |
| 썸네일 26장 | ✅ |
| 갤러리 부하 QA (스크롤 스트레스, 에러 0, 가상화 동작) | ✅ |
| 번들 QA (엔트리 341KB, remotion 런타임 0) | ✅ |
| build + adxdeck/vfx 배포 카피 | ✅ |
| adxdeck 커밋·푸시 (main 6e754e6) | ✅ 라이브 |

메모: T01은 글자 단위가 아닌 피사체 슬라이스 스태거로 구현됨(수용). X02/X03 대비 수정 1회(직접). G01 스모크 오탐 → 테스트 강화로 해소. kernel-js eager 맵이 엔트리에 포함 — W2에서 지연화 검토.

## 게이트 이력
| 게이트 | 결과 | 일시 |
|---|---|---|
| P0-1 typecheck | pass | 08-01 |
| P0-2 registry lint (3 effects) | pass | 08-01 |
| P0-3 smoke 스위트 5/5 (갤러리·about·C02·E01·P01) | pass | 08-01 |
| P0-4 remotion still 3종 + thumbs 3장 | pass | 08-01 |
| P0-5 HyperFrames check 3/3 + P01 실렌더 mp4 | pass | 08-01 |
| **P0 게이트 (7/7)** | **pass** | 08-01 |
| W1-1 이펙트 26/26 pass | pass | 08-01 |
| W1-2 풀 스모크 28/28 | pass | 08-01 |
| W1-3 부하 QA (스크롤·스래시 에러 0, 예산 동작) | pass | 08-01 |
| W1-4 번들 QA (갤러리 initial에 remotion 런타임 0) | pass | 08-01 |
| W1-5 썸네일 26장 + build + deploy 스테이징 | pass | 08-01 |
| **W1 게이트** | **pass — adxdeck 커밋·푸시만 사용자 승인 대기** | 08-01 |
| W2 이펙트 71/71 pass (라운드1~3 + RX10 + 재작업) | pass | 08-01 |
| W2 풀 스모크 100/100 | pass | 08-01 |
| W2 부하 QA (GL 포함 스크롤·스래시, ctxLost 0, 에러 0) | pass | 08-01 |
| W2 번들 QA (remotion 런타임 0) | pass | 08-01 |
| W2 썸네일 97장 + build + deploy 스테이징 | pass | 08-01 |
| **W2 게이트** | **pass — adxdeck 푸시 승인 대기(W1과 함께)** | 08-01 |
| P0-6 3라우트 + DEXA 토큰 (스크린샷 확보) | pass | 08-01 |
| P0-7 stateful 시크 결정성 (2회 렌더 바이트 동일) | pass | 08-01 |

## W2 검수 중 잡은 실결함 (전부 수정 완료)
- exporter GL 경로: 표준 uniform 미주입 + subject 텍스처 언바운드 + preserveDrawingBuffer 부재 → 3중 수정
- glRunner: UNPACK_FLIP_Y가 ImageBitmap에 스펙상 무시 → 전 GL 이펙트 subject 뒤집힘 → 스크래치 캔버스 경유
- sweep_static 클래스(7종: E02 E03 E07 L12 S12 S13 E06 V05): 검사기 핑거프린트가 bbox+opacity만 인정 — 페인트-온리 모션 금지 규칙 확립, 배치 템플릿 반영
- T10: 형제 요소 백드롭 미인식으로 반전 컨셉 불가 → 글로우 스트립 재설계
- E07: 플랫 subject엔 포스터화 비가시 → 그라디언트 필드 합성

## 잔여 운영 메모
- 1차 P0 모놀리식 발주 실패와 디스크 풀 사태는 해소됐다. bunx HyperFrames 캐시는 여전히 충분한 여유 공간이 필요하다.
- 오래된 병렬 워크트리는 소유권 불명 상태에서 건드리지 않는 정책에 따라 그대로 보존했다. 정리가 필요하면 별도 소유권 확인 후 Trash로 이동한다.
- 상세 프리뷰는 라이브 드라이버 트랜스포트를 유지한다. 반복 시크 픽셀 결정성·파라미터 변이 smoke를 추가해 현재 계약을 검증했다.
- kernel-js 지연 로딩과 메타데이터 인라인 매니페스트로 엔트리를 376,165 bytes까지 낮췄고, 코드젠 계약은 SPEC §4에 반영했다.
- TRANS·MASK 증분 썸네일은 가시 타이밍 프레임 67 정책으로 조정했다.
