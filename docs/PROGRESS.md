# PROGRESS
phase: P0
last-update: 2026-08-01T10:26

## 체제: 병렬 트랙 (모놀리식 1차 발주 실패 후 전환)
- 파운데이션(커널 계약·매니페스트 코드젠·subject 래스터라이저·린트·배포 스크립트) = 오케스트레이터 직접 구현, master 76e863c+
- Track A (wt-a, task-ms9osl2x-mikl3a): 앱 셸 + 라이브 드라이버 + params UI — 진행 중
- Track B (wt-b, task-ms9osl9j-hx6ur2): Remotion 어댑터 + 썸네일 + 레퍼런스 3종(C02/E01/P01) — 진행 중
- Track C (wt-c, task-ms9owlk8-pvtsgb): 내보내기 제너레이터 5종 — 진행 중 (R 리서치 완료: docs/HYPERFRAMES_NOTES.md)
- 검수 스위트(playwright smoke + __vfx 훅 계약) = 오케스트레이터 작성 완료
- 통합·게이트 실행 = 오케스트레이터

## 이펙트 상태 (구현 완료된 것만 기록, 나머지는 미착수로 간주)
| ID | 상태 | 비고 |
|---|---|---|

## 게이트 이력
| 게이트 | 결과 | 일시 |
|---|---|---|

## 미해결 이슈
- 1차 P0 모놀리식 발주(task-ms9nkwgm-auhb7y) graphify 인덱싱 대기 중 프로세스 사망 → 취소. 재발 방지: 모든 발주 프롬프트에 절차 오버헤드 생략 명시
- 상세 프리뷰를 라이브 드라이버 트랜스포트로 구현(A). Remotion Player 전환은 통합 단계에서 판단 — SPEC §6과 차이, 사용자 보고 필요
- import.meta.glob은 Vite 전용 → 매니페스트 코드젠으로 교체(SPEC §4의 glob 서술은 코드젠으로 갱신 필요)
