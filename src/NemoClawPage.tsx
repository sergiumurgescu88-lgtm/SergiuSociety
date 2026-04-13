import { useNavigate } from 'react-router-dom';
import DaRomaniaBackButton from './components/DaRomaniaBackButton';
import AiBuddyFab from './components/AiBuddyFab';

export default function NemoClawPage() {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0a0a0a]">
      <DaRomaniaBackButton onClick={() => navigate('/')} />

      <div className="sticky top-0 z-10 flex items-center justify-end gap-4 border-b border-[#1a1a1a] bg-[#0a0a0a]/95 px-4 py-3 backdrop-blur sm:justify-between sm:pl-60">
        <span className="hidden text-sm font-black text-white sm:block">⚡ NemoClaw — Agent AI în sandbox securizat</span>
        <a href="https://nemoclaw.daeu.online" target="_blank" rel="noopener noreferrer" className="text-xs font-black text-black bg-[#22c55e] px-3 py-2 rounded-full no-underline">Deschide NemoClaw →</a>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">

        {/* HERO */}
        <div className="bg-gradient-to-br from-indigo-700 via-violet-700 to-purple-800 rounded-3xl p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1 text-sm font-bold mb-4">
              ⚡ Powered by NVIDIA NemoClaw
            </div>
            <h2 className="text-2xl md:text-5xl font-black mb-3 leading-tight">NemoClaw<br/><span className="text-violet-200">Sandbox AI securizat</span></h2>
            <p className="text-white/80 text-lg mb-6 max-w-2xl">Agentul tău AI care rulează în sandbox complet izolat — Landlock + seccomp + netns. <strong className="text-white">Execuție autonomă cu GPT-5.4, Brave Search și Telegram.</strong> Sergiu îl configurează, tu doar dai comenzi.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[['GPT-5.4','Cloud AI'],['🔍','Brave Search'],['📱','Telegram'],['🔒','Sandbox izolat']].map(([n,l]) => (
                <div key={l} className="bg-white/10 backdrop-blur rounded-2xl p-4 text-center border border-white/20">
                  <p className="text-2xl font-black">{n}</p>
                  <p className="text-xs text-white/70 mt-1">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* SECURITATE */}
        <div className="bg-[#111111] border-2 border-[#f59e0b]/30 rounded-3xl p-6">
          <p className="text-[#f59e0b] font-black text-lg mb-2">🔒 Securitate la nivel enterprise</p>
          <p className="text-slate-400 text-sm leading-relaxed">NemoClaw rulează într-un sandbox complet izolat cu <strong className="text-white">Landlock, seccomp și network namespaces</strong>. Agentul nu poate accesa fișierele tale locale, nu poate face conexiuni neautorizate și nu poate scăpa din sandbox. Datele tale sunt protejate 100%.</p>
        </div>

        {/* CE POATE FACE */}
        <div>
          <h3 className="text-2xl font-black text-white mb-4">🦾 Ce poate face NemoClaw</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: '🧠', title: 'GPT-5.4 Cloud', desc: 'Inference rapid fără GPU local. Acces instant la cel mai puternic model AI disponibil, direct din cloud. Răspunsuri complexe în secunde.', color: 'border-violet-800 bg-violet-950/30' },
              { icon: '🔍', title: 'Brave Web Search', desc: 'Acces internet în timp real. Agentul caută, citește și sintetizează informații live de pe web — research automat complet.', color: 'border-indigo-800 bg-indigo-950/30' },
              { icon: '📱', title: 'Telegram Bridge', desc: 'Controlează agentul direct din Telegram. Trimite comenzi, primește rezultate — oriunde, oricând. Zero friction.', color: 'border-violet-800 bg-violet-950/30' },
              { icon: '🔒', title: 'Sandbox izolat', desc: 'Landlock + seccomp + netns. Agentul rulează complet izolat — nu poate accesa fișiere locale sau rețeaua fără permisiune explicită.', color: 'border-indigo-800 bg-indigo-950/30' },
              { icon: '💻', title: 'Execuție cod securizată', desc: 'Scrie și rulează cod Python, JavaScript, Bash — totul în sandbox. Testează fără risc, deployează cu încredere.', color: 'border-violet-800 bg-violet-950/30' },
              { icon: '📁', title: 'File management', desc: 'Creează, editează și organizează fișiere în spațiul securizat. Generează rapoarte, scripturi, documentație — totul automat.', color: 'border-indigo-800 bg-indigo-950/30' },
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
              ['1', 'Conectează-te', 'Accesează nemoclaw.daeu.online sau trimite un mesaj pe Telegram.'],
              ['2', 'Descrie task-ul', 'Scrie în limbaj natural ce ai nevoie — cod, research, analiză, fișiere.'],
              ['3', 'NemoClaw execută', 'Agentul analizează, folosește tool-urile necesare și lucrează autonom în sandbox.'],
              ['4', 'Primești rezultatul', 'Cod testat, fișiere generate, rapoarte complete — totul securizat și gata de folosit.'],
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
            <h3 className="text-2xl font-black text-white">Implementează NemoClaw</h3>
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
              <a href="https://wa.me/40768676141?text=Salut!%20Vreau%20s%C4%83%20implementez%20NemoClaw" target="_blank" rel="noopener noreferrer"
                className="inline-block text-sm text-[#22c55e] hover:text-[#4ade80] transition-colors no-underline">
                💬 Întrebări? WhatsApp →
              </a>
            </div>
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="bg-[#22c55e] rounded-3xl p-8 text-center">
          <h3 className="text-3xl font-black text-black mb-2">Sandbox AI securizat, gata de acțiune</h3>
          <p className="text-black/70 font-bold text-lg mb-6">Zero config · Securitate maximă · Start instant</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://nemoclaw.daeu.online" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-full font-black hover:bg-black/80 transition-all text-lg no-underline">
              Începe acum →
            </a>
            <a href="https://wa.me/40768676141?text=Vreau%20NemoClaw" target="_blank" rel="noopener noreferrer"
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
