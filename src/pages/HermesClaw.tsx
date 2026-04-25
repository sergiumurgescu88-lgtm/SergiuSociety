import { useEffect, useRef, useState } from "react";

export default function HermesClaw() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const platforms = [
    "Telegram", "Discord", "Slack", "WhatsApp", "Signal",
    "Email (IMAP/SMTP)", "iMessage", "WeChat", "WeCom",
    "Home Assistant", "CLI", "VS Code", "Zed", "JetBrains"
  ];

  const features = [
    {
      icon: "🧠",
      title: "Built-in Learning Loop",
      desc: "Singurul agent cu un loop de învățare integrat — creează skill-uri din experiență, le îmbunătățește în timp ce le folosește, și construiește un model tot mai profund al cine ești tu."
    },
    {
      icon: "🌐",
      title: "Multi-Platform Gateway",
      desc: "Telegram, Discord, Slack, WhatsApp, Signal, Email, iMessage, WeChat — totul dintr-un singur proces gateway. Începe pe o platformă, continuă pe alta."
    },
    {
      icon: "☁️",
      title: "Cloud-Native & Server-First",
      desc: "Rulează pe un VPS de 5$, un cluster GPU sau infrastructură serverless. Nu e legat de laptopul tău — vorbește cu el prin Telegram în timp ce lucrează pe un VM."
    },
    {
      icon: "🔀",
      title: "200+ Modele LLM",
      desc: "Nous Portal, OpenRouter (200+ modele), MiMo, z.ai/GLM, Kimi/Moonshot, MiniMax, Hugging Face, OpenAI. Schimbă cu 'hermes model' — fără modificări de cod, fără lock-in."
    },
    {
      icon: "📚",
      title: "80+ Skills Ecosystem",
      desc: "Peste 80 de skill-uri incluse și opționale în 15+ categorii cu un Skills Hub comunitar. Hermes poate crea și îmbunătăți skill-uri automat din experiență."
    },
    {
      icon: "🖥️",
      title: "6 Terminal Backends",
      desc: "Local, Docker, SSH, Daytona, Singularity și Modal. Daytona și Modal oferă persistență serverless — agentul hibernează când e inactiv și se trezește la cerere."
    },
    {
      icon: "🔒",
      title: "Security Enterprise-Grade",
      desc: "Protecție path traversal, neutralizare shell injection, SSRF guards, validare webhook Twilio, autorizare approval buttons, prevenire git argument injection."
    },
    {
      icon: "🧩",
      title: "MCP Native Client",
      desc: "Suport MCP nativ cu transporturi stdio și HTTP, OAuth 2.1 PKCE, scanare malware OSV pentru pachete MCP, și auto-reload la schimbarea configurației."
    },
    {
      icon: "📊",
      title: "Web Dashboard Local",
      desc: "Un dashboard browser-based pentru gestionarea agentului tău local. Configurează setări, monitorizează sesiuni, navighează skill-uri — fără configurare în terminal."
    }
  ];

  const useCases = [
    { emoji: "🚀", title: "Server Always-On", desc: "Rulează pe un VPS 24/7, primește mesaje prin Telegram și execută sarcini complexe fără a fi nevoie de laptopul tău deschis." },
    { emoji: "💻", title: "Dev pe Orice Editor", desc: "Integrare VS Code, Zed și JetBrains via ACP. Agent backend complet cu suport slash command și streaming." },
    { emoji: "📧", title: "Email & Research", desc: "Triază email-uri prin IMAP/SMTP, face cercetare autonomă, generează rapoarte și le trimite pe Telegram sau Discord." },
    { emoji: "🔄", title: "Migrare din OpenClaw", desc: "Detectare automată ~/.openclaw și asistent de migrare interactiv. Import setări, memorii, skill-uri și chei API în câteva minute." },
    { emoji: "🎓", title: "Auto-Îmbunătățire", desc: "Hermes creează skill-uri noi din experiență, le îmbunătățește în timp ce le folosește, și caută în conversațiile trecute pentru context relevant." },
    { emoji: "🏢", title: "Angajat în Paperclip", desc: "Cu adaptorul hermes-paperclip, rulează ca angajat gestionat într-o companie Paperclip — cu 30+ unelte native și suport MCP complet." }
  ];

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #080808 0%, #0a0808 50%, #080808 100%)",
      color: "#e8e8e8",
      fontFamily: "'DM Sans', 'Syne', sans-serif",
      overflowX: "hidden"
    }}>

      <div style={{
        position: "fixed",
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(147,112,219,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(147,112,219,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        pointerEvents: "none",
        zIndex: 0
      }} />

      <div style={{
        position: "fixed",
        top: -200,
        left: "50%",
        transform: "translateX(-50%)",
        width: 800,
        height: 400,
        background: "radial-gradient(ellipse, rgba(147,112,219,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 0
      }} />

      <div style={{ position: "relative", zIndex: 1 }}>

        <div style={{ padding: "24px 40px" }}>
          <button
            onClick={() => window.history.back()}
            style={{
              background: "rgba(147,112,219,0.1)",
              border: "1px solid rgba(147,112,219,0.3)",
              color: "#9370db",
              padding: "8px 20px",
              borderRadius: 8,
              cursor: "pointer",
              fontSize: 14,
              fontWeight: 600,
              display: "flex",
              alignItems: "center",
              gap: 8,
              transition: "all 0.2s"
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(147,112,219,0.2)";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(147,112,219,0.6)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(147,112,219,0.1)";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(147,112,219,0.3)";
            }}
          >
            ← Înapoi la Agenți
          </button>
        </div>

        <section style={{
          textAlign: "center",
          padding: "60px 24px 80px",
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "translateY(0)" : "translateY(30px)",
          transition: "all 0.8s cubic-bezier(0.16,1,0.3,1)"
        }}>
          <div style={{
            fontSize: 72,
            marginBottom: 24,
            display: "inline-block",
            filter: "drop-shadow(0 0 30px rgba(147,112,219,0.4))",
            animation: "float 3s ease-in-out infinite"
          }}>
            ⚡
          </div>

          <div style={{
            display: "inline-block",
            background: "linear-gradient(135deg, rgba(147,112,219,0.15), rgba(147,112,219,0.05))",
            border: "1px solid rgba(147,112,219,0.3)",
            borderRadius: 100,
            padding: "6px 20px",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase" as const,
            color: "#9370db",
            marginBottom: 28,
            display: "block" as const
          }}>
            Nous Research · 73K+ GitHub Stars · Self-Improving Agent
          </div>

          <h1 style={{
            fontSize: "clamp(48px, 8vw, 90px)",
            fontWeight: 900,
            lineHeight: 1.05,
            marginBottom: 24,
            background: "linear-gradient(135deg, #fff 0%, #c0a0e8 50%, #9370db 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontFamily: "'Syne', sans-serif"
          }}>
            Hermes Agent
          </h1>

          <p style={{
            fontSize: "clamp(18px, 2.5vw, 24px)",
            color: "#a0a0a0",
            maxWidth: 640,
            margin: "0 auto 16px",
            lineHeight: 1.6
          }}>
            Singurul agent open-source care se auto-îmbunătățește.<br />
            <span style={{ color: "#c0a0e8" }}>Rulează oriunde. Crește cu tine. Niciodată nu uită.</span>
          </p>

          <p style={{ fontSize: 16, color: "#666", maxWidth: 560, margin: "0 auto 48px", lineHeight: 1.7 }}>
            Creat de Nous Research — echipa din spatele modelelor Hermes — pentru a transforma
            orice chat app în centrul de comandă al unui agent care înțelege contextul tău complet
            și devine mai bun cu fiecare task.
          </p>

          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" as const, marginBottom: 32 }}>
            <a
              href="https://hermes-agent.nousresearch.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "linear-gradient(135deg, #9370db, #c0a0e8)",
                color: "#080808",
                padding: "16px 48px",
                borderRadius: 12,
                fontWeight: 800,
                fontSize: 16,
                textDecoration: "none",
                display: "inline-block",
                boxShadow: "0 8px 40px rgba(147,112,219,0.35)",
                transition: "all 0.2s"
              }}
            >
              ⚡ Începe cu Hermes
            </a>
            <a
              href="https://github.com/NousResearch/hermes-agent"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "transparent",
                border: "2px solid rgba(147,112,219,0.4)",
                color: "#9370db",
                padding: "16px 48px",
                borderRadius: 12,
                fontWeight: 700,
                fontSize: 16,
                textDecoration: "none",
                display: "inline-block",
                transition: "all 0.2s"
              }}
            >
              ⭐ Star pe GitHub
            </a>
          </div>
        </section>

        {/* Platforms */}
        <section style={{ padding: "0 24px 60px", maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 800, color: "#e8e8e8", fontFamily: "'Syne', sans-serif" }}>
              14 Platforme. Un singur agent.
            </h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 10, justifyContent: "center" }}>
            {platforms.map((p, i) => (
              <span key={i} style={{
                background: "rgba(147,112,219,0.08)",
                border: "1px solid rgba(147,112,219,0.2)",
                borderRadius: 100,
                padding: "8px 16px",
                fontSize: 13,
                fontWeight: 600,
                color: "#c0a0e8"
              }}>{p}</span>
            ))}
          </div>
        </section>

        {/* Features */}
        <section style={{ padding: "0 24px 80px", maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#e8e8e8", fontFamily: "'Syne', sans-serif" }}>
              Ce face Hermes
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20 }}>
            {features.map((f, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 16,
                padding: "24px 28px"
              }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{f.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#9370db", marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: "#888", lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Use cases */}
        <section style={{ padding: "0 24px 80px", maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#e8e8e8", fontFamily: "'Syne', sans-serif" }}>
              Cazuri de utilizare
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
            {useCases.map((u, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 16,
                padding: "24px"
              }}>
                <div style={{ fontSize: 32, marginBottom: 12 }}>{u.emoji}</div>
                <h3 style={{ fontSize: 15, fontWeight: 700, color: "#e8e8e8", marginBottom: 8 }}>{u.title}</h3>
                <p style={{ fontSize: 13, color: "#888", lineHeight: 1.6 }}>{u.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section style={{ padding: "0 24px 80px", maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: 16 }}>
            {[
              { value: "73K+", label: "GitHub Stars" },
              { value: "9.7K+", label: "Forks" },
              { value: "80+", label: "Skills Incluse" },
              { value: "200+", label: "Modele LLM" },
              { value: "14", label: "Platforme Gateway" },
              { value: "v0.9.0", label: "Ultima versiune" }
            ].map((s, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 14,
                padding: "24px 16px",
                textAlign: "center"
              }}>
                <div style={{ fontSize: 28, fontWeight: 900, color: "#9370db", fontFamily: "'Syne', sans-serif", marginBottom: 6 }}>{s.value}</div>
                <div style={{ fontSize: 12, color: "#666" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>
        {/* BUDDY CTA */}
        <section style={{ padding:"60px 24px 80px", maxWidth:900, margin:"0 auto" }}>
          <div style={{ background:"rgba(255,255,255,0.02)", border:"1px solid rgba(147,112,219,0.15)", borderRadius:24, padding:"40px 32px", textAlign:"center" }}>
            <div style={{ display:"inline-block", background:"rgba(147,112,219,0.15)", border:"1px solid rgba(147,112,219,0.3)", borderRadius:999, padding:"6px 18px", fontSize:11, fontWeight:700, color:"#9370db", letterSpacing:2, textTransform:"uppercase", marginBottom:20 }}>
              🤖 Buddy — Agentul tău specializat
            </div>
            <h2 style={{ fontSize:"clamp(22px,4vw,38px)", fontWeight:900, color:"#e8e8e8", fontFamily:"'Syne',sans-serif", marginBottom:12, lineHeight:1.2 }}>
              Buddy antrenează și evoluează Hermes după stilul tău
            </h2>
            <p style={{ color:"#888", fontSize:15, maxWidth:600, margin:"0 auto 32px", lineHeight:1.7 }}>
              Hermes învață din experiență și se îmbunătățește singur — Buddy îl configurează, îi construiește primele skill-uri și îl conectează pe toate platformele tale.
            </p>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))", gap:12, marginBottom:32, textAlign:"left" }}>
                <div style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:14, padding:"16px 18px" }}><div style={{ fontSize:22, marginBottom:8 }}>🧠</div><div style={{ fontWeight:700, fontSize:13, color:"#e0e0e0", marginBottom:4 }}>Learning Loop Setup</div><div style={{ fontSize:12, color:"#777", lineHeight:1.6 }}>Activare și calibrare loop de învățare — Hermes devine mai bun zilnic</div></div>
                <div style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:14, padding:"16px 18px" }}><div style={{ fontSize:22, marginBottom:8 }}>🌐</div><div style={{ fontWeight:700, fontSize:13, color:"#e0e0e0", marginBottom:4 }}>Multi-Platform Connect</div><div style={{ fontSize:12, color:"#777", lineHeight:1.6 }}>Telegram, Discord, WhatsApp, Email, iMessage — un singur process</div></div>
                <div style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:14, padding:"16px 18px" }}><div style={{ fontSize:22, marginBottom:8 }}>📚</div><div style={{ fontWeight:700, fontSize:13, color:"#e0e0e0", marginBottom:4 }}>Skill Library</div><div style={{ fontSize:12, color:"#777", lineHeight:1.6 }}>Buddy construiește primele 20 skill-uri personalizate pentru business-ul tău</div></div>
                <div style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:14, padding:"16px 18px" }}><div style={{ fontSize:22, marginBottom:8 }}>🤖</div><div style={{ fontWeight:700, fontSize:13, color:"#e0e0e0", marginBottom:4 }}>Model Selection</div><div style={{ fontSize:12, color:"#777", lineHeight:1.6 }}>Din 200+ LLM-uri, Buddy alege modelul potrivit per task</div></div>
                <div style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:14, padding:"16px 18px" }}><div style={{ fontSize:22, marginBottom:8 }}>☁️</div><div style={{ fontWeight:700, fontSize:13, color:"#e0e0e0", marginBottom:4 }}>Cloud Deploy</div><div style={{ fontSize:12, color:"#777", lineHeight:1.6 }}>Server always-on, uptime monitorizat, restart automat la crash</div></div>
                <div style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:14, padding:"16px 18px" }}><div style={{ fontSize:22, marginBottom:8 }}>📈</div><div style={{ fontWeight:700, fontSize:13, color:"#e0e0e0", marginBottom:4 }}>Self-Improvement Track</div><div style={{ fontSize:12, color:"#777", lineHeight:1.6 }}>Dashboard cu evoluția skill-urilor și performanța în timp</div></div>
            </div>
            <div style={{ display:"flex", flexWrap:"wrap", gap:12, justifyContent:"center", alignItems:"center" }}>
              <a href="https://buy.stripe.com/bJe14o1Ht3ZCamfedh5os00" target="_blank" rel="noopener noreferrer" style={{ display:"inline-flex", alignItems:"center", gap:10, background:"#9370db", color:"#0a0a0a", fontWeight:900, fontSize:16, padding:"16px 32px", borderRadius:16, textDecoration:"none" }}>🤖 Activează Buddy — $9/lună</a>
              <a href="https://wa.me/40768676141?text=Salut%20Sergiu%2C%20vreau%20Buddy%20pentru%20Hermes%20Agent" target="_blank" rel="noopener noreferrer" style={{ display:"inline-flex", alignItems:"center", gap:10, background:"rgba(37,211,102,0.12)", border:"1px solid rgba(37,211,102,0.3)", color:"#25d366", fontWeight:700, fontSize:14, padding:"16px 24px", borderRadius:16, textDecoration:"none" }}>💬 Întreabă pe WhatsApp</a>
            </div>
            <p style={{ color:"#444", fontSize:12, marginTop:16 }}>Fără contract · Cancel oricând · Nous Research · Self-Improving · 200+ Modele LLM</p>
          </div>
        </section>
        <footer style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "24px",
          textAlign: "center",
          color: "#444",
          fontSize: 13
        }}>
          Hermes Agent este un proiect open-source · Creat de Nous Research (@teknium1) · Licență MIT
          <span style={{ margin: "0 12px", color: "#333" }}>·</span>
          Pagina prezentată de <span style={{ color: "#9370db" }}>daeu.online</span>
        </footer>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-12px); }
        }
      `}</style>
    </div>
  );
}
