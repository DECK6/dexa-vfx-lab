# PROGRESS
phase: W1
last-update: 2026-08-01T11:43

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
| B3 | wt-c | task-ms9r1l1f-zcepb7 | G01 S03 R13 L02 L03 M01 |
| B4 | wt-d | ✅ 검수 통과(사후) | X01 X02 X03 C01 C03 |
| B5 | wt-e | ✅ 완료·검수 통과·머지(69a383d) | G02 G03 |

## 이펙트 상태 (구현 완료된 것만 기록, 나머지는 미착수로 간주)
| ID | 상태 | 비고 |
|---|---|---|
| C02 | pass | 레퍼런스(react). still·시각 검수 통과 |
| E01 | pass | 레퍼런스(canvas 무상태). 그레인 시각 확인 |
| P01 | pass | 레퍼런스(canvas stateful). 결정성 2회 렌더 바이트 동일 |
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

## 게이트 이력
| 게이트 | 결과 | 일시 |
|---|---|---|
| P0-1 typecheck | pass | 08-01 |
| P0-2 registry lint (3 effects) | pass | 08-01 |
| P0-3 smoke 스위트 5/5 (갤러리·about·C02·E01·P01) | pass | 08-01 |
| P0-4 remotion still 3종 + thumbs 3장 | pass | 08-01 |
| P0-5 HyperFrames check 3/3 + P01 실렌더 mp4 | pass | 08-01 |
| **P0 게이트 (7/7)** | **pass** | 08-01 |
| P0-6 3라우트 + DEXA 토큰 (스크린샷 확보) | pass | 08-01 |
| P0-7 stateful 시크 결정성 (2회 렌더 바이트 동일) | pass | 08-01 |

## 미해결 이슈
- 1차 P0 모놀리식 발주 graphify 대기 중 사망 → 병렬 트랙으로 전환 완료
- 디스크 풀 사태(08-01): 부트 볼륨 0바이트로 전 작업 중단 → 해소. bunx hyperframes는 캐시 공간 요구 큼
- TRANS 계열 썸네일 프레임(90=전환 완료 후) → 카테고리별 썸네일 프레임 튜닝 백로그
- 상세 프리뷰를 라이브 드라이버 트랜스포트로 구현(A). Remotion Player 전환은 통합 단계에서 판단 — SPEC §6과 차이, 사용자 보고 필요
- import.meta.glob은 Vite 전용 → 매니페스트 코드젠으로 교체(SPEC §4의 glob 서술은 코드젠으로 갱신 필요)
