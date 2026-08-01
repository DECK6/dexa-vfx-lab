# HyperFrames API 조사 노트

조사 대상: `https://github.com/heygen-com/hyperframes`
조사 시점 커밋: `89e970fbd77a4241f55cf3aba41d81dced8e9372` (2026-07-31, `chore: release v0.7.87`)
로컬 클론 경로: `/tmp/hyperframes-research`

모든 항목은 실제 소스/문서 근거를 인용한다. 확인 못 한 것은 **미확인**으로 표기했다.

---

## 1. 컴포지션 HTML 파일의 정확한 구조

컴포지션은 **빌드 스텝 없는 단일 HTML 파일**이다. DOM이 타이밍의 소스 오브 트루스이고, 애니메이션 런타임은 seek 가능해야 하며, 미디어 재생은 프레임워크가 소유한다.

### 루트 요소 요구사항

`skills/hyperframes-core/references/minimal-composition.md` 기준 필수 항목:

- 루트 `<div>`에 `data-composition-id`, `data-start="0"`, `data-width`, `data-height`, `data-duration`
- 최소 1개의 클립 (`data-start`, `data-duration`, `data-track-index`를 가진 요소)
- `gsap.timeline({ paused: true })`를 만들어 `window.__timelines["<composition-id>"]`에 등록

`skills/hyperframes-core/SKILL.md:60`이 명시하는 첫 빌드 실패 단골:

> 루트 컴포지션 요소는 반드시 `data-start="0"`를 가져야 한다. 빠지면 `root_composition_missing_data_start`로 lint 실패.

### 두 가지 루트 형태 (호환 불가)

`skills/hyperframes-core/SKILL.md:40-44`:

- **Standalone** (최상위 `index.html`): 루트 `<div>`가 `<body>` 바로 아래. `<template>` 래핑 금지 (래핑하면 콘텐츠가 전부 숨겨져 렌더가 깨진다).
- **Sub-composition** (`data-composition-src`로 로드): 루트를 반드시 `<template>`으로 감싼다. 런타임은 **`<template>` 내용만 클론**하므로 `<style>`/`<script>`도 template 안에 넣어야 한다 (`<head>`에 둔 것은 버려진다).

### 최소 유효 예시 전문

`skills/hyperframes-core/references/minimal-composition.md` 원문 그대로:

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=1920, height=1080" />
    <title>Minimal HyperFrames Composition</title>
    <script src="https://cdn.jsdelivr.net/npm/gsap@3.14.2/dist/gsap.min.js"></script>
    <style>
      body {
        margin: 0;
        background: #0b0f14;
        color: white;
        font-family: Inter, system-ui, sans-serif;
      }
      #root {
        position: relative;
        width: 1920px;
        height: 1080px;
        overflow: hidden;
      }
      .clip {
        position: absolute;
        inset: 0;
        display: grid;
        place-items: center;
      }
      h1 {
        margin: 0;
        font-size: 96px;
      }
    </style>
  </head>
  <body>
    <div
      id="root"
      data-composition-id="main"
      data-start="0"
      data-width="1920"
      data-height="1080"
      data-duration="5"
    >
      <section id="title-card" class="clip" data-start="0" data-duration="5" data-track-index="1">
        <h1 id="title">Hello HyperFrames</h1>
      </section>
    </div>
    <script>
      window.__timelines = window.__timelines || {};
      const tl = gsap.timeline({ paused: true });
      tl.from("#title", { y: 48, opacity: 0, duration: 0.6, ease: "power3.out" }, 0.2);
      window.__timelines["main"] = tl;
    </script>
  </body>
</html>
```

### 루트 사이즈 주의 (조용한 레이아웃 버그)

`skills/hyperframes-core/SKILL.md:50`: standalone 루트는 px 단위 명시적 박스가 필요하고, `height:100%` 자식까지 이어지는 모든 조상이 해결된 높이를 가져야 한다. 아니면 flex/`100%` 자식이 0으로 붕괴해 콘텐츠가 좌상단에 쌓인다.

또한 `SKILL.md:72`: 풀스크린 배경은 루트 자신이 아니라 **full-bleed 자식**(`position:absolute; inset:0`)에 줘야 한다. 프로듀서의 프레임 합성이 루트 요소 자체의 `background`를 떨어뜨려 프레임이 검게 렌더될 수 있다 (preview/`snapshot`은 멀쩡히 보이는데 렌더만 깨지는 함정).

---

## 2. 타임라인 속성 문법 — 전체 목록과 단위

**단위는 전부 초(seconds)다.** 프레임 단위 속성은 존재하지 않는다. 근거: `docs/reference/html-schema.mdx:54-68` 표 전체가 "in seconds"로 기술된다.

### 클립 속성 (`docs/reference/html-schema.mdx:50-68` 전문 정리)

| 속성 | 적용 대상 | 필수 | 설명 |
|------|----------|------|------|
| `id` | 전체 | 예 | 고유 식별자. 상대 타이밍 참조 및 CSS 타겟팅에 사용 |
| `class="clip"` | 보이는 요소 | 예 | 런타임 가시성 관리 활성화. 오디오 전용 클립엔 생략 |
| `data-start` | 전체 | 예 | 시작 시각(초). 또는 상대 타이밍용 클립 ID 참조 |
| `data-duration` | video, img, audio, 중첩 컴포지션 호스트 | 조건부 | 타임라인 슬롯 길이(초). **이미지·중첩 컴포지션 호스트는 필수**. video/audio는 선택(기본값 = 소스 길이) |
| `data-track-index` | 전체 | 예 | 타임라인 트랙 번호. 같은 트랙의 클립끼리는 겹칠 수 없음 |
| `data-media-start` | video, audio | 아니오 | 소스 파일 내 재생 오프셋/트림 지점(초). 기본 `0` |
| `data-playback-start` | video, audio, composition | 아니오 | 소스 시간 오프셋(초). 중첩 컴포지션에선 호스트의 `data-start` 시점에 보여줄 자식 타임라인 시각. 기본 `0` |
| `data-playback-rate` | video, audio, composition | 아니오 | 소스 재생 배속. `0.1`~`5`로 클램프. 잘못된 값은 `1` |
| `data-volume` | audio, video | 아니오 | 볼륨 `0`~`1`. 기본 `1` |
| `data-composition-id` | div | 컴포지션엔 필수 | 고유 컴포지션 ID. `window.__timelines` 키와 일치해야 함 |
| `data-composition-src` | div | 아니오 | 외부 컴포지션 HTML 경로 (중첩용) |
| `data-variable-values` | div | 아니오 | 중첩 컴포지션에 넘길 값의 JSON 객체 |
| `data-var-src` | img, video, audio | 아니오 | `src`를 선언된 변수 id에 바인딩 |
| `data-var-text` | 전체 | 아니오 | 요소 자신의 텍스트를 스칼라 변수 id에 바인딩 |
| `data-color-grading` | img, video | 아니오 | 미디어 보정/그레이딩/LUT/셰이더 이펙트 JSON 페이로드 |
| `data-width` / `data-height` | div | 컴포지션엔 필수 | 컴포지션 픽셀 크기 |

추가 속성 (다른 문서에서 확인):

- `data-has-audio` (`docs/concepts/data-attributes.mdx`): 비디오에 오디오 트랙이 있음을 표시
- `data-composition-variables` (같은 파일): 선언된 변수 JSON 배열 (`id`, `type`, `label`, `default`)
- `data-hidden` (`skills/hyperframes-core/SKILL.md:79`): preview와 render 양쪽에서 요소를 숨김. 시간 윈도우를 덮어씀. 비파괴적/가역적
- `data-no-timeline` (`packages/lint/src/rules/composition.ts:697-723`): 루트에 붙이면 `window.__timelines` 등록 없이도 프로듀서가 타임라인 폴링을 건너뛴다. **GSAP 없는 캔버스 컴포지션의 핵심 스위치**
- `data-timeline-role="captions"`, `data-caption-root="true"` (`docs/reference/html-schema.mdx:245-254`): 캡션 컴포지션 표식
- `data-requires-webgpu` (`packages/core/src/runtime/adapters/typegpu.ts:86`): 이게 있어야 TypeGPU present-heartbeat가 돈다
- `data-loop` (`docs/reference/html-schema.mdx:116`): GIF 루프 메타데이터 오버라이드
- `data-resolution` (`docs/guides/4k-rendering.mdx:38`): `init --resolution` 이 패치해 넣는 값 (예: `landscape-4k`)

### 총 길이 결정 규칙 (중요, 문서 간 미묘한 차이 있음)

`docs/concepts/data-attributes.mdx`의 Composition Attributes 표가 가장 정밀하다:

> **루트** 컴포지션의 `data-duration`은 총 렌더 길이/프레임 수(초)다. `data-width`/`data-height`처럼 컴파일 타임에 소스 HTML에서 한 번 읽으므로, 스크립트나 `hyperframes render --variables`로는 바꿀 수 없다. 루트가 `data-duration`을 생략한 경우에만, 스크립트 실행 후 살아있는 DOM/타임라인에서 총 길이를 유도한다.

반면 **중첩** 컴포지션 호스트는 `data-duration`을 쓰지 않고 자식의 `tl.duration()`이 길이를 정한다 (`docs/reference/html-schema.mdx:155`).

`skills/hyperframes-core/SKILL.md:54`도 같은 취지: "Render duration = root `data-duration`, not timeline length."

### 상대 타이밍

`docs/reference/html-schema.mdx:196-213`. `data-start`에 숫자 대신 다른 클립의 id를 쓰면 "그 클립이 끝날 때 시작"이다.

```html
<video id="intro" data-start="0" data-duration="10" data-track-index="0" src="..."></video>
<video id="main" data-start="intro" data-duration="20" data-track-index="0" src="..."></video>
```

파싱 형태는 `<id>`, `<id> + <number>`, `<id> - <number>` 세 가지. 값이 유효한 숫자면 절대 초로 해석한다. 순환 참조는 리졸버가 감지해 throw. 참조는 **같은 컴포지션 내부에서만** 해결된다.

### ⚠ 문서 모순 발견: `data-track-index`와 z-order

두 공식 문서가 정반대로 말한다:

- `docs/reference/html-schema.mdx:56`: "Timeline track number. **Controls z-ordering (higher = in front).**"
- `docs/concepts/data-attributes.mdx` 타이밍 속성 표: "Temporal ordering — groups clips into rows on the timeline. **Does not control z-ordering (use CSS `z-index` for that).**"

`packages/core/docs/quickstart-template.html:72-73`은 전자 편("z-stacking order + timeline track grouping, higher = in front"). 한편 `skills/hyperframes-core/references/tracks-and-clips.md`가 "same-track overlap / z-index" 처리를 다룬다고 인덱싱돼 있다.

→ **우리 어댑터는 z-order를 `data-track-index`에 의존하지 말고 CSS `z-index`를 명시적으로 쓰는 게 안전하다.** (양쪽 문서 모두에서 유효한 유일한 해석)

---

## 3. CSS 애니메이션과 타임라인의 연동 방식

CSS 키프레임 애니메이션은 **WAAPI 핸들을 통해 seek된다.** 전용 어댑터가 있다: `packages/core/src/runtime/adapters/css.ts`.

동작 방식 (`css.ts:137-152` `seek` 구현):

```js
seek: (ctx) => {
  const time = Number(ctx.time) || 0;
  for (const entry of entries) {
    if (!entry.el.isConnected) continue;
    const start = resolveEntryStartSeconds(entry.el);
    const localTimeMs = Math.max(0, time - start) * 1000;
    const animations = entry.animations;
    if (animations.length > 0) {
      seekAnimations(animations, localTimeMs);
      continue;
    }
    // WAAPI 핸들이 없는 환경용 폴백
    entry.el.style.animationPlayState = "paused";
    entry.el.style.animationDelay = `-${(localTimeMs / 1000).toFixed(3)}s`;
  }
},
```

핵심 포인트:

1. **요소별 로컬 시간**: 컴포지션 시간에서 그 요소의 `data-start`를 뺀 값이 애니메이션의 로컬 시간이 된다 (`css.ts:141-142`). 즉 CSS `animation-delay`를 수동으로 맞출 필요가 없다 — `data-start`가 자동으로 오프셋 역할을 한다.
2. **핸들 수집**: `el.getAnimations()`로 WAAPI 핸들을 얻는다 (`css.ts:15-21`). 각 핸들에 `animation.currentTime = timeMs`를 직접 대입해 seek한다 (`css.ts:52-58`).
3. **폴백**: `getAnimations()`가 없는 환경에선 `animation-play-state: paused` + **음수 `animation-delay`** 조합으로 프레임을 고정한다. 이게 `docs/concepts/frame-adapters.mdx:115`이 말하는 "paused negative-delay fallback"이다.
4. **무한 애니메이션은 금지**: `css.ts:36-49`의 `inferAnimationEndSeconds`가 `endTime`이 `Infinity`/`NaN`이면 `unbounded: true`로 표시한다. `skills/hyperframes-core/SKILL.md:67`이 "no `repeat: -1` (use a finite count)"로 못박는다.
5. **GSAP과 CSS transform 충돌 금지**: `SKILL.md:61` — 같은 속성에 CSS 초기 `transform`과 GSAP 트윈을 함께 쓰면 lint가 `gsap_css_transform_conflict`로 거부한다. 초기 상태는 `gsap.fromTo(el, { x: -40 }, { x: 0 })`처럼 트윈 안에서 정한다.

즉 **CSS 애니메이션은 GSAP 타임라인에 등록할 필요가 없다.** 별도 어댑터가 DOM을 훑어 자동으로 seek한다. 마스터 클럭은 여전히 하나다.

---

## 4. JS 실행 모델 — 렌더 중 스크립트는 어떻게 도는가

**결론부터: 프레임별 canvas 그리기가 완전히 가능하다.** 두 가지 독립적인 메커니즘이 있고, 둘 다 실제 회귀 테스트로 검증돼 있다.

### 4-A. 가상 시간 셰임 (virtual-time shim) — rAF가 프레임 동기 콜백이 된다

`packages/producer/src/services/fileServer.ts:201-215` 주석:

> 셰임은 `Date.now`, `performance.now`, 그리고 rAF/setTimeout 파이프라인을 얼려서 렌더 seek이 페이지의 "현재 시각" 개념을 결정론적으로 전진시킬 수 있게 한다. 렌더러는 **매 프레임 캡처 전에** `__HF_VIRTUAL_TIME__.seekToTime(ms)`를 호출하고, 페이지의 모든 타이밍 관련 요소는 다음 seek까지 정확히 `ms`를 본다.

구현 (`fileServer.ts:336-348, 290-301, 355-361`):

```js
window.requestAnimationFrame = function(callback) {
  if (typeof callback !== "function") return 0;
  var entry = { id: rafId++, callback: callback, cancelled: false };
  rafQueue.push(entry);
  return entry.id;
};
// ...
function flushAnimationFrame() {
  if (!rafQueue.length) return;
  var current = rafQueue.slice();
  rafQueue.length = 0;
  for (var i = 0; i < current.length; i++) {
    var entry = current[i];
    if (entry.cancelled) continue;
    try { entry.callback(virtualNowMs); } catch {}
  }
}
// ...
seekToTime: function(nextTimeMs) {
  var safeTimeMs = Math.max(0, Number(nextTimeMs) || 0);
  virtualNowMs = safeTimeMs;
  flushAnimationFrame();
  return virtualNowMs;
},
```

→ rAF는 실제로 돌지 않고 **큐에 쌓였다가 seek 때 정확히 한 번 flush된다.** 콜백 인자로 받는 타임스탬프는 가상 시간(ms). 따라서 평범한 `requestAnimationFrame(draw)` 루프가 그대로 결정론적 프레임 렌더러가 된다.

`Date`도 `VirtualDate`로 교체되고 (`fileServer.ts:303-325`), `performance.now`도 `virtualNowMs`를 반환하도록 재정의된다 (`fileServer.ts:327-334`).

### 4-B. 실동작 예시: GSAP 없는 순수 2D canvas 컴포지션

`packages/producer/tests/raf-ball-render-compat/src/index.html` 전문 — 이게 정확히 "canvas 커널" 패턴이다:

```html
<!DOCTYPE html>
<html>
<head>
<style>body { margin: 0; background: #000; width: 1920px; height: 1080px; } canvas { display: block; }</style>
</head>
<body>
  <div id="root" data-composition-id="raf-ball" data-width="1920" data-height="1080" data-start="0" data-duration="5" data-no-timeline>
    <canvas id="c" width="1920" height="1080" class="clip" data-start="0" data-duration="5"></canvas>
  </div>
  <script>
    const ctx = document.getElementById('c').getContext('2d');
    function draw(t) {
      ctx.fillStyle = '#000'; ctx.fillRect(0, 0, 1920, 1080);
      const x = 960 + Math.sin(t / 1000 * Math.PI) * 700;
      ctx.fillStyle = '#f87171';
      ctx.beginPath(); ctx.arc(x, 540, 80, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#9ca3af'; ctx.font = '32px system-ui, sans-serif';
      ctx.fillText(`t = ${t.toFixed(0)} ms`, 40, 60);
      requestAnimationFrame(draw);
    }
    requestAnimationFrame(draw);
    window.__timelines = window.__timelines || {};
  </script>
</body>
</html>
```

주목할 점:

- GSAP 로드 없음, 타임라인 등록 없음. 루트에 `data-no-timeline`.
- 길이는 루트 `data-duration="5"`가 결정.
- `<canvas>`가 `class="clip"` + `data-start`/`data-duration`을 가진 평범한 클립.
- `draw(t)`의 `t`는 **가상 시간 ms**. 자기 자신을 다시 rAF에 등록해 다음 seek 때 또 불린다.
- `data-track-index`가 없다 — 단일 클립이라 생략 가능한 것으로 보인다(문서상 필수인데 이 테스트는 통과). **미확인**: 생략이 공식 허용인지 테스트 관용인지.

### 4-C. `hf-seek` 이벤트 — 명시적 프레임 동기 콜백 API

`packages/core/src/runtime/adapters/seek-dispatch.ts`가 `"hf-seek"` CustomEvent를 `window`에 디스패치한다. 이벤트 detail의 타입 (`seek-dispatch.ts:26-29`):

```ts
export interface HfSeekEventDetail {
  time: number;                                    // 초 단위
  waitUntil: (promise: PromiseLike<unknown>) => void;
}
```

**중요: 이 이벤트는 Three.js/TypeGPU가 없어도 항상 발화한다.** `packages/core/src/runtime/init.ts:2492-2507`에서 두 어댑터가 **무조건** 등록된다:

```ts
state.deterministicAdapters = [
  createWaapiAdapter(),
  createCssAdapter({ ... }),
  createAnimeJsAdapter(),
  createLottieAdapter(),
  createThreeAdapter(),
  // ...
  createTypegpuAdapter(),
  createGsapAdapter({ getTimeline: () => state.capturedTimeline }),
] as RuntimeDeterministicAdapter[];
```

그리고 두 어댑터의 `seek`는 라이브러리 존재 여부를 검사하지 않고 그냥 디스패치한다 (`three.ts:96-101`, `typegpu.ts:102-107`):

```ts
seek: (ctx) => {
  forcedTime = Math.max(0, Number(ctx.time) || 0);
  lastForcedTime = forcedTime;
  window.__hfThreeTime = forcedTime;
  dispatchSeekEvent(forcedTime);
},
```

(`window.THREE` 검사는 `discover`/`getReadyPromise`의 로딩 매니저 훅에만 쓰인다.)

`dispatchSeekEvent`는 같은 시각 중복 디스패치를 dedup한다 (`seek-dispatch.ts:64-68`) — 두 어댑터가 같은 T로 각각 호출해도 이벤트는 한 번만 뜬다.

사용 패턴 (`packages/core/src/runtime/adapters/typegpu.ts:26-48` 공식 예시):

```html
<canvas id="gpu-canvas" width="1920" height="1080"></canvas>
<script type="module">
  function render(timeSeconds) { /* ... draw ... */ }

  window.addEventListener("hf-seek", (e) => {
    render(e.detail.time);
    e.detail.waitUntil(device.queue.onSubmittedWorkDone());
  });

  render(window.__hfTypegpuTime ?? 0);
</script>
```

**비동기 그리기 동기화**: `e.detail.waitUntil(promise)`를 **리스너 안에서 동기적으로** 호출해야 한다 (`seek-dispatch.ts:35-40` — 늦게 부르면 throw). 엔진은 스크린샷/프레임 캡처 전에 등록된 작업을 await한다 (`typegpu.ts:54-58`). 이게 GPU/비동기 캔버스 작업의 프레임 정합을 보장하는 유일한 공식 수단이다.

실제 사용 예 `packages/producer/tests/distributed/three-boundary/src/index.html:76-81`:

```js
window.addEventListener("hf-seek", (e) => {
  if (e && e.detail && typeof e.detail.time === "number") {
    window.__hfThreeTime = e.detail.time;
  }
  renderFrame();
});
renderFrame();
```

### 4-D. 폴링 변수

푸시(이벤트) 말고 폴링도 지원된다 (`typegpu.ts:18-22`):

- `window.__hfThreeTime` — 현재 seek 위치(초)
- `window.__hfTypegpuTime` — 동일

`init.ts:2512-2517`의 `window.__hfReseekGpu(time)`은 엔진이 디코드된 비디오 프레임을 주입한 **뒤** 같은 T로 GPU 컴포지션을 재렌더시키는 훅이다 (비디오 텍스처를 쓰는 씬이 올바른 프레임을 샘플링하도록). 이때는 dedup을 우회하는 `forceDispatchSeekEvent`를 쓴다.

### 4-E. 실행 모델 요약

| 방식 | 시간 단위 | 근거 |
|------|----------|------|
| `requestAnimationFrame(cb)` | cb 인자 = 가상 시간 **ms** | `fileServer.ts:298` |
| `hf-seek` 이벤트 | `e.detail.time` = **초** | `seek-dispatch.ts:27` |
| `window.__hfThreeTime` / `__hfTypegpuTime` | **초** | `three.ts:99`, `typegpu.ts:105` |
| GSAP 타임라인 | **초** | `docs/concepts/frame-adapters.mdx:113` |

정규 클럭은 `t = frame / fps` (`docs/concepts/frame-adapters.mdx:97`), 프레임 정규화는 `normalizedFrame = clamp(Math.floor(frame), 0, durationFrames)` (`frame-adapters.mdx:77`).

### 4-F. 커스텀 프레임 어댑터 API (v0, experimental)

`docs/concepts/frame-adapters.mdx:45-61`:

```typescript
type FrameAdapterContext = {
  compositionId: string;
  fps: number;
  width: number;
  height: number;
  rootElement?: HTMLElement;
};

type FrameAdapter = {
  id: string;
  init?: (ctx: FrameAdapterContext) => Promise<void> | void;
  getDurationFrames: () => number;
  seekFrame: (frame: number) => Promise<void> | void;
  destroy?: () => Promise<void> | void;
};
```

요구 시맨틱 (`frame-adapters.mdx:64-70`): `seekFrame`은 임의 순서 seek을 지원해야 하고, 같은 입력에 멱등이어야 하며, 내부 시간을 범위로 클램프해야 한다. 어댑터는 clock-driven이 아니라 paused/seek-driven이어야 한다.

> ⚠ `docs/concepts/frame-adapters.mdx:12-14`: Adapter API는 **v0 (experimental)**. v1 전까지 breaking change 가능. 핵심 계약(seek-by-frame, 결정론적 출력)은 안정적이지만 메서드 시그니처는 바뀔 수 있다.

**미확인**: 이 공개 `FrameAdapter` 타입을 외부에서 등록하는 구체적 API(등록 함수 이름/전역 훅). 문서는 타입과 호스트 루프만 보여주고 등록 경로를 명시하지 않는다. 내부 어댑터는 `init.ts`의 배열에 하드코딩돼 있다. 실무적으로는 `hf-seek` 리스너가 사실상의 공개 확장점이다.

---

## 5. 렌더 CLI

### 설치 / 요구사항

`README.md:119`: **Node.js 22+, FFmpeg**. `packages/cli/package.json`의 `engines.node`도 `>=22`.

```bash
npm install -g hyperframes
# 또는
npx hyperframes <command>
```

패키지명은 `hyperframes` (CLI), 워크스페이스 내부명은 `@hyperframes/cli`.

### 기본 루프

`README.md:112-117`:

```bash
npx hyperframes init my-video
cd my-video
npx hyperframes preview      # 라이브 리로드 브라우저 프리뷰
npx hyperframes render       # MP4 렌더
```

주요 커맨드 (`docs/packages/cli.mdx`): `capture`, `init`, `preview`, `render`, `lint`, `inspect`, `snapshot`, `media-treatment`, `doctor`, `check`, `add`, `publish`.

검증 게이트 (`skills/hyperframes-core/SKILL.md:86-89`):

```bash
npx hyperframes check                    # lint + runtime + layout + motion + contrast, 0 findings 목표
npx hyperframes snapshot --at <초>        # 특정 시점 PNG 스냅샷
npx hyperframes preview
npx hyperframes render
```

### render 플래그 (`docs/guides/rendering.mdx:118-138` 표 전문)

| 플래그 | 값 | 기본값 | 설명 |
|--------|-----|--------|------|
| `--output` | path | `renders/<name>.mp4` | 출력 경로 |
| `--format` | mp4, mov, webm, gif, png-sequence | mp4 | 출력 포맷 |
| `--fps` | 1-240 또는 유리수 (예: `30000/1001`) | 30 | 초당 프레임 |
| `--gif-loop` | 0-65535 | 0 | GIF 루프 횟수. `0`=무한 |
| `--quality` | draft, standard, high | standard | 인코딩 품질 프리셋 |
| `--crf` | 0-51 | — | CRF 오버라이드. `--video-bitrate`와 병용 불가 |
| `--video-bitrate` | 예: `10M`, `5000k` | — | 목표 비트레이트. `--crf`와 병용 불가 |
| `--video-frame-format` | auto, jpg, png | auto | 소스 비디오 프레임 추출 포맷 |
| `--workers` | 1-24 또는 `auto` | auto | 병렬 렌더 워커 수 |
| `--max-concurrent-renders` | 1-10 | 2 | 동시 렌더 최대치 |
| `--batch` | path | — | 변수 행 JSON 배열. 행당 출력 1개 |
| `--batch-concurrency` | 정수 | 1 | 동시 배치 행 수 |
| `--batch-fail-fast` | — | off | 첫 실패 후 신규 행 중단 |
| `--gpu` | — | off | GPU 인코딩 (NVENC/VideoToolbox/AMF/VAAPI/QSV) |
| `--browser-gpu` / `--no-browser-gpu` | — | 로컬 on, Docker off | Chrome/WebGL 캡처용 호스트 GPU 가속 |
| `--hdr` / `--sdr` | — | off | HDR/SDR 강제 |
| `--docker` | — | off | Docker 결정론적 렌더 |
| `--quiet` | — | off | 출력 억제 |

품질 프리셋 (`rendering.mdx:143-147`): `draft`=CRF 28/ultrafast, `standard`=CRF 18/medium, `high`=CRF 15/slow.

### 해상도 지정

**`--width`/`--height` 플래그는 없다.** 해상도는 (a) 컴포지션의 `data-width`/`data-height`, (b) `--resolution` 프리셋으로 정한다.

`docs/guides/4k-rendering.mdx:55-63` 프리셋 표 (`init`과 `render` 양쪽에서 사용 가능):

| 프리셋 | 크기 | 별칭 |
|--------|------|------|
| `landscape` | 1920×1080 | `1080p`, `hd` |
| `portrait` | 1080×1920 | `1080p-portrait` |
| `square` | 1080×1080 | `1080p-square`, `square-1080p` |
| `landscape-4k` | 3840×2160 | `4k`, `uhd` |
| `portrait-4k` | 2160×3840 | `4k-portrait` |
| `square-4k` | 2160×2160 | `4k-square` |

`--resolution`의 동작은 **슈퍼샘플링**이다 (`4k-rendering.mdx:74-84`): Chrome의 `deviceScaleFactor`를 2×로 올려 페이지를 높은 DPR로 재렌더한다. 컴포지션 HTML은 그대로 둔다.

⚠ **캔버스는 슈퍼샘플링 혜택을 못 받는다** (`4k-rendering.mdx:102`):

> `<canvas>` (2D 및 WebGL) — ❌ **캔버스의 고유 dimension에 고정.** `<canvas width="1920" height="1080">`은 DPR과 무관하게 1080p 비트맵이다. 캔버스 콘텐츠를 4K로 렌더하려면 `canvas.width`/`canvas.height`에 목표 DPR을 곱하고 드로잉 컨텍스트를 스케일해야 한다 (2× 캔버스에 같은 논리 레이아웃이면 `ctx.scale(2, 2)`).

`<video>`도 마찬가지로 소스 해상도에 고정된다 (`4k-rendering.mdx:101`).

### 길이 지정

**CLI에 `--duration` 플래그는 없다.** 길이는 루트 `data-duration`(초)으로 컴포지션 HTML 안에서 정한다. `docs/concepts/data-attributes.mdx`가 명시하듯 이 값은 컴파일 타임에 읽히므로 `--variables`로도 못 바꾼다 — "author it directly, one value per output".

### 출력 포맷

`packages/cli/src/commands/render.ts:13-48`의 예시 목록:

```bash
hyperframes render --output output.mp4
hyperframes render --resolution 4k --output 4k.mp4
hyperframes render --format mov --output overlay.mov            # 투명 ProRes
hyperframes render --format webm --output overlay.webm          # 투명 WebM
hyperframes render --format gif --fps 15 --gif-loop 0 --output demo.gif
hyperframes render --format png-sequence --output frames/
hyperframes render --fps 60 --quality high --output hd.mp4
hyperframes render --docker --output deterministic.mp4
hyperframes render --workers 6 --output fast.mp4
hyperframes render --variables '{"title":"Q4 Report","theme":"dark"}' --output q4.mp4
hyperframes render --batch rows.json --output "renders/{name}.mp4"
```

`--format png-sequence`가 있다는 건 **프레임 시퀀스를 직접 뽑아 외부 파이프라인에 넘길 수 있다**는 뜻 — 우리 쪽 검증에 유용하다.

### JSON 출력

`docs/packages/cli.mdx`: `--json`을 지원하는 모든 커맨드는 `_meta` 필드로 감싼 출력을 낸다 (version, latestVersion, updateAvailable). 에이전트 파싱에 적합.

---

## 6. 결정성 — Math.random / 시간 API 처리

### 파이프라인

`docs/concepts/determinism.mdx:12-25`: 프레임 클럭(`time = floor(frame) / fps`) → seek → Chrome `HeadlessExperimental.beginFrame`로 픽셀 버퍼 캡처 → FFmpeg 인코딩. 실시간 재생은 전혀 개입하지 않는다.

### 시간 API: 런타임에서 **실제로 패치된다**

문서(`determinism.mdx:42`)는 "rendering does not use `Date.now()`, `requestAnimationFrame`, or system timers"라고 쓰지만, 실제 구현은 더 강하다 — **전역을 갈아끼운다**. `packages/producer/src/services/fileServer.ts`:

- `Date` → `VirtualDate` (`fileServer.ts:303-325`). `VirtualDate.now()`는 `virtualNowMs` 반환. 인자 없는 `new Date()`도 `new OriginalDate(virtualNowMs)`가 된다.
- `performance.now` → `virtualNowMs` 반환 (`fileServer.ts:327-334`)
- `requestAnimationFrame` / `cancelAnimationFrame` → 가상 큐 (`fileServer.ts:336-348`)
- `setTimeout`/`setInterval`도 셰임 파이프라인에 들어간다 (원본은 `__HF_VIRTUAL_TIME__.originalSetTimeout` 등으로 보존, `fileServer.ts:350-355`)

→ **DOM/캔버스 코드가 `performance.now()`나 `Date.now()`를 써도 렌더 시에는 자동으로 결정론적이 된다.** (단 lint는 여전히 에러를 낸다 — 아래 참조)

### Math.random: 조건부 시딩 (중요한 함정)

시딩 블록은 **빌드 타임 플래그로 게이트된다** (`fileServer.ts:216-223`):

```ts
export function buildVirtualTimeShim(options: VirtualTimeShimOptions): string {
  const seedRandomFromFrame = options.seedRandomFromFrame === true;
  ...
```

시딩이 켜지면 mulberry32 PRNG로 `Math.random`과 `crypto.getRandomValues`를 교체하고, 매 seek마다 가상 시간으로 재시드한다 (`fileServer.ts:224-265, 271`):

```js
function reseedRngFromTime(ms) {
  var ms32 = Math.max(0, Math.floor(Number(ms) || 0)) | 0;
  rngState = (Math.imul(ms32, -1640531527) + 0x9E3779B9) | 0;
}
try { Math.random = function() { return mulberry32(); }; } catch (e) {}
```

**그런데 호출부에 따라 켜짐/꺼짐이 다르다:**

| 경로 | `seedRandomFromFrame` | 근거 |
|------|----------------------|------|
| 인프로세스 로컬 렌더 (기본) | **`false`** | `fileServer.ts:375` — `const VIRTUAL_TIME_SHIM = buildVirtualTimeShim({ seedRandomFromFrame: false });` |
| 분산 청크 렌더 | **`true`** | `renderChunk.ts:690` — `preHeadScripts: [buildVirtualTimeShim({ seedRandomFromFrame: true })]` |

`fileServer.ts:212-214` 주석이 명시: "When `false`, the shim emits no random-override code; the page's native `Math.random` is left alone (the in-process default)."

→ **기본 로컬 렌더에서 `Math.random()`은 시딩되지 않은 진짜 난수다.** 결정론이 깨진다. `--resolution`이나 워커 수를 바꾸는 것과 무관하게, 이건 작성자 책임이다.

### 그래서 lint가 막는다

`packages/lint/src/rules/core.ts:573-627`의 `non_deterministic_code` 룰 — **severity: `error`**. 탐지 패턴 전체:

| 패턴 | 라벨 | 힌트 |
|------|------|------|
| `Math.random(` | `Math.random()` | 시드 있는 PRNG(예: mulberry32)를 써라 |
| `Date.now(` | `Date.now()` | 시간 의존 코드 제거. GSAP 타임라인 위치를 써라 |
| `new Date(` | `new Date()` | 동상 |
| `performance.now(` | `performance.now()` | 동상 |
| `crypto.getRandomValues(` | `crypto.getRandomValues()` | 시드 있는 PRNG |
| `gsap.utils.random(` | `gsap.utils.random()` | **각 렌더 워커가 독립적으로 초기화되므로 청크마다 값이 갈린다** |
| `"random(...)"` 문자열 트윈 값 | `"random(...)" tween value` | GSAP random 문자열은 트윈 init마다 재추첨된다 |

마지막 두 항목이 중요한 사실을 알려준다: **렌더는 병렬 워커로 청크 분할되고, 각 워커는 페이지를 독립적으로 초기화한다.** 따라서 페이지 로드 시점에 한 번 계산되는 난수는 청크 경계에서 값이 튄다. 시드 PRNG를 쓰되 **시간(또는 프레임)으로부터 유도**해야 안전하다.

### 기타 결정성 규칙

`docs/concepts/frame-adapters.mdx:97-104` (어댑터 계약, 협상 불가):

- 정규 클럭: `t = frame / fps`
- wall-clock 의존 금지
- 시드 없는 난수 금지
- 렌더 타임 네트워크 fetch 금지 (모든 애셋은 렌더 시작 전 로드 완료)
- 고정 출력 파라미터 (`fps`, `width`, `height`)
- 유한 길이만
- seek 전 결정론적 프레임 양자화

`skills/hyperframes-core/SKILL.md:67`: "No render-time clocks / unseeded `Math.random` / network / input-state; no `repeat: -1` (use a finite count)."

### Docker 모드

`determinism.mdx:50-62`: `npx hyperframes render --docker --output output.mp4`. 정확한 Chrome 버전 + 폰트 세트 + FFmpeg 인코더 버전을 고정한다. 로컬 렌더는 플랫폼별 폰트 렌더링과 Chrome 버전 차이로 미세한 차이가 날 수 있다.

### 프리뷰/렌더 패리티

`determinism.mdx:65-73`: 하나의 런타임(`hyperframe.runtime`)이 프리뷰와 렌더를 모두 구동. 프로듀서의 seek 시맨틱이 진리의 원천. `__playerReady`/`__renderReady` 게이트가 로드 완료를 보장. 단 **패리티는 시각적 충실도이지 성능이 아니다** — 프리뷰가 버벅여도 렌더는 프레임 단위 seek이라 완벽하게 나온다.

### 어댑터 적합성 테스트

`frame-adapters.mdx:125-131` — 최소 5개: 반복성(같은 프레임 두 번 seek = 동일 출력), 랜덤 seek(`[90, 10, 50, 10]` 순서), 경계(음수/오버플로), 길이(유한 정수), 정리(destroy 후 타이머/리스너 누수 없음).

---

## 7. 라이선스 및 버전

- **라이선스: Apache License 2.0** (`LICENSE` 파일 헤더, `README.md:12` 배지, `README.md:267` "Open source: Apache 2.0 license, with no per-render fees or commercial-use thresholds")
- **버전: 0.7.87** (`packages/cli/package.json`의 `"version": "0.7.87"`, 커밋 `chore: release v0.7.87 (#2935)`, `releases/v0.7.87.md`)
- 릴리스 케이던스가 매우 빠르다 — `releases/` 디렉터리에 139개 파일, v0.7.7부터 v0.7.87까지. 조사 커밋은 2026-07-31자.
- Node.js >= 22 (`packages/cli/package.json`), FFmpeg 필요
- 저장소: `heygen-com/hyperframes`, npm 패키지 `hyperframes`
- 모노레포 (bun workspaces). 패키지: `cli`, `core`, `engine`, `producer`, `player`, `studio`, `studio-server`, `parsers`, `lint`, `sdk`, `sdk-playground`, `shader-transitions`, `aws-lambda`, `gcp-cloud-run`
- Git LFS 사용 (`packages/producer/tests/**/output.mp4` 골든 베이스라인 약 240MB). 소스만 필요하면 `GIT_LFS_SKIP_SMUDGE=1`
- **Adapter API는 v0 experimental** — v1 전까지 breaking change 가능

---

## 8. 우리 어댑터 설계에 미치는 영향

1. **DOM 커널 스니펫 번역은 직행 가능하다.** HyperFrames 컴포지션은 빌드 스텝 없는 단일 HTML이고, 타이밍은 전부 초 단위 `data-*` 속성이다. CSS 키프레임은 별도 등록 없이 `css.ts` 어댑터가 `el.getAnimations()`로 자동 seek하며, 요소의 `data-start`가 곧 애니메이션 오프셋이 된다 — 우리 DOM 스니펫의 `animation-delay` 계산을 그대로 `data-start`로 옮기면 된다. 유일한 강제 개조는 GSAP 타임라인 1개를 `window.__timelines["<id>"]`에 등록하는 것(또는 루트에 `data-no-timeline`), 루트에 `data-start="0"`+`data-width`/`data-height`/`data-duration`을 붙이는 것, 그리고 CSS 초기 `transform`과 GSAP 트윈을 같은 속성에 겹치지 않게 하는 것이다.

2. **canvas 커널 스니펫도 가능하며, 두 경로가 다 열려 있다.** (a) 평범한 `requestAnimationFrame(draw)` — 프로듀서가 rAF를 가상 큐로 갈아끼우고 매 프레임 seek 때 정확히 한 번 flush하므로, `draw(t)`의 `t`가 가상 시간 ms로 들어온다. GSAP 없이 `data-no-timeline`만으로 성립하는 것을 `packages/producer/tests/raf-ball-render-compat/src/index.html`이 증명한다. (b) `window.addEventListener("hf-seek", e => draw(e.detail.time))` — `detail.time`은 초, 비동기 드로잉은 리스너 안에서 **동기적으로** `e.detail.waitUntil(promise)`를 불러야 캡처 전에 await된다. 이 이벤트는 Three.js/TypeGPU 없이도 항상 발화한다(`init.ts:2492-2507`에서 두 어댑터가 무조건 등록되고 `seek`가 라이브러리 존재를 검사하지 않음).

3. **캔버스 해상도는 우리가 직접 관리해야 한다.** `--resolution 4k` 슈퍼샘플링은 DPR을 올려 DOM/텍스트만 재래스터화하고, `<canvas>`는 고유 `width`/`height` 비트맵에 고정된다(`4k-rendering.mdx:102`). 캔버스 커널은 목표 해상도로 백버퍼를 직접 잡고 `ctx.scale()`로 논리 좌표를 맞추는 코드를 우리 어댑터가 생성해야 한다. 같은 이유로 CLI에는 `--width`/`--height`가 없고 길이 지정 `--duration`도 없다 — 크기는 `data-width`/`data-height`, 길이는 루트 `data-duration`으로 HTML에 박아야 한다.

4. **결정성은 자동이 아니다 — 난수는 우리가 책임진다.** 시간 API(`Date`, `performance.now`, rAF)는 셰임이 전역 교체해 주지만, `Math.random` 시딩은 `seedRandomFromFrame` 플래그가 켜진 **분산 청크 렌더에서만** 적용되고 기본 로컬 렌더는 `false`다(`fileServer.ts:375` vs `renderChunk.ts:690`). 게다가 lint의 `non_deterministic_code`는 `Math.random`/`Date.now`/`performance.now`/`gsap.utils.random`을 전부 **error**로 막는다. 우리 커널 스니펫은 시간(또는 프레임)에서 유도한 시드 PRNG를 인라인으로 넣어야 하고, 렌더가 병렬 워커로 청크 분할되므로 "페이지 로드 시 한 번 뽑는 난수" 패턴은 청크 경계에서 값이 튄다.

5. **실렌더 검증 명령** (Node 22+ / FFmpeg 필요):
   ```bash
   npx hyperframes check                       # lint+runtime+layout+motion+contrast, 0 findings 목표
   npx hyperframes snapshot --at 0,1.5,3       # 중간 프레임 PNG 눈검사
   npx hyperframes render --fps 30 --output out.mp4
   npx hyperframes render --format png-sequence --output frames/   # 프레임 단위 diff용
   npx hyperframes render --docker --output deterministic.mp4      # 재현성 확정 검증
   ```
   결정성 회귀는 `--format png-sequence`로 두 번 뽑아 바이트 비교하는 게 가장 싸다. `hyperframes check`가 0 findings를 낼 때까지는 렌더를 돌리지 않는 게 이 프레임워크의 공식 루프다(`skills/hyperframes-core/SKILL.md:86-89`).

---

## 부록: 확인하지 못한 항목

- 공개 `FrameAdapter` 타입(`docs/concepts/frame-adapters.mdx:54-61`)을 **외부에서 등록하는 API**. 문서는 타입과 호스트 루프만 보여주고 등록 함수/전역 훅을 명시하지 않는다. 내장 어댑터는 `packages/core/src/runtime/init.ts:2492`의 배열에 하드코딩. 실질적 확장점은 `hf-seek` 리스너.
- `data-track-index`의 z-order 역할 — 두 공식 문서가 정면으로 모순 (본문 2절 참조). CSS `z-index` 명시 사용 권장.
- `data-track-index` 생략 허용 여부. `raf-ball-render-compat` 테스트는 생략하고도 통과하지만, 스키마 문서는 필수로 표기.
- `hf-seek`가 프리뷰 재생 중에도 매 rAF마다 발화하는지, 스크럽 시에만 발화하는지의 정확한 조건. `typegpu.ts:39` 주석은 "whenever the player scrubs or plays"라고 하지만 발화 빈도는 코드로 확인하지 않았다.
- `--variables` / `data-composition-variables`의 타입 시스템 전체 (`type` 필드가 받는 값의 목록).
- 오디오 믹싱의 정확한 시맨틱(크로스페이드, 덕킹 등) — `media-use` 스킬 영역이라 미조사.
