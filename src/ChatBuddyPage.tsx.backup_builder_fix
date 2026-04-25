import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle, Send, Loader2 } from "lucide-react";

const API_URL = "https://buddy.daeu.online/chat";
const accentHex = "#f97316";

interface Message {
  role: "user" | "assistant";
  content: string;
  trigger?: string;
  ts?: string;
}

const ChatBuddyPage = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Salut! Sunt **Buddy PREMIUM Enterprise**, partenerul tău strategic permanent pentru DaRomania.\n\nSpune-mi — cu ce te pot ajuta azi?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { role: "user", content: text };
    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const history = newMessages.slice(0, -1).map((m) => ({
        role: m.role,
        content: m.content,
      }));

      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text, history, state: {} }),
      });

      const data = await res.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: data.reply, trigger: data.trigger, ts: data.timestamp },
      ]);
    } catch (e) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "⚠️ Eroare de conexiune. Încearcă din nou." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const formatContent = (text: string) => {
    return text
      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.*?)\*/g, "<em>$1</em>")
      .replace(/\n/g, "<br/>");
  };

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "#000000", color: "#ffffff" }}>
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 border-b shrink-0" style={{ borderColor: "#1a1a1a" }}>
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border border-white/10 bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white transition-all"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            DaRomania
          </Link>
          <span className="text-xl font-bold flex items-center gap-2" style={{ color: accentHex }}>
            <MessageCircle className="h-5 w-5" />
            Buddy PREMIUM
          </span>
        </div>
        <span className="text-xs text-gray-500">Chief of Staff AI · DaRomania</span>
      </nav>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4 max-w-3xl w-full mx-auto">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            {msg.role === "assistant" && (
              <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mr-3 mt-1 text-sm font-bold"
                style={{ background: accentHex, color: "#000" }}>B</div>
            )}
            <div
              className="max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed"
              style={
                msg.role === "user"
                  ? { background: accentHex, color: "#000" }
                  : { background: "#0f0f0f", border: "1px solid #1a1a1a", color: "#fff" }
              }
              dangerouslySetInnerHTML={{ __html: formatContent(msg.content) }}
            />
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="w-8 h-8 rounded-full flex items-center justify-center shrink-0 mr-3 text-sm font-bold"
              style={{ background: accentHex, color: "#000" }}>B</div>
            <div className="rounded-2xl px-4 py-3 flex items-center gap-2"
              style={{ background: "#0f0f0f", border: "1px solid #1a1a1a" }}>
              <Loader2 className="h-4 w-4 animate-spin" style={{ color: accentHex }} />
              <span className="text-sm text-gray-400">Buddy gândește...</span>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="shrink-0 border-t px-4 py-4" style={{ borderColor: "#1a1a1a", background: "#000" }}>
        <div className="max-w-3xl mx-auto flex gap-3">
          <input
            className="flex-1 rounded-xl px-4 py-3 text-sm outline-none"
            style={{ background: "#0f0f0f", border: "1px solid #1a1a1a", color: "#fff" }}
            placeholder="Scrie un mesaj..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && !e.shiftKey && sendMessage()}
            disabled={loading}
          />
          <button
            onClick={sendMessage}
            disabled={loading || !input.trim()}
            className="px-4 py-3 rounded-xl font-semibold text-black transition-opacity hover:opacity-90 disabled:opacity-40"
            style={{ background: accentHex }}
          >
            <Send className="h-4 w-4" />
          </button>
        </div>
        <p className="text-center text-xs text-gray-600 mt-2">Buddy PREMIUM · Powered by SSociety</p>
      </div>
    </div>
  );
};

export default ChatBuddyPage;
