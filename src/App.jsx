import { useEffect, useRef } from "react";
import { portfolioData as data } from "./data";
import "./styles.css";

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M7 17L17 7M17 7H8M17 7V16" />
  </svg>
);

const Tilt = ({ children, className = "", ...props }) => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const move = (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(1000px) rotateX(${(-py * 5).toFixed(2)}deg) rotateY(${(px * 5).toFixed(2)}deg) translateY(-5px) translateZ(0)`;
    };
    const leave = () => { el.style.transform = ""; };
    el.addEventListener("mousemove", move);
    el.addEventListener("mouseleave", leave);
    return () => {
      el.removeEventListener("mousemove", move);
      el.removeEventListener("mouseleave", leave);
    };
  }, []);
  return <div ref={ref} className={`tilt ${className}`} {...props}>{children}</div>;
};



function Header() {
  return <header><nav>
    <div className="brand"><span className="dot" />{data.site.brand}</div>
    <div className="navlinks"><a href="#work">Work</a><a href="#skills">Skills</a><a href="#experience">Experience</a><a href="#contact">Contact</a></div>
    <div className="navstatus">open to work</div>
  </nav></header>;
}

function Hero() {
  return <section className="hero">
    <div className="aurora"><span className="a1" /><span className="a2" /></div>

    <div className="wrap"><div className="hero-grid">
      <div>
        <div className="kicker load-in d1"><span className="rule" />{data.site.location}</div>
        <h1 className="load-in d2">{data.site.title}</h1>
        <p className="role-line load-in d3">{data.site.role}</p>
        <p className="bio load-in d3">{data.site.bio}</p>
        <div className="cta-row load-in d4"><a href="#work" className="btn btn-primary">See the work</a><a href={data.site.resumeUrl} download={"Abdullah_Al_Nahian.pdf"} className="btn btn-ghost">Download résumé</a></div>
      </div>
      <div className="bento-cluster load-in d4">
        <div className="bento-tile spec-panel bracketed">
          <span className="bl" /><span className="br" /><div className="spec-title">profile</div>
          {data.profile.map(([label, value, tone]) => <div className="spec-row" key={label}><span className="spec-label">{label}</span><span className={`spec-value ${tone || ""}`}>{value}</span></div>)}
        </div>
      </div>
    </div></div>
  </section>;
}

function Skills() {
  return <section id="skills">
    <div className="wrap"><div className="section-head"><h2>Skills</h2><div className="section-note">Grouped by how often I reach for them, not a made-up percentage.</div></div>
      <div className="skills-bento">{data.skills.map(tier => <Tilt key={tier.name} className={`skill-tier ${tier.tier}`}>
        <div className="tier-head"><span className="tier-name">{tier.name}</span><span className="tier-desc">{tier.description}</span></div>
        <div className="chip-row">{tier.skills.map(skill => <span className="chip" key={skill}>{skill}</span>)}</div>
      </Tilt>)}</div>
    </div>
  </section>;
}

function Project({ project }) {
  return <Tilt className={`project ${project.className}`}>
    <span className="project-id">{project.id}</span>
    <img className="project-thumb" src={project.image} alt={project.alt} />
    <h3>{project.title}</h3>
    <p>{project.description}</p>
    <div className="tags">{project.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
    <a href={project.url} className="project-link">View project <ArrowIcon /></a>
  </Tilt>;
}

function Work() {
  return <section id="work"><div className="wrap"><div className="section-head"><h2>Selected work</h2><div className="section-note">Six projects spanning mobile apps, embedded systems, and algorithm tooling.</div></div></div>
    <div className="projects-grid">{data.projects.map(project => <Project key={project.id} project={project} />)}</div>
  </section>;
}

function Experience() {
  return <section id="experience">
    <div className="wrap"><div className="section-head"><h2>Experience</h2></div>
      <div className="timeline">{data.experience.map(item => <div className="tl-item" key={`${item.organization}-${item.role}`}>
        <div className="tl-head"><div><div className="tl-role">{item.role}</div><div className="tl-org">{item.organization}</div></div><div className="tl-meta">{item.type}<br />{item.period}</div></div>
        <ul className="tl-desc">{item.description.map(text => <li key={text}>{text}</li>)}</ul>
        <div className="tags">{item.tags.map(tag => <span className="tag" key={tag}>{tag}</span>)}</div>
      </div>)}</div>
    </div>
  </section>;
}

function Footer() {
  return <footer id="contact"><div className="aurora aurora-quiet"><span className="a1 footer-a1" /><span className="a2 footer-a2" /></div>
    <div className="wrap"><div className="contact-grid"><div><h2>Building something interesting? Let's talk.</h2><p>Open to internships, freelance builds, and collaborations that mix software with hardware.</p><a href={`mailto:${data.site.email}`} className="email-link">{data.site.email}</a></div>
      <div className="meta-list"><div className="row"><span className="k">Location</span><span className="v">{data.site.location}</span></div><div className="row"><span className="k">GitHub</span><span className="v"><a href={data.site.github}>github.com/naahian</a></span></div><div className="row"><span className="k">LinkedIn</span><span className="v"><a href={data.site.linkedin}>linkedin.com/in/abdullah-al-nahian-3286841b1/</a></span></div></div>
    </div></div><div className="foot-bottom"><span>{data.site.copyright}</span><span>{data.site.version}</span></div>
  </footer>;
}

export default function App() {
  return <><div className="aurora-wash"><span className="w1" /><span className="w2" /><span className="w3" /></div><Header /><main><Hero /><Skills /><Work /><Experience /><Footer /></main></>;
}
