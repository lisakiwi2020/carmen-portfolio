import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { Home } from './pages/Home';
import { Work } from './pages/Work';
import { Projects } from './pages/Projects';
import { About } from './pages/About';

const pages = { Home, Work, Projects, About };

export default function App() {
  const [activePage, setActivePage] = useState('Home');
  const [menuOpen, setMenuOpen] = useState(false);
  const Page = pages[activePage];

  const navigate = (page) => {
    setActivePage(page);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="site-shell">
      <header className="site-header">
        <button className="wordmark" onClick={() => navigate('Home')} aria-label="Go to Carmen home">
          Carmen<span className="wordmark-dot">.</span>
        </button>
        <nav className={menuOpen ? 'main-nav is-open' : 'main-nav'} aria-label="Main navigation">
          {Object.keys(pages).map((page) => (
            <button key={page} className={activePage === page ? 'nav-link active' : 'nav-link'} onClick={() => navigate(page)}>
              {page}
            </button>
          ))}
        </nav>
        <button className="contact-button" onClick={() => navigate('About')}>
          Get in touch <ArrowUpRight size={16} strokeWidth={1.8} />
        </button>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>
      <main><Page onNavigate={navigate} /></main>
      <footer className="site-footer">
        <div className="footer-mark">Carmen<span className="wordmark-dot">.</span></div>
        <p>Visual artist · Based in Auckland, New Zealand</p>
        <p>© {new Date().getFullYear()} Carmen</p>
      </footer>
    </div>
  );
}
