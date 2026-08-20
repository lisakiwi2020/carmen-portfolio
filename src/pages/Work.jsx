import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { artworks, categories } from '../data/artworks';

export function Work() {
  const [filter, setFilter] = useState('All work');
  const filteredArtworks = filter === 'All work' ? artworks : artworks.filter((artwork) => artwork.category === filter);

  return <section className="page-width work-page">
    <div className="page-intro"><p className="eyebrow">The archive</p><h1>Selected<br /><em>work.</em></h1><p className="page-lede">A collection of paintings, works on paper, and printed experiments made over the last few years.</p></div>
    <div className="filter-bar" role="group" aria-label="Filter artwork by category">{categories.map((category) => <button className={filter === category ? 'filter active' : 'filter'} key={category} onClick={() => setFilter(category)}>{category}</button>)}</div>
    <div className="work-grid">{filteredArtworks.map((artwork, index) => <article className={index % 3 === 1 ? 'art-card tall' : 'art-card'} key={artwork.id}><div className="art-image-wrap"><img src={artwork.image} alt={artwork.alt} /><button className="view-art" aria-label={`View ${artwork.title}`}><ArrowUpRight size={18} /></button></div><div className="art-meta"><span>{artwork.title}</span><span>{artwork.year}</span></div><p className="art-detail">{artwork.medium}</p></article>)}</div>
  </section>;
}
