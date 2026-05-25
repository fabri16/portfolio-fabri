/* Projects Section — Fabrizio Portfolio */
(function () {
  const { useEffect, useRef, useState } = React;

  const projects = [
    {
      num: "01",
      title: "Falta 1",
      category: "App Móvil",
      year: "2024",
      descCorta: "App móvil para reserva y administración de canchas de fútbol.",
      descCompleta: "Falta 1 es una aplicación móvil que conecta jugadores con canchas de fútbol. Los jugadores pueden explorar canchas disponibles, ver horarios y realizar reservas de forma rápida. Los propietarios de predios cuentan con un panel de administración para gestionar sus instalaciones, disponibilidad y reservas entrantes.",
      accent: "#22c55e",
      palette: ["#052e16", "#22c55e", "#f0fdf4"],
      gridColors: ["rgba(34,197,94,0.5)", "rgba(34,197,94,0.2)", "rgba(34,197,94,0.35)"],
      cardBg: "#071a10",
      images: [
        "uploads/mockup celu y mano afas.png",
        "uploads/mockup celu y mano dgdgdsg.png",
        "uploads/mockup celu.jpg",
        "uploads/Image_fx (5) jxhanzxkjl.png",
        "uploads/Image_fx (4).jpg",
      ],
    },
    {
      num: "02",
      title: "Mostros FC",
      category: "Identidad / Indumentaria",
      year: "2024",
      descCorta: "Diseño de logo e indumentaria para equipo de fútbol amateur.",
      descCompleta: "Mostros FC es un proyecto de identidad visual integral para un equipo de fútbol amateur. Se desarrolló el diseño del escudo/logo del club y el diseño de la indumentaria oficial, buscando transmitir la personalidad del equipo con una estética moderna y distintiva.",
      accent: "#2563EB",
      palette: ["#0a0a1a", "#2563EB", "#f0f4ff"],
      gridColors: ["rgba(37,99,235,0.6)", "rgba(37,99,235,0.25)", "rgba(37,99,235,0.4)"],
      cardBg: "#060d1f",
      images: [
        "uploads/camiseta frente mcf.jpg",
        "uploads/camiseta espalda mcf.jpg",
        "uploads/camiseta frente arquero mcf.jpg",
        "uploads/camiseta espalda arquero mcf.jpg",
        "uploads/Escudo MCF.png",
      ],
    },
    {
      num: "03",
      title: "Cassaro",
      category: "Diseño de Etiquetas / Edición Limitada",
      year: "2025",
      descCorta: "Diseño de etiquetas para botellas de cerveza artesanal en edición limitada para el stand de Cassaro.",
      descCompleta: "Proyecto de diseño de etiquetas para botellas de cerveza artesanal de la empresa Cassaro. Los diseños fueron creados para una exhibición de edición limitada con el fin de captar la atención de la gente en el stand. Se desarrollaron tres variantes — Red Lager, Stout y Pielsen Premium — cada una con su propia paleta e identidad, manteniendo la coherencia del universo Cassaro a través de ornamentación clásica y tipografía de carácter.",
      accent: "#c8a84b",
      palette: ["#8B0000", "#1a1a1a", "#c8a84b"],
      gridColors: ["rgba(200,168,75,0.4)", "rgba(139,0,0,0.3)", "rgba(200,168,75,0.25)"],
      cardBg: "#1a0f00",
      images: [
        "uploads/etiqueta cassaro red graziano.jpg",
        "uploads/etiqueta cassaro red atras graziano.jpg",
        "uploads/etiqueta cassaro stout.png",
        "uploads/etiqueta cassaro stout atras.png",
        "uploads/etiqueta cassaro pielsen graziano.jpg",
        "uploads/etiqueta cassaro pielsen atras graziano.jpg",
      ],
    },
    {
      num: "04",
      title: "PDG Industrial",
      category: "Adecuación y Construcción de Marca",
      year: "2025",
      descCorta: "Desarrollo de bases de identidad visual para empresa industrial.",
      descCompleta: "PDG Industrial es un proyecto de construcción de marca desde sus cimientos. Se definieron los lineamientos de identidad visual de la empresa —logotipo, tipografías, colores corporativos y sistema de aplicación— para establecer una base sólida y coherente que guíe su comunicación a futuro.",
      accent: "#f97316",
      palette: ["#1c0f00", "#f97316", "#fff7ed"],
      gridColors: ["rgba(249,115,22,0.5)", "rgba(249,115,22,0.2)", "rgba(249,115,22,0.4)"],
      cardBg: "#1a0a00",
      images: [
        "uploads/Presentacion-behance_01.jpg",
        "uploads/Presentacion-behance_12.gif",
        "uploads/Presentacion-behance_13.gif",
        "uploads/Presentacion-behance_03.gif",
        "uploads/Presentacion-behance_07-4acad240.gif",
        "uploads/Presentacion-behance_08.gif",
        "uploads/Presentacion-behance_10.gif",
      ],
    },
    {
      num: "05",
      title: "Dolce Cioccolato",
      category: "Identidad de Marca / Packaging",
      year: "2025",
      descCorta: "Creación de imagen de marca para micropyme de chocolates artesanales.",
      descCompleta: "Dolce Cioccolato es un proyecto de identidad visual completo para una micropyme dedicada a la fabricación de chocolates artesanales. Se desarrolló el logotipo con un motivo floral delicado, la paleta de colores, el diseño de packaging para tabletas y las aplicaciones de marca, buscando transmitir calidez, artesanía y distinción en cada pieza.",
      accent: "#9B1D4A",
      palette: ["#f9f0f3", "#9B1D4A", "#3d0a1e"],
      gridColors: ["rgba(155,29,74,0.5)", "rgba(155,29,74,0.2)", "rgba(155,29,74,0.35)"],
      cardBg: "#1a0510",
      images: [
        "uploads/DOLCE CIOCCOLATO logo_Mesa de trabajo 1.png",
        "uploads/chocolate.jpg",
        "uploads/Cartel.jpg",
        "uploads/logo dolce.png",
      ],
    },
    {
      num: "06",
      title: "El Emporeo",
      category: "Diseño Editorial / Tapa de Libro",
      year: "2025",
      descCorta: "Diseño de tapa para el libro \"La muerte del cisne negro\" de Alina Mazaferro.",
      descCompleta: "Proyecto de diseño de tapa para el libro \"La muerte del cisne negro\" de la escritora Alina Mazaferro. El proceso comenzó con una conversación junto a la autora para comprender la historia y el universo del libro. La editorial El Emporeo estableció condiciones específicas: el diseño debía guardar coherencia estética con el resto de las colecciones de la empresa. El resultado llegó a instancias finales seleccionado por la escritora, aunque finalmente la editorial optó por otro diseño competidor.",
      accent: "#e11d48",
      palette: ["#0a0a0a", "#e11d48", "#f8f8f8"],
      gridColors: ["rgba(225,29,72,0.4)", "rgba(225,29,72,0.15)", "rgba(225,29,72,0.25)"],
      cardBg: "#1a0008",
      images: [
        "uploads/tapa hd.jpg",
        "uploads/mockup libro.jpg",
      ],
    },
    {
      num: "07",
      title: "Landing page PDG Industrial",
      category: "UX/UI Design / Landing Page",
      year: "2025",
      descCorta: "Diseño y rediseño de landing page para empresa de soluciones eléctricas industriales, desde research UX hasta implementación.",
      descCompleta: "El proyecto comenzó con una etapa de research profundo: se realizaron entrevistas a usuarios potenciales (contratistas, ingenieros y responsables de mantenimiento), análisis de la competencia y benchmarking del sector industrial. A partir de los hallazgos, se construyeron user personas y se mapearon los pain points del cliente ideal. Con esa base, se definió la arquitectura de la información y la jerarquía visual aplicando principios de UX Writing para cada sección. Se diseñaron wireframes de baja y alta fidelidad, iterando en base a feedback real. El resultado es una landing page de alto impacto visual —oscura, robusta y con acento naranja— que comunica autoridad técnica, facilita la conversión mediante CTAs estratégicos y presenta el portfolio de tableros con un sistema de filtrado por sector industrial.",
      accent: "#f97316",
      palette: ["#0C0C0C", "#f97316", "#ffffff"],
      gridColors: ["rgba(249,115,22,0.5)", "rgba(249,115,22,0.2)", "rgba(249,115,22,0.4)"],
      cardBg: "#1a0a00",
      images: [
        "uploads/pdg-landing-hero.jpg",
        "uploads/pdg-landing-quienes.jpg",
        "uploads/pdg-landing-servicios.jpg",
        "uploads/pdg-landing-proyectos.jpg",
        "uploads/pdg-landing-casos.jpg",
        "uploads/pdg-landing-detalle.jpg",
        "uploads/pdg-landing-contacto.jpg",
      ],
    },
  ];

  /* ── Project Card ── */
  function ProjectCard({ project, index }) {
    const cardRef = useRef(null);
    const [hovered, setHovered] = useState(false);
    const [visible, setVisible] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      const check = () => setIsMobile(window.innerWidth < 768);
      check();
      window.addEventListener("resize", check);
      return () => window.removeEventListener("resize", check);
    }, []);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setVisible(true); },
        { threshold: 0.08 }
      );
      if (cardRef.current) observer.observe(cardRef.current);
      return () => observer.disconnect();
    }, []);

    return (
      <div
        ref={cardRef}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          position: "relative",
          background: "#141414",
          border: "1px solid rgba(255,255,255,0.07)",
          borderRadius: 28,
          padding: isMobile ? "28px 20px" : "48px",
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? 28 : 40,
          alignItems: "center",
          overflow: "hidden",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0) scale(1)" : "translateY(40px) scale(0.97)",
          transition: `all 0.9s cubic-bezier(0.16,1,0.3,1) ${index * 0.12}s`,
          cursor: "default",
        }}
      >
        {/* Accent glow */}
        <div style={{ position: "absolute", top: -80, right: -80, width: 300, height: 300, borderRadius: "50%", background: `radial-gradient(circle, ${project.accent}22, transparent 70%)`, pointerEvents: "none", opacity: hovered ? 1 : 0.4, transition: "opacity 0.5s" }} />

        {/* Left: info */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 24 }}>
            <span style={{ fontFamily: "Kanit, sans-serif", fontWeight: 700, fontSize: 12, color: project.accent, letterSpacing: "0.2em" }}>{project.num}</span>
            <div style={{ flex: 1, height: 1, background: `${project.accent}40` }} />
            <span style={{ fontFamily: "Kanit, sans-serif", fontWeight: 300, fontSize: 12, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em" }}>{project.year}</span>
          </div>

          <h3 style={{
            fontFamily: "Kanit, sans-serif",
            fontWeight: 900,
            fontSize: "clamp(30px, 3.5vw, 56px)",
            lineHeight: 0.9,
            letterSpacing: "-0.02em",
            color: "#fff",
            marginBottom: 10,
            transform: hovered ? "translateX(6px)" : "translateX(0)",
            transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
          }}>
            {project.title}
          </h3>

          <div style={{ fontFamily: "Kanit, sans-serif", fontWeight: 300, fontSize: 12, color: "rgba(255,255,255,0.35)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 16 }}>
            {project.category}
          </div>

          <p style={{ fontFamily: "Kanit, sans-serif", fontWeight: 300, fontSize: 14, color: "rgba(255,255,255,0.5)", lineHeight: 1.75, marginBottom: 28 }}>
            {project.descCorta}
          </p>

          {/* Palette dots */}
          <div style={{ display: "flex", gap: 8, marginBottom: 28 }}>
            {project.palette.map((c, i) => (
              <div key={i} style={{ width: 18, height: 18, borderRadius: "50%", background: c, border: "1px solid rgba(255,255,255,0.1)" }} />
            ))}
          </div>

          {/* CTA */}
          <button
            onClick={() => {
              if (window.__openProject) window.__openProject(project);
            }}
            style={{
              fontFamily: "Kanit, sans-serif",
              fontWeight: 500,
              fontSize: 13,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              color: "#fff",
              background: "transparent",
              border: `1px solid ${project.accent}80`,
              borderRadius: 100,
              padding: "12px 28px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 10,
              transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = project.accent; e.currentTarget.style.borderColor = project.accent; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 8px 24px ${project.accent}50`; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = `${project.accent}80`; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
          >
            Ver Proyecto
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
              <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {/* Right: image preview — single clipped card, accent bg fills everything */}
        <div style={{ position: "relative", zIndex: 1 }}>
          <div style={{
            borderRadius: 20,
            overflow: "hidden",
            /* solid accent-tinted bg so there are no seam artifacts */
            background: project.cardBg,
            border: `1px solid ${project.accent}30`,
            aspectRatio: "4 / 3",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gridTemplateRows: "1fr 1fr",
            gap: 3,
          }}>
            {/* Main image — spans both rows */}
            <div style={{
              gridColumn: "1",
              gridRow: "1 / 3",
              background: project.cardBg,
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 8,
            }}>
              <img
                src={project.images[0]}
                alt={project.title}
                style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", display: "block" }}
              />
            </div>

            {/* Top right */}
            <div style={{
              gridColumn: "2",
              gridRow: "1",
              background: project.cardBg,
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 8,
            }}>
              {project.images[1] ? (
                <img src={project.images[1]} alt="" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", display: "block" }} />
              ) : (
                <div style={{ width: 28, height: 28, borderRadius: "50%", border: `2px solid ${project.accent}60` }} />
              )}
            </div>

            {/* Bottom right */}
            <div style={{
              gridColumn: "2",
              gridRow: "2",
              background: project.cardBg,
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 8,
            }}>
              {project.images[2] ? (
                <img src={project.images[2]} alt="" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", display: "block" }} />
              ) : (
                <div style={{ padding: 12, display: "flex", flexDirection: "column", gap: 6, width: "100%" }}>
                  {[70, 50, 85].map((w, i) => (
                    <div key={i} style={{ height: 3, width: `${w}%`, borderRadius: 2, background: i === 0 ? project.accent : "rgba(255,255,255,0.1)" }} />
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* ── Projects Section ── */
  function Projects() {
    const sectionRef = useRef(null);
    const [titleVisible, setTitleVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) { setTitleVisible(true); observer.disconnect(); } },
        { threshold: 0.08 }
      );
      if (sectionRef.current) observer.observe(sectionRef.current);
      return () => observer.disconnect();
    }, []);

    return (
      <section
        id="projects"
        ref={sectionRef}
        style={{
          background: "#0C0C0C",
          padding: "100px 20px 120px",
          position: "relative",
        }}
      >
        {/* Grain */}
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.1, pointerEvents: "none", zIndex: 0 }}>
          <filter id="grain3"><feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter>
          <rect width="100%" height="100%" filter="url(#grain3)" opacity="1" />
        </svg>

        <div style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto" }}>
          {/* Section header */}
          <div style={{
            display: "flex", alignItems: "flex-end", justifyContent: "space-between",
            marginBottom: 64, flexWrap: "wrap", gap: 24,
            opacity: titleVisible ? 1 : 0,
            transform: titleVisible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.8s cubic-bezier(0.16,1,0.3,1)",
          }}>
            <div>
              <div style={{ fontFamily: "Kanit, sans-serif", fontWeight: 300, fontSize: 12, color: "rgba(255,255,255,0.35)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 16, display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 28, height: 1, background: "rgba(124,58,237,0.6)" }} />
                Trabajos Seleccionados
              </div>
              <h2 style={{ fontFamily: "Kanit, sans-serif", fontWeight: 900, fontSize: "clamp(44px, 6vw, 88px)", lineHeight: 0.9, letterSpacing: "-0.02em", color: "#fff" }}>
                PROYECTOS
              </h2>
            </div>
            <div style={{ fontFamily: "Kanit, sans-serif", fontWeight: 300, fontSize: 15, color: "rgba(255,255,255,0.35)", maxWidth: 260, lineHeight: 1.7 }}>
              Trabajos destacados en branding, UX y diseño editorial.
            </div>
          </div>

          {/* Cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {projects.map((project, i) => (
              <ProjectCard key={project.num} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  Object.assign(window, { Projects });
})();
