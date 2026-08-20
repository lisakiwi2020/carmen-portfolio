import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { artworks } from '../data/artworks';

export function Home({ onNavigate }) {
  const featured = artworks.find((artwork) => artwork.featured) || artworks[0];
  const secondary = artworks.slice(1, 3);

  return (
    <>
      <section className="hero page-width">
        <div className="hero-copy reveal-up">
          <p className="eyebrow">Independent visual artist</p>
          <h1>Making space<br /><em>for feeling.</em></h1>
          <p className="hero-intro">Carmen is an artist working between instinct and intention, building quiet worlds from color, texture, and collected fragments.</p>
          <button className="text-link" onClick={() => onNavigate('Work')}>Explore the work <ArrowUpRight size={17} /></button>
        </div>
        <div className="hero-art reveal-fade">
          <img src={featured.image} alt={featured.alt} />
          <div className="image-caption"><span>{featured.title}</span><span>{featured.year}</span></div>
        </div>
        <div className="scroll-cue"><ArrowDown size={15} /><span>Scroll to wander</span></div>
      </section>
      <section className="statement-band">
        <div className="page-width statement-grid">
          <p className="eyebrow">A note from the studio</p>
          <p className="statement">“The work begins where language ends: in the small, unguarded moments that stay with us.”</p>
        </div>
      </section>
      <section className="home-preview page-width">
        <div className="section-heading"><div><p className="eyebrow">Selected work</p><h2>A few things<br /><em>from lately.</em></h2></div><button className="text-link" onClick={() => onNavigate('Work')}>View all work <ArrowUpRight size={17} /></button></div>
        <div className="preview-grid">
          {secondary.map((artwork, index) => <article className={index === 1 ? 'art-card offset' : 'art-card'} key={artwork.id}><img src={artwork.image} alt={artwork.alt} /><div className="art-meta"><span>{artwork.title}</span><span>{artwork.year}</span></div></article>)}
        </div>
      </section>
    </>
  );
}
