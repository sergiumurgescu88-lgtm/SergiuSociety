import { useState, useRef, useEffect } from "react";

const BUDDY_API = "http://localhost:8090";

interface Message {
  role: "user" | "assistant";
  content: string;
  trigger?: string | null;
}

export default function BuddyChat() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "Bună ziua! Sunt Buddy, partenerul tău strategic DaRomânia. Cu ce domeniu activezi și ce vrei să construim împreună?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const userId = useRef(`user_${Math.random().toString(36).slice(2)}`);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const send = async () => {
    if (!input.trim() || loading) return;
    const userMsg = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMsg }]);
    const lower = userMsg.toLowerCase();

    if (
      lower.includes("site") ||
      lower.includes("website") ||
      lower.includes("landing page") ||
      lower.includes("pagina") ||
      lower.includes("restaurant") ||
      lower.includes("business")
    ) {
      try {
        const res = await fetch("https://buddy.daeu.online/create-page", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            page_name: "BusinessLandingPage",
            title: "Business Premium Website",
            subtitle: userMsg
          })
        });

        const data = await res.json();

        if (data.success) {
          setMessages(prev => [
            ...prev,
            {
              role: "assistant",
              content: "🚀 Pagina a fost creată automat: " + data.file
            }
          ]);
          return;
        }
      } catch (e) {
        console.error("builder error", e);
      }
    }


    setLoading(true);

    try {
      const res = await fetch(`${BUDDY_API}/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ user_id: userId.current, message: userMsg }),
      });
      const data = await res.json();
      setMessages(prev => [...prev, { role: "assistant", content: data.response, trigger: data.trigger }]);
    } catch {
      setMessages(prev => [...prev, { role: "assistant", content: "Conexiune temporar indisponibilă. Încearcă din nou." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "600px", maxWidth: "800px", margin: "0 auto", background: "#0f0f0f", borderRadius: "16px", overflow: "hidden", border: "1px solid #2a2a2a" }}>
      {/* Header */}
      <div style={{ padding: "16px 20px", background: "#1a1a1a", borderBottom: "1px solid #2a2a2a", display: "flex", alignItems: "center", gap: "12px" }}>
        <div style={{ width: "36px", height: "36px", borderRadius: "50%", background: "linear-gradient(135deg, #7c3aed, #4f46e5)", display: "flex", alignItems: "center", justifyContent: "center", color: "white", fontWeight: "bold", fontSize: "16px" }}>B</div>
        <div>
          <div style={{ color: "white", fontWeight: "600", fontSize: "15px" }}>Buddy PREMIUM</div>
          <div style={{ color: "#7c3aed", fontSize: "12px" }}>Chief of Staff AI · DaRomânia</div>
        </div>
        <div style={{ marginLeft: "auto", width: "8px", height: "8px", borderRadius: "50%", background: "#22c55e" }} />
      </div>

      {/* Messages */}
      <div style={{ flex: 1, overflowY: "auto", padding: "20px", display: "flex", flexDirection: "column", gap: "14px" }}>
        {messages.map((m, i) => (
          <div key={i} style={{ display: "flex", justifyContent: m.role === "user" ? "flex-end" : "flex-start" }}>
            <div style={{
              maxWidth: "75%",
              padding: "12px 16px",
              borderRadius: m.role === "user" ? "18px 18px 4px 18px" : "18px 18px 18px 4px",
              background: m.role === "user" ? "linear-gradient(135deg, #7c3aed, #4f46e5)" : "#1e1e1e",
              color: "white",
              fontSize: "14px",
              lineHeight: "1.6",
              border: m.role === "assistant" ? "1px solid #2a2a2a" : "none",
              whiteSpace: "pre-wrap",
            }}>
              {m.content}
              {m.trigger && <div style={{ marginTop: "8px", fontSize: "11px", color: "#7c3aed", opacity: 0.8 }}>⚡ {m.trigger}</div>}
            </div>
          </div>
        ))}
        {loading && (
          <div style={{ display: "flex" }}>
            <div style={{ padding: "12px 16px", borderRadius: "18px 18px 18px 4px", background: "#1e1e1e", border: "1px solid #2a2a2a", color: "#666", fontSize: "14px" }}>
              Buddy analizează...
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div style={{ padding: "16px 20px", background: "#1a1a1a", borderTop: "1px solid #2a2a2a", display: "flex", gap: "10px" }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === "Enter" && !e.shiftKey && send()}
          placeholder="Scrie-i lui Buddy..."
          style={{ flex: 1, padding: "10px 16px", borderRadius: "24px", background: "#0f0f0f", border: "1px solid #2a2a2a", color: "white", fontSize: "14px", outline: "none" }}
        />
        <button
          onClick={send}
          disabled={loading}
          style={{ padding: "10px 20px", borderRadius: "24px", background: loading ? "#333" : "linear-gradient(135deg, #7c3aed, #4f46e5)", color: "white", border: "none", cursor: loading ? "default" : "pointer", fontSize: "14px", fontWeight: "600" }}
        >
          Trimite
        </button>
      </div>
    </div>
  );
}
