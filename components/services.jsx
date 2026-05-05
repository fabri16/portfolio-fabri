/* Services / Conocimientos Section — Fabrizio Portfolio */
(function () {
  const { useEffect, useRef, useState } = React;

  const services = [
    {
      num: "01",
      title: "Branding & Identidad",
      desc: "Sistemas visuales que hablan antes que las palabras — logos, paletas, tipografías y las reglas que los sostienen en cada punto de contacto. Cada elemento se diseña para transmitir la esencia de la marca de manera consistente.",
      tags: ["Diseño de Logo", "Manual de Marca", "Identidad Visual"],
    },
    {
      num: "02",
      title: "UX / UI Design",
      desc: "Interfaces centradas en el usuario, construidas sobre investigación, lógica y oficio. Desde wireframes hasta pantallas pixel perfect, cada decisión sirve al usuario y simplifica su experiencia.",
      tags: ["Wireframing", "Prototipado", "Design Systems"],
    },
    {
      num: "03",
      title: "Diseño Gráfico",
      desc: "Layouts editoriales, afiches, visuales para redes y material impreso — el espectro completo del diseño gráfico con una estética contemporánea y expresiva que comunica con impacto.",
      tags: ["Impresión", "Editorial", "Redes Sociales"],
    },
    {
      num: "04",
      title: "Diseño Web",
      desc: "Sitios web responsivos y conscientes del rendimiento que equilibran ambición estética con usabilidad. Diseñados en Figma y entregados en código limpio, optimizado para conversión.",
      tags: ["Figma → Código", "Landing Pages", "Portafolios"],
    },
  ];

  function ServiceItem({ item, index, visible, isOpen, onToggle }) {
    const [hovered, setHovered] = useState(false);

    return (
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        style={{
          borderBottom: "1px solid rgba(0,0,0,0.08)",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(24px)",
          transition: `opacity 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 0.1}s, transform 0.7s cubic-bezier(0.16,1,0.3,1) ${index * 0.1}s`,
          position: "relative",
        }}
      >
        {/* Hover bg */}
        <div style={{
          position: "absolute",
          inset: "0 -16px",
          borderRadius: 16,
          background: hovered || isOpen ? "rgba(124,58,237,0.05)" : "transparent",
          transition: "background 0.5s cubic-bezier(0.16,1,0.3,1)",
          pointerEvents: "none",
        }} />

        {/* Clickable header row */}
        <div
          onClick={onToggle}
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(0,1fr) auto",
            gap: "0 16px",
            alignItems: "center",
            cursor: "pointer",
            padding: "28px 0",
            position: "relative",
            userSelect: "none",
          }}
        >
          {/* Title + number */}
          <div style={{ display: "flex", alignItems: "center", gap: 20, minWidth: 0 }}>
            <div style={{
              fontFamily: "Kanit, sans-serif",
              fontWeight: 700,
              fontSize: 13,
              color: hovered || isOpen ? "#7C3AED" : "rgba(0,0,0,0.2)",
              letterSpacing: "0.1em",
              transition: "color 0.4s",
              flexShrink: 0,
              width: 28,
            }}>
              {item.num}
            </div>
            <div style={{
              fontFamily: "Kanit, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(18px, 3vw, 34px)",
              color: "#0C0C0C",
              lineHeight: 1.1,
              letterSpacing: "-0.01em",
              transform: hovered ? "translateX(4px)" : "translateX(0)",
              transition: "transform 0.45s cubic-bezier(0.16,1,0.3,1)",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}>
              {item.title}
            </div>
          </div>

          {/* Chevron button */}
          <div style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            border: `1px solid ${isOpen ? "rgba(124,58,237,0.5)" : hovered ? "rgba(0,0,0,0.2)" : "rgba(0,0,0,0.1)"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
            transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
            background: isOpen ? "rgba(124,58,237,0.08)" : "transparent",
            transform: hovered && !isOpen ? "scale(1.08)" : "scale(1)",
          }}>
            <svg
              width="14" height="14" viewBox="0 0 14 14" fill="none"
              style={{
                transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.45s cubic-bezier(0.16,1,0.3,1)",
              }}
            >
              <path
                d="M2 5l5 5 5-5"
                stroke={isOpen ? "#7C3AED" : hovered ? "rgba(0,0,0,0.5)" : "rgba(0,0,0,0.3)"}
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ transition: "stroke 0.4s" }}
              />
            </svg>
          </div>
        </div>

        {/* Expandable content */}
        <div style={{
          overflow: "hidden",
          maxHeight: isOpen ? 280 : 0,
          opacity: isOpen ? 1 : 0,
          transition: "max-height 0.55s cubic-bezier(0.16,1,0.3,1), opacity 0.4s cubic-bezier(0.16,1,0.3,1)",
        }}>
          <div style={{ paddingBottom: 28, paddingLeft: 48 }}>
            <p style={{
              fontFamily: "Kanit, sans-serif",
              fontWeight: 300,
              fontSize: "clamp(13px, 1.6vw, 15px)",
              color: "rgba(0,0,0,0.5)",
              lineHeight: 1.8,
              maxWidth: 560,
              marginBottom: 18,
            }}>
              {item.desc}
            </p>
            <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
              {item.tags.map((tag) => (
                <div key={tag} style={{
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: 300,
                  fontSize: 11,
                  color: "#7C3AED",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  border: "1px solid rgba(124,58,237,0.25)",
                  borderRadius: 100,
                  padding: "5px 14px",
                  background: "rgba(124,58,237,0.04)",
                }}>
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  function Services() {
    const sectionRef = useRef(null);
    const [visible, setVisible] = useState(false);
    const [openIndex, setOpenIndex] = useState(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
        { threshold: 0.08 }
      );
      if (sectionRef.current) observer.observe(sectionRef.current);
      return () => observer.disconnect();
    }, []);

    const handleToggle = (i) => {
      setOpenIndex(openIndex === i ? null : i);
    };

    return (
      <section
        id="services"
        ref={sectionRef}
        style={{
          background: "#F8F8F4",
          borderRadius: "40px 40px 0 0",
          padding: "100px 20px 120px",
          position: "relative",
          zIndex: 3,
          marginTop: -40,
        }}
      >
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          {/* Header */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginBottom: 56,
              flexWrap: "wrap",
              gap: 20,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.8s cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <div>
              <div style={{ fontFamily: "Kanit, sans-serif", fontWeight: 300, fontSize: 12, color: "rgba(0,0,0,0.35)", letterSpacing: "0.3em", textTransform: "uppercase", marginBottom: 16, display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 28, height: 1, background: "rgba(124,58,237,0.5)" }} />
                Lo Que Hago
              </div>
              <h2 style={{ fontFamily: "Kanit, sans-serif", fontWeight: 900, fontSize: "clamp(40px, 6vw, 88px)", lineHeight: 0.9, letterSpacing: "-0.02em", color: "#0C0C0C" }}>
                CONOCIMIENTOS
              </h2>
            </div>
            <div style={{ fontFamily: "Kanit, sans-serif", fontWeight: 300, fontSize: 15, color: "rgba(0,0,0,0.45)", maxWidth: 280, lineHeight: 1.7 }}>
              Una práctica de diseño completa — desde el primer boceto hasta el pixel final.
            </div>
          </div>

          {/* Service list */}
          <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)" }}>
            {services.map((item, i) => (
              <ServiceItem
                key={item.num}
                item={item}
                index={i}
                visible={visible}
                isOpen={openIndex === i}
                onToggle={() => handleToggle(i)}
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  Object.assign(window, { Services });
})();
