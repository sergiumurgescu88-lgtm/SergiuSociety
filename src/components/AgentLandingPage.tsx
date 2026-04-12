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
      <nav className="flex items-center justify-between px-6 py-4 border-b" style={{ borderColor: "#1a1a1a" }}>
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold border border-white/10 bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white transition-all"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            🇷🇴 DaRomania
          </Link>
          <Link to={`/${name.toLowerCase().replace(/\s/g, "")}`} className="text-xl font-bold" style={{ color: accentHex }}>
          {name}
        </Link>
        </div>
        <div className="flex items-center gap-6">
          {otherAgents.map((agent) => (
            <Link key={agent.path} to={agent.path} className="text-sm text-gray-400 hover:text-white transition-colors">
              {agent.name}
            </Link>
          ))}
          <a
            href="https://pascupas.daromania.online"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-lg text-sm font-semibold text-black transition-opacity hover:opacity-90"
            style={{ background: accentHex }}
          >
            🤖 Vibe Buddy
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">{title}</h1>
        {subtitle && <p className="text-xl text-gray-400 mb-6">{subtitle}</p>}
        {quote && (
          <blockquote className="text-lg italic text-gray-300 mb-8 max-w-2xl mx-auto border-l-4 pl-4 text-left" style={{ borderColor: accentHex }}>
            "{quote.text}"
            {quote.author && <footer className="text-sm text-gray-500 mt-2">— {quote.author}</footer>}
          </blockquote>
        )}

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {stats.map((stat, i) => (
            <span key={i} className="px-4 py-2 rounded-full text-sm font-semibold border" style={{ borderColor: accentHex, color: accentHex }}>
              {stat.value} {stat.label}
            </span>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="https://pascupas.daromania.online"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-lg font-bold text-black text-lg transition-opacity hover:opacity-90"
            style={{ background: accentHex }}
          >
            Instalează cu AI Buddy →
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-lg font-bold text-lg border transition-colors hover:bg-white/10"
            style={{ borderColor: "#333", color: "#fff" }}
          >
            GitHub →
          </a>
        </div>
      </section>

      {/* Warning Box */}
      {warningBox && (
        <div className="max-w-3xl mx-auto px-6 mb-12">
          <div className="rounded-lg px-6 py-4 text-sm font-semibold" style={{ background: "#fbbf2420", border: "1px solid #fbbf24", color: "#fbbf24" }}>
            ⚠️ {warningBox}
          </div>
        </div>
      )}

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

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <div className="rounded-2xl p-8 text-center" style={{ background: "#0a0a0a", border: `2px solid ${accentHex}` }}>
          <h3 className="text-2xl font-bold mb-2">Pro Plan</h3>
          <p className="text-5xl font-bold mb-6" style={{ color: accentHex }}>$9<span className="text-lg text-gray-400">/lună</span></p>
          <div className="flex flex-col gap-3">
            <a
              href="https://buy.stripe.com/bJe14o1Ht3ZCamfedh5os00"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-lg font-bold text-black text-lg transition-opacity hover:opacity-90"
              style={{ background: "#fbbf24", display: "block" }}
            >
              Cumpără acum
            </a>
            <a
              href="https://wa.me/40768676141"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 rounded-lg font-bold text-lg border transition-colors hover:bg-white/10"
              style={{ borderColor: "#25D366", color: "#25D366", display: "block" }}
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t px-6 py-8 text-center text-sm text-gray-500" style={{ borderColor: "#1a1a1a" }}>
        <div className="flex items-center justify-center gap-4">
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors flex items-center gap-1">
            GitHub <ExternalLink size={14} />
          </a>
          <span>•</span>
          <span>Powered by <strong className="text-white">SSociety</strong></span>
        </div>
      </footer>
    </div>
  );
};

export default AgentLandingPage;
