/* Marquee Section — Fabrizio Portfolio */
(function () {

  const tags = [
    "Identidad Visual", "UX/UI Design", "Diseño Gráfico", "Diseño Web",
    "Motion", "Tipografía", "Branding", "Diseño de Producto",
    "Dirección de Arte", "Interfaz", "Estrategia Creativa", "Dirección Creativa",
  ];

  function MarqueeRow({ reverse, speed }) {
    const items = [...tags, ...tags, ...tags];
    return (
      <div
        style={{
          overflow: "hidden",
          width: "100%",
          maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: 0,
            animation: `marquee${reverse ? "R" : "L"} ${speed}s linear infinite`,
            whiteSpace: "nowrap",
          }}
        >
          {items.map((tag, i) => (
            <div
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 20,
                paddingRight: 40,
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: i % 3 === 0 ? 700 : 300,
                  fontSize: i % 5 === 0 ? 18 : 14,
                  color: i % 3 === 0 ? "rgba(255,255,255,0.75)" : "rgba(255,255,255,0.3)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                {tag}
              </span>
              <div
                style={{
                  width: 5,
                  height: 5,
                  borderRadius: "50%",
                  background: i % 4 === 0 ? "#7C3AED" : i % 4 === 1 ? "#2563EB" : i % 4 === 2 ? "#F97316" : "rgba(255,255,255,0.2)",
                  flexShrink: 0,
                  boxShadow: i % 4 < 3 ? `0 0 8px ${i % 4 === 0 ? "#7C3AED" : i % 4 === 1 ? "#2563EB" : "#F97316"}` : "none",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    );
  }

  function MarqueeSection() {
    const isMobile = typeof window !== "undefined" && window.innerWidth < 768;
    return (
      <section
        style={{
          background: "#0C0C0C",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          padding: "48px 0",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          gap: 24,
          position: "relative",
          zIndex: 2,
        }}
      >
        <MarqueeRow reverse={false} speed={isMobile ? 18 : 40} />
        <MarqueeRow reverse={true} speed={isMobile ? 24 : 55} />
      </section>
    );
  }

  Object.assign(window, { MarqueeSection });
})();
