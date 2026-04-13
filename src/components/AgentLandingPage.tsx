import { Link } from "react-router-dom";
import { ExternalLink, ArrowLeft } from "lucide-react";

interface Feature {
  title: string;
  description: string;
}

interface AgentPageConfig {
  name: string;
  accentColor: string;
  accentHex: string;
  title: string;
  subtitle?: string;
  quote?: { text: string; author?: string };
  stats: { value: string; label: string }[];
  features: Feature[];
  githubUrl: string;
  warningBox?: string;
  otherAgents: { name: string; path: string }[];
}

const AgentLandingPage = ({ config }: { config: AgentPageConfig }) => {
  const { name, accentHex, title, subtitle, quote, stats, features, githubUrl, warningBox, otherAgents } = config;

  return (
    <div className="min-h-screen" style={{ background: "#000000", color: "#ffffff" }}>

      {/* Navbar */}
      <nav style={{ borderColor: "#1a1a1a", borderBottomWidth: 1, borderBottomStyle: "solid" }}>
        {/* Rând 1: Back + Name + Buddy */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "12px 16px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Link
              to="/"
              style={{
                display: "flex", alignItems: "center", gap: 5,
                padding: "6px 12px", borderRadius: 999,
                fontSize: 12, fontWeight: 600,
                border: "1px solid rgba(255,255,255,0.12)",
                background: "rgba(255,255,255,0.05)",
                color: "#ccc", textDecoration: "none",
              }}
            >
              <ArrowLeft style={{ width: 13, height: 13 }} />
              DaRomania
            </Link>
            <Link
              to={`/${name.toLowerCase().replace(/\s/g, "")}`}
              style={{ fontSize: 18, fontWeight: 700, color: accentHex, textDecoration: "none" }}
            >
              {name}
            </Link>
          </div>
          <a
            href="https://pascupas.daromania.online"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "8px 14px", borderRadius: 8,
              fontSize: 13, fontWeight: 700,
              color: "#000", background: accentHex,
              textDecoration: "none", whiteSpace: "nowrap",
            }}
          >
            🤖 Vibe Buddy
          </a>
        </div>
        {/* Rând 2: alți agenți scroll orizontal */}
        <div style={{
          display: "flex", gap: 6, overflowX: "auto",
          padding: "6px 16px 10px",
          scrollbarWidth: "none",
        }}>
          {otherAgents.map((agent) => (
            <Link
              key={agent.path}
              to={agent.path}
              style={{
                flexShrink: 0, fontSize: 12, fontWeight: 600,
                padding: "5px 12px", borderRadius: 999,
                border: "1px solid #333", color: "#aaa",
                textDecoration: "none", whiteSpace: "nowrap",
              }}
            >
              {agent.name}
            </Link>
          ))}
        </div>
      </nav>

      {/* Hero */}
      <section style={{ maxWidth: 720, margin: "0 auto", padding: "40px 16px 32px", textAlign: "center" }}>
        <h1 style={{ fontSize: "clamp(1.6rem, 5vw, 3.5rem)", fontWeight: 700, lineHeight: 1.15, marginBottom: 16 }}>
          {title}
        </h1>
        {subtitle && (
          <p style={{ fontSize: "clamp(0.95rem, 2.5vw, 1.2rem)", color: "#9ca3af", marginBottom: 16 }}>
            {subtitle}
          </p>
        )}
        {quote && (
          <blockquote style={{
            fontSize: "clamp(0.9rem, 2vw, 1.1rem)", fontStyle: "italic",
            color: "#d1d5db", marginBottom: 24, maxWidth: 560, margin: "0 auto 24px",
            borderLeft: `4px solid ${accentHex}`, paddingLeft: 14, textAlign: "left",
          }}>
            "{quote.text}"
            {quote.author && (
              <footer style={{ fontSize: 12, color: "#6b7280", marginTop: 6 }}>— {quote.author}</footer>
            )}
          </blockquote>
        )}

        {/* Stats */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 8, marginBottom: 28 }}>
          {stats.map((stat, i) => (
            <span key={i} style={{
              padding: "7px 14px", borderRadius: 999, fontSize: 13, fontWeight: 600,
              border: `1.5px solid ${accentHex}`, color: accentHex,
            }}>
              {stat.value} {stat.label}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div style={{ display: "flex", flexDirection: "column", gap: 10, maxWidth: 340, margin: "0 auto" }}>
          <a
            href="https://pascupas.daromania.online"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "14px 24px", borderRadius: 10, fontWeight: 700,
              color: "#000", background: accentHex, fontSize: 16,
              textDecoration: "none", display: "block", textAlign: "center",
            }}
          >
            Instalează cu AI Buddy →
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "14px 24px", borderRadius: 10, fontWeight: 700,
              color: "#fff", border: "1.5px solid #444", fontSize: 16,
              textDecoration: "none", display: "block", textAlign: "center",
            }}
          >
            GitHub →
          </a>
        </div>
      </section>

      {/* Warning Box */}
      {warningBox && (
        <div style={{ maxWidth: 680, margin: "0 auto 24px", padding: "0 16px" }}>
          <div style={{
            borderRadius: 10, padding: "12px 16px", fontSize: 13, fontWeight: 600,
            background: "#fbbf2420", border: "1px solid #fbbf24", color: "#fbbf24",
          }}>
            ⚠️ {warningBox}
          </div>
        </div>
      )}

      {/* Features Grid */}
      <section style={{ maxWidth: 720, margin: "0 auto", padding: "0 16px 32px" }}>
        <h2 style={{ fontSize: "clamp(1.3rem, 4vw, 2rem)", fontWeight: 700, textAlign: "center", marginBottom: 20 }}>
          Features
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 200px), 1fr))",
          gap: 12,
        }}>
          {features.map((feature, i) => (
            <div key={i} style={{
              borderRadius: 12, padding: "16px",
              background: "#0a0a0a", border: "1px solid #1a1a1a",
            }}>
              <h3 style={{ fontSize: 14, fontWeight: 700, marginBottom: 6, color: accentHex }}>
                {feature.title}
              </h3>
              <p style={{ fontSize: 13, color: "#9ca3af", lineHeight: 1.5 }}>
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section style={{ maxWidth: 360, margin: "0 auto", padding: "0 16px 40px" }}>
        <div style={{
          borderRadius: 16, padding: "28px 20px", textAlign: "center",
          background: "#0a0a0a", border: `2px solid ${accentHex}`,
        }}>
          <h3 style={{ fontSize: 20, fontWeight: 700, marginBottom: 6 }}>Pro Plan</h3>
          <p style={{ fontSize: 40, fontWeight: 700, marginBottom: 20, color: accentHex }}>
            $9<span style={{ fontSize: 15, color: "#9ca3af", fontWeight: 400 }}>/lună</span>
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <a
              href="https://buy.stripe.com/bJe14o1Ht3ZCamfedh5os00"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block", padding: "13px", borderRadius: 10,
                fontWeight: 700, color: "#000", background: "#fbbf24",
                fontSize: 16, textDecoration: "none", textAlign: "center",
              }}
            >
              Cumpără acum
            </a>
            <a
              href="https://wa.me/40768676141"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "block", padding: "13px", borderRadius: 10,
                fontWeight: 700, fontSize: 16, textDecoration: "none", textAlign: "center",
                border: "1.5px solid #25D366", color: "#25D366",
              }}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        borderTop: "1px solid #1a1a1a", padding: "20px 16px",
        textAlign: "center", fontSize: 13, color: "#6b7280",
      }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 12 }}>
          <a href={githubUrl} target="_blank" rel="noopener noreferrer"
            style={{ color: "#9ca3af", textDecoration: "none", display: "flex", alignItems: "center", gap: 4 }}>
            GitHub <ExternalLink size={13} />
          </a>
          <span>•</span>
          <span>Powered by <strong style={{ color: "#fff" }}>SSociety</strong></span>
        </div>
      </footer>
    </div>
  );
};

export default AgentLandingPage;
