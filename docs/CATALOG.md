# DEXA VFX LAB — 이펙트 카탈로그 v1

16 카테고리 / **214 이펙트**

## 표기

| 기호 | 의미 |
|---|---|
| **DOM** | CSS transform / filter / clip-path — 가장 가벼움, 코드 가독성 최상 |
| **SVG** | path / mask / filter primitive |
| **CV** | Canvas 2D — 픽셀 조작, 파티클 |
| **GL** | WebGL 셰이더 — 실시간 픽셀 연산 필요 |
| ● / ●● / ●●● | 런타임 부하 (갤러리 동시 재생 예산 산정용) |

**Wave** = 구현 릴리스 차수. W1(26) → W2(71) → W3(76) → W4(41).
W1은 각 카테고리 대표작 + DOM/SVG 위주로 뽑아 파이프라인을 먼저 검증한다.

---

## 01 TYPE — 키네틱 타이포그래피 (16)

| ID | 이펙트 | 설명 | 렌더 | 부하 | Wave |
|---|---|---|---|---|---|
| T01 | Kinetic Split | 글자 단위 스태거 등장 | DOM | ● | W1 |
| T02 | Scramble Decode | 랜덤 문자에서 정답으로 해독 | DOM | ● | W1 |
| T03 | Odometer Roll | 숫자 슬롯 롤링 카운터 | DOM | ● | W2 |
| T04 | Mask Reveal | 마스크 슬라이드 등장 | DOM | ● | W1 |
| T05 | Typewriter Caret | 타이핑 + 커서 점멸 | DOM | ● | W2 |
| T06 | Word Cascade | 단어 단위 블러 인 | DOM | ● | W2 |
| T07 | Variable Weight Morph | 가변폰트 굵기·너비 애니메이션 | DOM | ● | W3 |
| T08 | Text Path Flow | 곡선 경로 따라 흐르는 텍스트 | SVG | ● | W3 |
| T09 | Char Flip 3D | 글자 X축 3D 뒤집기 | DOM | ● | W2 |
| T10 | Highlight Sweep | 형광펜 스윕 강조 | DOM | ● | W2 |
| T11 | Stretch Squash | 글자 늘어남·눌림 탄성 | DOM | ● | W3 |
| T12 | Vertical Roll | 세로 슬롯머신 롤 | DOM | ● | W3 |
| T13 | Outline Fill | 아웃라인에서 채움으로 | SVG | ● | W3 |
| T14 | Letter Explode | 글자 폭발 분산 | DOM | ●● | W3 |
| T15 | Wave Text | 사인파 상하 흔들림 | DOM | ● | W2 |
| T16 | Justify Snap | 자간 확장 후 정렬 스냅 | DOM | ● | W4 |

## 02 GLITCH — 신호 왜곡 (16)

| ID | 이펙트 | 설명 | 렌더 | 부하 | Wave |
|---|---|---|---|---|---|
| G01 | RGB Split | 색수차 채널 분리 | DOM | ● | W1 |
| G02 | Datamosh Slice | 블록 슬라이스 시프트 | CV | ●● | W1 |
| G03 | CRT Scanline | 주사선 + 롤바 + 비네팅 | CV | ●● | W1 |
| G04 | Signal Loss | 화이트노이즈 인터럽트 | CV | ●● | W2 |
| G05 | VHS Tracking | 트래킹 에러 + 색번짐 | CV | ●● | W2 |
| G06 | Pixel Sort | 밝기 기준 픽셀 정렬 왜곡 | CV | ●●● | W3 |
| G07 | Block Corrupt | 매크로블록 손상 | CV | ●● | W3 |
| G08 | Bit Crush | 비트 심도 감소 | GL | ●● | W3 |
| G09 | Interlace Tear | 인터레이스 찢김 | CV | ●● | W3 |
| G10 | Ghost Echo | 신호 잔상 반복 | DOM | ● | W2 |
| G11 | Compression Artifact | JPEG 블록 노이즈 | GL | ●● | W4 |
| G12 | Sync Roll | 수직 동기 이탈 롤 | DOM | ● | W2 |
| G13 | Color Bleed | 색 번짐 스미어 | GL | ●● | W4 |
| G14 | Static Burst | 순간 정전기 폭발 | CV | ●● | W3 |
| G15 | Frame Drop | 프레임 스킵 스터터 | DOM | ● | W2 |
| G16 | Chromatic Shear | 채널별 전단 왜곡 | GL | ●● | W4 |

## 03 LIGHT — 빛·글로우 (14)

| ID | 이펙트 | 설명 | 렌더 | 부하 | Wave |
|---|---|---|---|---|---|
| L01 | Bloom Pulse | 글로우 맥동 | SVG | ● | W1 |
| L02 | Specular Sweep | 사선 하이라이트 스윕 | DOM | ● | W1 |
| L03 | Neon Flicker | 네온 사인 점멸 | DOM | ● | W1 |
| L04 | Anamorphic Flare | 아나모픽 렌즈 플레어 | GL | ●● | W3 |
| L05 | God Rays | 볼류메트릭 광선 | GL | ●●● | W3 |
| L06 | Light Leak | 필름 광 누출 | DOM | ● | W2 |
| L07 | Caustics | 수면 굴절 광무늬 | GL | ●●● | W4 |
| L08 | Lightning Arc | 번개 아크 분기 | CV | ●● | W3 |
| L09 | Strobe Cut | 스트로브 점멸 | DOM | ● | W2 |
| L10 | Rim Light | 림 라이트 스윕 | SVG | ● | W3 |
| L11 | Halation | 하이라이트 번짐 | SVG | ● | W3 |
| L12 | Spotlight Track | 스포트라이트 추적 | DOM | ● | W2 |
| L13 | Glow Trail | 이동 잔광 | CV | ●● | W2 |
| L14 | Prism Refract | 프리즘 분광 | GL | ●● | W4 |

## 04 PARTICLE — 입자·군집 (14)

| ID | 이펙트 | 설명 | 렌더 | 부하 | Wave |
|---|---|---|---|---|---|
| P01 | Particle Burst | 방사형 입자 폭발 | CV | ●● | W1 |
| P02 | Confetti Rain | 색종이 낙하 | CV | ●● | W2 |
| P03 | Spark Shower | 불꽃 튐 | CV | ●● | W2 |
| P04 | Dust Motes | 먼지 부유 | CV | ● | W2 |
| P05 | Bokeh Drift | 보케 표류 | DOM | ● | W2 |
| P06 | Snow Fall | 눈 낙하 | CV | ●● | W2 |
| P07 | Ember Rise | 불씨 상승 | CV | ●● | W3 |
| P08 | Swarm Flock | 보이드 무리 비행 | CV | ●●● | W3 |
| P09 | Magnetic Field | 자기장 정렬 | CV | ●● | W3 |
| P10 | Orbit Ring | 궤도 회전 | CV | ●● | W3 |
| P11 | Trail Emitter | 경로 방출 파티클 | CV | ●● | W3 |
| P12 | Explosion Debris | 파편 비산 | CV | ●●● | W4 |
| P13 | Attract Repel | 인력·척력 상호작용 | CV | ●●● | W4 |
| P14 | Point Cloud Form | 점군이 형태로 조립 | GL | ●●● | W4 |

## 05 SHAPE — 형태·기하 (16)

| ID | 이펙트 | 설명 | 렌더 | 부하 | Wave |
|---|---|---|---|---|---|
| S01 | Stroke Draw | 선 그려지기 (dash offset) | SVG | ● | W1 |
| S02 | Blob Morph | SVG path 모핑 | SVG | ● | W1 |
| S03 | Grid Wave | 그리드 셀 파동 | DOM | ● | W1 |
| S04 | Radar Sweep | 레이더 스캔 + 블립 | SVG | ● | W1 |
| S05 | Polygon Rotate | 다각형 회전 스택 | SVG | ● | W2 |
| S06 | Circle Pack | 원 패킹 성장 | CV | ●● | W3 |
| S07 | Voronoi Shatter | 보로노이 분해 | CV | ●● | W3 |
| S08 | Triangulate | 삼각 분할 전개 | CV | ●● | W3 |
| S09 | Spiral Unfold | 나선 전개 | SVG | ● | W2 |
| S10 | Fractal Branch | 프랙탈 가지 성장 | CV | ●● | W3 |
| S11 | Boolean Merge | 도형 불리언 합성 변형 | SVG | ● | W4 |
| S12 | Dash March | 대시 행진 | SVG | ● | W2 |
| S13 | Corner Trace | 모서리 추적 프레임 | SVG | ● | W2 |
| S14 | Concentric Pulse | 동심원 파동 | SVG | ● | W2 |
| S15 | Isometric Stack | 아이소메트릭 적층 부양 | DOM | ● | W3 |
| S16 | Truchet Tile | 트루셰 타일 회전 | SVG | ● | W4 |

## 06 TRANS — 화면 전환 (16)

| ID | 이펙트 | 설명 | 렌더 | 부하 | Wave |
|---|---|---|---|---|---|
| X01 | Iris Wipe | 원형 조리개 전환 | DOM | ● | W1 |
| X02 | Slice Shuffle | 조각 셔플 전환 | DOM | ● | W1 |
| X03 | Zoom Punch | 줌 블러 펀치 | DOM | ● | W1 |
| X04 | Ink Bleed | 잉크 번짐 전환 | SVG | ●● | W2 |
| X05 | Push Slide | 밀어내기 전환 | DOM | ● | W2 |
| X06 | Clock Wipe | 시계 방향 와이프 | DOM | ● | W2 |
| X07 | Page Curl | 페이지 넘김 | GL | ●● | W4 |
| X08 | Blinds | 블라인드 개폐 | DOM | ● | W2 |
| X09 | Pixelate Cross | 픽셀화 교차 | GL | ●● | W3 |
| X10 | Morph Cut | 형태 연결 컷 | SVG | ●● | W4 |
| X11 | Shatter Break | 파쇄 전환 | CV | ●●● | W3 |
| X12 | Liquid Warp | 액체 왜곡 전환 | GL | ●●● | W3 |
| X13 | Cube Rotate | 큐브 회전 면 전환 | DOM | ● | W2 |
| X14 | Whip Pan | 휩팬 모션블러 | DOM | ● | W2 |
| X15 | Luma Wipe | 휘도 마스크 와이프 | GL | ●● | W3 |
| X16 | Split Open | 좌우 분할 개방 | DOM | ● | W2 |

## 07 CAMERA — 카메라·공간 (12)

| ID | 이펙트 | 설명 | 렌더 | 부하 | Wave |
|---|---|---|---|---|---|
| C01 | Parallax Layers | 다층 시차 이동 | DOM | ● | W1 |
| C02 | Ken Burns | 슬로우 줌·팬 | DOM | ● | W1 |
| C03 | Handheld Shake | 핸드헬드 카메라 흔들림 | DOM | ● | W1 |
| C04 | Dolly Zoom | 베르티고 효과 | DOM | ● | W2 |
| C05 | Rack Focus | 초점 이동 | DOM | ● | W2 |
| C06 | Orbit Around | 피사체 궤도 선회 | DOM | ● | W3 |
| C07 | Crash Zoom | 급속 줌 인 | DOM | ● | W2 |
| C08 | Tilt Shift | 미니어처 피사계 심도 | GL | ●● | W3 |
| C09 | Roll Horizon | 수평선 롤 | DOM | ● | W3 |
| C10 | Depth Layers 3D | 3D 깊이 레이어 배치 | DOM | ●● | W3 |
| C11 | Perspective Card | 원근 카드 틸트 | DOM | ● | W2 |
| C12 | Follow Track | 피사체 추적 트래킹 | DOM | ● | W4 |

## 08 DISTORT — 왜곡·워프 (14)

| ID | 이펙트 | 설명 | 렌더 | 부하 | Wave |
|---|---|---|---|---|---|
| D01 | Displacement Wave | 노이즈 기반 변위 | GL | ●● | W2 |
| D02 | Ripple Circle | 원형 잔물결 | GL | ●● | W2 |
| D03 | Twirl Vortex | 소용돌이 회전 왜곡 | GL | ●● | W3 |
| D04 | Bulge Pinch | 볼록·오목 렌즈 | GL | ●● | W3 |
| D05 | Wave Shear | 사인파 전단 왜곡 | CV | ●● | W2 |
| D06 | Lens Barrel | 배럴 왜곡 | GL | ●● | W3 |
| D07 | Mesh Warp | 메시 격자 자유 변형 | GL | ●●● | W4 |
| D08 | Melt Drip | 녹아내림 | GL | ●● | W3 |
| D09 | Turbulent Noise | 난류 노이즈 변형 | GL | ●● | W3 |
| D10 | Fisheye | 어안 렌즈 | GL | ●● | W4 |
| D11 | Mirror Fold | 거울 접기 대칭 | CV | ● | W2 |
| D12 | Kaleidoscope | 만화경 | GL | ●● | W3 |
| D13 | Polar Coord | 극좌표 변환 | GL | ●● | W4 |
| D14 | Time Displace | 슬릿스캔 시간축 변위 | CV | ●●● | W4 |

## 09 TEXTURE — 질감·필름 (12)

| ID | 이펙트 | 설명 | 렌더 | 부하 | Wave |
|---|---|---|---|---|---|
| E01 | Film Grain | 필름 그레인 | CV | ●● | W1 |
| E02 | Halftone Dot | 하프톤 망점 | GL | ●● | W2 |
| E03 | Dither Bayer | 베이어 디더링 | GL | ●● | W2 |
| E04 | Paper Fiber | 종이 섬유 질감 | CV | ● | W3 |
| E05 | Scan Print | 인쇄 스캔 질감 | CV | ●● | W4 |
| E06 | Duotone Map | 듀오톤 매핑 | DOM | ● | W2 |
| E07 | Posterize Step | 포스터화 단계 축소 | GL | ● | W2 |
| E08 | Cross Hatch | 크로스해칭 | GL | ●● | W3 |
| E09 | Risograph | 리소그래프 오프셋 인쇄 | CV | ●● | W3 |
| E10 | Vignette Breathe | 비네팅 호흡 | DOM | ● | W2 |
| E11 | Chromatic Grain | 컬러 그레인 | CV | ●● | W3 |
| E12 | ASCII Map | 아스키 아트 매핑 | CV | ●● | W3 |

## 10 DATA — 데이터 모션 (14)

| ID | 이펙트 | 설명 | 렌더 | 부하 | Wave |
|---|---|---|---|---|---|
| V01 | Bar Race | 바 차트 레이스 | DOM | ● | W2 |
| V02 | Counter Odometer | 카운터 롤업 | DOM | ● | W1 |
| V03 | Progress Ring | 진행 링 | SVG | ● | W1 |
| V04 | Line Chart Draw | 라인 차트 그려지기 | SVG | ● | W2 |
| V05 | Pie Sweep | 파이 차트 스윕 | SVG | ● | W2 |
| V06 | Sparkline Scroll | 스파크라인 스크롤 | SVG | ● | W3 |
| V07 | Heatmap Fill | 히트맵 순차 채움 | DOM | ● | W3 |
| V08 | Node Graph | 노드 그래프 전개 | SVG | ●● | W3 |
| V09 | Gauge Needle | 계기 바늘 스윙 | SVG | ● | W2 |
| V10 | Stacked Grow | 누적 막대 성장 | DOM | ● | W3 |
| V11 | Scatter Settle | 산점도 정착 | CV | ●● | W3 |
| V12 | Sankey Flow | 생키 흐름 | SVG | ●● | W4 |
| V13 | Tree Expand | 트리 전개 | SVG | ●● | W4 |
| V14 | Timeline Scrub | 타임라인 스크럽 | DOM | ● | W4 |

## 11 UI — 인터페이스 모션 (12)

| ID | 이펙트 | 설명 | 렌더 | 부하 | Wave |
|---|---|---|---|---|---|
| U01 | Terminal Boot | 터미널 부팅 로그 | DOM | ● | W1 |
| U02 | Toggle Switch | 토글 전환 | DOM | ● | W2 |
| U03 | Loading Spinner | 로딩 스피너 세트 | SVG | ● | W2 |
| U04 | Skeleton Shimmer | 스켈레톤 시머 | DOM | ● | W2 |
| U05 | Notification Stack | 알림 스택 적층 | DOM | ● | W3 |
| U06 | Tab Slide | 탭 인디케이터 슬라이드 | DOM | ● | W3 |
| U07 | Modal Spring | 모달 스프링 등장 | DOM | ● | W3 |
| U08 | Cursor Trace | 커서 궤적 | SVG | ● | W3 |
| U09 | Keyboard Press | 키캡 눌림 | DOM | ● | W3 |
| U10 | Chip Filter | 칩 필터 재배치 | DOM | ● | W4 |
| U11 | Accordion Expand | 아코디언 전개 | DOM | ● | W4 |
| U12 | Drag Sort | 드래그 정렬 재배열 | DOM | ● | W4 |

## 12 NATURE — 자연 현상 (12)

| ID | 이펙트 | 설명 | 렌더 | 부하 | Wave |
|---|---|---|---|---|---|
| N01 | Fire Flame | 불꽃 | GL | ●●● | W3 |
| N02 | Smoke Plume | 연기 기둥 | GL | ●●● | W3 |
| N03 | Water Surface | 수면 파문 | GL | ●● | W2 |
| N04 | Cloud Drift | 구름 표류 | GL | ●● | W3 |
| N05 | Rain Streak | 빗줄기 | CV | ●● | W2 |
| N06 | Wind Grass | 바람에 흔들리는 풀 | SVG | ●● | W3 |
| N07 | Aurora Wave | 오로라 | GL | ●● | W3 |
| N08 | Lightning Storm | 뇌우 | CV | ●● | W4 |
| N09 | Sand Flow | 모래 흐름 | CV | ●●● | W4 |
| N10 | Bubble Rise | 기포 상승 | CV | ●● | W3 |
| N11 | Crystal Grow | 결정 성장 | CV | ●● | W4 |
| N12 | Erosion Fade | 침식 소멸 | GL | ●● | W4 |

## 13 PATTERN — 제너러티브 패턴 (14)

| ID | 이펙트 | 설명 | 렌더 | 부하 | Wave |
|---|---|---|---|---|---|
| R01 | Perlin Field | 펄린 노이즈 필드 | GL | ●● | W2 |
| R02 | Flow Field | 플로우 필드 궤적 | CV | ●●● | W3 |
| R03 | Cellular Automata | 셀룰러 오토마타 | CV | ●● | W3 |
| R04 | Reaction Diffusion | 반응-확산 | GL | ●●● | W4 |
| R05 | Moire Interference | 모아레 간섭 | DOM | ● | W2 |
| R06 | Wave Interference | 파동 간섭 | GL | ●● | W3 |
| R07 | Lissajous | 리사주 곡선 | SVG | ● | W2 |
| R08 | Phyllotaxis | 잎차례 나선 | CV | ● | W2 |
| R09 | Maze Generate | 미로 생성 | CV | ●● | W4 |
| R10 | Stripe Shift | 스트라이프 위상 이동 | DOM | ● | W2 |
| R11 | Checker Flip | 체커 순차 뒤집기 | DOM | ● | W2 |
| R12 | Hex Grid Pulse | 육각 그리드 맥동 | SVG | ● | W3 |
| R13 | Dot Matrix | 도트 매트릭스 스캔 | DOM | ● | W1 |
| R14 | Chladni Figure | 클라드니 도형 | GL | ●● | W4 |

## 14 LIQUID — 유체·점성 (10)

| ID | 이펙트 | 설명 | 렌더 | 부하 | Wave |
|---|---|---|---|---|---|
| Q01 | Metaball Merge | 메타볼 병합 | GL | ●● | W2 |
| Q02 | Ink Diffuse | 잉크 확산 | GL | ●●● | W3 |
| Q03 | Paint Splatter | 물감 튐 | CV | ●● | W3 |
| Q04 | Viscous Drip | 점성 흘러내림 | SVG | ● | W3 |
| Q05 | Fluid Sim | 유체 시뮬레이션 | GL | ●●● | W4 |
| Q06 | Wave Tank | 파동 수조 | GL | ●● | W4 |
| Q07 | Oil Slick | 유막 간섭색 | GL | ●● | W4 |
| Q08 | Gel Wobble | 젤리 탄성 흔들림 | DOM | ● | W2 |
| Q09 | Foam Bubble | 거품 군집 | CV | ●● | W4 |
| Q10 | Liquid Fill | 액체 채움 | SVG | ● | W2 |

## 15 MASK — 마스크·리빌 (12)

| ID | 이펙트 | 설명 | 렌더 | 부하 | Wave |
|---|---|---|---|---|---|
| M01 | Shape Reveal | 도형 마스크 등장 | DOM | ● | W1 |
| M02 | Gradient Wipe | 그라디언트 와이프 | DOM | ● | W2 |
| M03 | Text Knockout | 텍스트 녹아웃 마스크 | DOM | ● | W2 |
| M04 | Alpha Matte | 알파 매트 합성 | SVG | ● | W3 |
| M05 | Spotlight Mask | 스포트라이트 마스크 | DOM | ● | W2 |
| M06 | Brush Stroke | 붓질 리빌 | SVG | ●● | W3 |
| M07 | Scribble Erase | 낙서 지우기 | SVG | ●● | W4 |
| M08 | Blind Reveal | 블라인드 리빌 | DOM | ● | W3 |
| M09 | Radial Unveil | 방사형 공개 | DOM | ● | W2 |
| M10 | Follow Mask | 피사체 추적 마스크 | SVG | ● | W4 |
| M11 | Split Mask | 분할 마스크 | DOM | ● | W3 |
| M12 | Noise Dissolve | 노이즈 디졸브 | GL | ●● | W2 |

## 16 AUDIO — 오디오 리액티브 (10)

오디오 소스가 필요한 이펙트. 갤러리에서는 내장 샘플 트랙의 사전 분석 데이터로 재생한다.

| ID | 이펙트 | 설명 | 렌더 | 부하 | Wave |
|---|---|---|---|---|---|
| A01 | Waveform Bars | 파형 막대 | CV | ●● | W2 |
| A02 | Spectrum Analyzer | 스펙트럼 분석기 | CV | ●● | W2 |
| A03 | Circular Viz | 원형 비주얼라이저 | CV | ●● | W3 |
| A04 | Beat Pulse | 비트 맥동 | DOM | ● | W2 |
| A05 | Oscilloscope | 오실로스코프 | CV | ●● | W3 |
| A06 | VU Meter | VU 미터 | SVG | ● | W3 |
| A07 | Waveform Line | 파형 라인 | SVG | ● | W3 |
| A08 | Frequency Rings | 주파수 링 | CV | ●● | W4 |
| A09 | Amplitude Warp | 진폭 기반 왜곡 | GL | ●● | W4 |
| A10 | Beat Cut | 비트 동기 컷 전환 | DOM | ● | W4 |

---

## 집계

| 카테고리 | 개수 | | 렌더 | 개수 | | Wave | 개수 |
|---|---:|---|---|---:|---|---|---:|
| TYPE | 16 | | DOM | 90 | | W1 | 26 |
| GLITCH | 16 | | SVG | 44 | | W2 | 71 |
| LIGHT | 14 | | CV | 48 | | W3 | 76 |
| PARTICLE | 14 | | GL | 32 | | W4 | 41 |
| SHAPE | 16 | | | | | | |
| TRANS | 16 | | | | | | |
| CAMERA | 12 | | | | | | |
| DISTORT | 14 | | | | | | |
| TEXTURE | 12 | | | | | | |
| DATA | 14 | | | | | | |
| UI | 12 | | | | | | |
| NATURE | 12 | | | | | | |
| PATTERN | 14 | | | | | | |
| LIQUID | 10 | | | | | | |
| MASK | 12 | | | | | | |
| AUDIO | 10 | | | | | | |

## W5 — 오브젝트 모션 (30종)

| ID | 이름 | 한글명 | 설명 | 커널 | cost | category | wave |
|---|---|---|---|---|---|---|---|
| O01 | Pop In | 팝 인 | 스케일 0→오버슈트 스프링 등장 | RX | ● | motion | W5 |
| O02 | Drop Bounce | 드롭 바운스 | 낙하 + 스쿼시&스트레치 바운스 착지 | RX | ● | motion | W5 |
| O03 | Swing In | 스윙 인 | 상단 힌지 회전 진입, 감쇠 스윙 | RX | ● | motion | W5 |
| O04 | Flip Reveal | 플립 리빌 | Y축 3D 플립 등장 | RX | ● | motion | W5 |
| O05 | Slide Snap | 슬라이드 스냅 | 측면 슬라이드 + 오버슈트 스냅 | RX | ● | motion | W5 |
| O06 | Fold Unfold | 폴드 언폴드 | 종이 접힘 펼침 등장 | RX | ● | motion | W5 |
| O07 | Focus Pop | 포커스 팝 | 블러+확대에서 초점 맞으며 안착 | RX | ● | motion | W5 |
| O08 | Peel In | 필 인 | 모서리 말림이 펼쳐지며 등장 | RX | ● | motion | W5 |
| O09 | Jelly Wobble | 젤리 워블 | X/Y 스케일 위상차 탄성 진동 | RX | ● | motion | W5 |
| O10 | Pendulum Swing | 펜듈럼 스윙 | 진자 스윙 감쇠 | RX | ● | motion | W5 |
| O11 | Spring Chain | 스프링 체인 | 지연 스프링 추종 레이어 체인 | RX | ● | motion | W5 |
| O12 | Gravity Toss | 그래비티 토스 | 포물선 토스 + 회전 + 착지 바운스 | RX | ● | motion | W5 |
| O13 | Magnetic Snap | 마그네틱 스냅 | 자석 가속 → 철컥 스냅 + 진동 | RX | ● | motion | W5 |
| O14 | Rubber Band | 러버 밴드 | 고무줄 당김 → 탄성 발사 | RX | ● | motion | W5 |
| O15 | Inertia Drift | 이너셔 드리프트 | 급정거 관성 드리프트 + 정착 | RX | ● | motion | W5 |
| O16 | Float Hover | 플로트 호버 | 무중력 부유, 다주파수 사인 합성 | RX | ● | motion | W5 |
| O17 | Breathe Pulse | 브리드 펄스 | 호흡 스케일 + 그림자 연동 | RX | ● | motion | W5 |
| O18 | Self Orbit | 셀프 오빗 | 제자리 소원 궤도 + 기울기 | RX | ● | motion | W5 |
| O19 | Tilt Sway | 틸트 스웨이 | 바람 기울기 스웨이 | RX | ● | motion | W5 |
| O20 | Heartbeat | 하트비트 | 더블 펄스 + 링 파동 | RX | ● | motion | W5 |
| O21 | Attention Shake | 어텐션 셰이크 | 좌우 셰이크 알림 흔들기 | RX | ● | motion | W5 |
| O22 | Tada Burst | 타다 버스트 | 스케일+회전 타다 + 스파크 방사 | RX | ●● | motion | W5 |
| O23 | Stamp Slam | 스탬프 슬램 | 도장 쾅 임팩트 + 먼지 퍼프 | RX | ●● | motion | W5 |
| O24 | Ring Focus | 링 포커스 | 수축 링 포커스 꽂힘 | RX | ● | motion | W5 |
| O25 | Glitch Pop | 글리치 팝 | 순간 확대 + RGB 스플릿 팝 | RX | ● | motion | W5 |
| T17 | Char Bounce Wave | 글자 바운스 웨이브 | 글자 점프 도미노 물결 | RX | ● | type | W5 |
| T18 | Char Swarm Assemble | 글자 스웜 어셈블 | 흩어진 글자가 날아와 정렬 | RX | ● | type | W5 |
| T19 | Word Swap Roll | 워드 스왑 롤 | 단어 순환 교체 롤 | RX | ● | type | W5 |
| T20 | Char Gravity Fall | 글자 중력 낙하 | 글자 개별 낙하 + 바운스 착지 | RX | ● | type | W5 |
| T21 | Elastic Tracking | 일래스틱 트래킹 | 자간 밀집↔확산 탄성 | RX | ● | type | W5 |

## W6 — 디스플레이 & 스타일라이즈 (64종)

| ID | 이름 | 한글명 | 설명 | 커널 | cost | category | wave |
|---|---|---|---|---|---|---|---|
| Z01 | LED Matrix | LED 매트릭스 | 도트 LED 패널이 피사체를 샘플해 점등 | CV | ●● | screen | W6 |
| Z02 | Seven Segment | 7세그먼트 | 세그먼트 숫자 카운터 롤 | RX | ● | screen | W6 |
| Z03 | Split Flap | 스플릿 플랩 | 공항 플립보드 문자 회전 교체 | RX | ●● | screen | W6 |
| Z04 | Nixie Tube | 닉시관 | 닉시관 숫자 웜 글로우 전환 | RX | ● | screen | W6 |
| Z05 | Eink Refresh | E-ink 리프레시 | 전자잉크 페이지 갱신 잔상·반전 플래시 | CV | ●● | screen | W6 |
| Z06 | Hologram Project | 홀로그램 | 프로젝션 스캔라인+플리커+시안 고스트 | RX | ● | screen | W6 |
| Z07 | Teletext | 텔레텍스트 | 블록 문자 페이지 로딩·색 밴드 | CV | ●● | screen | W6 |
| Z08 | Ticker Marquee | 티커 마키 | LED 전광 텍스트 스크롤+잔광 | RX | ● | screen | W6 |
| Z09 | VFD Display | VFD 디스플레이 | 형광표시관 세그먼트 시안 글로우 | RX | ● | screen | W6 |
| Z10 | CRT Terminal | CRT 터미널 | 곡면 유리·인광 번인·주사 왜곡 | CV | ●● | screen | W6 |
| Z11 | LCD Subpixel | LCD 서브픽셀 | RGB 스트라이프 확대 룩 | GL | ●● | screen | W6 |
| Z12 | Dot Flip | 플립닷 | 기계식 도트 반전 패널 웨이브 | CV | ●● | screen | W6 |
| Z13 | Stadium Board | 전광판 | 경기장 비트맵 보드 줌·판 갱신 | CV | ●● | screen | W6 |
| Z14 | Scope XY | XY 스코프 | 리사주 벡터스코프 궤적 드로잉 | CV | ●● | screen | W6 |
| Z15 | Price Board | 시세판 | 증권 시세 행 플립·등락색 점멸 | RX | ● | screen | W6 |
| Z16 | Pager LCD | 페이저 LCD | 모노크롬 LCD 픽셀 룩+고스팅 | CV | ●● | screen | W6 |
| K01 | Pixel Quantize | 픽셀 양자화 | 픽셀화+제한 팔레트 양자화 | GL | ●● | retro | W6 |
| K02 | Bayer Dither | 베이어 디더 | 오더드 디더 매트릭스 명암 | GL | ●● | retro | W6 |
| K03 | Floyd Dither | 플로이드 디더 | 오차확산 디더(결정적 근사) | CV | ●● | retro | W6 |
| K04 | Gameboy Palette | 게임보이 팔레트 | DMG 4색 그린 팔레트+도트 | GL | ●● | retro | W6 |
| K05 | CGA Palette | CGA 팔레트 | 시안·마젠타 4색 CGA 룩 | GL | ●● | retro | W6 |
| K06 | Sprite Explode | 스프라이트 폭발 | 픽셀 블록 파편 비산 | CV | ●● | retro | W6 |
| K07 | Bit Rain | 비트 레인 | 8비트 픽셀 비 낙하 | CV | ● | retro | W6 |
| K08 | Insert Coin | 인서트 코인 | 아케이드 타이틀 데모 점멸 | RX | ● | retro | W6 |
| K09 | Pixel Reveal | 픽셀 리빌 | 픽셀 블록 순차 등장 전환 | CV | ● | retro | W6 |
| K10 | Lores Upscale | 저해상 업스케일 | 저해상 렌더 확대+스캔라인 보간 | GL | ●● | retro | W6 |
| K11 | Palette Cycle | 팔레트 사이클 | 고전 데모씬 색 순환 애니메이션 | GL | ●● | retro | W6 |
| K12 | Tile Scroll | 타일 스크롤 | 타일맵 패럴랙스 횡스크롤 | CV | ●● | retro | W6 |
| K13 | Mode7 Plane | 모드7 평면 | SNES 모드7 바닥 원근 회전 | GL | ●● | retro | W6 |
| K14 | Cartridge Glitch | 카트리지 글리치 | 접촉불량 타일 깨짐·색 오염 | CV | ●● | retro | W6 |
| K15 | Tracker Bars | 트래커 바 | 칩튠 트래커 채널 시각화 | RX | ● | retro | W6 |
| K16 | Console Boot | 콘솔 부팅 | 레트로 콘솔 부팅 로고 시퀀스 | RX | ● | retro | W6 |
| Y01 | Halftone CMYK | CMYK 하프톤 | 4판 망점 로제트 분해 | GL | ●● | stylize | W6 |
| Y02 | Watercolor Bleed | 수채 번짐 | 경계 번짐+종이 텍스처+안료 고임 | GL | ●●● | stylize | W6 |
| Y03 | Oil Daub | 유화 터치 | 붓 터치 뭉갬+임파스토 하이라이트 | GL | ●●● | stylize | W6 |
| Y04 | Pencil Sketch | 연필 스케치 | 윤곽+해칭 스케치화 | GL | ●● | stylize | W6 |
| Y05 | Cel Shade | 셀 셰이딩 | 계조 밴딩+잉크 외곽선 | GL | ●● | stylize | W6 |
| Y06 | Posterize Pop | 포스터라이즈 | 팝아트 감산 색 분리 | GL | ● | stylize | W6 |
| Y07 | Ink Outline | 잉크 아웃라인 | 만화 잉크 외곽선+스크린톤 | GL | ●● | stylize | W6 |
| Y08 | Hatch Shade | 해칭 셰이드 | 명암 연동 교차 해칭(E08과 달리 휘도 구동) | GL | ●● | stylize | W6 |
| Y09 | Stipple Dots | 점묘 | 휘도 기반 점묘 밀도 | CV | ●● | stylize | W6 |
| Y10 | Mosaic Tiles | 모자이크 타일 | 불규칙 타일 조각+줄눈 | CV | ●● | stylize | W6 |
| Y11 | Stained Glass | 스테인드글라스 | 보로노이 유리+납선+투광 | CV | ●● | stylize | W6 |
| Y12 | Paper Cutout | 페이퍼 컷아웃 | 종이 오리기 레이어+드롭섀도 | RX | ● | stylize | W6 |
| Y13 | Blueprint | 블루프린트 | 청사진 도면 라인+치수 표기 | RX | ● | stylize | W6 |
| Y14 | Thermal Cam | 열화상 | 열화상 팔레트+노이즈+레티클 | GL | ●● | stylize | W6 |
| Y15 | Night Vision | 야시경 | 그린 인광+비네트+노이즈+스캔 | GL | ●● | stylize | W6 |
| Y16 | Comic Panel | 코믹 패널 | 패널 분할+효과선+의성어 팝 | RX | ●● | stylize | W6 |
| G17 | Corrupt Header | 헤더 손상 | 이미지 디코딩 실패 줄무늬 시프트 | CV | ●● | glitch | W6 |
| G18 | Wave Tear | 웨이브 티어 | 사인 위상 찢김 세로 밴드 | GL | ●● | glitch | W6 |
| G19 | Time Quantize | 타임 퀀타이즈 | 프레임 홀드 계단+고스트 블렌드 | CV | ●● | glitch | W6 |
| G20 | Macroblock | 매크로블록 | 압축 블록 이동 벡터 오염 | GL | ●● | glitch | W6 |
| L15 | Volumetric Spot | 볼류메트릭 스팟 | 무대 스포트라이트 원뿔+더스트 | RX | ●● | light | W6 |
| L16 | Disco Ball | 디스코 볼 | 미러볼 광점 산란 회전 | CV | ●● | light | W6 |
| L17 | Laser Grid | 레이저 그리드 | 레이저 스캔 라인 격자 스윕 | RX | ● | light | W6 |
| L18 | Candle Flicker | 캔들 플리커 | 촛불 웜 라이트 흔들림+그림자 연동 | RX | ● | light | W6 |
| D15 | Heat Haze | 히트 헤이즈 | 지열 아지랑이 굴절 상승 | GL | ●● | distort | W6 |
| D16 | Glass Blocks | 글라스 블록 | 유리블록 타일 굴절 | GL | ●● | distort | W6 |
| E13 | Brushed Metal | 브러시드 메탈 | 헤어라인 금속+이방성 하이라이트 | CV | ●● | texture | W6 |
| E14 | Frosted Glass | 프로스트 글라스 | 반투명 젖빛 유리+결로 와이프 | GL | ●● | texture | W6 |
| P15 | Fireflies | 반딧불이 | 점멸 광점 유영+잔광 | CV | ● | particle | W6 |
| P16 | Pollen Drift | 꽃가루 드리프트 | 역광 꽃가루 부유 산란 | CV | ● | particle | W6 |
| S17 | Gear Train | 기어 트레인 | 맞물린 기어 회전 전달 | RX | ● | shape | W6 |
| S18 | Origami Fold | 오리가미 폴드 | 종이 접기 단계 변형 | RX | ●● | shape | W6 |

## W7 — 브로드캐스트 & 시네마 (64종)

| ID | 이름 | 한글명 | 설명 | 커널 | cost | category | wave |
|---|---|---|---|---|---|---|---|
| B01 | Lower Third Slide | 로워서드 슬라이드 | 바 슬라이드 인+이름/직함 타이포 스태거 | RX | ● | broadcast | W7 |
| B02 | Lower Third Glass | 로워서드 글라스 | 반투명 유리 패널+블러 리빌 | RX | ● | broadcast | W7 |
| B03 | Lower Third Wipe | 로워서드 와이프 | 컬러바 와이프+텍스트 마스크 등장 | RX | ● | broadcast | W7 |
| B04 | Lower Third Stack | 로워서드 스택 | 2단 정보 스택 순차 전개 | RX | ● | broadcast | W7 |
| B05 | Title Card | 타이틀 카드 | 풀스크린 타이틀+키커+룰 라인 조판 | RX | ● | broadcast | W7 |
| B06 | Caption Pop | 캡션 팝 | 말풍선 자막 팝인+꼬리 앵커 | RX | ● | broadcast | W7 |
| B07 | Callout Line | 콜아웃 라인 | 포인트→절곡 리더선→라벨 전개 | RX | ● | broadcast | W7 |
| B08 | Score Bug | 스코어 버그 | 경기 스코어 박스+점수 플립 | RX | ● | broadcast | W7 |
| B09 | News Ticker | 뉴스 티커 | 하단 티커 벨트+BREAKING 플래시 | RX | ● | broadcast | W7 |
| B10 | Countdown Clock | 카운트다운 | 방송 카운트다운 링+숫자 플립 | RX | ● | broadcast | W7 |
| B11 | HUD Frame | HUD 프레임 | 코너 브래킷+크로스헤어+텔레메트리 | RX | ● | broadcast | W7 |
| B12 | Live Badge | 라이브 배지 | LIVE 배지 펄스+REC 도트+타임코드 | RX | ● | broadcast | W7 |
| B13 | Quote Card | 인용 카드 | 따옴표 확대+인용문 라인 리빌 | RX | ● | broadcast | W7 |
| B14 | Stat Callout | 스탯 콜아웃 | 큰 숫자 카운트업+단위/라벨 조판 | RX | ● | broadcast | W7 |
| B15 | Locator Pin | 로케이터 핀 | 지도 핀 드롭+파문+지명 라벨 | RX | ● | broadcast | W7 |
| B16 | Weather Panel | 웨더 패널 | 날씨 아이콘 모핑+온도 슬라이드 | RX | ●● | broadcast | W7 |
| B17 | Schedule Board | 편성표 | 프로그램 행 순차 하이라이트 | RX | ● | broadcast | W7 |
| B18 | Versus Split | 버서스 스플릿 | 대각 분할 대결 구도+VS 스탬프 | RX | ● | broadcast | W7 |
| B19 | Poll Bars | 투표 바 | 실시간 투표 막대 경합+퍼센트 | RX | ● | broadcast | W7 |
| B20 | Breaking Slate | 브레이킹 슬레이트 | 속보 전면 슬레이트+경고 스트로브 | RX | ● | broadcast | W7 |
| F01 | Letterbox Reveal | 레터박스 | 시네마스코프 바 닫힘/열림+타이틀 | RX | ● | cinema | W7 |
| F02 | Credits Roll | 크레딧 롤 | 엔딩 크레딧 스크롤+섹션 헤더 | RX | ● | cinema | W7 |
| F03 | Film Burn | 필름 번 | 필름 태움 오렌지 번짐 전환 | GL | ●● | cinema | W7 |
| F04 | Projector Flicker | 영사기 | 게이트 위브+플리커+먼지·헤어 | CV | ●● | cinema | W7 |
| F05 | Countdown Leader | 리더 카운트다운 | 아카데미 리더 8→1 카운트 | RX | ● | cinema | W7 |
| F06 | Anamorphic Bokeh | 아나모픽 보케 | 타원 보케+수평 플레어 심도 | RX | ●● | cinema | W7 |
| F07 | Day For Night | 데이 포 나이트 | 주간→야간 그레이딩 크로스 | GL | ●● | cinema | W7 |
| F08 | Split Diopter | 스플릿 디옵터 | 화면 반 포커스 분리 | GL | ●● | cinema | W7 |
| F09 | Whip Pan | 휩 팬 | 고속 팬 모션블러 전환 | GL | ●● | cinema | W7 |
| F10 | Iris Pull | 아이리스 풀 | 조리개 보케 조임/개방+노출 시프트 | RX | ● | cinema | W7 |
| F11 | Slate Clap | 슬레이트 | 클래퍼보드 침+샷 정보 타이포 | RX | ● | cinema | W7 |
| F12 | Dolly Rig | 달리 리그 | 트랙 달리 왕복+미장센 레이어 | RX | ●● | cinema | W7 |
| F13 | Film Gate Jam | 게이트 잼 | 필름 걸림 멜트+프레임 튐 | GL | ●● | cinema | W7 |
| F14 | Silent Era | 무성영화 | 세피아+비네트+간자막 카드 | CV | ●● | cinema | W7 |
| F15 | Trailer Text | 트레일러 텍스트 | 대문자 타이포 임팩트 컷 리듬 | RX | ● | cinema | W7 |
| F16 | End Card | 엔드 카드 | 시사 정보 엔드 카드 조판 전개 | RX | ● | cinema | W7 |
| V15 | Radar Chart | 레이더 차트 | 축 전개+영역 성장+포인트 강조 | RX | ● | data | W7 |
| V16 | Candlestick | 캔들스틱 | 봉차트 순차 등장+등락 색 | RX | ● | data | W7 |
| V17 | Funnel Steps | 퍼널 | 단계 축소 벨트+전환율 라벨 | RX | ● | data | W7 |
| V18 | Gantt Timeline | 간트 | 작업 바 슬라이드+진행 마커 | RX | ● | data | W7 |
| V19 | Calendar Heat | 캘린더 히트맵 | 날짜 셀 강도 채움 웨이브 | RX | ● | data | W7 |
| V20 | Network Graph | 네트워크 | 노드 스프링 배치+엣지 드로잉 | CV | ●● | data | W7 |
| V21 | Donut Multi | 도넛 멀티 | 동심 도넛 3링 순차 스윕 | RX | ● | data | W7 |
| V22 | Slope Chart | 슬로프 차트 | 두 시점 순위 연결선 기울기 | RX | ● | data | W7 |
| V23 | Bubble Pack | 버블 팩 | 면적 버블 성장·정렬 | CV | ●● | data | W7 |
| V24 | Waterfall | 워터폴 | 증감 블록 낙하 누적 | RX | ● | data | W7 |
| V25 | Radial Bars | 방사 바 | 극좌표 막대 스윕 성장 | RX | ● | data | W7 |
| V26 | Stream Graph | 스트림그래프 | 유기적 밴드 두께 흐름 | CV | ●● | data | W7 |
| U13 | Toast Queue | 토스트 큐 | 알림 토스트 적층·만료 스와이프 | RX | ● | ui | W7 |
| U14 | Stepper Flow | 스테퍼 | 단계 원 진행+체크 전환 | RX | ● | ui | W7 |
| U15 | Card Carousel | 카드 캐러셀 | 스냅 캐러셀+포커스 스케일 | RX | ● | ui | W7 |
| U16 | Pull Refresh | 당겨서 새로고침 | 오버스크롤 스피너 트리거 | RX | ● | ui | W7 |
| U17 | Radial Menu | 방사 메뉴 | FAB 방사 전개+라벨 팝 | RX | ● | ui | W7 |
| U18 | Search Morph | 서치 모프 | 돋보기→입력바 모핑+타이핑 | RX | ● | ui | W7 |
| U19 | Slider Snap | 슬라이더 | 값 스냅 이동+툴팁 버블 | RX | ● | ui | W7 |
| U20 | Rating Stars | 레이팅 | 별점 순차 채움+바운스 | RX | ● | ui | W7 |
| U21 | Chart Tooltip | 차트 툴팁 | 호버 크로스헤어+툴팁 추적 | RX | ● | ui | W7 |
| U22 | File Upload | 업로드 | 드롭존 파일 낙하+진행 바+완료 체크 | RX | ● | ui | W7 |
| U23 | OTP Input | OTP 입력 | 코드 셀 순차 타이핑+검증 플래시 | RX | ● | ui | W7 |
| U24 | Dark Toggle | 다크 토글 | 라이트↔다크 테마 원형 확산 전환 | RX | ● | ui | W7 |
| U25 | Dock Magnify | 독 매그니파이 | 아이콘 독 근접 확대 파도 | RX | ● | ui | W7 |
| U26 | Window Manage | 윈도우 | 창 열림·스냅·최소화 안무 | RX | ● | ui | W7 |
| U27 | Command Palette | 커맨드 팔레트 | ⌘K 팔레트 필터링 목록 | RX | ● | ui | W7 |
| U28 | Biometric Scan | 바이오메트릭 | 지문/얼굴 스캔 링 진행+승인 | RX | ● | ui | W7 |

| **합계** | **372(예정)** | | | **244** | | | **244** |
