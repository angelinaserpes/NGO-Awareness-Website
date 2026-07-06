import { useEffect, useRef, useState } from "react";

/* ── Image URLs ─────────────────────────────────────────────────────────── */
const IMG = {
  hero:     "https://images.unsplash.com/photo-1692269725836-fbd72e98883f?w=1920&h=1080&fit=crop&auto=format",
  about:    "https://images.unsplash.com/photo-1463335361701-e90f4c5045d0?w=720&h=900&fit=crop&auto=format",
  seva:     "https://images.unsplash.com/photo-1628717341663-0007b0ee2597?w=800&h=600&fit=crop&auto=format",
  seva2:    "https://images.unsplash.com/photo-1593113616828-6f22bca04804?w=800&h=600&fit=crop&auto=format",
  bach:     "https://images.unsplash.com/flagged/photo-1574097656146-0b43b7660cb6?w=800&h=600&fit=crop&auto=format",
  jeev:     "https://images.unsplash.com/photo-1594004844563-536a03a6e532?w=800&h=600&fit=crop&auto=format",
  udaan:    "https://images.unsplash.com/photo-1587538018365-2a1f8b544c08?w=800&h=600&fit=crop&auto=format",
  prakriti2:"https://images.unsplash.com/photo-1679110667877-408593fab0f6?w=800&h=600&fit=crop&auto=format",
  prakriti: "https://images.unsplash.com/photo-1598335624134-5bceb5de202d?w=800&h=600&fit=crop&auto=format",
  vikas:    "https://images.unsplash.com/flagged/photo-1577604981316-298e453a19dd?w=800&h=600&fit=crop&auto=format",
};

/* ── Static data ─────────────────────────────────────────────────────────── */
const PROJECTS = [
  { id: "seva",         cat: "Humanitarian Relief", name: "Project SEVA",         tag: "Serving humanity, one meal at a time",        img: IMG.seva },
  { id: "bachpanshala", cat: "Education",            name: "Project Bachpanshala", tag: "Every child deserves the gift of learning",   img: IMG.bach },
  { id: "jeev",         cat: "Animal Welfare",       name: "Project JEEV",         tag: "Compassion knows no species",                 img: IMG.jeev },
  { id: "udaan",        cat: "Women Empowerment",    name: "Project UDAAN",        tag: "Rising together, soaring higher",             img: IMG.udaan },
  { id: "prakriti",     cat: "Environment",          name: "Project PRAKRITI",     tag: "Nurturing the earth for tomorrow",            img: IMG.prakriti },
  { id: "vikas",        cat: "Youth & Skills",       name: "Project VIKAS",        tag: "Building futures through skill and purpose",  img: IMG.vikas },
];

const PROJECT_DETAILS = [
  {
    id: "seva", name: "PROJECT SEVA", title: "Humanitarian Relief", reverse: false,
    img: IMG.seva2,
    body: "Project SEVA is our frontline humanitarian mission. Through food distribution drives, emergency relief and clothing campaigns we reach India's most vulnerable communities — from disaster-hit regions to villages struggling daily for basic dignity.",
    highlights: [
      "Food distribution reaching 50,000+ meals across underserved communities",
      "Emergency relief during floods, droughts and natural disasters",
      "Clothing and essential goods drives spanning 28 states",
    ],
  },
  {
    id: "bachpanshala", name: "PROJECT BACHPANSHALA", title: "Education for Every Child", reverse: true,
    img: IMG.bach,
    body: "Bachpanshala believes every child holds a universe of potential. We provide books, stationery, mentorship and digital literacy to children in rural and semi-urban India — creating pathways to knowledge that open doors for life.",
    highlights: [
      "Books and stationery distributed to hundreds of underserved schools",
      "Digital literacy sessions bringing technology to rural classrooms",
      "Mentorship programs connecting students with inspiring professionals",
    ],
  },
  {
    id: "jeev", name: "PROJECT JEEV", title: "Animal Welfare & Rescue", reverse: false,
    img: IMG.jeev,
    body: "Project JEEV operates on the conviction that compassion is limitless. We rescue injured and abandoned animals, run daily feeding programs for strays, provide veterinary care, and build a more humane society one act at a time.",
    highlights: [
      "Animal rescue operations across urban and rural communities",
      "Daily feeding programs for hundreds of stray and abandoned animals",
      "Veterinary treatment, vaccination and rehabilitation for rescued animals",
    ],
  },
  {
    id: "udaan", name: "PROJECT UDAAN", title: "Women Empowerment", reverse: true,
    img: IMG.udaan,
    body: "UDAAN empowers women to discover their strength, voice and economic independence. Through skill development, financial literacy and leadership training, we help women across India build lives defined by dignity and self-reliance.",
    highlights: [
      "Skill development workshops for women in rural and peri-urban areas",
      "Financial literacy and entrepreneurship training for self-reliance",
      "Leadership development programs fostering community ownership",
    ],
  },
  {
    id: "prakriti", name: "PROJECT PRAKRITI", title: "Environmental Sustainability", reverse: false,
    img: IMG.prakriti2,
    body: "PRAKRITI is our commitment to the earth. With 20,000+ saplings planted, we run tree plantation drives, environmental awareness campaigns and sustainability workshops to protect our natural heritage for generations ahead.",
    highlights: [
      "20,000+ saplings planted across multiple Indian states",
      "Environmental awareness campaigns in schools, colleges and communities",
      "Sustainability workshops and green initiatives for lasting change",
    ],
  },
  {
    id: "vikas", name: "PROJECT VIKAS", title: "Youth Skill Development", reverse: true,
    img: IMG.vikas,
    body: "Project VIKAS is a launchpad for young India. Through internship programs, digital marketing, finance and employment readiness training, we have equipped 30,000+ interns with skills to thrive in the modern workforce.",
    highlights: [
      "30,000+ interns trained in industry-relevant, job-ready skills",
      "Digital marketing, finance and technology workshops nationwide",
      "Career mentorship and employment readiness for India's youth",
    ],
  },
];

const STATS = [
  { num: "50k+", label: "Beneficiaries" },
  { num: "200+", label: "Volunteers" },
  { num: "28",   label: "States Served" },
  { num: "3k+",  label: "Villages" },
  { num: "20k+", label: "Saplings" },
  { num: "30k+", label: "Interns Trained" },
];

const IMPACT_ITEMS = [
  { icon: "🤝", target: 50000, suffix: "+", label: "Beneficiaries Served" },
  { icon: "💚", target: 200,   suffix: "+", label: "Active Volunteers" },
  { icon: "🗺", target: 28,    suffix: "",  label: "States Covered" },
  { icon: "🏡", target: 3000,  suffix: "+", label: "Villages Reached" },
  { icon: "🌱", target: 20000, suffix: "+", label: "Saplings Planted" },
  { icon: "🎓", target: 30000, suffix: "+", label: "Interns Trained" },
];

const STATES = [
  "Chhattisgarh","Maharashtra","Delhi","Karnataka","West Bengal","Punjab","Odisha",
  "Tamil Nadu","Telangana","Rajasthan","Assam","Goa","Gujarat","Kerala",
  "Uttar Pradesh","Madhya Pradesh","Bihar","Jharkhand","Haryana","Himachal Pradesh",
  "Uttarakhand","Andhra Pradesh","Manipur","Meghalaya","Tripura",
  "Jammu & Kashmir","Sikkim","Arunachal Pradesh",
];

const TESTIMONIALS = [
  {
    text: "Volunteering with InAmigos during the food drives was life-changing. Watching 500 families receive warm meals with dignity — that is the real India I want to be part of. They truly live their values every single day.",
    name: "Priya Sharma", role: "Volunteer, Delhi",
    avatar: "https://images.unsplash.com/photo-1587538018365-2a1f8b544c08?w=100&h=100&fit=crop&auto=format",
  },
  {
    text: "As a CSR partner, InAmigos's transparency, grassroots reach and measurable impact has consistently impressed our leadership. Their rural education work opened our eyes to what meaningful CSR can truly accomplish.",
    name: "Rajan Mehta", role: "CSR Partner, Mumbai",
    avatar: "https://images.unsplash.com/photo-1603185030522-05d4497bb180?w=100&h=100&fit=crop&auto=format",
  },
  {
    text: "The Bachpanshala program changed my daughter's life. She now dreams of becoming a doctor. Before InAmigos reached our village, textbooks were a luxury. Today she has both books and a vision for her future.",
    name: "Sunita Devi", role: "Beneficiary, Bilaspur CG",
    avatar: "https://images.unsplash.com/photo-1463335361701-e90f4c5045d0?w=100&h=100&fit=crop&auto=format",
  },
];

const INVOLVE = [
  {
    icon: "🌿", title: "Volunteer",
    body: "Give your time and talents to a cause that transcends borders. Whether in person or remotely, your skills can transform lives across India.",
    cta: "Apply to Volunteer",
    href: "mailto:support@inamigosfoundation.org.in?subject=Volunteer Application",
  },
  {
    icon: "❤️", title: "Donate",
    body: "Every rupee directly funds meals, books, saplings and animal rescues. Transparent accounting, genuine grassroots impact, deeply appreciated.",
    cta: "Donate Now",
    href: "mailto:support@inamigosfoundation.org.in?subject=Donation Inquiry",
  },
  {
    icon: "🤝", title: "Partner with CSR",
    body: "Align your company's CSR mandate with proven grassroots impact. InAmigos is CSR-1 registered, ISO certified and fully compliance-ready.",
    cta: "Start a Partnership",
    href: "mailto:support@inamigosfoundation.org.in?subject=CSR Partnership",
  },
];

const NAV_LINKS = ["Home","About","Projects","Impact","Get Involved","Contact"];
const NAV_IDS   = ["home","about","projects","impact","get-involved","contact"];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* ── Counter animation ──────────────────────────────────────────────────── */
function animateCounter(el: HTMLElement, target: number, duration = 2200) {
  const fmt = (n: number) => n >= 1000 ? `${Math.floor(n / 1000)}k` : `${n}`;
  const start = performance.now();
  const tick = (now: number) => {
    const t = Math.min((now - start) / duration, 1);
    const eased = 1 - Math.pow(1 - t, 3);
    el.textContent = fmt(Math.floor(eased * target));
    if (t < 1) requestAnimationFrame(tick);
    else el.textContent = fmt(target);
  };
  requestAnimationFrame(tick);
}

/* ── App ────────────────────────────────────────────────────────────────── */
export default function App() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [form, setForm]           = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent]           = useState(false);
  const [sending, setSending]     = useState(false);
  const heroBgRef  = useRef<HTMLDivElement>(null);
  const countered  = useRef(false);

  useEffect(() => {
    /* Hero pan effect */
    const heroTimer = setTimeout(() => {
      heroBgRef.current?.classList.add("pan");
    }, 50);

    /* Scroll — navbar */
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });

    /* Reveal on scroll */
    const ro = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("is-visible"); }),
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );
    document.querySelectorAll(".reveal").forEach(el => ro.observe(el));

    /* Counter animation */
    const co = new IntersectionObserver(
      (entries) => {
        if (entries.some(e => e.isIntersecting) && !countered.current) {
          countered.current = true;
          document.querySelectorAll(".ia-counter").forEach(el => {
            const t = parseInt((el as HTMLElement).dataset.target ?? "0", 10);
            animateCounter(el as HTMLElement, t);
          });
        }
      },
      { threshold: 0.4 }
    );
    document.querySelectorAll(".ia-icard").forEach(el => co.observe(el));

    return () => {
      clearTimeout(heroTimer);
      window.removeEventListener("scroll", onScroll);
      ro.disconnect();
      co.disconnect();
    };
  }, []);

  const share = (platform: string) => {
    try {
      const url = encodeURIComponent(window.location.href);
      const txt = encodeURIComponent("InAmigos Foundation — Small acts of kindness, shaping bigger lives.");
      const map: Record<string, string> = {
        wa: `https://wa.me/?text=${txt}%20${url}`,
        tw: `https://twitter.com/intent/tweet?text=${txt}&url=${url}`,
        li: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
        fb: `https://www.facebook.com/sharer/sharer.php?u=${url}`,
      };
      if (platform === "cp") {
        navigator.clipboard.writeText(window.location.href).catch(() => {});
      } else {
        window.open(map[platform], "_blank");
      }
    } catch (_) { /* silent */ }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setTimeout(() => { setSending(false); setSent(true); }, 1400);
  };

  return (
    <div>
      {/* ── Mobile Menu ── */}
      <div className={`ia-mmenu${menuOpen ? " open" : ""}`}>
        <button className="ia-mclose" onClick={() => setMenuOpen(false)}>x</button>
        {NAV_LINKS.map((l, i) => (
          <a key={l} href="#" onClick={e => { e.preventDefault(); setMenuOpen(false); scrollTo(NAV_IDS[i]); }}>{l}</a>
        ))}
        <a href="#" className="ia-btn-vol" onClick={e => { e.preventDefault(); setMenuOpen(false); scrollTo("get-involved"); }}>Volunteer with Us</a>
      </div>

      {/* ── Navbar ── */}
      <nav className={`ia-nav${scrolled ? " scrolled" : ""}`}>
        <div className="ia-logo">
          InAmigos Foundation
          <small>Section 8 Non-Profit &middot; India</small>
        </div>
        <ul className="ia-nav-links">
          {NAV_LINKS.map((l, i) => (
            <li key={l}>
              <a href="#" onClick={e => { e.preventDefault(); scrollTo(NAV_IDS[i]); }}>{l}</a>
            </li>
          ))}
        </ul>
        <a href="#" className="ia-btn-vol ia-hide-mobile" onClick={e => { e.preventDefault(); scrollTo("get-involved"); }}>Volunteer with Us</a>
        <div className="ia-hamburger" onClick={() => setMenuOpen(true)} role="button" aria-label="Open menu">
          <span /><span /><span />
        </div>
      </nav>

      {/* ── Social Share Sidebar ── */}
      <div className="ia-share-bar">
        {[
          { label: "Instagram", cls: "ia-share-ig", icon: "IG", href: "https://instagram.com/inamigos?utm_medium=copy_link" },
          { label: "Facebook",  cls: "ia-share-fb", icon: "f",  href: "https://www.facebook.com/109800320841732/posts/289306342891128/" },
          { label: "LinkedIn",  cls: "ia-share-li", icon: "in", href: "https://www.linkedin.com/company/inamigos-foundation" },
          { label: "Twitter",   cls: "ia-share-tw", icon: "X",  href: "https://twitter.com/InamigosF?s=08" },
          { label: "YouTube",   cls: "ia-share-yt", icon: "YT", href: "https://youtube.com/@inamigosfoundation4296" },
        ].map(s => (
          <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className={`ia-share-btn ${s.cls}`} data-label={s.label} title={s.label}>
            {s.icon}
          </a>
        ))}
      </div>

      {/* ══════════ HERO ══════════ */}
      <section className="ia-hero" id="home">
        <div ref={heroBgRef} className="ia-hero-bg" style={{ backgroundImage: `url(${IMG.hero})` }} />
        <div className="ia-hero-overlay" />
        <div className="ia-hero-content">
          <p className="ia-eyebrow">Section 8 Non-Profit &middot; Founded 2020 &middot; Active Across India</p>
          <h1 className="ia-hero-title">
            Small acts of kindness,<br />
            <span className="ia-hero-accent">shaping bigger lives.</span>
          </h1>
          <p className="ia-hero-desc">
            InAmigos Foundation is a Section 8 non-profit working across India in education, humanitarian relief, women empowerment, animal welfare and environmental sustainability.
          </p>
          <div className="ia-hero-btns">
            <a href="#" className="ia-btn-primary" onClick={e => { e.preventDefault(); scrollTo("get-involved"); }}>Volunteer with Us &rarr;</a>
            <a href="#" className="ia-btn-outline" onClick={e => { e.preventDefault(); scrollTo("projects"); }}>Explore Projects</a>
          </div>
        </div>
      </section>

      {/* ══════════ STATS BAR ══════════ */}
      <div className="ia-stats">
        <div className="ia-stats-inner">
          {STATS.flatMap((s, i) => [
            <div key={s.label} className="ia-stat">
              <div className="ia-stat-num">{s.num}</div>
              <div className="ia-stat-lbl">{s.label}</div>
            </div>,
            i < STATS.length - 1 ? <div key={`d${i}`} className="ia-stat-div" /> : null,
          ])}
        </div>
      </div>

      {/* ══════════ ABOUT ══════════ */}
      <section id="about" style={{ background: "#F8F6F1" }}>
        <div className="ia-section">
          <div className="ia-about-grid">
            <div className="ia-about-imgwrap reveal">
              <img src={IMG.about} alt="InAmigos community — women empowerment" className="ia-about-img" />
              <div className="ia-about-badge">
                <div className="num">28</div>
                <div className="lbl">States Active</div>
              </div>
            </div>
            <div className="reveal reveal-d2">
              <p className="ia-section-eyebrow">Our Mission</p>
              <h2 className="ia-section-title">Bringing positive change through compassion, community and grassroots action.</h2>
              <div className="ia-section-divider" />
              <p className="ia-about-body">
                Founded in September 2020 by Mr. Govind Shukla, InAmigos Foundation is a registered Section 8 NGO operating with purpose and integrity across 28 Indian states. From the heartlands of Chhattisgarh to the metros of Delhi and Mumbai, we work where change is needed most.
              </p>
              <p className="ia-about-body">
                Our work spans six pillars: humanitarian relief, education, animal welfare, women empowerment, environmental sustainability and youth skill development. We believe lasting change begins with consistent, compassionate action.
              </p>
              <div className="ia-recog-grid">
                {["80G Certified","12A Registered","CSR-1 Approved","ISO 9001:2015","NITI Aayog Listed"].map(r => (
                  <span key={r} className="ia-recog-pill">{r}</span>
                ))}
              </div>
              <div className="ia-val-badges">
                {["Inclusivity","Empathy","Collaboration"].map(v => (
                  <span key={v} className="ia-val-badge">{v}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ PROJECT CARDS ══════════ */}
      <section id="projects" className="ia-proj-bg">
        <div className="ia-proj-header reveal">
          <p className="ia-section-eyebrow">What We Do</p>
          <h2 className="ia-section-title">Our Six Core Projects</h2>
        </div>
        <div className="ia-proj-grid">
          {PROJECTS.map((p, i) => (
            <a key={p.id} href="#" onClick={e => { e.preventDefault(); scrollTo(p.id); }} className={`ia-pcard reveal reveal-d${(i % 3) + 1}`}>
              <div className="ia-pcard-imgwrap">
                <img src={p.img} alt={p.name} className="ia-pcard-img" />
              </div>
              <div className="ia-pcard-body">
                <p className="ia-pcard-cat">{p.cat}</p>
                <h3 className="ia-pcard-title">{p.name}</h3>
                <p className="ia-pcard-tag">{p.tag}</p>
                <div className="ia-pcard-more">Learn More &rarr;</div>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ══════════ PROJECT DETAILS ══════════ */}
      {PROJECT_DETAILS.map((pd, i) => (
        <section key={pd.id} id={pd.id} style={{ background: i % 2 === 0 ? "#F8F6F1" : "#ffffff" }}>
          {i > 0 && <div className="ia-sep" />}
          <div className="ia-pd-wrap">
            <div className="ia-pd-grid">
              {pd.reverse ? (
                <>
                  <div className="reveal">
                    <p className="ia-pd-name">{pd.name}</p>
                    <h2 className="ia-pd-title">{pd.title}</h2>
                    <p className="ia-pd-body">{pd.body}</p>
                    <ul className="ia-pd-list">
                      {pd.highlights.map(h => <li key={h}>{h}</li>)}
                    </ul>
                    <a href="#" className="ia-btn-green" onClick={e => { e.preventDefault(); scrollTo("get-involved"); }}>Volunteer for this Project &rarr;</a>
                  </div>
                  <img src={pd.img} alt={pd.title} className="ia-pd-img reveal reveal-d2" />
                </>
              ) : (
                <>
                  <img src={pd.img} alt={pd.title} className="ia-pd-img reveal" />
                  <div className="reveal reveal-d2">
                    <p className="ia-pd-name">{pd.name}</p>
                    <h2 className="ia-pd-title">{pd.title}</h2>
                    <p className="ia-pd-body">{pd.body}</p>
                    <ul className="ia-pd-list">
                      {pd.highlights.map(h => <li key={h}>{h}</li>)}
                    </ul>
                    <a href="#" className="ia-btn-green" onClick={e => { e.preventDefault(); scrollTo("get-involved"); }}>Volunteer for this Project &rarr;</a>
                  </div>
                </>
              )}
            </div>
          </div>
        </section>
      ))}

      {/* ══════════ IMPACT ══════════ */}
      <section id="impact" style={{ background: "#F8F6F1" }}>
        <div className="ia-section" style={{ paddingBottom: "60px" }}>
          <p className="ia-section-eyebrow" style={{ textAlign: "center" }}>Our Impact</p>
          <h2 className="ia-impact-head reveal">
            Change you can count.<br />
            <em>Stories you can feel.</em>
          </h2>
          <div className="ia-impact-grid">
            {IMPACT_ITEMS.map((item, i) => (
              <div key={item.label} className={`ia-icard reveal reveal-d${(i % 3) + 1}`}>
                <span className="ia-icard-icon">{item.icon}</span>
                <div className="ia-icard-num">
                  <span className="ia-counter" data-target={item.target}>
                    {item.target >= 1000 ? `${Math.floor(item.target / 1000)}k` : item.target}
                  </span>
                  <span className="ia-icard-suf">{item.suffix}</span>
                </div>
                <p className="ia-icard-lbl">{item.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* State Chips */}
        <div className="ia-states reveal">
          <p className="ia-section-eyebrow">Presence Across India</p>
          <h3 className="ia-states-title">Where We Work</h3>
          <p className="ia-states-sub">Active in 28 states and union territories nationwide</p>
          <div className="ia-chips">
            {STATES.map(s => <span key={s} className="ia-chip">{s}</span>)}
          </div>
        </div>
      </section>

      {/* ══════════ TESTIMONIALS ══════════ */}
      <div className="ia-testi-bg">
        <div className="ia-testi-head reveal">
          <p className="ia-section-eyebrow">Voices</p>
          <h2 className="ia-section-title">Words that inspire us to keep going</h2>
        </div>
        <div className="ia-testi-grid">
          {TESTIMONIALS.map((t, i) => (
            <div key={t.name} className={`ia-tcard reveal reveal-d${i + 1}`}>
              <div className="ia-tcard-quote">&ldquo;</div>
              <p className="ia-tcard-text">{t.text}</p>
              <div className="ia-tcard-author">
                <img src={t.avatar} alt={t.name} className="ia-tcard-avatar" />
                <div>
                  <p className="ia-tcard-name">{t.name}</p>
                  <p className="ia-tcard-role">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ══════════ GET INVOLVED ══════════ */}
      <section id="get-involved" style={{ background: "#F8F6F1", padding: "112px 64px" }}>
        <div style={{ textAlign: "center", marginBottom: "60px" }} className="reveal">
          <p className="ia-section-eyebrow">Join Us</p>
          <h2 className="ia-section-title" style={{ color: "#273520" }}>How you can make a difference</h2>
        </div>
        <div className="ia-inv-grid">
          {INVOLVE.map((c, i) => (
            <div key={c.title} className={`ia-inv-card reveal reveal-d${i + 1}`}>
              <div className="ia-inv-icon">{c.icon}</div>
              <h3 className="ia-inv-title">{c.title}</h3>
              <p className="ia-inv-body">{c.body}</p>
              <a href={c.href} className="ia-btn-terra">{c.cta} &rarr;</a>
            </div>
          ))}
        </div>
      </section>

      {/* ══════════ CTA BANNER ══════════ */}
      <div className="ia-cta">
        <p className="ia-section-eyebrow" style={{ color: "#C8A04B", textAlign: "center", marginBottom: "20px" }}>Make a Difference</p>
        <h2 className="ia-cta-title">
          Fuel the next meal, book,<br /><em>sapling or rescue.</em>
        </h2>
        <a href="mailto:support@inamigosfoundation.org.in?subject=I%20Want%20to%20Donate" className="ia-btn-gold">
          Email Us to Donate &rarr;
        </a>
      </div>

      {/* ══════════ CONTACT ══════════ */}
      <section id="contact" style={{ background: "#F8F6F1", padding: "112px 64px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", textAlign: "center", marginBottom: "64px" }} className="reveal">
          <p className="ia-section-eyebrow">Get In Touch</p>
          <h2 className="ia-section-title" style={{ color: "#273520" }}>We would love to hear from you</h2>
        </div>
        <div className="ia-contact-grid">
          <div className="reveal">
            <h3 className="ia-cinfo-title">Headquarters</h3>
            <p className="ia-caddress">
              Ward No. 5, Gram Post Sipat,<br />
              Ujwal Nagar, Bilaspur<br />
              Chhattisgarh &mdash; 495555
            </p>
            {[
              { icon: "T", label: "+91 6267309902",                       href: "tel:+916267309902" },
              { icon: "@", label: "support@inamigosfoundation.org.in",    href: "mailto:support@inamigosfoundation.org.in" },
              { icon: "W", label: "inamigosfoundation.org.in",            href: "https://inamigosfoundation.org.in" },
            ].map(d => (
              <div key={d.label} className="ia-cdetail">
                <div className="ia-cdetail-icon">{d.icon}</div>
                <div className="ia-cdetail-text">
                  <a href={d.href} target={d.href.startsWith("http") ? "_blank" : undefined} rel="noreferrer">{d.label}</a>
                </div>
              </div>
            ))}
            <div className="ia-social">
              {[
                { label: "Instagram", icon: "IG", href: "https://instagram.com" },
                { label: "Facebook",  icon: "Fb", href: "https://facebook.com" },
                { label: "LinkedIn",  icon: "In", href: "https://linkedin.com" },
                { label: "Twitter",   icon: "Tw", href: "https://twitter.com" },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="ia-social-link" title={s.label}>{s.icon}</a>
              ))}
            </div>
          </div>

          <div className="reveal reveal-d2">
            {sent ? (
              <div className="ia-form-wrap ia-form-success">
                <span style={{ fontSize: "3.5rem" }}>🌿</span>
                <h3>Thank You!</h3>
                <p>We have received your message and will respond within 24&ndash;48 hours.<br />Your compassion means the world to us.</p>
              </div>
            ) : (
              <form className="ia-form-wrap" onSubmit={handleSubmit}>
                <div className="ia-form-row">
                  <div className="ia-fgroup">
                    <label className="ia-flabel">Your Name</label>
                    <input type="text" className="ia-finput" placeholder="Priya Sharma" required
                      value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} />
                  </div>
                  <div className="ia-fgroup">
                    <label className="ia-flabel">Email Address</label>
                    <input type="email" className="ia-finput" placeholder="priya@example.com" required
                      value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} />
                  </div>
                </div>
                <div className="ia-fgroup">
                  <label className="ia-flabel">Subject</label>
                  <input type="text" className="ia-finput" placeholder="How can we help?" required
                    value={form.subject} onChange={e => setForm({ ...form, subject: e.target.value })} />
                </div>
                <div className="ia-fgroup">
                  <label className="ia-flabel">Message</label>
                  <textarea className="ia-finput" rows={6} placeholder="Tell us about your interest in InAmigos Foundation..." required
                    value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                </div>
                <button type="submit" className="ia-fsubmit" disabled={sending}>
                  {sending ? "Sending..." : "Send Message →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* ══════════ FOOTER ══════════ */}
      <footer className="ia-footer">
        <div className="ia-footer-grid">
          <div>
            <div className="ia-footer-logo">InAmigos Foundation</div>
            <p className="ia-footer-about">A Section 8 non-profit working across India since 2020. Founded with compassion, sustained by community, driven by grassroots impact.</p>
            <div className="ia-footer-social">
              {[
                { icon: "IG", href: "https://instagram.com" },
                { icon: "Fb", href: "https://facebook.com" },
                { icon: "In", href: "https://linkedin.com" },
                { icon: "Tw", href: "https://twitter.com" },
              ].map(s => (
                <a key={s.icon} href={s.href} target="_blank" rel="noreferrer" className="ia-footer-slink">{s.icon}</a>
              ))}
            </div>
          </div>
          <div>
            <p className="ia-footer-col-title">Explore</p>
            <ul className="ia-footer-links">
              {["About Us","Project SEVA","Bachpanshala","Project JEEV","Project UDAAN","PRAKRITI","Project VIKAS"].map(l => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="ia-footer-col-title">Get Involved</p>
            <ul className="ia-footer-links">
              {["Volunteer","Donate","CSR Partnership","Internship Program","Awareness Campaigns","Contact Us"].map(l => (
                <li key={l}><a href="#" onClick={e => { e.preventDefault(); scrollTo("get-involved"); }}>{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <p className="ia-footer-col-title">Reach Us</p>
            <p className="ia-footer-ci">Ward No. 5, Gram Post Sipat, Ujwal Nagar, Bilaspur, Chhattisgarh 495555</p>
            <p className="ia-footer-ci">+91 6267309902</p>
            <p className="ia-footer-ci">support@inamigosfoundation.org.in</p>
            <p className="ia-footer-ci">inamigosfoundation.org.in</p>
          </div>
        </div>
        <div className="ia-footer-bottom">
          <p className="ia-footer-copy">&copy; 2026 InAmigos Foundation. All rights reserved.</p>
          <p className="ia-footer-tag">Built with purpose &middot; Designed for change</p>
        </div>
      </footer>
    </div>
  );
}
