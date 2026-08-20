import { ArrowUpRight } from 'lucide-react';

const projects = [
  { number: '01', title: 'The space between', type: 'Solo exhibition', year: '2025', description: 'A study of the pause between one thought and the next, presented across 18 paintings.' },
  { number: '02', title: 'Common weather', type: 'Artist book', year: '2024', description: 'A limited edition artist book made with found text, monotype prints, and notes from long walks.' },
  { number: '03', title: 'Open studio / 04', type: 'Ongoing series', year: '2023—now', description: 'An evolving body of small works made quickly, in response to the day they are made in.' },
];

export function Projects() {
  return <section className="page-width projects-page">
    <div className="page-intro"><p className="eyebrow">Beyond the frame</p><h1>Ongoing<br /><em>projects.</em></h1><p className="page-lede">Exhibitions, publications, and slower experiments that give the work room to change.</p></div>
    <div className="project-list">{projects.map((project) => <article className="project-row" key={project.number}><span className="project-number">{project.number}</span><div className="project-title"><h2>{project.title}</h2><p>{project.type}</p></div><p className="project-description">{project.description}</p><span className="project-year">{project.year}</span><button className="circle-arrow" aria-label={`Learn more about ${project.title}`}><ArrowUpRight size={20} /></button></article>)}</div>
  </section>;
}
