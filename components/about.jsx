/* About Section — Fabrizio Portfolio */
(function () {
  const { useEffect, useRef, useState } = React;

  const aboutText = "Soy Fabrizio — un diseñador que une la expresión gráfica con la estrategia UX. Lo que empezó como pasión por la identidad visual y la cultura urbana evolucionó hacia un enfoque profundo en experiencias digitales centradas en las personas. En una era marcada por la IA, creo que el verdadero poder del diseño está en la empatía: entender a las personas, resolver problemas reales y crear interfaces que se sientan intuitivas y vivas.";

  function FloatingShape({ style }) {
    return (
      <div
        style={{
          position: "absolute",
          borderRadius: "50%",
          pointerEvents: "none",
          ...style
        }} />);


  }

  function About() {
    const sectionRef = useRef(null);
    const textRef = useRef(null);
    const [visible, setVisible] = useState(false);
    const [revealedChars, setRevealedChars] = useState(0);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.disconnect();
          }
        },
        { threshold: 0.2 }
      );
      if (sectionRef.current) observer.observe(sectionRef.current);
      return () => observer.disconnect();
    }, []);

    useEffect(() => {
      if (!visible) return;
      let i = 0;
      const interval = setInterval(() => {
        i += 2;
        setRevealedChars(i);
        if (i >= aboutText.length) clearInterval(interval);
      }, 18);
      return () => clearInterval(interval);
    }, [visible]);

    const chars = aboutText.split("");

    return (
      <section
        id="about"
        ref={sectionRef}
        style={{
          background: "#0C0C0C",
          padding: "140px 40px",
          position: "relative",
          overflow: "hidden"
        }}>
        
        {/* Grain */}
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.12, pointerEvents: "none", zIndex: 0 }}>
          <filter id="grain2">
            <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain2)" opacity="1" />
        </svg>

        {/* Floating shapes */}
        <FloatingShape style={{ width: 200, height: 200, top: "10%", right: "5%", background: "radial-gradient(circle, rgba(124,58,237,0.15), transparent 70%)", animation: "floatA 10s ease-in-out infinite", filter: "blur(40px)" }} />
        <FloatingShape style={{ width: 150, height: 150, bottom: "15%", left: "5%", background: "radial-gradient(circle, rgba(37,99,235,0.12), transparent 70%)", animation: "floatB 12s ease-in-out infinite", filter: "blur(30px)" }} />
        <FloatingShape style={{ width: 80, height: 80, top: "50%", right: "15%", background: "rgba(249,115,22,0.08)", animation: "floatC 8s ease-in-out infinite", filter: "blur(20px)" }} />

        {/* Small geometric accent */}
        <div style={{ position: "absolute", top: "20%", right: "10%", width: 40, height: 40, border: "1px solid rgba(124,58,237,0.3)", borderRadius: 8, transform: "rotate(45deg)", animation: "floatA 7s ease-in-out infinite", zIndex: 1 }} />
        <div style={{ position: "absolute", bottom: "25%", left: "8%", width: 24, height: 24, border: "1px solid rgba(37,99,235,0.3)", borderRadius: "50%", animation: "floatB 9s ease-in-out infinite", zIndex: 1 }} />

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
              gap: 12
            }}>
            
            <div style={{ width: 32, height: 1, background: "rgba(124,58,237,0.6)" }} />
            Sobre Mí
          </div>

          {/* Big heading */}
          <h2
            style={{
              fontFamily: "Kanit, sans-serif",
              fontWeight: 900,
              fontSize: "clamp(56px, 8vw, 120px)",
              lineHeight: 0.9,
              letterSpacing: "-0.02em",
              color: "#fff",
              marginBottom: 64,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(24px)",
              transition: "all 0.9s cubic-bezier(0.16,1,0.3,1) 0.1s"
            }}>
            SOBRE
            <br />
            <span style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.9), rgba(37,99,235,0.9))", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>MI.

            </span>
          </h2>

          {/* Character-by-character text reveal */}
          <div ref={textRef}>
            <p
              style={{
                fontFamily: "Kanit, sans-serif",
                fontWeight: 300,
                fontSize: "clamp(18px, 2.5vw, 26px)",
                lineHeight: 1.75,
                color: "transparent",
                position: "relative"
              }}>
              
              {chars.map((char, i) =>
              <span
                key={i}
                style={{
                  color: i < revealedChars ?
                  "rgba(255,255,255,0.82)" :
                  "rgba(255,255,255,0.08)",
                  transition: "color 0.3s ease"
                }}>
                
                  {char}
                </span>
              )}
            </p>
          </div>

          {/* Skills tags */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 10,
              marginTop: 56,
              opacity: visible ? 1 : 0,
              transform: visible ? "translateY(0)" : "translateY(20px)",
              transition: "all 1s cubic-bezier(0.16,1,0.3,1) 0.6s"
            }}>
            
            {["Figma", "Adobe CC", "Design Systems", "Prototipado", "Investigación UX", "Estrategia de Marca", "Motion Design"].map((skill) =>
            <div
              key={skill}
              style={{
                fontFamily: "Kanit, sans-serif",
                fontWeight: 300,
                fontSize: 12,
                color: "rgba(255,255,255,0.5)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: 100,
                padding: "8px 18px",
                transition: "all 0.25s",
                cursor: "default"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(124,58,237,0.5)";
                e.currentTarget.style.color = "#fff";
                e.currentTarget.style.background = "rgba(124,58,237,0.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                e.currentTarget.style.background = "transparent";
              }}>
              
                {skill}
              </div>
            )}
          </div>
        </div>
      </section>);

  }

  Object.assign(window, { About });
})();