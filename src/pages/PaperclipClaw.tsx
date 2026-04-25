import { useEffect, useRef, useState } from "react";

export default function PaperclipClaw() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: "🏢",
      title: "Org Chart Complet",
      desc: "CEO, CTO, CMO, CFO, ingineri, designeri, marketeri — orice bot, orice provider. Construiește ierarhia companiei tale AI cu câteva click-uri."
    },
    {
      icon: "🎯",
      title: "Goal-Aware Execution",
      desc: "Fiecare task trasează înapoi la misiunea companiei. Agenții văd întotdeauna 'de ce'-ul, nu doar titlul sarcinii — ancestralitate completă a obiectivelor."
    },
    {
      icon: "💰",
      title: "Budget Enforcement",
      desc: "Bugete lunare per agent. Când ating limita, se opresc. Fără costuri necontrolate. Checkout atomic al task-urilor — nicio muncă dublă, nicio cheltuială excesivă."
    },
    {
      icon: "🔄",
      title: "Heartbeat Scheduler",
      desc: "Agenții se trezesc pe un program, verifică munca și acționează. Delegarea curge în sus și în jos pe org chart automat."
    },
    {
      icon: "🔒",
      title: "Governance & Rollback",
      desc: "Porți de aprobare obligatorii, modificările de configurație sunt versionate, iar schimbările greșite pot fi anulate în siguranță."
    },
    {
      icon: "📊",
      title: "Full Audit Log",
      desc: "Fiecare conversație trasată. Fiecare decizie explicată. Trasare completă a apelurilor de unelte. Jurnal append-only — fără editări, fără ștergeri."
    },
    {
      icon: "🧩",
      title: "Any Agent, Any Runtime",
      desc: "Dacă poate primi un heartbeat, e angajat. Claude Code, OpenClaw, Codex, Cursor sau orice agent compatibil HTTP — Paperclip orchestrează totul."
    },
    {
      icon: "🏗️",
      title: "Multi-Company Isolation",
      desc: "Un singur deployment poate rula mai multe companii cu date separate și trasabilitate completă. Izolare completă între companii."
    },
    {
      icon: "📦",
      title: "Clipmart Templates",
      desc: "COMING SOON: Descarcă și rulează companii întregi cu un singur click. Template-uri pre-construite — agenții de conținut, trading desks, dev shops."
    }
  ];

  const useCases = [
    { emoji: "🚀", title: "Startup Autonom", desc: "Rulează o agenție de conținut, un dev shop sau un fond de investiții cu agenți care lucrează non-stop fără supraveghere." },
    { emoji: "💻", title: "Dev Team AI", desc: "CEO tehnic aprobă strategia. CTO delegă inginerilor AI. Code review, deployments, monitorizare — totul automat." },
    { emoji: "📈", title: "Marketing Automat", desc: "Agenți de social media, copywriting, SEO și outreach — toate coordonate printr-un org chart clar cu bugete controlate." },
    { emoji: "🔬", title: "Research Company", desc: "Agenți de cercetare care colectează date, analizează tendințe și generează rapoarte — cu cost tracking per task." },
    { emoji: "🛒", title: "E-commerce Ops", desc: "Gestionare inventar, suport clienți AI, optimizare prețuri și campanii publicitare conduse de o echipă de agenți." },
    { emoji: "🏦", title: "Hedge Fund AI", desc: "Originea Paperclip — @dotta coordona 20+ sesiuni Claude Code simultan. Acum îl faci cu un org chart și dashboardul Paperclip." }
  ];

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #080808 0%, #0a0d0a 50%, #080808 100%)",
      color: "#e8e8e8",
      fontFamily: "'DM Sans', 'Syne', sans-serif",
      overflowX: "hidden"
    }}>

      <div style={{
        position: "fixed",
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(80,200,120,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(80,200,120,0.03) 1px, transparent 1px)
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
        background: "radial-gradient(ellipse, rgba(80,200,120,0.07) 0%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 0
      }} />

      <div style={{ position: "relative", zIndex: 1 }}>

        <div style={{ padding: "24px 40px" }}>
          <button
            onClick={() => window.history.back()}
            style={{
              background: "rgba(80,200,120,0.1)",
              border: "1px solid rgba(80,200,120,0.3)",
              color: "#50c878",
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
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(80,200,120,0.2)";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(80,200,120,0.6)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(80,200,120,0.1)";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(80,200,120,0.3)";
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
            filter: "drop-shadow(0 0 30px rgba(80,200,120,0.4))",
            animation: "float 3s ease-in-out infinite"
          }}>
            📎
          </div>

          <div style={{
            display: "inline-block",
            background: "linear-gradient(135deg, rgba(80,200,120,0.15), rgba(80,200,120,0.05))",
            border: "1px solid rgba(80,200,120,0.3)",
            borderRadius: 100,
            padding: "6px 20px",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase" as const,
            color: "#50c878",
            marginBottom: 28,
            display: "block" as const
          }}>
            Open Source · MIT · Node.js · Zero-Human Companies
          </div>

          <h1 style={{
            fontSize: "clamp(48px, 8vw, 90px)",
            fontWeight: 900,
            lineHeight: 1.05,
            marginBottom: 24,
            background: "linear-gradient(135deg, #fff 0%, #80e0a0 50%, #50c878 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontFamily: "'Syne', sans-serif"
          }}>
            Paperclip
          </h1>

          <p style={{
            fontSize: "clamp(18px, 2.5vw, 24px)",
            color: "#a0a0a0",
            maxWidth: 640,
            margin: "0 auto 16px",
            lineHeight: 1.6
          }}>
            Orchestrarea completă a companiei tale AI.<br />
            <span style={{ color: "#80e0a0" }}>Org chart. Bugete. Audit log. Zero intervenție umană.</span>
          </p>

          <p style={{ fontSize: 16, color: "#666", maxWidth: 560, margin: "0 auto 48px", lineHeight: 1.7 }}>
            Creat de @dotta după ce a realizat că coordona manual 20+ sesiuni Claude Code simultan —
            Paperclip transformă agenții AI într-o companie cu ierarhie, obiective clare și control financiar complet.
          </p>

          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" as const, marginBottom: 32 }}>
            <a
              href="https://paperclip.ing"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "linear-gradient(135deg, #50c878, #80e0a0)",
                color: "#080808",
                padding: "16px 48px",
                borderRadius: 12,
                fontWeight: 800,
                fontSize: 16,
                textDecoration: "none",
                display: "inline-block",
                boxShadow: "0 8px 40px rgba(80,200,120,0.35)",
                transition: "all 0.2s"
              }}
            >
              📎 Începe cu Paperclip
            </a>
            <a
              href="https://github.com/paperclipai/paperclip"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "transparent",
                border: "2px solid rgba(80,200,120,0.4)",
                color: "#50c878",
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

        {/* Features */}
        <section style={{ padding: "0 24px 80px", maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{ fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 800, color: "#e8e8e8", fontFamily: "'Syne', sans-serif" }}>
              Ce face Paperclip
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
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#50c878", marginBottom: 8 }}>{f.title}</h3>
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
              { text: "Nu am văzut niciodată un sistem de orchestrare a agenților care să opereze în toate funcțiile de business cu un design atât de rafinat.", user: "@nummanali" },
              { text: "Excelent pentru orchestrarea agenților pentru dev, conținut, social, marketing, QA, cercetare și orice altceva pentru un biz autonom.", user: "@JohnHolloway" },
              { text: "Când am început cu OpenClaw, aceasta era viziunea pe care o aveam. Cineva a construit-o mai bine decât aș fi putut eu.", user: "@logansaether" },
              { text: "Nu 'iată un tool AI', ci CEO angajează un Coder. Tu aprobi. Trecerea de la 'promptez un AI' la 'conduc o echipă' schimbă totul.", user: "@yashns1" }
            ].map((t, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 14,
                padding: "24px"
              }}>
                <div style={{ fontSize: 24, color: "rgba(80,200,120,0.3)", marginBottom: 12, fontFamily: "serif" }}>"</div>
                <p style={{ fontSize: 14, color: "#a0a0a0", lineHeight: 1.7, marginBottom: 16 }}>{t.text}</p>
                <div style={{ fontSize: 13, color: "#666", fontWeight: 600 }}>{t.user}</div>
              </div>
            ))}
          </div>
        </section>
        {/* BUDDY CTA */}
        <section style={{ padding:"60px 24px 80px", maxWidth:900, margin:"0 auto" }}>
          <div style={{ background:"rgba(255,255,255,0.02)", border:"1px solid rgba(80,200,120,0.15)", borderRadius:24, padding:"40px 32px", textAlign:"center" }}>
            <div style={{ display:"inline-block", background:"rgba(80,200,120,0.15)", border:"1px solid rgba(80,200,120,0.3)", borderRadius:999, padding:"6px 18px", fontSize:11, fontWeight:700, color:"#50c878", letterSpacing:2, textTransform:"uppercase", marginBottom:20 }}>
              🤖 Buddy — Agentul tău specializat
            </div>
            <h2 style={{ fontSize:"clamp(22px,4vw,38px)", fontWeight:900, color:"#e8e8e8", fontFamily:"'Syne',sans-serif", marginBottom:12, lineHeight:1.2 }}>
              Buddy construiește compania ta AI cu Paperclip
            </h2>
            <p style={{ color:"#888", fontSize:15, maxWidth:600, margin:"0 auto 32px", lineHeight:1.7 }}>
              CEO, CTO, ingineri, marketeri — toți agenți AI. Buddy îți proiectează org chart-ul, configurează bugetele și pornește primul agent în mai puțin de o zi.
            </p>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))", gap:12, marginBottom:32, textAlign:"left" }}>
                <div style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:14, padding:"16px 18px" }}><div style={{ fontSize:22, marginBottom:8 }}>🏢</div><div style={{ fontWeight:700, fontSize:13, color:"#e0e0e0", marginBottom:4 }}>Org Chart Design</div><div style={{ fontSize:12, color:"#777", lineHeight:1.6 }}>Definim structura companiei tale: roluri, ierarhii și delegare automată</div></div>
                <div style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:14, padding:"16px 18px" }}><div style={{ fontSize:22, marginBottom:8 }}>🎯</div><div style={{ fontWeight:700, fontSize:13, color:"#e0e0e0", marginBottom:4 }}>Goal Cascading</div><div style={{ fontSize:12, color:"#777", lineHeight:1.6 }}>Fiecare agent știe misiunea companiei — Buddy leagă task-urile de obiective</div></div>
                <div style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:14, padding:"16px 18px" }}><div style={{ fontSize:22, marginBottom:8 }}>💰</div><div style={{ fontWeight:700, fontSize:13, color:"#e0e0e0", marginBottom:4 }}>Budget Enforcement</div><div style={{ fontSize:12, color:"#777", lineHeight:1.6 }}>Limite lunare per agent configurate corect, fără costuri surpriză</div></div>
                <div style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:14, padding:"16px 18px" }}><div style={{ fontSize:22, marginBottom:8 }}>🔄</div><div style={{ fontWeight:700, fontSize:13, color:"#e0e0e0", marginBottom:4 }}>Heartbeat Scheduler</div><div style={{ fontSize:12, color:"#777", lineHeight:1.6 }}>Agenții se trezesc, verifică și acționează — Buddy monitorizează tot</div></div>
                <div style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:14, padding:"16px 18px" }}><div style={{ fontSize:22, marginBottom:8 }}>🤖</div><div style={{ fontWeight:700, fontSize:13, color:"#e0e0e0", marginBottom:4 }}>Multi-Provider Setup</div><div style={{ fontSize:12, color:"#777", lineHeight:1.6 }}>Claude, GPT-4, Gemini — modelul potrivit per rol</div></div>
                <div style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:14, padding:"16px 18px" }}><div style={{ fontSize:22, marginBottom:8 }}>📊</div><div style={{ fontWeight:700, fontSize:13, color:"#e0e0e0", marginBottom:4 }}>Rapoarte Activitate</div><div style={{ fontSize:12, color:"#777", lineHeight:1.6 }}>Dashboard cu ce a făcut fiecare agent, costuri și output zilnic</div></div>
            </div>
            <div style={{ display:"flex", flexWrap:"wrap", gap:12, justifyContent:"center", alignItems:"center" }}>
              <a href="https://buy.stripe.com/bJe14o1Ht3ZCamfedh5os00" target="_blank" rel="noopener noreferrer" style={{ display:"inline-flex", alignItems:"center", gap:10, background:"#50c878", color:"#0a0a0a", fontWeight:900, fontSize:16, padding:"16px 32px", borderRadius:16, textDecoration:"none" }}>🤖 Activează Buddy — $9/lună</a>
              <a href="https://wa.me/40768676141?text=Salut%20Sergiu%2C%20vreau%20Buddy%20pentru%20Paperclip" target="_blank" rel="noopener noreferrer" style={{ display:"inline-flex", alignItems:"center", gap:10, background:"rgba(37,211,102,0.12)", border:"1px solid rgba(37,211,102,0.3)", color:"#25d366", fontWeight:700, fontSize:14, padding:"16px 24px", borderRadius:16, textDecoration:"none" }}>💬 Întreabă pe WhatsApp</a>
            </div>
            <p style={{ color:"#444", fontSize:12, marginTop:16 }}>Fără contract · Cancel oricând · Zero-Human Companies · Org Chart AI · MIT Open Source</p>
          </div>
        </section>
        <footer style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "24px",
          textAlign: "center",
          color: "#444",
          fontSize: 13
        }}>
          Paperclip este un proiect open-source · Creat de @dotta · Licență MIT
          <span style={{ margin: "0 12px", color: "#333" }}>·</span>
          Pagina prezentată de <span style={{ color: "#50c878" }}>daeu.online</span>
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
