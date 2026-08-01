import { useState } from 'react';

const COPY = {
  ko: {
    heroBody:
      '브라우저에서 결정론적 모션 이펙트를 비교하고, 선택한 프리셋을 Remotion 또는 HyperFrames 워크플로로 가져가는 카탈로그입니다.',
    sections: [
      {
        index: '01 / BROWSE',
        title: '갤러리에서 탐색',
        body: '카테고리, 렌더 종류, 부하, Wave를 조합해 필터링하세요. 보이는 카드만 라이브로 실행되며 나머지는 썸네일로 유지됩니다.',
      },
      {
        index: '02 / TUNE',
        title: '프리셋 조정',
        body: '상세 화면의 자동 생성 컨트롤로 값을 바꾸고, 재생·루프·프레임 스크럽으로 결과를 확인합니다. RESET은 기본 프리셋을 복원합니다.',
      },
      {
        index: '03 / REMOTION',
        title: 'Remotion에 적용',
        body: 'TSX 또는 PRESET JSON 탭을 복사하거나 CLI 탭의 명령으로 MP4를 렌더하세요. 모든 출력은 현재 파라미터 값을 반영합니다.',
      },
      {
        index: '04 / HYPERFRAMES',
        title: 'HyperFrames에 적용',
        body: 'HYPERFRAMES 탭의 독립 실행형 HTML 스니펫을 타임라인에 붙여 넣으세요. DOM과 캔버스 커널 모두 같은 이펙트 소스를 사용합니다.',
      },
    ],
    sourceLabel: '전체 소스와 커널 계약 문서는 GitHub에 공개되어 있습니다.',
  },
  en: {
    heroBody:
      'A catalog for comparing deterministic motion effects in the browser, then carrying the preset you tuned into your Remotion or HyperFrames workflow.',
    sections: [
      {
        index: '01 / BROWSE',
        title: 'Browse the gallery',
        body: 'Filter by category, kernel kind, cost, and wave. Only visible cards run live — the rest stay as thumbnails.',
      },
      {
        index: '02 / TUNE',
        title: 'Tune the preset',
        body: 'Adjust values with the auto-generated controls on the detail page, and check the result with play, loop, and frame scrubbing. RESET restores the default preset.',
      },
      {
        index: '03 / REMOTION',
        title: 'Use it in Remotion',
        body: 'Copy the TSX or PRESET JSON tab, or render an MP4 with the command in the CLI tab. Every output reflects your current parameter values.',
      },
      {
        index: '04 / HYPERFRAMES',
        title: 'Use it in HyperFrames',
        body: 'Paste the self-contained HTML snippet from the HYPERFRAMES tab into your timeline. DOM and canvas kernels share the same effect source.',
      },
    ],
    sourceLabel: 'Full source and the kernel contract docs are public on GitHub.',
  },
} as const;

export function AboutPage() {
  const [lang, setLang] = useState<'ko' | 'en'>('ko');
  const copy = COPY[lang];

  return (
    <main className="about-page">
      <header className="about-hero">
        <div className="about-hero-top">
          <p className="eyebrow mono">DEXA VFX LAB / FIELD GUIDE</p>
          <div className="lang-toggle mono" role="group" aria-label="Language">
            {(['ko', 'en'] as const).map((code) => (
              <button
                key={code}
                type="button"
                className={lang === code ? 'active' : ''}
                onClick={() => setLang(code)}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        <h1>PREVIEW LIVE.<br />TAKE THE CODE<span>.</span></h1>
        <p>{copy.heroBody}</p>
      </header>
      <div className="about-grid">
        {copy.sections.map((section) => (
          <section key={section.index}>
            <span className="about-index mono">{section.index}</span>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </section>
        ))}
      </div>
      <aside className="about-note mono">
        <span>RUNTIME CONTRACT</span>
        320×180 LIVE BACKING / 24FPS GALLERY / 30FPS DETAIL / 6 SECOND LOOP / SEEDED PRNG
      </aside>
      <aside className="about-note mono">
        <span>SOURCE</span>
        <a
          href="https://github.com/DECK6/dexa-vfx-lab"
          target="_blank"
          rel="noopener noreferrer"
          className="about-repo-link"
        >
          GITHUB.COM/DECK6/DEXA-VFX-LAB ↗
        </a>
        {copy.sourceLabel}
      </aside>
    </main>
  );
}
