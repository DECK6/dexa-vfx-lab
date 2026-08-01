export function AboutPage() {
  return (
    <main className="about-page">
      <header className="about-hero">
        <p className="eyebrow mono">DEXA VFX LAB / FIELD GUIDE</p>
        <h1>PREVIEW LIVE.<br />TAKE THE CODE<span>.</span></h1>
        <p>브라우저에서 결정론적 모션 이펙트를 비교하고, 선택한 프리셋을 Remotion 또는 HyperFrames 워크플로로 가져가는 카탈로그입니다.</p>
      </header>
      <div className="about-grid">
        <section>
          <span className="about-index mono">01 / BROWSE</span>
          <h2>갤러리에서 탐색</h2>
          <p>카테고리, 렌더 종류, 부하, Wave를 조합해 필터링하세요. 보이는 카드만 라이브로 실행되며 나머지는 썸네일로 유지됩니다.</p>
        </section>
        <section>
          <span className="about-index mono">02 / TUNE</span>
          <h2>프리셋 조정</h2>
          <p>상세 화면의 자동 생성 컨트롤로 값을 바꾸고, 재생·루프·프레임 스크럽으로 결과를 확인합니다. RESET은 기본 프리셋을 복원합니다.</p>
        </section>
        <section>
          <span className="about-index mono">03 / REMOTION</span>
          <h2>Remotion에 적용</h2>
          <p>TSX 또는 PRESET JSON 탭을 복사하거나 CLI 탭의 명령으로 MP4를 렌더하세요. 모든 출력은 현재 파라미터 값을 반영합니다.</p>
        </section>
        <section>
          <span className="about-index mono">04 / HYPERFRAMES</span>
          <h2>HyperFrames에 적용</h2>
          <p>HYPERFRAMES 탭의 독립 실행형 HTML 스니펫을 타임라인에 붙여 넣으세요. DOM과 캔버스 커널 모두 같은 이펙트 소스를 사용합니다.</p>
        </section>
      </div>
      <aside className="about-note mono">
        <span>RUNTIME CONTRACT</span>
        320×180 LIVE BACKING / 24FPS GALLERY / 30FPS DETAIL / 6 SECOND LOOP / SEEDED PRNG
      </aside>
    </main>
  );
}

