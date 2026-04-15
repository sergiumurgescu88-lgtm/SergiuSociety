import { useEffect, useRef, useState } from "react";

export default function OpenClaw() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const channels = [
    "WhatsApp", "Telegram", "Discord", "Signal", "Slack",
    "iMessage", "Microsoft Teams", "Matrix", "Google Chat",
    "WeChat", "LINE", "IRC", "Nostr", "Twitch", "Zalo"
  ];

  const features = [
    {
      icon: "🔀",
      title: "Multi-Channel Gateway",
      desc: "Un singur Gateway pentru toate platformele de mesagerie. WhatsApp, Telegram, Discord și multe altele — toate printr-un singur proces de control."
    },
    {
      icon: "🤖",
      title: "Multi-Agent Routing",
      desc: "Rutează canalele inbound către agenți izolați — sesiuni separate per agent, workspace sau expeditor."
    },
    {
      icon: "🎙️",
      title: "Voice Wake + Talk Mode",
      desc: "Cuvinte de trezire pe macOS/iOS și mod conversație continuă pe Android. Integrare cu ElevenLabs și TTS nativ ca fallback."
    },
    {
      icon: "🖥️",
      title: "Live Canvas",
      desc: "Workspace vizual condus de agent cu A2UI — agentul poate crea și manipula interfețe live în timp real."
    },
    {
      icon: "🛠️",
      title: "First-Class Tools",
      desc: "Browser, canvas, nodes, cron, sesiuni și acțiuni Discord/Slack. Execuție shell, citire/scriere fișiere, automatizare browser."
    },
    {
      icon: "🔒",
      title: "Local-First & Privacy",
      desc: "Datele tale rămân pe dispozitivul tău. Configurația, memoria și istoricul conversațiilor sunt stocate local ca fișiere Markdown și YAML."
    },
    {
      icon: "📅",
      title: "Heartbeat Scheduler",
      desc: "Se trezește automat la intervale configurabile, verifică lista de sarcini și acționează fără să fie prompt-uit."
    },
    {
      icon: "🧩",
      title: "Skills System",
      desc: "Sute de skill-uri din comunitate prin ClawHub. Dacă nu există, cere agentului tău să creeze unul nou."
    },
    {
      icon: "📱",
      title: "Companion Apps",
      desc: "Aplicație macOS din bara de meniu + noduri iOS/Android pentru Canvas, cameră și fluxuri de lucru cu voce."
    }
  ];

  const useCases = [
    { emoji: "📧", title: "Email & Calendar", desc: "Triază emailuri, redactează răspunsuri, gestionează agenda — economisind ore în fiecare săptămână." },
    { emoji: "💻", title: "Developer Companion", desc: "Rulează teste, depanează cod, deployează update-uri, monitorizează repo-uri autonom." },
    { emoji: "🏠", title: "Smart Home", desc: "Controlează iluminatul, temperatura, muzica sau sistemele de securitate prin voce sau rutine programate." },
    { emoji: "✈️", title: "Personal Automation", desc: "Rezervă călătorii, urmărește cheltuielile, generează rapoarte, monitorizează știri și date de sănătate." },
    { emoji: "🎨", title: "Creative Workflows", desc: "Editează imagini, compune mesaje sau construiește dashboarduri personalizate din instrucțiuni în limbaj natural." },
    { emoji: "🚗", title: "Real-World Deals", desc: "Un developer a economisit 4.200$ la cumpărarea unei mașini — agentul a negociat prin email timp de câteva zile." }
  ];

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #080808 0%, #0d0d0d 50%, #080808 100%)",
      color: "#e8e8e8",
      fontFamily: "'DM Sans', 'Syne', sans-serif",
      overflowX: "hidden"
    }}>

      <div style={{
        position: "fixed",
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(200,169,110,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(200,169,110,0.03) 1px, transparent 1px)
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
        background: "radial-gradient(ellipse, rgba(200,169,110,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 0
      }} />

      <div style={{ position: "relative", zIndex: 1 }}>

        <div style={{ padding: "24px 40px" }}>
          <button
            onClick={() => window.history.back()}
            style={{
              background: "rgba(200,169,110,0.1)",
              border: "1px solid rgba(200,169,110,0.3)",
              color: "#c8a96e",
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
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(200,169,110,0.2)";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(200,169,110,0.6)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(200,169,110,0.1)";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(200,169,110,0.3)";
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
            filter: "drop-shadow(0 0 30px rgba(200,169,110,0.4))",
            animation: "float 3s ease-in-out infinite"
          }}>
            🦞
          </div>

          <div style={{
            display: "inline-block",
            background: "linear-gradient(135deg, rgba(200,169,110,0.15), rgba(200,169,110,0.05))",
            border: "1px solid rgba(200,169,110,0.3)",
            borderRadius: 100,
            padding: "6px 20px",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase" as const,
            color: "#c8a96e",
            marginBottom: 28,
            display: "block" as const
          }}>
            Open Source · 247K+ GitHub Stars · Local-First
          </div>

          <h1 style={{
            fontSize: "clamp(48px, 8vw, 90px)",
            fontWeight: 900,
            lineHeight: 1.05,
            marginBottom: 24,
            background: "linear-gradient(135deg, #fff 0%, #e8c98e 50%, #c8a96e 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontFamily: "'Syne', sans-serif"
          }}>
            OpenClaw
          </h1>

          <p style={{
            fontSize: "clamp(18px, 2.5vw, 24px)",
            color: "#a0a0a0",
            maxWidth: 640,
            margin: "0 auto 16px",
            lineHeight: 1.6
          }}>
            AI-ul care chiar face lucruri.<br />
            <span style={{ color: "#e8c98e" }}>Din WhatsApp, Telegram sau orice app de chat folosești deja.</span>
          </p>

          <p style={{ fontSize: 16, color: "#666", maxWidth: 560, margin: "0 auto 48px", lineHeight: 1.7 }}>
            La fel cum te-ai simțit când ai văzut prima oară ChatGPT sau Claude Code —
            OpenClaw îți dă același sentiment. O schimbare fundamentală a modului
            în care folosim AI. Local-first, privacy by design, mereu activ.
          </p>

          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" as const, marginBottom: 32 }}>
            <a
              href="https://openclaw.ai"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "linear-gradient(135deg, #c8a96e, #e8c98e)",
                color: "#080808",
                padding: "16px 48px",
                borderRadius: 12,
                fontWeight: 800,
                fontSize: 16,
                textDecoration: "none",
                display: "inline-block",
                boxShadow: "0 8px 40px rgba(200,169,110,0.35)",
                transition: "all 0.2s"
              }}
            >
              🦞 Începe cu OpenClaw
            </a>
            <a
              href="https://github.com/openclaw/openclaw"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "transparent",
                border: "2px solid rgba(200,169,110,0.4)",
                color: "#c8a96e",
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

        {/* Channels */}
        <section style={{ padding: "0 24px 60px", maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 800, color: "#e8e8e8", fontFamily: "'Syne', sans-serif" }}>
              15 platforme. Un singur agent.
            </h2>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap" as const, gap: 10, justifyContent: "center" }}>
            {channels.map((c, i) => (
              <span key={i} style={{
                background: "rgba(200,169,110,0.08)",
                border: "1px solid rgba(200,169,110,0.2)",
                borderRadius: 100,
                padding: "8px 16px",
                fontSize: 13,
                fontWeight: 600,
                color: "#e8c98e"
              }}>{c}</span>
            ))}
          </div>
        </section>

        {/* Features */}
        <section style={{ padding: "0 24px 80px", maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#e8e8e8", fontFamily: "'Syne', sans-serif" }}>
              Ce face OpenClaw
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
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#c8a96e", marginBottom: 8 }}>{f.title}</h3>
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

        {/* Testimonials */}
        <section style={{ padding: "0 24px 80px", maxWidth: 1000, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{ fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 800, color: "#e8e8e8", fontFamily: "'Syne', sans-serif" }}>
              Ce spun utilizatorii
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16 }}>
            {[
              { text: "De la design, code review, taxe, PM, pipelines de conținut... AI ca teammate, nu tool. Endgame-ul angajaților digitali.", user: "@lycfyi" },
              { text: "Singura unealtă pe care am folosit-o care chiar se simte ca magie. A construit un site de pe telefon în minute.", user: "@AlbertMoral" },
              { text: "Cel mai aproape de a experimenta viitorul enabled de AI. Un adevărat game changer!", user: "@kailazh" },
              { text: "Cantitatea de lucruri pe care le-am făcut de pe telefon în timp ce luam micul dejun este pur și simplu uimitoare.", user: "@SedRicKCZ" }
            ].map((t, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 14,
                padding: "24px"
              }}>
                <div style={{ fontSize: 24, color: "rgba(200,169,110,0.3)", marginBottom: 12, fontFamily: "serif" }}>"</div>
                <p style={{ fontSize: 14, color: "#a0a0a0", lineHeight: 1.7, marginBottom: 16 }}>{t.text}</p>
                <div style={{ fontSize: 13, color: "#666", fontWeight: 600 }}>{t.user}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section style={{ padding: "0 24px 80px", maxWidth: 900, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 16 }}>
            {[
              { value: "247K+", label: "GitHub Stars" },
              { value: "50+", label: "Integrări" },
              { value: "15", label: "Platforme Gateway" },
              { value: "MIT", label: "Open Source" },
              { value: "24/7", label: "Mereu Activ" }
            ].map((s, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 14,
                padding: "24px 16px",
                textAlign: "center"
              }}>
                <div style={{ fontSize: 28, fontWeight: 900, color: "#c8a96e", fontFamily: "'Syne', sans-serif", marginBottom: 6 }}>{s.value}</div>
                <div style={{ fontSize: 12, color: "#666" }}>{s.label}</div>
              </div>
            ))}
          </div>
        </section>
        {/* BUDDY CTA */}
        <section style={{ padding:"60px 24px 80px", maxWidth:900, margin:"0 auto" }}>
          <div style={{ background:"rgba(255,255,255,0.02)", border:"1px solid rgba(200,169,110,0.15)", borderRadius:24, padding:"40px 32px", textAlign:"center" }}>
            <div style={{ display:"inline-block", background:"rgba(200,169,110,0.15)", border:"1px solid rgba(200,169,110,0.3)", borderRadius:999, padding:"6px 18px", fontSize:11, fontWeight:700, color:"#c8a96e", letterSpacing:2, textTransform:"uppercase", marginBottom:20 }}>
              🤖 Buddy — Agentul tău specializat
            </div>
            <h2 style={{ fontSize:"clamp(22px,4vw,38px)", fontWeight:900, color:"#e8e8e8", fontFamily:"'Syne',sans-serif", marginBottom:12, lineHeight:1.2 }}>
              Buddy configurează și menține OpenClaw pentru tine
            </h2>
            <p style={{ color:"#888", fontSize:15, maxWidth:600, margin:"0 auto 32px", lineHeight:1.7 }}>
              Nu mai pierzi ore cu YAML, webhook-uri și debugging. Buddy știe OpenClaw de la zero — îl instalează, conectează canalele și îl ține activ.
            </p>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))", gap:12, marginBottom:32, textAlign:"left" }}>
                <div style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:14, padding:"16px 18px" }}><div style={{ fontSize:22, marginBottom:8 }}>🔀</div><div style={{ fontWeight:700, fontSize:13, color:"#e0e0e0", marginBottom:4 }}>Setup Gateway Complet</div><div style={{ fontSize:12, color:"#777", lineHeight:1.6 }}>Instalare, porturi, SSL și primul canal activ în sub 30 min</div></div>
                <div style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:14, padding:"16px 18px" }}><div style={{ fontSize:22, marginBottom:8 }}>📱</div><div style={{ fontWeight:700, fontSize:13, color:"#e0e0e0", marginBottom:4 }}>Conectare Canale</div><div style={{ fontSize:12, color:"#777", lineHeight:1.6 }}>WhatsApp Business API, Telegram, Discord, Slack — pas cu pas</div></div>
                <div style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:14, padding:"16px 18px" }}><div style={{ fontSize:22, marginBottom:8 }}>🤖</div><div style={{ fontWeight:700, fontSize:13, color:"#e0e0e0", marginBottom:4 }}>Agent Routing</div><div style={{ fontSize:12, color:"#777", lineHeight:1.6 }}>Rutare mesaje pe agenți separați, sesiuni izolate per workspace</div></div>
                <div style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:14, padding:"16px 18px" }}><div style={{ fontSize:22, marginBottom:8 }}>🎙️</div><div style={{ fontWeight:700, fontSize:13, color:"#e0e0e0", marginBottom:4 }}>Voice + Wake Mode</div><div style={{ fontSize:12, color:"#777", lineHeight:1.6 }}>Activare voice wake word și talk mode pe hardware-ul tău</div></div>
                <div style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:14, padding:"16px 18px" }}><div style={{ fontSize:22, marginBottom:8 }}>🔧</div><div style={{ fontWeight:700, fontSize:13, color:"#e0e0e0", marginBottom:4 }}>Debug & Monitoring</div><div style={{ fontSize:12, color:"#777", lineHeight:1.6 }}>Logs în timp real, restart automat, alerte când ceva cade</div></div>
                <div style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:14, padding:"16px 18px" }}><div style={{ fontSize:22, marginBottom:8 }}>📦</div><div style={{ fontWeight:700, fontSize:13, color:"#e0e0e0", marginBottom:4 }}>Update & Migrate</div><div style={{ fontSize:12, color:"#777", lineHeight:1.6 }}>Upgrade versiuni fără downtime, backup config înainte de orice</div></div>
            </div>
            <div style={{ display:"flex", flexWrap:"wrap", gap:12, justifyContent:"center", alignItems:"center" }}>
              <a href="https://buy.stripe.com/bJe14o1Ht3ZCamfedh5os00" target="_blank" rel="noopener noreferrer" style={{ display:"inline-flex", alignItems:"center", gap:10, background:"#c8a96e", color:"#0a0a0a", fontWeight:900, fontSize:16, padding:"16px 32px", borderRadius:16, textDecoration:"none" }}>🤖 Activează Buddy — $9/lună</a>
              <a href="https://wa.me/40768676141?text=Salut%20Sergiu%2C%20vreau%20Buddy%20pentru%20OpenClaw" target="_blank" rel="noopener noreferrer" style={{ display:"inline-flex", alignItems:"center", gap:10, background:"rgba(37,211,102,0.12)", border:"1px solid rgba(37,211,102,0.3)", color:"#25d366", fontWeight:700, fontSize:14, padding:"16px 24px", borderRadius:16, textDecoration:"none" }}>💬 Întreabă pe WhatsApp</a>
            </div>
            <p style={{ color:"#444", fontSize:12, marginTop:16 }}>Fără contract · Cancel oricând · Gateway Multi-Canal · 15 Platforme · MIT Open Source</p>
          </div>
        </section>
        <footer style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "24px",
          textAlign: "center",
          color: "#444",
          fontSize: 13
        }}>
          OpenClaw este un proiect open-source independent · Creat de Peter Steinberger · Licență MIT
          <span style={{ margin: "0 12px", color: "#333" }}>·</span>
          Pagina prezentată de <span style={{ color: "#c8a96e" }}>daeu.online</span>
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
