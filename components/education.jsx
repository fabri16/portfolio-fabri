/* Education Section — Fabrizio Portfolio */
(function () {
  const { useEffect, useRef, useState } = React;

  const studies = [
    {
      title: "Técnico Electrónico",
      institution: "Instituto Técnico Salesiano Villada",
      period: "2013 – 2020",
      icon: "⚙",
      accent: "#F97316",
    },
    {
      title: "Diseño Gráfico y Publicitario",
      institution: "Instituto Superior Mariano Moreno",
      period: "2021 – 2024",
      icon: "✦",
      accent: "#7C3AED",
    },
    {
      title: "Curso Básico de Diseño UX/UI",
      institution: "CoderHouse",
      period: "2025 – 2026",
      icon: "◈",
      accent: "#2563EB",
    },
    {
      title: "Curso Avanzado de Diseño UX/UI",
      institution: "CoderHouse",
      period: "2026 – Presente",
      icon: "◈",
      accent: "#22c55e",
      active: true,
    },
  ];

  function EducationItem({ item, index, visible }) {
    const [hovered, setHovered] = useState(false);

    return (
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 24,
          padding: "28px 32px",
          borderRadius: 20,
          background: hovered
            ? `rgba(${item.accent === "#7C3AED" ? "124,58,237" : item.accent === "#2563EB" ? "37,99,235" : item.accent === "#F97316" ? "249,115,22" : "34,197,94"},0.06)`
            : "rgba(255,255,255,0.025)",
          border: `1px solid ${hovered ? item.accent + "40" : "rgba(255,255,255,0.07)"}`,
          transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(28px)",
          transitionDelay: `${index * 0.12}s`,
          cursor: "default",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Glow */}
        <div style={{
          position: "absolute",
          top: -40,
          right: -40,
          width: 120,
          height: 120,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${item.accent}18, transparent 70%)`,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.4s",
          pointerEvents: "none",
        }} />

        {/* Icon dot */}
        <div style={{
          width: 48,
          height: 48,
          borderRadius: 14,
          background: `${item.accent}18`,
          border: `1px solid ${item.accent}40`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 18,
          color: item.accent,
          flexShrink: 0,
          transition: "transform 0.3s cubic-bezier(0.16,1,0.3,1)",
          transform: hovered ? "scale(1.1) rotate(5deg)" : "scale(1) rotate(0deg)",
        }}>
          {item.icon}
        </div>

        {/* Content */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 4 }}>
            <h3 style={{
              fontFamily: "Kanit, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(15px, 2vw, 19px)",
              color: "#fff",
              margin: 0,
              letterSpacing: "-0.01em",
              lineHeight: 1.2,
            }}>
              {item.title}
            </h3>
            {item.active && (
              <span style={{
                fontFamily: "Kanit, sans-serif",
                fontSize: 10,
                fontWeight: 500,
                color: item.accent,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                border: `1px solid ${item.accent}50`,
                borderRadius: 100,
                padding: "2px 10px",
                background: `${item.accent}12`,
                flexShrink: 0,
              }}>
                En curso
              </span>
            )}
          </div>
          <div style={{
            fontFamily: "Kanit, sans-serif",
            fontWeight: 300,
            fontSize: "clamp(12px, 1.5vw, 14px)",
            color: "rgba(255,255,255,0.45)",
            letterSpacing: "0.04em",
          }}>
            {item.institution}
          </div>
        </div>

        {/* Period */}
        <div style={{
          fontFamily: "Kanit, sans-serif",
          fontWeight: 300,
          fontSize: "clamp(11px, 1.4vw, 13px)",
          color: item.accent,
          letterSpacing: "0.08em",
          flexShrink: 0,
          opacity: 0.9,
          textAlign: "right",
        }}>
          {item.period}
        </div>

        {/* Bottom accent line */}
        <div style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: 2,
          width: hovered ? "100%" : "0%",
          background: `linear-gradient(to right, ${item.accent}, transparent)`,
          transition: "width 0.5s cubic-bezier(0.16,1,0.3,1)",
          borderRadius: "0 0 20px 20px",
        }} />
      </div>
    );
  }

  function Education() {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      if (sectionRef.current) observer.observe(sectionRef.current);
      return () => observer.disconnect();
    }, []);

    return (
      <section
        id="education"
        ref={sectionRef}
        style={{
          background: "#0C0C0C",
          padding: "100px 40px 120px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Grain */}
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.1, pointerEvents: "none", zIndex: 0 }}>
          <filter id="grainEdu">
            <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grainEdu)" opacity="1" />
        </svg>

        {/* Subtle glow */}
        <div style={{ position: "absolute", top: "30%", left: "60%", width: 400, height: 400, background: "radial-gradient(circle, rgba(124,58,237,0.07) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

        <div style={{ position: "relative", zIndex: 2, maxWidth: 900, margin: "0 auto" }}>
          {/* Section label */}
          <div
            style={{
              fontFamily: "Kanit, sans-serif",
              fontWeight: 300,
              fontSize: 12,
              color: "rgba(255,255,255,0.35)",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              marginBottom: 24,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(16px)",
              transition: "all 0.8s cubic-bezier(0.16,1,0.3,1)",
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div style={{ width: 32, height: 1, background: "rgba(124,58,237,0.6)" }} />
            Formación
          </div>

          {/* Heading — diferente al de Sobre Mí: horizontal + línea decorativa */}
          <div
            style={{
              marginBottom: 56,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "all 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
              <h2
                style={{
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: 200,
                  fontSize: "clamp(40px, 6vw, 84px)",
                  lineHeight: 1,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.15)",
                  margin: 0,
                  userSelect: "none",
                }}
              >
                MIS
              </h2>
              <h2
                style={{
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(40px, 6vw, 84px)",
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                  color: "#fff",
                  margin: 0,
                }}
              >
                ESTUDIOS
              </h2>
              {/* Decorative pill */}
              <div style={{
                height: 4,
                flex: 1,
                minWidth: 40,
                borderRadius: 2,
                background: "linear-gradient(to right, #7C3AED, #2563EB, transparent)",
                alignSelf: "center",
              }} />
            </div>
          </div>

          {/* Timeline list */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {studies.map((item, i) => (
              <EducationItem key={i} item={item} index={i} visible={visible} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  Object.assign(window, { Education });
})();
