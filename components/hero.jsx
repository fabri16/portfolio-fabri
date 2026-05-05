/* Hero Component — Fabrizio Portfolio */
(function () {
  const { useEffect, useRef, useState } = React;

  function FloatingUI({ style, children }) {
    return (
      <div
        style={{
          position: "absolute",
          background: "rgba(255,255,255,0.04)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: 16,
          padding: "14px 18px",
          boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
          ...style
        }}>
        {children}
      </div>
    );
  }

  function Hero() {
    const portraitRef = useRef(null);
    const heroRef = useRef(null);
    const [loaded, setLoaded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
      requestAnimationFrame(() => setLoaded(true));
      const checkMobile = () => setIsMobile(window.innerWidth < 768);
      checkMobile();
      window.addEventListener("resize", checkMobile);
      return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Magnetic hover on portrait — desktop only
    useEffect(() => {
      if (isMobile) return;
      const el = portraitRef.current;
      if (!el) return;
      const onMove = (e) => {
        const rect = el.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = (e.clientX - cx) * 0.12;
        const dy = (e.clientY - cy) * 0.12;
        el.style.transform = `translate(${dx}px, ${dy}px) scale(1.02)`;
      };
      const onLeave = () => {
        el.style.transform = "translate(0,0) scale(1)";
      };
      const hero = heroRef.current;
      if (hero) {
        hero.addEventListener("mousemove", onMove);
        hero.addEventListener("mouseleave", onLeave);
      }
      return () => {
        if (hero) {
          hero.removeEventListener("mousemove", onMove);
          hero.removeEventListener("mouseleave", onLeave);
        }
      };
    }, [isMobile]);

    const scrollTo = (href) => {
      const el = document.querySelector(href);
      if (el) {
        const top = el.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({ top, behavior: "smooth" });
      }
    };

    return (
      <section
        id="hero"
        ref={heroRef}
        style={{
          position: "relative",
          minHeight: "100vh",
          background: "#0C0C0C",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
          paddingTop: 100,
          paddingBottom: 60
        }}>

        {/* Grain texture overlay */}
        <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.18, pointerEvents: "none", zIndex: 1 }}>
          <filter id="grain">
            <feTurbulence type="fractalNoise" baseFrequency="0.72" numOctaves="4" stitchTiles="stitch" />
            <feColorMatrix type="saturate" values="0" />
          </filter>
          <rect width="100%" height="100%" filter="url(#grain)" opacity="1" />
        </svg>

        {/* Radial glows */}
        <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)", width: 700, height: 700, background: "radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />
        <div style={{ position: "absolute", bottom: "10%", right: "15%", width: 400, height: 400, background: "radial-gradient(circle, rgba(37,99,235,0.08) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />
        <div style={{ position: "absolute", top: "30%", left: "8%", width: 300, height: 300, background: "radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 70%)", pointerEvents: "none", zIndex: 0 }} />

        {/* Graffiti bg marks */}
        <svg style={{ position: "absolute", top: 0, right: 0, width: "45%", height: "100%", opacity: 0.04, pointerEvents: "none", zIndex: 0 }} viewBox="0 0 400 800" fill="none">
          <text x="320" y="200" fontFamily="sans-serif" fontSize="180" fill="white" transform="rotate(-15,200,400)">G</text>
          <text x="200" y="500" fontFamily="sans-serif" fontSize="120" fill="white" transform="rotate(10,200,400)">FZ</text>
          <text x="80" y="700" fontFamily="sans-serif" fontSize="90" fill="white" transform="rotate(-8,200,400)">UX</text>
        </svg>

        {/* Main content */}
        <div
          style={{
            position: "relative",
            zIndex: 2,
            width: "100%",
            maxWidth: 1300,
            padding: isMobile ? "0 20px" : "0 40px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 0
          }}>

          {/* Portrait + floating chips */}
          <div
            style={{
              position: "relative",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: loaded ? 1 : 0,
              transition: "opacity 1.2s cubic-bezier(0.16,1,0.3,1) 0.3s",
              /* reserve space for chips on desktop, tight on mobile */
              margin: isMobile ? "0 0 32px" : "0 0 40px",
              width: isMobile ? "100%" : "auto",
              paddingTop: isMobile ? 60 : 0,
              paddingBottom: isMobile ? 60 : 0,
            }}>

            {/* Glow ring */}
            <div style={{ position: "absolute", width: 340, height: 340, borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.3) 0%, transparent 70%)", filter: "blur(20px)", zIndex: 0 }} />

            {/* Portrait */}
            <div
              ref={portraitRef}
              style={{
                position: "relative",
                width: isMobile ? 200 : 280,
                height: isMobile ? 270 : 380,
                borderRadius: 200,
                overflow: "hidden",
                border: "1px solid rgba(124,58,237,0.3)",
                boxShadow: "0 0 60px rgba(124,58,237,0.25), 0 0 120px rgba(37,99,235,0.1)",
                transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
                zIndex: 2,
                flexShrink: 0
              }}>
              <img
                src="uploads/ChatGPT Image 3 may 2026, 09_11_23 p.m..png"
                alt="Fabrizio Graziano"
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(124,58,237,0.1) 0%, transparent 40%, rgba(37,99,235,0.15) 100%)", pointerEvents: "none" }} />
            </div>

            {/* Floating chips — repositioned for mobile to avoid clipping */}
            {/* Top left chip */}
            <FloatingUI style={{
              top: isMobile ? 0 : -20,
              left: isMobile ? 0 : -110,
              animation: "floatA 6s ease-in-out infinite",
              zIndex: 3,
              minWidth: isMobile ? 110 : 130,
              padding: isMobile ? "10px 12px" : "14px 18px"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#7C3AED", boxShadow: "0 0 8px #7C3AED", flexShrink: 0 }} />
                <span style={{ fontFamily: "Kanit, sans-serif", fontSize: isMobile ? 9 : 11, fontWeight: 300, color: "rgba(255,255,255,0.7)", letterSpacing: "0.1em", textTransform: "uppercase" }}>UX / UI Design</span>
              </div>
              <div style={{ marginTop: 8, height: 3, borderRadius: 2, background: "linear-gradient(to right, #7C3AED, #2563EB)", width: "100%" }} />
            </FloatingUI>

            {/* Top right chip */}
            <FloatingUI style={{
              top: isMobile ? 0 : 40,
              right: isMobile ? 0 : -130,
              animation: "floatB 7s ease-in-out infinite",
              zIndex: 3,
              minWidth: isMobile ? 100 : 120,
              padding: isMobile ? "10px 12px" : "14px 18px"
            }}>
              <div style={{ fontFamily: "Kanit, sans-serif", fontSize: 10, fontWeight: 300, color: "rgba(255,255,255,0.4)", letterSpacing: "0.12em", marginBottom: 6 }}>INTERFACE</div>
              <div style={{ display: "flex", gap: 4 }}>
                {["#7C3AED", "#2563EB", "#F97316"].map((c, i) =>
                  <div key={i} style={{ width: isMobile ? 20 : 28, height: 4, borderRadius: 2, background: c, opacity: 0.8 }} />
                )}
              </div>
              <div style={{ marginTop: 6, fontFamily: "Kanit, sans-serif", fontSize: 9, color: "rgba(255,255,255,0.25)", letterSpacing: "0.1em" }}>PIXEL PERFECT</div>
            </FloatingUI>

            {/* Bottom left chip */}
            <FloatingUI style={{
              bottom: isMobile ? 0 : 40,
              left: isMobile ? 0 : -120,
              animation: "floatC 8s ease-in-out infinite",
              zIndex: 3,
              padding: isMobile ? "10px 12px" : "14px 18px"
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <div style={{ width: 20, height: 20, borderRadius: 6, background: "linear-gradient(135deg,#7C3AED,#F97316)", flexShrink: 0 }} />
                <div>
                  <div style={{ fontFamily: "Kanit, sans-serif", fontSize: isMobile ? 9 : 10, color: "rgba(255,255,255,0.6)", letterSpacing: "0.08em" }}>GRAPHIC DESIGN</div>
                  <div style={{ fontFamily: "Kanit, sans-serif", fontSize: 9, color: "rgba(255,255,255,0.3)", letterSpacing: "0.06em" }}>Identity & Brand</div>
                </div>
              </div>
            </FloatingUI>

            {/* Bottom right chip */}
            <FloatingUI style={{
              bottom: isMobile ? 0 : -10,
              right: isMobile ? 0 : -110,
              animation: "floatA 9s ease-in-out infinite 1s",
              zIndex: 3,
              minWidth: isMobile ? 70 : 100,
              padding: isMobile ? "10px 12px" : "14px 18px"
            }}>
              <div style={{ fontFamily: "Kanit, sans-serif", fontSize: isMobile ? 20 : 28, fontWeight: 700, color: "rgba(255,255,255,0.9)", letterSpacing: "0.02em", lineHeight: 1 }}>A</div>
              <div style={{ fontFamily: "Kanit, sans-serif", fontSize: 9, color: "rgba(255,255,255,0.3)", letterSpacing: "0.12em", marginTop: 2 }}>TYPOGRAPHY</div>
            </FloatingUI>
          </div>

          {/* Heading */}
          <div
            style={{
              textAlign: "center",
              opacity: loaded ? 1 : 0,
              transform: loaded ? "translateY(0)" : "translateY(30px)",
              transition: "all 1s cubic-bezier(0.16,1,0.3,1) 0.5s",
              width: "100%"
            }}>
            <div
              style={{
                fontFamily: "Kanit, sans-serif",
                fontWeight: 900,
                fontSize: "clamp(52px, 10vw, 148px)",
                lineHeight: 0.95,
                letterSpacing: "-0.02em",
                background: "linear-gradient(135deg, #fff 30%, rgba(124,58,237,0.8) 60%, rgba(37,99,235,0.9) 90%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                userSelect: "none"
              }}>
              HOLA, SOY<br />FABRIZIO
            </div>

            {/* CTA buttons */}
            <div style={{ display: "flex", gap: 12, justifyContent: "center", marginTop: 36, flexWrap: "wrap", padding: "0 16px" }}>
              <button
                onClick={() => scrollTo("#projects")}
                style={{
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: 500,
                  fontSize: isMobile ? 12 : 14,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#fff",
                  background: "linear-gradient(135deg, #7C3AED, #2563EB)",
                  border: "none",
                  borderRadius: 100,
                  padding: isMobile ? "12px 28px" : "14px 36px",
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
                  boxShadow: "0 4px 24px rgba(124,58,237,0.4)"
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(124,58,237,0.6)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 24px rgba(124,58,237,0.4)"; }}>
                VER PROYECTOS
              </button>
              <button
                onClick={() => scrollTo("#contact")}
                style={{
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: 400,
                  fontSize: isMobile ? 12 : 14,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.7)",
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: 100,
                  padding: isMobile ? "12px 28px" : "14px 36px",
                  cursor: "pointer",
                  transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)"
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.transform = "translateY(-2px)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)"; e.currentTarget.style.color = "rgba(255,255,255,0.7)"; e.currentTarget.style.transform = "translateY(0)"; }}>
                CONTACTAME
              </button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          style={{
            position: "absolute",
            bottom: 36,
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
            opacity: loaded ? 0.5 : 0,
            transition: "opacity 1s 1.5s",
            zIndex: 2
          }}>
          <div style={{ fontFamily: "Kanit, sans-serif", fontSize: 10, fontWeight: 300, letterSpacing: "0.2em", textTransform: "uppercase", color: "rgba(255,255,255,0.5)" }}>Scroll</div>
          <div style={{ width: 1, height: 40, background: "linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)", animation: "scrollPulse 2s ease-in-out infinite" }} />
        </div>
      </section>
    );
  }

  Object.assign(window, { Hero });
})();
