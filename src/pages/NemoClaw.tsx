import { useEffect, useRef, useState } from "react";

export default function NemoClaw() {
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: "🔒",
      title: "OpenShell Sandbox",
      desc: "Runtime open-source care sandboxează agenții la nivel de proces cu Landlock + seccomp + network namespaces. Ca un browser sandbox, dar pentru agenți AI."
    },
    {
      icon: "📋",
      title: "Policy-Based Security",
      desc: "Politici scrise în YAML care controlează exact ce poate face agentul. Permite conexiunea la un cloud AI tool, blochează orice altceva din rețea."
    },
    {
      icon: "🤖",
      title: "Nemotron Local",
      desc: "Instalează modele NVIDIA Nemotron local pe hardware-ul disponibil: GeForce RTX, RTX PRO, DGX Station sau DGX Spark. Privacy maximă, fără cloud obligatoriu."
    },
    {
      icon: "⚡",
      title: "Single Command Setup",
      desc: "Un singur 'nemoclaw onboard' instalează OpenShell runtime, modelele open source și toate uneltele necesare pentru agenți always-on."
    },
    {
      icon: "🌐",
      title: "Privacy Router",
      desc: "Permite agenților să acceseze modele frontier din cloud când e nevoie, menținând guardrails-urile în loc. Echilibrul perfect între capabilitate și securitate."
    },
    {
      icon: "🏢",
      title: "Enterprise-Ready",
      desc: "Integrat cu Cisco, CrowdStrike, Google și Microsoft Security. Aduce guardrail-urile în stack-ul de securitate enterprise existent."
    },
    {
      icon: "🎯",
      title: "Agent Agnostic",
      desc: "Rulează orice coding agent — Claude Code, OpenClaw, Codex, Cursor. Funcționează cu modele de la OpenAI, Anthropic și familia Nemotron."
    },
    {
      icon: "📊",
      title: "State Management",
      desc: "Gestionare completă a stării agentului, blueprint lifecycle, onboarding ghidat și mesagerie gestionată prin canalele OpenShell."
    },
    {
      icon: "🛡️",
      title: "Trust Trilemma Rezolvat",
      desc: "Siguranță + capabilitate + autonomie — toate trei simultan. NemoClaw abordează tensiunea la nivel de infrastructură, nu la nivel de aplicație."
    }
  ];

  const hardware = [
    { name: "GeForce RTX", desc: "PC-uri și laptopuri gaming", icon: "🖥️" },
    { name: "RTX PRO", desc: "Workstation-uri profesionale", icon: "💼" },
    { name: "DGX Station", desc: "AI supercomputer desktop", icon: "🏗️" },
    { name: "DGX Spark", desc: "Compact AI powerhouse", icon: "✨" },
    { name: "AMD / Intel", desc: "Hardware agnostic", icon: "⚙️" },
    { name: "CPU-Only", desc: "Fără GPU necesar", icon: "🔧" }
  ];

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(135deg, #060810 0%, #080a10 50%, #060810 100%)",
      color: "#e8e8e8",
      fontFamily: "'DM Sans', 'Syne', sans-serif",
      overflowX: "hidden"
    }}>

      {/* Animated background grid */}
      <div style={{
        position: "fixed",
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(118,185,0,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(118,185,0,0.03) 1px, transparent 1px)
        `,
        backgroundSize: "60px 60px",
        pointerEvents: "none",
        zIndex: 0
      }} />

      {/* NVIDIA green glow top */}
      <div style={{
        position: "fixed",
        top: -200,
        left: "50%",
        transform: "translateX(-50%)",
        width: 800,
        height: 400,
        background: "radial-gradient(ellipse, rgba(118,185,0,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 0
      }} />

      <div style={{ position: "relative", zIndex: 1 }}>

        {/* Back button */}
        <div style={{ padding: "24px 40px" }}>
          <button
            onClick={() => window.history.back()}
            style={{
              background: "rgba(118,185,0,0.1)",
              border: "1px solid rgba(118,185,0,0.3)",
              color: "#76b900",
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
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(118,185,0,0.2)";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(118,185,0,0.6)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.background = "rgba(118,185,0,0.1)";
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(118,185,0,0.3)";
            }}
          >
            ← Înapoi la Agenți
          </button>
        </div>

        {/* HERO */}
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
            filter: "drop-shadow(0 0 30px rgba(118,185,0,0.5))",
            animation: "float 3s ease-in-out infinite"
          }}>
            🛡️
          </div>

          <div style={{
            display: "inline-block",
            background: "linear-gradient(135deg, rgba(118,185,0,0.15), rgba(118,185,0,0.05))",
            border: "1px solid rgba(118,185,0,0.3)",
            borderRadius: 100,
            padding: "6px 20px",
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase" as const,
            color: "#76b900",
            marginBottom: 28,
            display: "block" as const
          }}>
            NVIDIA · Early Preview · Apache 2.0 · Enterprise Security
          </div>

          <h1 style={{
            fontSize: "clamp(48px, 8vw, 90px)",
            fontWeight: 900,
            lineHeight: 1.05,
            marginBottom: 24,
            background: "linear-gradient(135deg, #fff 0%, #a8d800 50%, #76b900 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontFamily: "'Syne', sans-serif"
          }}>
            NemoClaw
          </h1>

          <p style={{
            fontSize: "clamp(18px, 2.5vw, 24px)",
            color: "#a0a0a0",
            maxWidth: 640,
            margin: "0 auto 16px",
            lineHeight: 1.6
          }}>
            OpenClaw cu securitate enterprise-grade.<br />
            <span style={{ color: "#a8d800" }}>Un singur command. Privacy. Guardrails. Confidență totală.</span>
          </p>

          <p style={{ fontSize: 16, color: "#666", maxWidth: 560, margin: "0 auto 48px", lineHeight: 1.7 }}>
            NVIDIA adaugă stratul de infrastructură care a lipsit agenților autonomi:
            sandbox la nivel de proces, politici YAML, modele locale Nemotron și integrare
            cu stack-urile de securitate enterprise.
          </p>

          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" as const, marginBottom: 32 }}>
            <a
              href="https://www.nvidia.com/en-us/ai/nemoclaw/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "linear-gradient(135deg, #76b900, #a8d800)",
                color: "#060810",
                padding: "16px 48px",
                borderRadius: 12,
                fontWeight: 800,
                fontSize: 16,
                textDecoration: "none",
                display: "inline-block",
                boxShadow: "0 8px 40px rgba(118,185,0,0.35)",
                transition: "all 0.2s"
              }}
            >
              🛡️ Începe cu NemoClaw
            </a>
            <a
              href="https://github.com/NVIDIA/NemoClaw"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "transparent",
                border: "2px solid rgba(118,185,0,0.4)",
                color: "#76b900",
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

        {/* Features grid */}
        <section style={{ padding: "0 24px 80px", maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <h2 style={{
              fontSize: "clamp(28px, 4vw, 44px)",
              fontWeight: 800,
              color: "#e8e8e8",
              fontFamily: "'Syne', sans-serif"
            }}>Ce face NemoClaw</h2>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
            gap: 20
          }}>
            {features.map((f, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 16,
                padding: "24px 28px",
                transition: "all 0.2s"
              }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{f.icon}</div>
                <h3 style={{ fontSize: 16, fontWeight: 700, color: "#76b900", marginBottom: 8 }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: "#888", lineHeight: 1.7 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Hardware */}
        <section style={{ padding: "0 24px 80px", maxWidth: 900, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{
              fontSize: "clamp(24px, 3vw, 36px)",
              fontWeight: 800,
              color: "#e8e8e8",
              fontFamily: "'Syne', sans-serif"
            }}>Hardware Suportat</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 16 }}>
            {hardware.map((h, i) => (
              <div key={i} style={{
                background: "rgba(118,185,0,0.04)",
                border: "1px solid rgba(118,185,0,0.15)",
                borderRadius: 12,
                padding: "20px 16px",
                textAlign: "center"
              }}>
                <div style={{ fontSize: 28, marginBottom: 8 }}>{h.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 14, color: "#a8d800", marginBottom: 4 }}>{h.name}</div>
                <div style={{ fontSize: 12, color: "#666" }}>{h.desc}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Architecture */}
        <section style={{ padding: "0 24px 80px", maxWidth: 800, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <h2 style={{
              fontSize: "clamp(24px, 3vw, 36px)",
              fontWeight: 800,
              color: "#e8e8e8",
              fontFamily: "'Syne', sans-serif"
            }}>Cum funcționează</h2>
          </div>
          <div style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 20,
            padding: "32px 40px",
            fontFamily: "monospace"
          }}>
            <div style={{ color: "#888", fontSize: 13, marginBottom: 20 }}>// NemoClaw Stack Architecture</div>
            {[
              { layer: "01 Agent Layer", desc: "OpenClaw / Claude Code / Codex / Cursor / Orice agent", color: "#76b900" },
              { layer: "02 OpenShell Runtime", desc: "Landlock + seccomp + netns · Policy YAML · Privacy Router", color: "#a8d800" },
              { layer: "03 Inference Layer", desc: "Nemotron Local · Cloud Frontier Models (OpenAI / Anthropic)", color: "#fff" }
            ].map((item, i) => (
              <div key={i}>
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  padding: "16px 20px",
                  background: i === 1 ? "rgba(118,185,0,0.06)" : "transparent",
                  borderRadius: 8,
                  borderLeft: `3px solid ${item.color}`
                }}>
                  <span style={{ color: item.color, fontWeight: 700, fontSize: 12, minWidth: 140 }}>{item.layer}</span>
                  <span style={{ color: "#888", fontSize: 13 }}>→</span>
                  <span style={{ color: "#c0c0c0", fontSize: 13 }}>{item.desc}</span>
                </div>
                {i < 2 && (
                  <div style={{ color: "#444", fontSize: 20, textAlign: "center", margin: "4px 0" }}>↕</div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Trust trilemma */}
        <section style={{ padding: "0 24px 80px", maxWidth: 800, margin: "0 auto" }}>
          <div style={{
            background: "linear-gradient(135deg, rgba(118,185,0,0.08), rgba(118,185,0,0.02))",
            border: "1px solid rgba(118,185,0,0.2)",
            borderRadius: 20,
            padding: "40px 48px",
            textAlign: "center"
          }}>
            <h3 style={{
              fontSize: "clamp(20px, 3vw, 28px)",
              fontWeight: 800,
              color: "#e8e8e8",
              marginBottom: 32,
              fontFamily: "'Syne', sans-serif"
            }}>Trilemma Agenților Rezolvată</h3>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
              {[
                { icon: "🛡️", label: "Siguranță", desc: "Sandbox hardware + politici YAML" },
                { icon: "⚡", label: "Capabilitate", desc: "Nemotron + modele frontier" },
                { icon: "🤖", label: "Autonomie", desc: "Always-on fără intervenție" }
              ].map((t, i) => (
                <div key={i} style={{
                  background: "rgba(118,185,0,0.08)",
                  borderRadius: 12,
                  padding: "20px 16px"
                }}>
                  <div style={{ fontSize: 28, marginBottom: 8 }}>{t.icon}</div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: "#a8d800", marginBottom: 6 }}>{t.label}</div>
                  <div style={{ fontSize: 12, color: "#888", lineHeight: 1.5 }}>{t.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Footer */}
        {/* BUDDY CTA */}
        <section style={{ padding:"60px 24px 80px", maxWidth:900, margin:"0 auto" }}>
          <div style={{ background:"rgba(255,255,255,0.02)", border:"1px solid rgba(118,185,0,0.15)", borderRadius:24, padding:"40px 32px", textAlign:"center" }}>
            <div style={{ display:"inline-block", background:"rgba(118,185,0,0.15)", border:"1px solid rgba(118,185,0,0.3)", borderRadius:999, padding:"6px 18px", fontSize:11, fontWeight:700, color:"#76b900", letterSpacing:2, textTransform:"uppercase", marginBottom:20 }}>
              🤖 Buddy — Agentul tău specializat
            </div>
            <h2 style={{ fontSize:"clamp(22px,4vw,38px)", fontWeight:900, color:"#e8e8e8", fontFamily:"'Syne',sans-serif", marginBottom:12, lineHeight:1.2 }}>
              Buddy instalează și securizează NemoClaw pe hardware-ul tău
            </h2>
            <p style={{ color:"#888", fontSize:15, maxWidth:600, margin:"0 auto 32px", lineHeight:1.7 }}>
              Nemotron local, sandbox Landlock + seccomp, politici YAML — sună complicat. Cu Buddy, totul e gata în câteva ore, fără să știi Linux avansat.
            </p>
            <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fill,minmax(240px,1fr))", gap:12, marginBottom:32, textAlign:"left" }}>
                <div style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:14, padding:"16px 18px" }}><div style={{ fontSize:22, marginBottom:8 }}>🔒</div><div style={{ fontWeight:700, fontSize:13, color:"#e0e0e0", marginBottom:4 }}>Sandbox Setup</div><div style={{ fontSize:12, color:"#777", lineHeight:1.6 }}>Configurare Landlock + seccomp + network namespaces pentru izolare completă</div></div>
                <div style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:14, padding:"16px 18px" }}><div style={{ fontSize:22, marginBottom:8 }}>🤖</div><div style={{ fontWeight:700, fontSize:13, color:"#e0e0e0", marginBottom:4 }}>Nemotron Local</div><div style={{ fontSize:12, color:"#777", lineHeight:1.6 }}>Instalare modele pe GeForce RTX sau DGX — optimizat pentru hardware-ul tău</div></div>
                <div style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:14, padding:"16px 18px" }}><div style={{ fontSize:22, marginBottom:8 }}>📋</div><div style={{ fontWeight:700, fontSize:13, color:"#e0e0e0", marginBottom:4 }}>Politici YAML</div><div style={{ fontSize:12, color:"#777", lineHeight:1.6 }}>Buddy scrie politicile de securitate personalizate pentru use case-ul tău</div></div>
                <div style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:14, padding:"16px 18px" }}><div style={{ fontSize:22, marginBottom:8 }}>⚡</div><div style={{ fontWeight:700, fontSize:13, color:"#e0e0e0", marginBottom:4 }}>One-Command Deploy</div><div style={{ fontSize:12, color:"#777", lineHeight:1.6 }}>nemoclaw onboard configurat corect de prima dată, fără trial and error</div></div>
                <div style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:14, padding:"16px 18px" }}><div style={{ fontSize:22, marginBottom:8 }}>🛡️</div><div style={{ fontWeight:700, fontSize:13, color:"#e0e0e0", marginBottom:4 }}>Audit & Compliance</div><div style={{ fontSize:12, color:"#777", lineHeight:1.6 }}>Logs de securitate, alertă la breșe, raport săptămânal</div></div>
                <div style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:14, padding:"16px 18px" }}><div style={{ fontSize:22, marginBottom:8 }}>🔄</div><div style={{ fontWeight:700, fontSize:13, color:"#e0e0e0", marginBottom:4 }}>Update Sigur</div><div style={{ fontSize:12, color:"#777", lineHeight:1.6 }}>Upgrade modele și runtime fără să pierzi configurațiile</div></div>
            </div>
            <div style={{ display:"flex", flexWrap:"wrap", gap:12, justifyContent:"center", alignItems:"center" }}>
              <a href="https://buy.stripe.com/bJe14o1Ht3ZCamfedh5os00" target="_blank" rel="noopener noreferrer" style={{ display:"inline-flex", alignItems:"center", gap:10, background:"#76b900", color:"#0a0a0a", fontWeight:900, fontSize:16, padding:"16px 32px", borderRadius:16, textDecoration:"none" }}>🤖 Activează Buddy — $9/lună</a>
              <a href="https://wa.me/40768676141?text=Salut%20Sergiu%2C%20vreau%20Buddy%20pentru%20NemoClaw" target="_blank" rel="noopener noreferrer" style={{ display:"inline-flex", alignItems:"center", gap:10, background:"rgba(37,211,102,0.12)", border:"1px solid rgba(37,211,102,0.3)", color:"#25d366", fontWeight:700, fontSize:14, padding:"16px 24px", borderRadius:16, textDecoration:"none" }}>💬 Întreabă pe WhatsApp</a>
            </div>
            <p style={{ color:"#444", fontSize:12, marginTop:16 }}>Fără contract · Cancel oricând · NVIDIA · Modele Locale · Apache 2.0 · Enterprise Security</p>
          </div>
        </section>
        <footer style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "24px",
          textAlign: "center",
          color: "#444",
          fontSize: 13
        }}>
          NemoClaw este un proiect open-source · Creat de NVIDIA Corporation · Licență Apache 2.0
          <span style={{ margin: "0 12px", color: "#333" }}>·</span>
          Pagina prezentată de <span style={{ color: "#76b900" }}>daeu.online</span>
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
