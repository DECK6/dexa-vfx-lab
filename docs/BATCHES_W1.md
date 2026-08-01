# W1 배치 계획 (26종)

레퍼런스 3종은 P0 인프라 건에 포함 — W1 목록에서 소진.

## P0 레퍼런스 (3)

| ID | 이름 | 커널 | 역할 |
|---|---|---|---|
| C02 | Ken Burns | react | react 계약 검증 (가장 단순) |
| E01 | Film Grain | canvas 무상태 | draw(g, ctx) 검증 |
| P01 | Particle Burst | canvas stateful | init/step/render + 시크 재생 검증 |

## 배치 (23종, 5건 병렬)

| 배치 | 커널 | 이펙트 |
|---|---|---|
| B1 | react (타이포·터미널) | T01 Kinetic Split · T02 Scramble Decode · T04 Mask Reveal · V02 Counter Odometer · U01 Terminal Boot |
| B2 | react (SVG) | L01 Bloom Pulse · S01 Stroke Draw · S02 Blob Morph · S04 Radar Sweep · V03 Progress Ring |
| B3 | react (DOM 모션) | G01 RGB Split · S03 Grid Wave · R13 Dot Matrix · L02 Specular Sweep · L03 Neon Flicker · M01 Shape Reveal |
| B4 | react (전환·카메라) | X01 Iris Wipe · X02 Slice Shuffle · X03 Zoom Punch · C01 Parallax Layers · C03 Handheld Shake |
| B5 | canvas | G02 Datamosh Slice · G03 CRT Scanline |

## 배치 프롬프트에 반드시 포함할 것 (GOAL_PROMPT §W1~W4)

1. SPEC §3 커널 계약 전문
2. 대상 이펙트의 CATALOG 행 (ID·이름·설명·렌더·부하)
3. 파일 경로 규약 (`effects/<cat>/<ID>_<slug>.{meta,effect}.ts`)
4. P0 레퍼런스 이펙트 1종의 전체 코드 (커널 종류 일치하는 것)
5. 기본 프리셋 팔레트 규칙 (Ink `#0D0E10` 바탕 + Cyan `#5EE7F3`)
6. 검수 기준: typecheck · lint · Playwright 스모크 · remotion still · HyperFrames 렌더
