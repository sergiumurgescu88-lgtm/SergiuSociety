import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle, ExternalLink, Sparkles, Zap, Shield, Globe } from "lucide-react";

const ChatBuddyPage = () => {
  const accentHex = "#f97316"; // Orange accent

  const features = [
    {
      title: "AI Conversațional",
      description: "Chat inteligent cu înțelegere contextuală și răspunsuri naturale în limba română și engleză."
    },
    {
      title: "Asistent 24/7",
      description: "Disponibil non-stop pentru a te ajuta cu idei, strategii și soluții pentru businessul tău."
    },
    {
      title: "Integrare Rapidă",
      description: "Conectează-te instant cu AI Buddy prin interfața web sau integrează în propriile tale tool-uri."
    },
    {
      title: "Privat & Securizat",
      description: "Conversațiile tale sunt protejate și private, fără stocare pe servere terțe."
    },
    {
      title: "Multi-Platformă",
      description: "Accesează AI Buddy de pe orice dispozitiv - desktop, tabletă sau mobil."
    },
    {
      title: "Personalizabil",
      description: "Adaptează comportamentul AI-ului la nevoile specifice ale afacerii tale."
    }
  ];

  return (
    <div className="min-h-screen" style={{ background: "#000000", color: "#ffffff" }}>
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: "#1a1a1a" }}>
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border border-white/10 bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white transition-all"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            DaRomania
          </Link>
          <Link to="/chatbuddy" className="text-xl font-bold flex items-center gap-2" style={{ color: accentHex }}>
            <MessageCircle className="h-5 w-5" />
            Vibe Buddy
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <a
            href="https://buddy.daeu.online"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg text-sm font-semibold text-black transition-opacity hover:opacity-90"
            style={{ background: accentHex }}
          >
            🤖 Deschide Chat
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Vibe Buddy
        </h1>
        <p className="text-xl text-gray-400 mb-6">
          AI Companionul tău pentru idei, strategii și execuție
        </p>
        <blockquote className="text-lg italic text-gray-300 mb-8 max-w-2xl mx-auto border-l-4 pl-4 text-left" style={{ borderColor: accentHex }}>
          "Un partener de conversație care înțelege contextul și te ajută să transformi ideile în acțiuni concrete."
        </blockquote>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <span className="px-4 py-2 rounded-full text-sm font-semibold border" style={{ borderColor: accentHex, color: accentHex }}>
            24/7 Disponibil
          </span>
          <span className="px-4 py-2 rounded-full text-sm font-semibold border" style={{ borderColor: accentHex, color: accentHex }}>
            RO & EN
          </span>
          <span className="px-4 py-2 rounded-full text-sm font-semibold border" style={{ borderColor: accentHex, color: accentHex }}>
            Instant Response
          </span>
          <span className="px-4 py-2 rounded-full text-sm font-semibold border" style={{ borderColor: accentHex, color: accentHex }}>
            Free Access
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://buddy.daeu.online"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-lg font-bold text-black text-lg transition-opacity hover:opacity-90 flex items-center gap-2"
            style={{ background: accentHex }}
          >
            <MessageCircle className="h-5 w-5" />
            Deschide Chat Live →
          </a>
          <Link
            to="/"
            className="px-8 py-3 rounded-lg font-bold text-lg border transition-colors hover:bg-white/10 flex items-center gap-2"
            style={{ borderColor: "#333", color: "#fff" }}
          >
            <ArrowLeft className="h-5 w-5" />
            Înapoi la DaRomania
          </Link>
        </div>
      </section>

      {/* Features Grid */}
      <section className="max-w-5xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-bold text-center mb-12">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div key={i} className="rounded-xl p-6" style={{ background: "#0a0a0a", border: "1px solid #1a1a1a" }}>
              <h3 className="text-lg font-bold mb-2" style={{ color: accentHex }}>{feature.title}</h3>
              <p className="text-sm text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-3xl mx-auto px-6 pb-20 text-center">
        <div className="rounded-2xl p-8" style={{ background: "#0a0a0a", border: `2px solid ${accentHex}` }}>
          <h3 className="text-2xl font-bold mb-4">Începe Conversația</h3>
          <p className="text-gray-400 mb-6">
            Vibe Buddy este disponibil gratuit pentru toți membrii comunității DaRomania. 
            Fie că ai nevoie de idei, feedback sau ajutor cu execuția, suntem aici să te ajutăm.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="https://buddy.daeu.online"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-lg font-bold text-black text-lg transition-opacity hover:opacity-90 inline-flex items-center gap-2"
              style={{ background: accentHex }}
            >
              <ExternalLink className="h-5 w-5" />
              Accesează Chatul Live
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t px-6 py-8 text-center text-sm text-gray-500" style={{ borderColor: "#1a1a1a" }}>
        <div className="flex items-center justify-center gap-4">
          <Link to="/" className="hover:text-white transition-colors flex items-center gap-1">
            <ArrowLeft size={14} />
            Înapoi la DaRomania
          </Link>
          <span>•</span>
          <span>Powered by <strong className="text-white">SSociety</strong></span>
        </div>
      </footer>
    </div>
  );
};

export default ChatBuddyPage;
