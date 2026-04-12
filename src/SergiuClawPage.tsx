import { useNavigate } from 'react-router-dom';
import DaRomaniaBackButton from './components/DaRomaniaBackButton';
import AiBuddyFab from './components/AiBuddyFab';

export default function SergiuClawPage() {
  const navigate = useNavigate();

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0a0a0a]">
      <DaRomaniaBackButton onClick={() => navigate('/')} />

      <div className="sticky top-0 z-10 flex items-center justify-end gap-4 border-b border-[#1a1a1a] bg-[#0a0a0a]/95 px-4 py-3 backdrop-blur sm:justify-between sm:pl-60">
        <span className="hidden text-sm font-black text-white sm:block">🤖 SergiuClaw — Orchestrează-ți agenții AI</span>
        <a href="https://sergiuclaw.daromania.online" target="_blank" rel="noopener noreferrer" className="text-xs font-black text-black bg-[#22c55e] px-3 py-2 rounded-full no-underline">Deschide SergiuClaw →</a>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">

        {/* HERO */}
        <div className="bg-gradient-to-br from-[#22c55e] via-emerald-600 to-teal-700 rounded-3xl p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1 text-sm font-bold mb-4">
              🤖 Management AI Agents — All-in-One
            </div>
            <h2 className="text-2xl md:text-5xl font-black mb-3 leading-tight">SergiuClaw<br/><span className="text-emerald-200">Orchestrează-ți agenții</span></h2>
            <p className="text-white/80 text-lg mb-6 max-w-2xl">Platforma ta privată de management AI agents. Creează echipe de agenți specializați, asignează task-uri, automatizează workflow-uri și monitorizează totul dintr-un singur dashboard. <strong className="text-white">Sergiu configurează totul — tu doar dai comenzi.</strong></p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[['∞','Agenți AI'],['24/7','Rutine automate'],['100+','Task-uri/zi'],['$9','Setup complet']].map(([n,l]) => (
                <div key={l} className="bg-white/10 backdrop-blur rounded-2xl p-4 text-center border border-white/20">
                  <p className="text-2xl font-black">{n}</p>
                  <p className="text-xs text-white/70 mt-1">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CE POATE FACE */}
        <div>
          <h3 className="text-2xl font-black text-white mb-4">🦾 Ce poate face SergiuClaw</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: '🤖', title: 'Agenți AI multipli', desc: 'Creează echipe de agenți specializați — fiecare cu rolul, personalitatea și accesul propriu. CTO, CMO, asistent personal — toți lucrează simultan.', color: 'border-emerald-800 bg-emerald-950/30' },
              { icon: '📋', title: 'Task Management avansat', desc: 'Asignează task-uri agenților, setează priorități, urmărește progresul în timp real. Workflow-uri complexe gestionate simplu.', color: 'border-teal-800 bg-teal-950/30' },
              { icon: '🔄', title: 'Rutine automate (Cron)', desc: 'Automatizări care rulează fără intervenție umană: rapoarte zilnice, monitorizare competiție, postări sociale, backup-uri — totul programat.', color: 'border-emerald-800 bg-emerald-950/30' },
              { icon: '📊', title: 'Dashboard & Analytics', desc: 'Costuri, activitate, rapoarte într-un singur loc. Vizibilitate totală asupra întregii infrastructuri AI — știi exact ce face fiecare agent.', color: 'border-teal-800 bg-teal-950/30' },
              { icon: '🔗', title: 'Integrări native', desc: 'Conectează cu Telegram, WhatsApp, Slack, GitHub, Google Drive, Notion și altele. Agenții tăi au acces la uneltele tale.', color: 'border-emerald-800 bg-emerald-950/30' },
              { icon: '🛡️', title: 'Securitate enterprise', desc: 'Fiecare agent rulează izolat. Acces granular pe resurse. Audit log complet. Datele tale nu părăsesc infrastructura ta.', color: 'border-teal-800 bg-teal-950/30' },
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
              ['1', 'Definești agenții', 'Alegi rolurile, personalitățile și accesul fiecărui agent din interfața vizuală.'],
              ['2', 'Asignezi task-uri', 'Scrii ce vrei în limbaj natural — SergiuClaw distribuie automat la agentul potrivit.'],
              ['3', 'Automatizezi', 'Setezi rutine, triggers și pipelines. Agenții lucrează non-stop fără intervenție.'],
              ['4', 'Monitorizezi', 'Dashboard cu activitate, costuri și rezultate. Știi exact ce face fiecare agent.'],
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
            <h3 className="text-2xl font-black text-white">Implementează SergiuClaw</h3>
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
              <a href="https://wa.me/40768676141?text=Salut!%20Vreau%20s%C4%83%20implementez%20SergiuClaw" target="_blank" rel="noopener noreferrer"
                className="inline-block text-sm text-[#22c55e] hover:text-[#4ade80] transition-colors no-underline">
                💬 Întrebări? WhatsApp →
              </a>
            </div>
          </div>
        </div>

        {/* CTA FINAL */}
        <div className="bg-[#22c55e] rounded-3xl p-8 text-center">
          <h3 className="text-3xl font-black text-black mb-2">Gata să-ți orchestrezi agenții?</h3>
          <p className="text-black/70 font-bold text-lg mb-6">Cont gratuit · Setup în 5 minute · Fără card</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://sergiuclaw.daromania.online" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-full font-black hover:bg-black/80 transition-all text-lg no-underline">
              Deschide SergiuClaw →
            </a>
            <a href="https://wa.me/40768676141?text=Vreau%20SergiuClaw" target="_blank" rel="noopener noreferrer"
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
