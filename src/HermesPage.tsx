import { useNavigate } from 'react-router-dom';
import DaRomaniaBackButton from './components/DaRomaniaBackButton';
import AiBuddyFab from './components/AiBuddyFab';

export default function HermesPage() {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0a0a0a]">
      <DaRomaniaBackButton onClick={() => navigate('/')} />

      <div className="sticky top-0 z-10 flex items-center justify-end gap-4 border-b border-[#1a1a1a] bg-[#0a0a0a]/95 px-4 py-3 backdrop-blur sm:justify-between sm:pl-60">
        <span className="hidden text-sm font-black text-white sm:block">🧠 HermesClaw — Agent AI Full-Stack</span>
        <a href="https://hermes.daromania.online" target="_blank" rel="noopener noreferrer" className="text-xs font-black text-black bg-[#22c55e] px-3 py-2 rounded-full no-underline">Deschide HermesClaw →</a>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">

        {/* HERO */}
        <div className="bg-gradient-to-br from-amber-600 via-orange-600 to-red-700 rounded-3xl p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1 text-sm font-bold mb-4">
              🧠 Kimi K2 Thinking · 28 Tools · 74 Skills
            </div>
            <h2 className="text-2xl md:text-5xl font-black mb-3 leading-tight">HermesClaw<br/><span className="text-amber-200">Agentul AI Full-Stack</span></h2>
            <p className="text-white/80 text-lg mb-6 max-w-2xl">Cel mai capabil agent AI cu 28 de tools active și 74 de skills specializate. <strong className="text-white">Execută autonom task-uri complexe — cod, research, DevOps, social media, data science.</strong> Powered by Kimi K2 Thinking.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[['🧠','Kimi K2 Thinking'],['28','Tools active'],['74','Skills'],['📱','Telegram Gateway']].map(([n,l]) => (
                <div key={l} className="bg-white/10 backdrop-blur rounded-2xl p-4 text-center border border-white/20">
                  <p className="text-2xl font-black">{n}</p>
                  <p className="text-xs text-white/70 mt-1">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CAPABILITIES */}
        <div className="bg-[#111111] border-2 border-[#f59e0b]/30 rounded-3xl p-6">
          <p className="text-[#f59e0b] font-black text-lg mb-2">⚡ Capabilități unice</p>
          <p className="text-slate-400 text-sm leading-relaxed">HermesClaw folosește <strong className="text-white">Kimi K2 Thinking</strong> — un model de raționament avansat care rezolvă probleme complexe pas cu pas. Cu 28 de tools (browser, cod, fișiere, web search, generare imagini) și 74 de skills (GitHub, DevOps, data science, social media), este cel mai versatil agent din ecosistem.</p>
        </div>

        {/* CE POATE FACE */}
        <div>
          <h3 className="text-2xl font-black text-white mb-4">🦾 Ce poate face HermesClaw</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: '🧠', title: 'Kimi K2 Thinking', desc: 'Model de raționament avansat. Rezolvă probleme complexe pas cu pas cu acuratețe maximă — matematică, logică, cod, strategii.', color: 'border-amber-800 bg-amber-950/30' },
              { icon: '🔧', title: '28 Tools active', desc: 'Browser automation, code execution, file management, web search, image generation, API calls și multe altele — toate disponibile instant.', color: 'border-orange-800 bg-orange-950/30' },
              { icon: '📚', title: '74 Skills specializate', desc: 'GitHub management, research academic, DevOps & CI/CD, data science, social media, content creation, SEO — gata de utilizare.', color: 'border-amber-800 bg-amber-950/30' },
              { icon: '📱', title: 'Telegram Gateway', desc: 'Trimite task-uri din Telegram, HermesClaw execută și livrează rezultate. Control complet de pe telefon — oriunde, oricând.', color: 'border-orange-800 bg-orange-950/30' },
              { icon: '🌐', title: 'Web Research autonom', desc: 'Caută pe web, citește articole, compară surse, sintetizează informații. Research complet livrat ca raport structurat.', color: 'border-amber-800 bg-amber-950/30' },
              { icon: '💻', title: 'Code & DevOps', desc: 'Scrie cod, face review, debug, deployment. Gestionează repositories, CI/CD pipelines, monitorizare — full-stack autonom.', color: 'border-orange-800 bg-orange-950/30' },
            ].map(f => (
              <div key={f.title} className={`rounded-2xl border-2 p-5 ${f.color}`}>
                <p className="text-2xl mb-2">{f.icon}</p>
                <p className="font-black text-white mb-1">{f.title}</p>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CUM FUNCTIONEAZA */}
        <div className="bg-[#111111] border border-[#1a1a1a] rounded-3xl p-6 md:p-8">
          <h3 className="text-xl font-black text-white mb-5">⚡ Cum funcționează</h3>
          <div className="space-y-3">
            {[
              ['1', 'Trimite un task', 'Pe Telegram sau direct pe hermes.daromania.online — scrie în limbaj natural.'],
              ['2', 'HermesClaw analizează', 'Selectează automat tool-urile și skill-urile necesare din cele 28+74 disponibile.'],
              ['3', 'Execuție autonomă', 'Lucrează independent — caută pe web, scrie cod, generează fișiere, face deploy.'],
              ['4', 'Primești rezultatul', 'Cod testat, rapoarte complete, fișiere generate — totul livrat direct.'],
            ].map(([s, t, d]) => (
              <div key={s} className="flex gap-3 bg-[#0a0a0a] rounded-2xl p-4 items-start border border-[#1a1a1a]">
                <span className="bg-[#22c55e] text-black font-black text-sm w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">{s}</span>
                <div>
                  <p className="font-black text-white">{t}</p>
                  <p className="text-slate-400 text-sm">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* PRICING */}
        <div className="flex justify-center">
          <div className="w-full max-w-[480px] rounded-3xl border-2 border-[#f59e0b] bg-[#111111] p-8 space-y-6 text-center">
            <div className="inline-flex items-center gap-2 bg-[#f59e0b]/10 rounded-full px-4 py-1 text-sm font-bold text-[#f59e0b]">
              🚀 Setup complet în 48h
            </div>
            <h3 className="text-2xl font-black text-white">Implementează HermesClaw</h3>
            <div className="bg-[#0a0a0a] rounded-2xl p-4 inline-block">
              <p className="text-4xl font-black text-[#f59e0b]">$9</p>
              <p className="text-slate-500 text-sm">plată unică · acces permanent</p>
            </div>
            <ul className="space-y-3 text-left text-slate-200 text-base">
              {['Acces direct la agent', 'Ghidaj pas cu pas prin chat', 'Support WhatsApp inclus', 'VPS setup complet'].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="text-[#22c55e]">✅</span> {item}
                </li>
              ))}
            </ul>
            <div className="space-y-3 pt-2">
              <a href="https://buy.stripe.com/bJe14o1Ht3ZCamfedh5os00" target="_blank" rel="noopener noreferrer"
                className="block w-full bg-[#f59e0b] hover:bg-[#eab308] text-black font-black text-lg px-8 py-4 rounded-2xl transition-all hover:scale-105 no-underline text-center">
                Începe acum — $9 →
              </a>
              <a href="https://wa.me/40768676141?text=Salut!%20Vreau%20s%C4%83%20implementez%20HermesClaw" target="_blank" rel="noopener noreferrer"
                className="inline-block text-sm text-[#22c55e] hover:text-[#4ade80] transition-colors no-underline">
                💬 Întrebări? WhatsApp →
              </a>
            </div>
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="bg-[#22c55e] rounded-3xl p-8 text-center">
          <h3 className="text-3xl font-black text-black mb-2">Full-stack AI, gata de acțiune</h3>
          <p className="text-black/70 font-bold text-lg mb-6">28 tools · 74 skills · Telegram · Zero config</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://hermes.daromania.online" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-full font-black hover:bg-black/80 transition-all text-lg no-underline">
              Pornește HermesClaw →
            </a>
            <a href="https://wa.me/40768676141?text=Vreau%20HermesClaw" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-black/20 text-black px-6 py-4 rounded-full font-black hover:bg-black/30 transition-all no-underline">
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
      <AiBuddyFab />
    </div>
  );
}
