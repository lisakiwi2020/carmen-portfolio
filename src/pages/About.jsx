import { ArrowUpRight, Mail } from 'lucide-react';

export function About() {
  return <section className="page-width about-page">
    <div className="about-top"><div className="page-intro"><p className="eyebrow">The person behind the work</p><h1>Hi, I’m<br /><em>Carmen.</em></h1></div><div className="portrait-wrap"><img src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=900&q=85" alt="Portrait of Carmen in her studio" /></div></div>
    <div className="about-copy"><p className="about-lede">I make paintings and works on paper about memory, attention, and the tender oddness of being here.</p><div className="about-columns"><p>My practice is rooted in noticing. I collect colors from ordinary days, shapes from half-remembered places, and gestures that do not quite have names yet. In the studio, these fragments become layered, intuitive compositions.</p><p>I’m currently based in Auckland, New Zealand, where I share a studio with a rotating cast of plants, books, and unfinished canvases.</p></div></div>
    <div className="contact-strip"><div><p className="eyebrow">Say hello</p><h2>Let’s make a<br /><em>connection.</em></h2></div><a className="contact-link" href="mailto:hello@carmen.studio"><Mail size={18} /> hello@carmen.studio <ArrowUpRight size={17} /></a></div>
  </section>;
}
