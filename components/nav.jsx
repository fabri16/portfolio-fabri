/* Nav Component — Fabrizio Portfolio */
(function () {
  const { useState, useEffect } = React;

  function Nav() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
      const onScroll = () => setScrolled(window.scrollY > 60);
      window.addEventListener("scroll", onScroll);
      return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const links = [
      { label: "Proyectos", href: "#projects" },
      { label: "Sobre Mí", href: "#about" },
      { label: "Mis estudios", href: "#education" },
      { label: "Conocimientos", href: "#services" },
    ];

    const scrollTo = (href) => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMenuOpen(false);
    };

    return (
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          transition: "all 0.4s cubic-bezier(0.16,1,0.3,1)",
          background: scrolled
            ? "rgba(12,12,12,0.85)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled
            ? "1px solid rgba(255,255,255,0.06)"
            : "1px solid transparent",
        }}
      >
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            padding: "0 40px",
            height: 72,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Monogram */}
          <button
            onClick={() => scrollTo("#hero")}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: 10,
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 8,
                background: "linear-gradient(135deg, #7C3AED, #2563EB)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14,
                fontWeight: 700,
                color: "#fff",
                fontFamily: "Kanit, sans-serif",
                letterSpacing: "0.05em",
              }}
            >
              FG
            </div>
            <span
              style={{
                fontFamily: "Kanit, sans-serif",
                fontWeight: 300,
                fontSize: 15,
                color: "rgba(255,255,255,0.5)",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
              }}
            >
              Fabrizio Graziano
            </span>
          </button>

          {/* Desktop links */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 40,
            }}
            className="nav-links"
          >
            {links.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: 300,
                  fontSize: 13,
                  color: "rgba(255,255,255,0.55)",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  transition: "color 0.2s",
                  padding: "4px 0",
                  position: "relative",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#fff")}
                onMouseLeave={(e) =>
                  (e.target.style.color = "rgba(255,255,255,0.55)")
                }
              >
                {link.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo("#contact")}
              style={{
                background: "none",
                border: "1px solid rgba(124,58,237,0.6)",
                borderRadius: 100,
                padding: "9px 24px",
                cursor: "pointer",
                fontFamily: "Kanit, sans-serif",
                fontWeight: 400,
                fontSize: 13,
                color: "#fff",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                transition: "all 0.25s",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  "linear-gradient(135deg, rgba(124,58,237,0.8), rgba(37,99,235,0.8))";
                e.currentTarget.style.borderColor = "transparent";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "none";
                e.currentTarget.style.borderColor = "rgba(124,58,237,0.6)";
              }}
            >
              Hablemos
            </button>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="nav-hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              display: "none",
              flexDirection: "column",
              gap: 5,
              padding: 8,
            }}
          >
            {[0, 1, 2].map((i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  width: 24,
                  height: 1.5,
                  background: "rgba(255,255,255,0.8)",
                  borderRadius: 2,
                  transition: "all 0.3s",
                }}
              />
            ))}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            style={{
              background: "rgba(12,12,12,0.97)",
              borderTop: "1px solid rgba(255,255,255,0.06)",
              padding: "20px 40px 30px",
              display: "flex",
              flexDirection: "column",
              gap: 20,
            }}
          >
            {links.map((link) => (
              <button
                key={link.label}
                onClick={() => scrollTo(link.href)}
                style={{
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  fontFamily: "Kanit, sans-serif",
                  fontWeight: 300,
                  fontSize: 24,
                  color: "rgba(255,255,255,0.8)",
                  letterSpacing: "0.08em",
                  textAlign: "left",
                }}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    );
  }

  Object.assign(window, { Nav });
})();
