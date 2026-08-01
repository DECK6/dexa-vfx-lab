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
| **합계** | **214** | | | **214** | | | **214** |
