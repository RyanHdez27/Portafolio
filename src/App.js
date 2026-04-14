/**
 * ============================================================
 * PORTAFOLIO PROFESIONAL — RYAN HERNANDEZ
 * Ingeniero de Software | Analista de Virtualización | Full Stack Dev
 * ============================================================
 *
 * INSTRUCCIONES DE DESPLIEGUE:
 * 1. Crear proyecto: npx create-react-app ryan-portfolio
 * 2. Reemplazar src/App.js con este archivo (renombrar a App.jsx)
 * 3. Instalar dependencias: npm install lucide-react
 * 4. Ejecutar en dev: npm start
 * 5. Build producción: npm run build
 * 6. Despliegue recomendado: Vercel (vercel --prod) o Netlify
 *
 * BACKEND (Node.js) — ver sección al final del archivo para setup
 * ============================================================
 */

import { useState, useEffect, useRef } from "react";

// ─── PALETA Y VARIABLES DE DISEÑO ───────────────────────────
const COLORS = {
  bg: "#050a14",
  surface: "#0a1628",
  surfaceAlt: "#0d1f35",
  border: "#1a3a5c",
  accent: "#00d4ff",
  accentDim: "#0077aa",
  accentGlow: "rgba(0, 212, 255, 0.15)",
  text: "#e2eaf4",
  muted: "#6b8fa8",
  white: "#ffffff",
};

// ─── DATOS DEL PORTAFOLIO ────────────────────────────────────
const DATA = {
  personal: {
    name: "Ryan Hernandez",
    location: "Bogotá, Colombia",
    email: "ryan.hdez27@gmail.com",
    linkedin: "https://www.linkedin.com/in/ryanhdez",
    github: "https://github.com/RyanHdez27",
    title: "Ingeniero de Software",
    subtitle: "Analista de Virtualización · Desarrollador Full Stack",
    bio: "Construyo infraestructuras robustas y aplicaciones escalables en la intersección del desarrollo de software, la virtualización empresarial y la automatización con inteligencia artificial.",
    about: `Ingeniero de Software con experiencia sólida en desarrollo Full Stack, automatización con IA y virtualización de infraestructuras críticas. Actualmente me desempeño como Analista de Virtualización, optimizando entornos VMware y Linux para garantizar alta disponibilidad y eficiencia operativa. Mi enfoque combina ingeniería de software rigurosa con una visión orientada a la transformación digital y la eficiencia sistémica.`,
  },

  experience: [
    {
      role: "Analista de Virtualización",
      company: "Infraestructura Empresarial",
      period: "2025 — Presente",
      items: [
        "Administración y monitoreo de infraestructura virtual de alta disponibilidad",
        "Optimización de recursos en entornos VMware Esxi, Oracle KVM y OVM",
        "Gestión de clusters para cargas de trabajo críticas",
        "Reducción del tiempo de inactividad mediante automatización preventiva",
      ],
      tech: ["VMware", "Oracle KVM y OVM", "Teams", "Ssh", "VADP"],
    },
    {
    role: "Administrador de Plataformas",
      company: "Servicios TI",
      period: "2024 — 2025",
      items: [
        "Gestión de incidentes y continuidad operativa de servicios críticos",
        "Monitoreo proactivo de plataformas y sistemas en producción",
        "Documentación técnica y gestión con Service Manager",
        "Soporte nivel 2 y coordinación con equipos especializados",
      ],
      tech: ["Service Manager", "ITIL", "Soporte TI", "Monitoreo", "Teams"],
    },
    {
      role: "Desarrollador Full Stack",
      company: "Proyectos y Consultoría",
      period: "2023 — 2024",
      items: [
        "Desarrollo de APIs RESTful robustas con Laravel y PHP",
        "Interfaces de usuario modernas y reactivas con React",
        "Diseño y optimización de bases de datos SQL (MySQL, PostgreSQL)",
        "Integración de sistemas de terceros y pasarelas de pago",
      ],
      tech: ["React", "Laravel", "MySQL", "PostgreSQL", "REST APIs"],
    },
  ],

  techStack: [
    {
      category: "Frontend",
      icon: "⬡",
      color: "#00d4ff",
      items: ["React", "HTML5", "Tailwind", "JavaScript"],
    },
    {
      category: "Backend",
      icon: "◈",
      color: "#00ffaa",
      items: ["Node.js", "Php", "Python", "APIs REST"],
    },
    {
      category: "Bases de Datos",
      icon: "◉",
      color: "#ff6b35",
      items: ["PostgreSQL", "MySQL", "SQLServer"],
    },
    {
      category: "Data & BI",
      icon: "◆",
      color: "#a78bfa",
      items: ["Power BI", "Python", "Apache Spark"],
    },
    {
      category: "Infraestructura",
      icon: "▣",
      color: "#fbbf24",
      items: ["VMware", "Oracle", "Linux", "Windows"],
    },
    {
      category: "Herramientas",
      icon: "⊕",
      color: "#f472b6",
      items: ["Postman", "Service Manager", "Git", "Soporte TI"],
    },
  ],

  projects: [
    {
      title: "TechFlow — Dashboard Full Stack",
      description:
        "Plataforma de gestión empresarial con autenticación JWT, dashboard en tiempo real, gestión de usuarios y módulo de reportes. Arquitectura desacoplada con React en el frontend y Node.js + PostgreSQL en el backend.",
      tech: ["React", "Node.js", "PostgreSQL", "JWT", "REST API"],
      color: "#00d4ff",
      icon: "⬡",
      type: "Full Stack",
      highlights: ["Auth JWT", "Real-time charts", "Role-based access"],
    },
    {
      title: "AutoBot — Automatización con Python",
      description:
        "Sistema de automatización inteligente que procesa y clasifica datos de múltiples fuentes usando IA. Genera reportes automáticos, envía alertas por email y reduce tareas manuales en un 80%.",
      tech: ["Python", "OpenAI API", "Pandas", "FastAPI", "SQLite"],
      color: "#00ffaa",
      icon: "◈",
      type: "IA & Automatización",
      highlights: ["IA integrada", "Reducción 80% tareas", "Auto-reporting"],
    },
    {
      title: "DataVision — BI Analytics Platform",
      description:
        "Solución de análisis de datos empresarial con integración Power BI, procesamiento con Apache Spark y visualizaciones interactivas. Conecta múltiples fuentes de datos para insights accionables en tiempo real.",
      tech: ["Power BI", "Apache Spark", "Python", "SQL", "Azure"],
      color: "#a78bfa",
      icon: "◆",
      type: "Data & BI",
      highlights: ["Multi-source ETL", "Real-time BI", "Executive dashboards"],
    },
  ],

  certifications: [
    {
      title: "Desarrollo Web Full Stack",
      issuer: "Talento Tech",
      year: "2024",
      icon: "⬡",
      color: "#00d4ff",
    },
    {
      title: "JavaScript Essentials",
      issuer: "Cisco Networking Academy",
      year: "2023",
      icon: "◉",
      color: "#fbbf24",
    },
    {
      title: "Python Essentials 1 & 2",
      issuer: "Cisco Networking Academy",
      year: "2023",
      icon: "◈",
      color: "#00ffaa",
    },
    {
      title: "C++ Fundamentals",
      issuer: "Cisco Networking Academy",
      year: "2023",
      icon: "◆",
      color: "#f472b6",
    },
    {
      title: "OS Basics & Networking",
      issuer: "Cisco Networking Academy",
      year: "2023",
      icon: "▣",
      color: "#a78bfa",
    },
    {
      title: "Ingeniería de Software",
      issuer: "Universidad — En curso",
      year: "2025",
      icon: "⊕",
      color: "#ff6b35",
    },
  ],
};

// ─── ESTILOS GLOBALES (inyectados en <head>) ────────────────
const GlobalStyles = () => {
  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=DM+Mono:wght@300;400;500&family=DM+Sans:wght@300;400;500&display=swap');

      *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

      html { scroll-behavior: smooth; }

      body {
        background: ${COLORS.bg};
        color: ${COLORS.text};
        font-family: 'DM Sans', sans-serif;
        overflow-x: hidden;
        cursor: none;
      }

      /* ── CURSOR PERSONALIZADO ── */
      .cursor {
        width: 10px; height: 10px;
        background: ${COLORS.accent};
        border-radius: 50%;
        position: fixed; top: 0; left: 0;
        pointer-events: none; z-index: 9999;
        transition: transform 0.1s ease;
        mix-blend-mode: screen;
      }
      .cursor-ring {
        width: 36px; height: 36px;
        border: 1px solid rgba(0,212,255,0.5);
        border-radius: 50%;
        position: fixed; top: 0; left: 0;
        pointer-events: none; z-index: 9998;
        transition: all 0.15s ease;
      }

      /* ── SCROLLBAR ── */
      ::-webkit-scrollbar { width: 4px; }
      ::-webkit-scrollbar-track { background: ${COLORS.bg}; }
      ::-webkit-scrollbar-thumb { background: ${COLORS.border}; border-radius: 2px; }
      ::-webkit-scrollbar-thumb:hover { background: ${COLORS.accentDim}; }

      /* ── SELECCIÓN ── */
      ::selection { background: ${COLORS.accentGlow}; color: ${COLORS.accent}; }

      /* ── ANIMACIONES ── */
      @keyframes fadeUp {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }
      @keyframes pulse-glow {
        0%, 100% { box-shadow: 0 0 20px rgba(0,212,255,0.2); }
        50% { box-shadow: 0 0 40px rgba(0,212,255,0.5); }
      }
      @keyframes scanline {
        0% { transform: translateY(-100%); }
        100% { transform: translateY(100vh); }
      }
      @keyframes float {
        0%, 100% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
      }
      @keyframes blink {
        0%, 100% { opacity: 1; }
        50% { opacity: 0; }
      }
      @keyframes gridMove {
        0% { background-position: 0 0; }
        100% { background-position: 60px 60px; }
      }
      @keyframes rotateSlow {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      @keyframes shimmer {
        0% { left: -100%; }
        100% { left: 200%; }
      }

      .fade-up { animation: fadeUp 0.7s ease forwards; }
      .float { animation: float 4s ease-in-out infinite; }

      /* ── NAV ── */
      nav {
        position: fixed; top: 0; left: 0; right: 0; z-index: 100;
        padding: 1rem 2rem;
        display: flex; align-items: center; justify-content: space-between;
        transition: all 0.3s ease;
      }
      nav.scrolled {
        background: rgba(5,10,20,0.95);
        backdrop-filter: blur(20px);
        border-bottom: 1px solid ${COLORS.border};
      }
      .nav-logo {
        font-family: 'Syne', sans-serif;
        font-weight: 800;
        font-size: 1.2rem;
        color: ${COLORS.accent};
        letter-spacing: -0.02em;
        text-decoration: none;
        cursor: none;
      }
      .nav-links { display: flex; gap: 2rem; list-style: none; }
      .nav-links a {
        font-family: 'DM Mono', monospace;
        font-size: 0.8rem;
        color: ${COLORS.muted};
        text-decoration: none;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        transition: color 0.2s;
        cursor: none;
      }
      .nav-links a:hover { color: ${COLORS.accent}; }

      /* ── SECCIONES ── */
      section { padding: 7rem 0; }
      .container { max-width: 1100px; margin: 0 auto; padding: 0 2rem; }
      .section-tag {
        font-family: 'DM Mono', monospace;
        font-size: 0.72rem;
        letter-spacing: 0.25em;
        text-transform: uppercase;
        color: ${COLORS.accent};
        margin-bottom: 0.75rem;
      }
      .section-title {
        font-family: 'Syne', sans-serif;
        font-size: clamp(2rem, 4vw, 3rem);
        font-weight: 800;
        color: ${COLORS.white};
        line-height: 1.1;
        letter-spacing: -0.03em;
        margin-bottom: 1rem;
      }
      .section-sub {
        color: ${COLORS.muted};
        font-size: 1rem;
        max-width: 520px;
        line-height: 1.7;
      }
      .section-header { margin-bottom: 4rem; }

      /* ── BOTONES ── */
      .btn {
        display: inline-flex; align-items: center; gap: 0.5rem;
        padding: 0.85rem 1.8rem;
        font-family: 'DM Mono', monospace;
        font-size: 0.82rem;
        letter-spacing: 0.08em;
        border-radius: 4px;
        cursor: none;
        text-decoration: none;
        transition: all 0.2s ease;
        position: relative;
        overflow: hidden;
      }
      .btn::after {
        content: '';
        position: absolute;
        top: 0; left: -100%;
        width: 60%; height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent);
        transition: left 0.4s ease;
      }
      .btn:hover::after { left: 200%; }
      .btn-primary {
        background: ${COLORS.accent};
        color: ${COLORS.bg};
        border: none;
        font-weight: 500;
      }
      .btn-primary:hover {
        background: #33ddff;
        transform: translateY(-2px);
        box-shadow: 0 8px 30px rgba(0,212,255,0.35);
      }
      .btn-outline {
        background: transparent;
        color: ${COLORS.accent};
        border: 1px solid ${COLORS.border};
      }
      .btn-outline:hover {
        border-color: ${COLORS.accent};
        background: ${COLORS.accentGlow};
        transform: translateY(-2px);
      }

      /* ── CARDS ── */
      .card {
        background: ${COLORS.surface};
        border: 1px solid ${COLORS.border};
        border-radius: 8px;
        padding: 1.75rem;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
      }
      .card::before {
        content: '';
        position: absolute; top: 0; left: 0; right: 0;
        height: 2px;
        background: linear-gradient(90deg, transparent, var(--card-color, ${COLORS.accent}), transparent);
        opacity: 0;
        transition: opacity 0.3s;
      }
      .card:hover { border-color: var(--card-color, ${COLORS.accent}); transform: translateY(-4px); }
      .card:hover::before { opacity: 1; }

      /* ── TECH BADGES ── */
      .tech-badge {
        display: inline-flex;
        align-items: center;
        padding: 0.3rem 0.75rem;
        background: rgba(0,212,255,0.08);
        border: 1px solid rgba(0,212,255,0.2);
        border-radius: 100px;
        font-family: 'DM Mono', monospace;
        font-size: 0.72rem;
        color: ${COLORS.accent};
        letter-spacing: 0.05em;
      }

      /* ── FORMULARIO ── */
      .form-group { margin-bottom: 1.25rem; }
      .form-label {
        display: block;
        font-family: 'DM Mono', monospace;
        font-size: 0.72rem;
        letter-spacing: 0.15em;
        text-transform: uppercase;
        color: ${COLORS.muted};
        margin-bottom: 0.5rem;
      }
      .form-input, .form-textarea {
        width: 100%;
        background: ${COLORS.surfaceAlt};
        border: 1px solid ${COLORS.border};
        border-radius: 6px;
        padding: 0.85rem 1rem;
        color: ${COLORS.text};
        font-family: 'DM Sans', sans-serif;
        font-size: 0.95rem;
        outline: none;
        transition: border-color 0.2s;
        cursor: none;
      }
      .form-input:focus, .form-textarea:focus {
        border-color: ${COLORS.accent};
        box-shadow: 0 0 0 3px ${COLORS.accentGlow};
      }
      .form-textarea { resize: vertical; min-height: 130px; }
      .form-input::placeholder, .form-textarea::placeholder { color: ${COLORS.muted}; }

      /* ── HERO BACKGROUND GRID ── */
      .hero-grid {
        position: absolute; inset: 0;
        background-image:
          linear-gradient(rgba(0,212,255,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,212,255,0.04) 1px, transparent 1px);
        background-size: 60px 60px;
        animation: gridMove 20s linear infinite;
        mask-image: radial-gradient(ellipse at center, black 20%, transparent 75%);
      }

      /* ── PROGRESS BAR ── */
      .progress-bar {
        height: 3px;
        border-radius: 2px;
        background: ${COLORS.border};
        overflow: hidden;
      }
      .progress-fill {
        height: 100%;
        border-radius: 2px;
        background: linear-gradient(90deg, ${COLORS.accentDim}, ${COLORS.accent});
        transition: width 1.2s ease;
      }

      /* ── MOBILE MENU ── */
      @media (max-width: 768px) {
        .nav-links { display: none; }
        section { padding: 5rem 0; }
        .section-title { font-size: 2rem; }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);
  return null;
};

// ─── CURSOR PERSONALIZADO ───────────────────────────────────
const CustomCursor = () => {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);

  useEffect(() => {
    const move = (e) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 5}px, ${e.clientY - 5}px)`;
      }
      if (ringRef.current) {
        setTimeout(() => {
          ringRef.current.style.transform = `translate(${e.clientX - 18}px, ${e.clientY - 18}px)`;
        }, 60);
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <div className="cursor" ref={cursorRef} />
      <div className="cursor-ring" ref={ringRef} />
    </>
  );
};

// ─── NAV ────────────────────────────────────────────────────
const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["sobre-mi", "experiencia", "tecnologias", "proyectos", "contacto"];
  const labels = ["Sobre mí", "Experiencia", "Tech", "Proyectos", "Contacto"];

  return (
    <nav className={scrolled ? "scrolled" : ""}>
      <a href="#hero" className="nav-logo">RH_</a>
      <ul className="nav-links">
        {links.map((l, i) => (
          <li key={l}>
            <a href={`#${l}`}>{labels[i]}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// ─── HERO ───────────────────────────────────────────────────
const Hero = () => {
  const [typed, setTyped] = useState("");
  const phrases = ["Ingeniero de Software", "Analista de Virtualización", "Desarrollador Full Stack", "Apasionado por la IA"];
  const phraseRef = useRef(0);
  const charRef = useRef(0);
  const deletingRef = useRef(false);

  useEffect(() => {
    let timeout;
    const type = () => {
      const current = phrases[phraseRef.current];
      if (!deletingRef.current) {
        setTyped(current.slice(0, charRef.current + 1));
        charRef.current++;
        if (charRef.current === current.length) {
          deletingRef.current = true;
          timeout = setTimeout(type, 1800);
          return;
        }
      } else {
        setTyped(current.slice(0, charRef.current - 1));
        charRef.current--;
        if (charRef.current === 0) {
          deletingRef.current = false;
          phraseRef.current = (phraseRef.current + 1) % phrases.length;
        }
      }
      timeout = setTimeout(type, deletingRef.current ? 45 : 90);
    };
    timeout = setTimeout(type, 500);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", position: "relative", overflow: "hidden" }}>
      <div className="hero-grid" />

      {/* Orbe decorativo */}
      <div style={{
        position: "absolute", top: "15%", right: "10%",
        width: 340, height: 340,
        background: "radial-gradient(circle, rgba(0,212,255,0.12) 0%, transparent 70%)",
        borderRadius: "50%",
        animation: "float 6s ease-in-out infinite",
        pointerEvents: "none",
      }} />
      <div style={{
        position: "absolute", top: "18%", right: "13%",
        width: 280, height: 280,
        border: "1px solid rgba(0,212,255,0.1)",
        borderRadius: "50%",
        animation: "rotateSlow 30s linear infinite",
        pointerEvents: "none",
      }} />

      <div className="container">
        <div style={{ maxWidth: 680 }}>
          {/* Ubicación badge */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: "0.5rem",
            padding: "0.4rem 1rem",
            background: "rgba(0,212,255,0.08)",
            border: "1px solid rgba(0,212,255,0.2)",
            borderRadius: "100px",
            marginBottom: "2rem",
            opacity: 0,
            animation: "fadeUp 0.6s ease 0.2s forwards",
          }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#00ff88", display: "inline-block" }} />
            <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", color: COLORS.muted, letterSpacing: "0.1em" }}>
              📍 Bogotá, Colombia — Disponible
            </span>
          </div>

          {/* Nombre */}
          <h1 style={{
            fontFamily: "'Syne', sans-serif",
            fontSize: "clamp(3.5rem, 8vw, 6.5rem)",
            fontWeight: 800,
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
            color: COLORS.white,
            marginBottom: "1.25rem",
            opacity: 0,
            animation: "fadeUp 0.7s ease 0.35s forwards",
          }}>
            Ryan<br />
            <span style={{ color: COLORS.accent }}>Hernandez</span>
          </h1>

          {/* Título dinámico */}
          <div style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: "clamp(1rem, 2vw, 1.2rem)",
            color: COLORS.muted,
            marginBottom: "1.75rem",
            minHeight: "1.8em",
            opacity: 0,
            animation: "fadeUp 0.7s ease 0.5s forwards",
          }}>
            <span style={{ color: COLORS.accent }}>$ </span>
            {typed}
            <span style={{ animation: "blink 1s infinite" }}>_</span>
          </div>

          {/* Bio */}
          <p style={{
            fontSize: "1.05rem",
            color: COLORS.muted,
            lineHeight: 1.75,
            maxWidth: 520,
            marginBottom: "2.5rem",
            opacity: 0,
            animation: "fadeUp 0.7s ease 0.65s forwards",
          }}>
            {DATA.personal.bio}
          </p>

          {/* CTA Buttons */}
          <div style={{
            display: "flex", gap: "1rem", flexWrap: "wrap",
            opacity: 0,
            animation: "fadeUp 0.7s ease 0.8s forwards",
          }}>
            <a href="#proyectos" className="btn btn-primary">Ver Proyectos →</a>
            <a href="#contacto" className="btn btn-outline">Contactarme</a>
          </div>

          {/* Stats row */}
          <div style={{
            display: "flex", gap: "2.5rem", marginTop: "4rem",
            paddingTop: "2rem",
            borderTop: `1px solid ${COLORS.border}`,
            opacity: 0,
            animation: "fadeUp 0.7s ease 1s forwards",
            flexWrap: "wrap",
          }}>
            {[["3+", "Años de experiencia"], ["10+", "Tecnologías dominadas"], ["2", "Roles técnicos clave"]].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "2rem", fontWeight: 800, color: COLORS.accent }}>{n}</div>
                <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", color: COLORS.muted, letterSpacing: "0.08em", marginTop: "0.25rem" }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// ─── SOBRE MÍ ───────────────────────────────────────────────
const About = () => (
  <section id="sobre-mi" style={{ background: COLORS.surface }}>
    <div className="container">
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
        {/* Texto */}
        <div>
          <div className="section-tag">{"// sobre mí"}</div>
          <h2 className="section-title">Construyendo el futuro desde el código</h2>
          <p style={{ color: COLORS.muted, lineHeight: 1.8, fontSize: "0.98rem", marginBottom: "1.5rem" }}>
            {DATA.personal.about}
          </p>
          <p style={{ color: COLORS.muted, lineHeight: 1.8, fontSize: "0.98rem" }}>
            Mi pasión radica en crear soluciones que escalen: desde microservicios hasta clústeres de virtualización, 
            siempre con foco en la resiliencia, la automatización y la experiencia del usuario final.
          </p>
        </div>

        {/* Tarjeta visual */}
        <div style={{ position: "relative" }}>
          <div style={{
            background: COLORS.bg,
            border: `1px solid ${COLORS.border}`,
            borderRadius: 12,
            padding: "2rem",
            fontFamily: "'DM Mono', monospace",
            fontSize: "0.82rem",
            lineHeight: 1.9,
            position: "relative",
            overflow: "hidden",
          }}>
            {/* Header de terminal */}
            <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.5rem" }}>
              {["#ff5f57", "#ffbd2e", "#28c840"].map((c) => (
                <div key={c} style={{ width: 10, height: 10, borderRadius: "50%", background: c }} />
              ))}
              <span style={{ color: COLORS.muted, fontSize: "0.7rem", marginLeft: "0.5rem" }}>ryan@portfolio ~</span>
            </div>
            <div style={{ color: COLORS.muted }}>
              <span style={{ color: COLORS.accent }}>→ </span><span style={{ color: "#00ffaa" }}>whoami</span><br />
              <span style={{ color: COLORS.text }}>Ryan Hernandez</span><br /><br />
              <span style={{ color: COLORS.accent }}>→ </span><span style={{ color: "#00ffaa" }}>cat skills.txt</span><br />
              <span>Full Stack Developer</span><br />
              <span>Virtualization Analyst</span><br />
              <span>IA & Automation Enthusiast</span><br /><br />
              <span style={{ color: COLORS.accent }}>→ </span><span style={{ color: "#00ffaa" }}>echo $LOCATION</span><br />
              <span>Bogotá, Colombia 🇨🇴</span><br /><br />
              <span style={{ color: COLORS.accent }}>→ </span>
              <span style={{ animation: "blink 1s infinite" }}>_</span>
            </div>
          </div>
          {/* Decoración */}
          <div style={{
            position: "absolute", bottom: -15, right: -15,
            width: 120, height: 120,
            border: `1px solid ${COLORS.border}`,
            borderRadius: 12,
            background: "rgba(0,212,255,0.03)",
            zIndex: -1,
          }} />
        </div>
      </div>
    </div>
  </section>
);

// ─── EXPERIENCIA ────────────────────────────────────────────
const Experience = () => (
  <section id="experiencia">
    <div className="container">
      <div className="section-header">
        <div className="section-tag">{"// experiencia profesional"}</div>
        <h2 className="section-title">Trayectoria técnica</h2>
        <p className="section-sub">Roles que han moldeado mi visión de la ingeniería de software y la infraestructura empresarial.</p>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", position: "relative" }}>
        {/* Línea vertical */}
        <div style={{
          position: "absolute", left: 20, top: 0, bottom: 0, width: 1,
          background: `linear-gradient(to bottom, ${COLORS.accent}, transparent)`,
        }} />

        {DATA.experience.map((exp, i) => (
          <div key={i} style={{ paddingLeft: "3.5rem", position: "relative" }}>
            {/* Punto en la línea */}
            <div style={{
              position: "absolute", left: 14, top: 24,
              width: 13, height: 13,
              borderRadius: "50%",
              background: COLORS.bg,
              border: `2px solid ${COLORS.accent}`,
              boxShadow: `0 0 12px rgba(0,212,255,0.4)`,
            }} />

            <div className="card" style={{ "--card-color": COLORS.accent }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem", flexWrap: "wrap", gap: "0.5rem" }}>
                <div>
                  <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.2rem", fontWeight: 700, color: COLORS.white, marginBottom: "0.25rem" }}>
                    {exp.role}
                  </h3>
                  <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.78rem", color: COLORS.accentDim }}>
                    {exp.company}
                  </div>
                </div>
                <div style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.72rem",
                  color: COLORS.muted,
                  background: COLORS.surfaceAlt,
                  padding: "0.3rem 0.75rem",
                  borderRadius: 100,
                  border: `1px solid ${COLORS.border}`,
                }}>
                  {exp.period}
                </div>
              </div>

              <ul style={{ listStyle: "none", marginBottom: "1.25rem" }}>
                {exp.items.map((item, j) => (
                  <li key={j} style={{ display: "flex", gap: "0.75rem", marginBottom: "0.5rem", color: COLORS.muted, fontSize: "0.92rem", lineHeight: 1.6 }}>
                    <span style={{ color: COLORS.accent, flexShrink: 0, marginTop: "0.1rem" }}>▸</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {exp.tech.map((t) => (
                  <span key={t} className="tech-badge">{t}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── TECNOLOGÍAS ────────────────────────────────────────────
const Technologies = () => (
  <section id="tecnologias" style={{ background: COLORS.surface }}>
    <div className="container">
      <div className="section-header">
        <div className="section-tag">{"// stack tecnológico"}</div>
        <h2 className="section-title">Herramientas & tecnologías</h2>
        <p className="section-sub">Ecosistema técnico que utilizo para construir soluciones robustas y escalables.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.25rem" }}>
        {DATA.techStack.map((cat) => (
          <div key={cat.category} className="card" style={{ "--card-color": cat.color }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
              <div style={{
                width: 38, height: 38,
                background: `${cat.color}18`,
                border: `1px solid ${cat.color}40`,
                borderRadius: 8,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.1rem",
                color: cat.color,
              }}>
                {cat.icon}
              </div>
              <h3 style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1rem", color: COLORS.white }}>
                {cat.category}
              </h3>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {cat.items.map((item) => (
                <div key={item}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.35rem" }}>
                    <span style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8rem", color: COLORS.text }}>{item}</span>
                  </div>
                  <div className="progress-bar">
                    <div className="progress-fill" style={{
                      width: `${Math.floor(Math.random() * 25) + 70}%`,
                      background: `linear-gradient(90deg, ${cat.color}80, ${cat.color})`,
                    }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── PROYECTOS ──────────────────────────────────────────────
const Projects = () => (
  <section id="proyectos">
    <div className="container">
      <div className="section-header">
        <div className="section-tag">{"// proyectos destacados"}</div>
        <h2 className="section-title">Lo que he construido</h2>
        <p className="section-sub">Proyectos que reflejan mi capacidad para resolver problemas reales con tecnología.</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "1.5rem" }}>
        {DATA.projects.map((project, i) => (
          <div key={i} className="card" style={{ "--card-color": project.color, display: "flex", flexDirection: "column" }}>
            {/* Header */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
              <div style={{
                width: 52, height: 52,
                background: `${project.color}15`,
                border: `1px solid ${project.color}30`,
                borderRadius: 10,
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: "1.5rem",
                color: project.color,
              }}>
                {project.icon}
              </div>
              <div style={{
                fontFamily: "'DM Mono', monospace",
                fontSize: "0.68rem",
                color: project.color,
                background: `${project.color}15`,
                border: `1px solid ${project.color}30`,
                padding: "0.25rem 0.65rem",
                borderRadius: 100,
              }}>
                {project.type}
              </div>
            </div>

            <h3 style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.15rem", fontWeight: 700, color: COLORS.white, marginBottom: "0.75rem" }}>
              {project.title}
            </h3>
            <p style={{ color: COLORS.muted, fontSize: "0.9rem", lineHeight: 1.7, marginBottom: "1.25rem", flexGrow: 1 }}>
              {project.description}
            </p>

            {/* Highlights */}
            <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "1.25rem" }}>
              {project.highlights.map((h) => (
                <span key={h} style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.68rem",
                  color: COLORS.muted,
                  background: COLORS.surfaceAlt,
                  border: `1px solid ${COLORS.border}`,
                  padding: "0.2rem 0.6rem",
                  borderRadius: 4,
                }}>✓ {h}</span>
              ))}
            </div>

            {/* Tech */}
            <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", paddingTop: "1rem", borderTop: `1px solid ${COLORS.border}` }}>
              {project.tech.map((t) => (
                <span key={t} style={{
                  fontFamily: "'DM Mono', monospace",
                  fontSize: "0.7rem",
                  color: project.color,
                  background: `${project.color}10`,
                  border: `1px solid ${project.color}25`,
                  padding: "0.2rem 0.6rem",
                  borderRadius: 4,
                }}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── CERTIFICACIONES ────────────────────────────────────────
const Certifications = () => (
  <section style={{ background: COLORS.surface }}>
    <div className="container">
      <div className="section-header">
        <div className="section-tag">{"// formación y certificaciones"}</div>
        <h2 className="section-title">Credenciales</h2>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "1rem" }}>
        {DATA.certifications.map((cert, i) => (
          <div key={i} className="card" style={{ "--card-color": cert.color, display: "flex", alignItems: "center", gap: "1rem" }}>
            <div style={{
              width: 44, height: 44, flexShrink: 0,
              background: `${cert.color}15`,
              border: `1px solid ${cert.color}30`,
              borderRadius: 8,
              display: "flex", alignItems: "center", justifyContent: "center",
              fontSize: "1.2rem", color: cert.color,
            }}>
              {cert.icon}
            </div>
            <div>
              <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.95rem", color: COLORS.white, marginBottom: "0.2rem" }}>
                {cert.title}
              </div>
              <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", color: COLORS.muted }}>
                {cert.issuer} · {cert.year}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// ─── CONTACTO ───────────────────────────────────────────────
const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // 'sent' | 'error' | null

  const handleSubmit = (e) => {
    e.preventDefault();
    /* 
      CONEXIÓN BACKEND NODE.JS:
      fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
    */
    // Simulación de envío exitoso
    setStatus("sent");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus(null), 4000);
  };

  return (
    <section id="contacto">
      <div className="container">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
          {/* Info */}
          <div>
            <div className="section-tag">{"// contacto"}</div>
            <h2 className="section-title">Hablemos</h2>
            <p style={{ color: COLORS.muted, lineHeight: 1.75, marginBottom: "2.5rem" }}>
              ¿Tienes un proyecto, una oportunidad o simplemente quieres conectar? 
              Estoy disponible para colaboraciones, roles y consultoría técnica.
            </p>

            {/* Links */}
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                { label: "Email", value: DATA.personal.email, href: `mailto:${DATA.personal.email}`, icon: "✉" },
                { label: "LinkedIn", value: "ryan-hernandez", href: DATA.personal.linkedin, icon: "in" },
                { label: "GitHub", value: "ryan-hernandez", href: DATA.personal.github, icon: "<>" },
              ].map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer"
                  style={{ display: "flex", alignItems: "center", gap: "1rem", textDecoration: "none", padding: "1rem", background: COLORS.surface, border: `1px solid ${COLORS.border}`, borderRadius: 8, transition: "all 0.2s", cursor: "none" }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = COLORS.accent}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = COLORS.border}
                >
                  <div style={{
                    width: 40, height: 40, background: COLORS.accentGlow, border: `1px solid ${COLORS.border}`,
                    borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "'DM Mono', monospace", fontSize: "0.8rem", color: COLORS.accent,
                  }}>
                    {link.icon}
                  </div>
                  <div>
                    <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.7rem", color: COLORS.muted }}>{link.label}</div>
                    <div style={{ color: COLORS.text, fontSize: "0.9rem" }}>{link.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} style={{ background: COLORS.surface, border: `1px solid ${COLORS.border}`, borderRadius: 12, padding: "2rem" }}>
            <div className="form-group">
              <label className="form-label">Nombre</label>
              <input className="form-input" type="text" placeholder="Tu nombre completo" required
                value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} />
            </div>
            <div className="form-group">
              <label className="form-label">Email</label>
              <input className="form-input" type="email" placeholder="tu@email.com" required
                value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
            </div>
            <div className="form-group">
              <label className="form-label">Mensaje</label>
              <textarea className="form-textarea" placeholder="Cuéntame sobre tu proyecto o propuesta..." required
                value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} />
            </div>

            {status === "sent" && (
              <div style={{
                padding: "0.75rem 1rem", background: "rgba(0,255,136,0.1)", border: "1px solid rgba(0,255,136,0.3)",
                borderRadius: 6, marginBottom: "1rem", fontFamily: "'DM Mono', monospace",
                fontSize: "0.8rem", color: "#00ff88",
              }}>
                ✓ Mensaje enviado correctamente. ¡Pronto estaré en contacto!
              </div>
            )}

            <button type="submit" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
              Enviar mensaje →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

// ─── FOOTER ─────────────────────────────────────────────────
const Footer = () => (
  <footer style={{
    background: COLORS.surface,
    borderTop: `1px solid ${COLORS.border}`,
    padding: "2rem 0",
  }}>
    <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
      <div style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, color: COLORS.accent, fontSize: "1.1rem" }}>
        RH_
      </div>
      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", color: COLORS.muted }}>
        © {new Date().getFullYear()} Ryan Hernandez · Bogotá, Colombia
      </div>
      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.72rem", color: COLORS.muted }}>
        Hecho con React ⬡
      </div>
    </div>
  </footer>
);

// ─── APP PRINCIPAL ───────────────────────────────────────────
export default function App() {
  return (
    <>
      <GlobalStyles />
      <CustomCursor />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Technologies />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

/*
 * ═══════════════════════════════════════════════════════════════
 * BACKEND NODE.JS — SETUP SUGERIDO (server.js separado)
 * ═══════════════════════════════════════════════════════════════
 *
 * npm init -y && npm install express nodemailer cors dotenv
 *
 * server.js:
 * ──────────
 * const express = require('express');
 * const nodemailer = require('nodemailer');
 * const cors = require('cors');
 * require('dotenv').config();
 *
 * const app = express();
 * app.use(cors({ origin: 'https://tu-dominio.com' }));
 * app.use(express.json());
 *
 * const transporter = nodemailer.createTransport({
 *   service: 'gmail',
 *   auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
 * });
 *
 * app.post('/api/contact', async (req, res) => {
 *   const { name, email, message } = req.body;
 *   try {
 *     await transporter.sendMail({
 *       from: email,
 *       to: 'ryan.hdez27@gmail.com',
 *       subject: `[Portfolio] Mensaje de ${name}`,
 *       html: `<p><b>De:</b> ${name} (${email})</p><p>${message}</p>`
 *     });
 *     res.json({ success: true });
 *   } catch (err) {
 *     res.status(500).json({ error: 'Error al enviar el mensaje' });
 *   }
 * });
 *
 * app.listen(3001, () => console.log('API en http://localhost:3001'));
 *
 * .env:
 *   EMAIL_USER=ryan.hdez27@gmail.com
 *   EMAIL_PASS=tu_app_password_gmail
 *
 * ═══════════════════════════════════════════════════════════════
 * RECOMENDACIONES DE MEJORA FUTURA
 * ═══════════════════════════════════════════════════════════════
 *
 * 1. SEO AVANZADO
 *    - Instalar react-helmet-async para meta tags dinámicos
 *    - Generar sitemap.xml y robots.txt
 *    - Añadir Open Graph tags para redes sociales
 *
 * 2. RENDIMIENTO
 *    - Lazy loading de secciones con React.lazy + Suspense
 *    - Optimización de imágenes con next/image (si migras a Next.js)
 *    - Service Worker para caché offline (PWA)
 *
 * 3. ANALYTICS
 *    - Integrar Google Analytics 4 o Plausible (privacidad)
 *    - Hotjar para heatmaps de interacción
 *
 * 4. FEATURES EXTRA
 *    - Blog técnico con MDX para artículos propios
 *    - GitHub API integration para mostrar repos reales
 *    - Dark/light mode toggle
 *    - Internacionalización ES/EN con i18next
 *
 * 5. DESPLIEGUE RECOMENDADO
 *    - Frontend: Vercel (gratis, dominio custom, CI/CD)
 *    - Backend: Railway o Render (Node.js gratuito)
 *    - Dominio: ryanhernandez.dev o ryanhdez.com
 * ═══════════════════════════════════════════════════════════════
 */
