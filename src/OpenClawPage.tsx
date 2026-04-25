import { useNavigate } from 'react-router-dom';
import DaRomaniaBackButton from './components/DaRomaniaBackButton';

interface Props {
  onClose?: () => void;
}

export default function OpenClawPage({ onClose }: Props) {
  const navigate = useNavigate();
  const goBack = () => {
    if (onClose) onClose();
    else navigate('/');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-background">
      <DaRomaniaBackButton onClick={goBack} />
      {/* Header */}
      <div className="sticky top-0 z-10 flex items-center justify-end gap-4 border-b border-border bg-background/95 px-4 py-3 backdrop-blur sm:justify-between sm:pl-60">
        <span className="hidden text-sm font-black text-foreground sm:block">🤖 OpenClaw AI — Cel mai viral agent AI din 2026</span>
        <a href="https://build.nvidia.com" target="_blank" rel="noopener noreferrer" className="text-xs font-black text-green-700 bg-green-100 px-3 py-2 rounded-full">NVIDIA Gratuit →</a>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8 space-y-8">

        {/* HERO */}
        <div className="bg-gradient-to-br from-purple-700 via-indigo-700 to-blue-800 rounded-3xl p-8 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32" />
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1 text-sm font-bold mb-4">
              🔥 #1 cel mai viral proiect GitHub din 2026
            </div>
            <h2 className="text-2xl md:text-5xl font-black mb-3 leading-tight">OpenClaw AI<br/><span className="text-purple-300">Agentul tau personal</span></h2>
            <p className="text-white/80 text-lg mb-6 max-w-2xl">Nu e un chatbot. E un agent AI care <strong className="text-white">executa task-uri reale</strong> pe calculatorul tau — trimite emailuri, scrie cod, controleaza aplicatii, raspunde pe WhatsApp si Telegram, 24/7, fara sa platesti nimic.</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[['247K+','Stele GitHub'],['60 zile','0 → 250K stars'],['13.700+','Skills disponibile'],['0 EUR','Cost lunar cu NVIDIA']].map(([n,l]) => (
                <div key={l} className="bg-white/10 backdrop-blur rounded-2xl p-4 text-center border border-white/20">
                  <p className="text-2xl font-black">{n}</p>
                  <p className="text-xs text-white/70 mt-1">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RECORD BREAKING */}
        <div className="bg-amber-50 border-2 border-amber-300 rounded-3xl p-6">
          <p className="text-amber-800 font-black text-lg mb-2">⚡ Record absolut in istoria GitHub</p>
          <p className="text-amber-700 text-sm leading-relaxed">OpenClaw a crescut de la 0 la 250.000 de stele in doar 60 de zile — <strong>mai rapid decat React, Linux si orice alt proiect open-source din istorie.</strong> Creatorul sau, Peter Steinberger, a fost angajat de OpenAI pe baza acestui succes. O fundatie non-profit a preluat proiectul pentru a-l mentine gratuit pentru totdeauna.</p>
        </div>

        {/* CE POATE FACE */}
        <div>
          <h3 className="text-2xl font-black text-slate-900 mb-4">🦾 Ce poate face OpenClaw pentru tine</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: '📱', title: '20+ Platforme de mesagerie', desc: 'WhatsApp, Telegram, Slack, Discord, iMessage, Signal, Teams, WeChat, LINE, Matrix si altele. Un singur agent, toate canalele.', color: 'bg-blue-50 border-blue-200' },
              { icon: '🧠', title: 'Memorie persistenta (spre deosebire de ChatGPT)', desc: 'Isi aminteste tot ce i-ai spus vreodata. Stie preferintele tale, istoricul, proiectele. Nu uita niciodata nimic.', color: 'bg-purple-50 border-purple-200' },
              { icon: '🌐', title: 'Control browser complet', desc: 'Deschide Chrome, navigheaza, completeaza formulare, extrage date, face comenzi online. Fara sa te atingi de tastatura.', color: 'bg-green-50 border-green-200' },
              { icon: '🎙️', title: 'Comenzi vocale (Wake Word)', desc: 'Pe macOS si iOS: trezesti agentul cu vocea. Pe Android: Talk Mode continuu. Ca Jarvis din Iron Man.', color: 'bg-orange-50 border-orange-200' },
              { icon: '⚙️', title: 'Automatizari complexe (Cron)', desc: 'Ruleaza task-uri la ore fixe: rapoarte zilnice, monitorizare preturi, postari sociale, backup-uri, emailuri de follow-up.', color: 'bg-red-50 border-red-200' },
              { icon: '🤖', title: 'Multi-agent routing', desc: 'Poti crea agenti separati: unul pentru business, unul pentru personal, unul pentru cod. Fiecare cu personalitate si acces propriu.', color: 'bg-teal-50 border-teal-200' },
              { icon: '🎬', title: 'Video + muzica generata AI', desc: 'Ultima versiune (2026.4.5) include generare video si muzica built-in. Pipeline complet de content dintr-o comanda.', color: 'bg-pink-50 border-pink-200' },
              { icon: '🔒', title: 'Local-first, datele tale raman la tine', desc: 'Ruleaza pe calculatorul tau. Nicio companie nu iti vede datele. Poti expune securizat via Tailscale pentru acces remote.', color: 'bg-slate-50 border-slate-200' },
            ].map(f => (
              <div key={f.title} className={`rounded-2xl border-2 p-5 ${f.color}`}>
                <p className="text-2xl mb-2">{f.icon}</p>
                <p className="font-black text-slate-900 mb-1">{f.title}</p>
                <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* TESTIMONIALE */}
        <div className="bg-slate-900 rounded-3xl p-6 md:p-8">
          <h3 className="text-xl font-black text-white mb-5">💬 Ce spun utilizatorii reali</h3>
          <div className="space-y-3">
            {[
              ['"L-am botezat Jarvis. Imi face briefing zilnic, verifica calendarul si ma anunta cand sa plec la pickleball in functie de trafic."', '@BraydonCoyer'],
              ['"Am dat comanda de pe telefon: fix tests via Telegram. A rulat loop-ul, mi-a trimis progres la fiecare 5 iteratii. Autonom 100%."', '@php100'],
              ['"OpenClaw-ul meu a realizat ca are nevoie de API key... a deschis browserul... a deschis Google Cloud Console... si si-a configurat singur token-ul."', '@Infoxicador'],
              ['"Mi-am facut primul asistent AI personal pe WhatsApp. Imi construieste second brain-ul in timp ce chat-uiesc."', '@christinetyip'],
              ['"Am rulat OpenClaw pe Raspberry Pi cu Cloudflare. Am construit un website de pe telefon in minute."', '@AlbertMoral'],
            ].map(([q,a]) => (
              <div key={a} className="bg-white/5 rounded-2xl p-4 border border-white/10">
                <p className="text-white/90 text-sm italic leading-relaxed mb-2">{q}</p>
                <p className="text-purple-400 text-xs font-bold">{a} · Twitter/X</p>
              </div>
            ))}
          </div>
        </div>

        {/* COMPARATIE */}
        <div>
          <h3 className="text-2xl font-black text-slate-900 mb-4">📊 OpenClaw vs ChatGPT vs Abonamente</h3>
          <div className="overflow-x-auto rounded-2xl border border-slate-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-slate-900 text-white">
                  <th className="text-left p-4 font-black">Functie</th>
                  <th className="text-center p-4 font-black text-purple-400">OpenClaw + NVIDIA</th>
                  <th className="text-center p-4 font-black text-slate-400">ChatGPT Plus</th>
                  <th className="text-center p-4 font-black text-slate-400">Alt SaaS</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ['Cost lunar','0 EUR','$20/luna','$50-200/luna'],
                  ['Memorie persistenta','✅ Da','❌ Limitata','⚠️ Partiala'],
                  ['WhatsApp + Telegram','✅ Ambele','❌ Nu','⚠️ Uneori'],
                  ['Ruleaza local (privat)','✅ 100%','❌ Cloud','❌ Cloud'],
                  ['Control browser','✅ Complet','⚠️ Limitat','❌ Nu'],
                  ['Automatizari Cron','✅ Da','❌ Nu','⚠️ Platit'],
                  ['100+ modele AI','✅ Da (NVIDIA)','❌ Doar GPT','❌ 1-2'],
                  ['Open-source','✅ MIT','❌ Proprietar','❌ Proprietar'],
                ].map(([f,a,b,c], i) => (
                  <tr key={f} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                    <td className="p-4 font-bold text-slate-900">{f}</td>
                    <td className="p-4 text-center font-black text-purple-700 bg-purple-50">{a}</td>
                    <td className="p-4 text-center text-slate-500">{b}</td>
                    <td className="p-4 text-center text-slate-500">{c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* PASUL 1 */}
        <div className="bg-white rounded-3xl border-2 border-green-200 p-6">
          <div className="flex items-center gap-3 mb-5">
            <span className="bg-green-600 text-white font-black w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0">1</span>
            <div>
              <h3 className="text-xl font-black text-slate-900">Obtine API-ul NVIDIA — Gratuit</h3>
              <p className="text-sm text-slate-500">1.000 credite la inregistrare · 100+ modele AI de top</p>
            </div>
          </div>
          <div className="space-y-3">
            {[
              ['A','build.nvidia.com','Deschide platforma NVIDIA pentru dezvoltatori. Inregistrare 100% gratuita.','https://build.nvidia.com'],
              ['B','Creeaza cont','Sign Up cu email + verificare telefon. Sub 2 minute.', null],
              ['C','Genereaza cheia','Settings → API Keys → Generate → Never Expire → NGC Catalog + Public API → Generate.',null],
              ['D','Salveaza cheia','Formatul: nvapi-xxxx... Primesti 1.000 credite instant. Nu o impartasi cu nimeni!',null],
            ].map(([s,t,d,l]) => (
              <div key={s as string} className="flex gap-3 bg-green-50 rounded-2xl p-4 items-start">
                <span className="bg-green-600 text-white font-black text-sm w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">{s}</span>
                <div>
                  <p className="font-black text-slate-900">{t}</p>
                  <p className="text-slate-600 text-sm">{d}</p>
                  {l && <a href={l} target="_blank" rel="noopener noreferrer" className="text-green-700 font-bold text-sm">{l} →</a>}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-green-100 rounded-xl p-3">
            <p className="text-green-800 font-bold text-sm">🆓 Modele gratuite: Qwen 3.5-397B · DeepSeek V3 · Kimi K2.5 · Llama 3.3 70B · Mistral Large + 100 altele</p>
          </div>
        </div>

        {/* PASUL 2 */}
        <div className="bg-white rounded-3xl border-2 border-purple-200 p-6">
          <div className="flex items-center gap-3 mb-5">
            <span className="bg-purple-600 text-white font-black w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0">2</span>
            <div>
              <h3 className="text-xl font-black text-slate-900">Instaleaza OpenClaw</h3>
              <p className="text-sm text-slate-500">Windows · Mac · Linux — sub 10 minute</p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="border border-slate-200 rounded-2xl p-4">
              <p className="font-black text-slate-800 mb-2">🪟 Windows — PowerShell ca Administrator</p>
              <div className="bg-slate-900 rounded-xl p-3"><code className="text-green-400 text-sm font-mono">iwr https://openclaw.ai/install.ps1 | iex</code></div>
            </div>
            <div className="border border-slate-200 rounded-2xl p-4">
              <p className="font-black text-slate-800 mb-2">🍎 Mac / 🐧 Linux — Terminal</p>
              <div className="bg-slate-900 rounded-xl p-3"><code className="text-green-400 text-sm font-mono">curl -fsSL https://openclaw.ai/install.sh | sh</code></div>
            </div>
            <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4 space-y-1 text-sm text-purple-900">
              <p className="font-black mb-2">⚙️ Configurare wizard (porneste automat):</p>
              <p>1. AI Provider → <strong>NVIDIA NIM</strong></p>
              <p>2. Introdu cheia <strong>nvapi-...</strong> din Pasul 1</p>
              <p>3. Model → <strong>qwen/qwen3.5-397b-a17b</strong></p>
              <p>4. Channel → <strong>Telegram</strong></p>
            </div>
            <div className="bg-slate-900 rounded-xl p-3">
              <code className="text-green-400 text-sm font-mono">openclaw gateway status</code>
              <p className="text-green-500 text-xs mt-1">✅ Running — port 18789</p>
            </div>
          </div>
        </div>

        {/* PASUL 3 */}
        <div className="bg-white rounded-3xl border-2 border-blue-200 p-6">
          <div className="flex items-center gap-3 mb-5">
            <span className="bg-blue-600 text-white font-black w-10 h-10 rounded-full flex items-center justify-center text-lg flex-shrink-0">3</span>
            <div>
              <h3 className="text-xl font-black text-slate-900">Conecteaza Telegram</h3>
              <p className="text-sm text-slate-500">Controleaza agentul din telefon, oriunde</p>
            </div>
          </div>
          <div className="space-y-3">
            {[
              ['1','Creeaza Bot Telegram','Telegram → @BotFather → /newbot → nume + username → primesti TOKEN'],
              ['2','Adauga in OpenClaw','localhost:18789 → Settings → Channels → Telegram → lipeste TOKEN → Save'],
              ['3','Testeaza','Cauta bot-ul in Telegram → /start → scrie orice → raspunde instant!'],
            ].map(([s,t,d]) => (
              <div key={s} className="flex gap-3 bg-blue-50 rounded-2xl p-4 items-start">
                <span className="bg-blue-600 text-white font-black text-sm w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">{s}</span>
                <div>
                  <p className="font-black text-slate-900">{t}</p>
                  <p className="text-slate-600 text-sm">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* COMENZI */}
        <div className="bg-slate-900 rounded-3xl p-6 text-white">
          <h3 className="text-xl font-black mb-4">⌨️ Comenzi esentiale</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {[
              ['openclaw gateway start','Porneste agentul'],
              ['openclaw gateway stop','Opreste agentul'],
              ['openclaw gateway status','Verifica statusul'],
              ['openclaw plugins list','Toate plugin-urile'],
              ['openclaw models list','Modele disponibile'],
              ['openclaw doctor','Diagnosticare automata'],
            ].map(([cmd, desc]) => (
              <div key={cmd} className="bg-slate-800 rounded-xl p-3 flex items-center justify-between gap-2">
                <code className="text-green-400 text-xs font-mono">{cmd}</code>
                <span className="text-slate-500 text-xs shrink-0">{desc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-br from-purple-600 to-indigo-700 rounded-3xl p-8 text-white text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1 text-sm font-bold mb-4">
            🚀 Sergiu il configureaza pentru tine
          </div>
          <h3 className="text-3xl font-black mb-2">Gata in 30 de minute.</h3>
          <p className="text-white/80 text-lg mb-2">NVIDIA API + OpenClaw + Telegram + primul tau agent AI functional.</p>
          <p className="text-white/60 text-sm mb-6">Tu nu faci nimic tehnic. Sergiu instaleaza, configureaza, testeaza si iti preda agentul gata de folosit.</p>
          <div className="bg-white/10 rounded-2xl p-4 mb-6 inline-block">
            <p className="text-4xl font-black">$19</p>
            <p className="text-white/70 text-sm">abonament lunar · anulezi oricând</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="https://wa.me/40768676141?text=Vreau%20OpenClaw%20configurat%20pentru%20proiectul%20meu" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-black hover:bg-green-600 transition-all text-lg no-underline">
              💬 Vreau OpenClaw — $19/lună
            </a>
            <a href="https://build.nvidia.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-white/20 text-white px-6 py-4 rounded-full font-black hover:bg-white/30 transition-all no-underline">
              🔑 NVIDIA API Gratuit
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
