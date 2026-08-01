# W2 배치 계획 (69종, D01·A01은 인프라 건에서 완료)

| 배치 | 커널 | 이펙트 |
|---|---|---|
| GL1 | webgl | D02 Ripple Circle · E02 Halftone Dot · E03 Dither Bayer · E07 Posterize Step |
| GL2 | webgl | N03 Water Surface · R01 Perlin Field · Q01 Metaball Merge · M12 Noise Dissolve |
| CV1 | canvas | G04 Signal Loss · G05 VHS Tracking · L13 Glow Trail · P02 Confetti Rain · P03 Spark Shower |
| CV2 | canvas | P04 Dust Motes · P06 Snow Fall · D05 Wave Shear · D11 Mirror Fold · N05 Rain Streak |
| CV3 | canvas | R08 Phyllotaxis · A02 Spectrum Analyzer |
| RX1 | react | T03 Odometer Roll · T05 Typewriter Caret · T06 Word Cascade · T09 Char Flip 3D · T10 Highlight Sweep |
| RX2 | react | T15 Wave Text · G10 Ghost Echo · G12 Sync Roll · G15 Frame Drop · L06 Light Leak |
| RX3 | react | L09 Strobe Cut · L12 Spotlight Track · P05 Bokeh Drift · S05 Polygon Rotate · S09 Spiral Unfold |
| RX4 | react | S12 Dash March · S13 Corner Trace · S14 Concentric Pulse · X04 Ink Bleed · X05 Push Slide |
| RX5 | react | X06 Clock Wipe · X08 Blinds · X13 Cube Rotate · X14 Whip Pan · X16 Split Open |
| RX6 | react | C04 Dolly Zoom · C05 Rack Focus · C07 Crash Zoom · C11 Perspective Card · E06 Duotone Map |
| RX7 | react | E10 Vignette Breathe · V01 Bar Race · V04 Line Chart Draw · V05 Pie Sweep · V09 Gauge Needle |
| RX8 | react | U02 Toggle Switch · U03 Loading Spinner · U04 Skeleton Shimmer · R05 Moire Interference · R07 Lissajous |
| RX9 | react | R10 Stripe Shift · R11 Checker Flip · Q08 Gel Wobble · Q10 Liquid Fill · M02 Gradient Wipe |
| RX10 | react | M03 Text Knockout · M05 Spotlight Mask · M09 Radial Unveil · A04 Beat Pulse |

## 상세 행 (발주 프롬프트용)

### GL1
- D02 | Ripple Circle | 원형 잔물결 | webgl | cost 2 | category distort
- E02 | Halftone Dot | 하프톤 망점 | webgl | cost 2 | category texture
- E03 | Dither Bayer | 베이어 디더링 | webgl | cost 2 | category texture
- E07 | Posterize Step | 포스터화 단계 축소 | webgl | cost 1 | category texture

### GL2
- N03 | Water Surface | 수면 파문 | webgl | cost 2 | category nature
- R01 | Perlin Field | 펄린 노이즈 필드 | webgl | cost 2 | category pattern
- Q01 | Metaball Merge | 메타볼 병합 | webgl | cost 2 | category liquid
- M12 | Noise Dissolve | 노이즈 디졸브 | webgl | cost 2 | category mask

### CV1
- G04 | Signal Loss | 화이트노이즈 인터럽트 | canvas | cost 2 | category glitch
- G05 | VHS Tracking | 트래킹 에러 + 색번짐 | canvas | cost 2 | category glitch
- L13 | Glow Trail | 이동 잔광 | canvas | cost 2 | category light
- P02 | Confetti Rain | 색종이 낙하 | canvas | cost 2 | category particle
- P03 | Spark Shower | 불꽃 튐 | canvas | cost 2 | category particle

### CV2
- P04 | Dust Motes | 먼지 부유 | canvas | cost 1 | category particle
- P06 | Snow Fall | 눈 낙하 | canvas | cost 2 | category particle
- D05 | Wave Shear | 사인파 전단 왜곡 | canvas | cost 2 | category distort
- D11 | Mirror Fold | 거울 접기 대칭 | canvas | cost 1 | category distort
- N05 | Rain Streak | 빗줄기 | canvas | cost 2 | category nature

### CV3
- R08 | Phyllotaxis | 잎차례 나선 | canvas | cost 1 | category pattern
- A02 | Spectrum Analyzer | 스펙트럼 분석기 | canvas | cost 2 | category audio

### RX1
- T03 | Odometer Roll | 숫자 슬롯 롤링 카운터 | react | cost 1 | category type
- T05 | Typewriter Caret | 타이핑 + 커서 점멸 | react | cost 1 | category type
- T06 | Word Cascade | 단어 단위 블러 인 | react | cost 1 | category type
- T09 | Char Flip 3D | 글자 X축 3D 뒤집기 | react | cost 1 | category type
- T10 | Highlight Sweep | 형광펜 스윕 강조 | react | cost 1 | category type

### RX2
- T15 | Wave Text | 사인파 상하 흔들림 | react | cost 1 | category type
- G10 | Ghost Echo | 신호 잔상 반복 | react | cost 1 | category glitch
- G12 | Sync Roll | 수직 동기 이탈 롤 | react | cost 1 | category glitch
- G15 | Frame Drop | 프레임 스킵 스터터 | react | cost 1 | category glitch
- L06 | Light Leak | 필름 광 누출 | react | cost 1 | category light

### RX3
- L09 | Strobe Cut | 스트로브 점멸 | react | cost 1 | category light
- L12 | Spotlight Track | 스포트라이트 추적 | react | cost 1 | category light
- P05 | Bokeh Drift | 보케 표류 | react | cost 1 | category particle
- S05 | Polygon Rotate | 다각형 회전 스택 | react | cost 1 | category shape
- S09 | Spiral Unfold | 나선 전개 | react | cost 1 | category shape

### RX4
- S12 | Dash March | 대시 행진 | react | cost 1 | category shape
- S13 | Corner Trace | 모서리 추적 프레임 | react | cost 1 | category shape
- S14 | Concentric Pulse | 동심원 파동 | react | cost 1 | category shape
- X04 | Ink Bleed | 잉크 번짐 전환 | react | cost 2 | category trans
- X05 | Push Slide | 밀어내기 전환 | react | cost 1 | category trans

### RX5
- X06 | Clock Wipe | 시계 방향 와이프 | react | cost 1 | category trans
- X08 | Blinds | 블라인드 개폐 | react | cost 1 | category trans
- X13 | Cube Rotate | 큐브 회전 면 전환 | react | cost 1 | category trans
- X14 | Whip Pan | 휩팬 모션블러 | react | cost 1 | category trans
- X16 | Split Open | 좌우 분할 개방 | react | cost 1 | category trans

### RX6
- C04 | Dolly Zoom | 베르티고 효과 | react | cost 1 | category camera
- C05 | Rack Focus | 초점 이동 | react | cost 1 | category camera
- C07 | Crash Zoom | 급속 줌 인 | react | cost 1 | category camera
- C11 | Perspective Card | 원근 카드 틸트 | react | cost 1 | category camera
- E06 | Duotone Map | 듀오톤 매핑 | react | cost 1 | category texture

### RX7
- E10 | Vignette Breathe | 비네팅 호흡 | react | cost 1 | category texture
- V01 | Bar Race | 바 차트 레이스 | react | cost 1 | category data
- V04 | Line Chart Draw | 라인 차트 그려지기 | react | cost 1 | category data
- V05 | Pie Sweep | 파이 차트 스윕 | react | cost 1 | category data
- V09 | Gauge Needle | 계기 바늘 스윙 | react | cost 1 | category data

### RX8
- U02 | Toggle Switch | 토글 전환 | react | cost 1 | category ui
- U03 | Loading Spinner | 로딩 스피너 세트 | react | cost 1 | category ui
- U04 | Skeleton Shimmer | 스켈레톤 시머 | react | cost 1 | category ui
- R05 | Moire Interference | 모아레 간섭 | react | cost 1 | category pattern
- R07 | Lissajous | 리사주 곡선 | react | cost 1 | category pattern

### RX9
- R10 | Stripe Shift | 스트라이프 위상 이동 | react | cost 1 | category pattern
- R11 | Checker Flip | 체커 순차 뒤집기 | react | cost 1 | category pattern
- Q08 | Gel Wobble | 젤리 탄성 흔들림 | react | cost 1 | category liquid
- Q10 | Liquid Fill | 액체 채움 | react | cost 1 | category liquid
- M02 | Gradient Wipe | 그라디언트 와이프 | react | cost 1 | category mask

### RX10
- M03 | Text Knockout | 텍스트 녹아웃 마스크 | react | cost 1 | category mask
- M05 | Spotlight Mask | 스포트라이트 마스크 | react | cost 1 | category mask
- M09 | Radial Unveil | 방사형 공개 | react | cost 1 | category mask
- A04 | Beat Pulse | 비트 맥동 | react | cost 1 | category audio
