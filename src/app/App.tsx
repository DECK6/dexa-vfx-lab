import { useEffect, useState } from 'react';
import { AboutPage } from './AboutPage';
import { DetailPage } from './DetailPage';
import { GalleryPage } from './GalleryPage';

type Route = { page: 'gallery' } | { page: 'about' } | { page: 'detail'; id: string };

function readRoute(): Route {
  const hash = window.location.hash || '#/';
  if (hash === '#/about') return { page: 'about' };
  const match = /^#\/e\/([^/]+)$/.exec(hash);
  if (match) return { page: 'detail', id: decodeURIComponent(match[1]).toUpperCase() };
  return { page: 'gallery' };
}

export function App() {
  const [route, setRoute] = useState(readRoute);

  useEffect(() => {
    const update = () => setRoute(readRoute());
    window.addEventListener('hashchange', update);
    return () => window.removeEventListener('hashchange', update);
  }, []);

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="#/" aria-label="DEXA VFX LAB gallery">
          DEXA VFX LAB<span>.</span>
        </a>
        <nav className="site-nav mono" aria-label="Primary navigation">
          <a className={route.page === 'gallery' ? 'is-current' : ''} href="#/">GALLERY</a>
          <a className={route.page === 'about' ? 'is-current' : ''} href="#/about">ABOUT</a>
        </nav>
      </header>
      {route.page === 'gallery' && <GalleryPage />}
      {route.page === 'detail' && <DetailPage id={route.id} />}
      {route.page === 'about' && <AboutPage />}
    </div>
  );
}
