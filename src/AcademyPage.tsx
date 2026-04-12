import { useNavigate } from 'react-router-dom';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { ArsenalContent } from './ArsenalPage';
import { useAuth } from './auth/AuthContext';
import { useState } from 'react';
import DaRomaniaBackButton from './components/DaRomaniaBackButton';

interface Props {
  onClose?: () => void;
}

export default function AcademyPage({ onClose }: Props) {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  const [, setAuthMode] = useState<string>('signin');
  const [, setShowAuthModal] = useState(false);

  const goBack = () => {
    if (onClose) onClose();
    else navigate('/');
  };

  const goTo = (path: string) => {
    if (onClose) onClose();
    navigate(path);
  };

  const handleCheckout = async (jobTitle?: string, priceId?: string, mode?: string) => {
    if (!isAuthenticated) {
      setAuthMode('signin');
      setShowAuthModal(true);
      return;
    }
    try {
      const { supabase } = await import('@/integrations/supabase/client');
      const { data, error } = await supabase.functions.invoke('create-checkout', {
        body: { jobTitle: jobTitle || '', priceId, mode },
      });
      if (error) throw error;
      if (data?.url) window.open(data.url, '_blank');
    } catch (err: any) {
      console.error('Checkout error:', err);
      alert('Eroare la procesarea plății. Încearcă din nou.');
    }
  };

  const CATEGORIES = [
    {
      cat: '🤖 Unelte AI', color: 'from-purple-500 to-indigo-600', count: 10,
      projects: [
        { name: 'SSociety Studio — 6 Agenți AI', desc: 'CEO, CMO, CRO, CTO, CSO, CFO — agenți AI 24/7 pe marketing, vânzări, CRM și conținut. 500+ utilizatori, 3x ROI mediu.', link: 'https://ssocietystudio.lovable.app/', badge: 'LIVE' },
        { name: 'PromptLab — Laborator Prompturi AI', desc: 'Creează, testează și optimizează prompturi AI. A/B Testing, Library, Analytics. Compatibil GPT-4, Gemini, DeepSeek, Mistral.', link: 'https://ssocietypromptlab.lovable.app/', badge: 'LIVE' },
        { name: 'SSociety AI Studio — Content Factory', desc: 'Script AI → Audio TTS → Video Kie.ai → SEO → Auto-Publish. De la idee la publicat pe 7+ platforme în 15 minute.', link: 'https://ssocietyaistudio.lovable.app/', badge: 'LIVE' },
        { name: 'VentureAI — Agenți AI Autonomi', desc: 'Automatizează proiecte, descoperă oportunități de venit, maximizează revenue. 1200+ utilizatori, $2.4M venituri generate.', link: 'https://ssocietyagents.lovable.app/', badge: 'LIVE' },
        { name: 'AI Studio — Creație Vizuală', desc: 'Studio creativ AI: logo-uri, bannere, postări social media, materiale brand. Generează variante profesionale instant.', link: 'https://mrdelivery.ro', badge: 'LIVE' },
        { name: 'Aura AI — Asistent cu Personalitate', desc: 'Asistent AI cu personalitate configurabilă: ton, cunoștințe de domeniu, stil comunicare unic. Perfect pentru branduri.', link: 'https://mrdelivery.ro', badge: 'LIVE' },
        { name: 'Creator Studio — Video & Social Media', desc: 'Asistent AI creatori video: idei clipuri virale, scenarii, thumbnail-uri, titluri SEO, calendar publicare. YouTube, TikTok, Reels.', link: 'https://mrdelivery.ro', badge: 'LIVE' },
        { name: 'App Creator — Aplicații fără Cod', desc: 'Construiești propria aplicație doar descriind ce vrei. AI generează interfața, logica, funcționalitățile. Zero cod scris.', link: 'https://mrdelivery.ro', badge: 'LIVE' },
        { name: 'Snapshot Sparkle — Foto to Video', desc: 'Transformă orice fotografie în videoclip captivant: mișcare cinematică, efecte vizuale, muzică. Export pentru Reels/TikTok.', link: 'https://mrdelivery.ro', badge: 'LIVE' },
        { name: 'MuseFlow — Productivitate Creativă', desc: 'Intră în starea de flow: Pomodoro, muzică ambientală AI, blocare distractori, tracking productivitate. Se adaptează ritmului tău.', link: 'https://mrdelivery.ro', badge: 'LIVE' },
      ]
    },
    {
      cat: '📣 Marketing', color: 'from-pink-500 to-rose-600', count: 6,
      projects: [
        { name: 'Wild Bot — 300 Mesaje/zi WhatsApp', desc: 'Outreach WhatsApp nedetectabil. Mesaje 100% unice, timpi umani aleatorii, 12 straturi protecție anti-ban. 2000+ mesaje/campanie.', link: 'https://wild-bot-rho.vercel.app/', badge: 'LIVE' },
        { name: 'AdFusion — Agenție AI Publicitate', desc: 'Agenție publicitate complet automatizată: creează reclame, scrie texte, generează imagini, planifică campanii, optimizează buget.', link: 'https://mrdelivery.ro', badge: 'LIVE' },
        { name: 'Viral Architect — Campanii Virale', desc: 'Proiectează campanii virale: analizează trenduri, creează hook-uri captivante, strategii distribuție, calendare publicare.', link: 'https://mrdelivery.ro', badge: 'LIVE' },
        { name: 'One Image Ad Engine', desc: 'O singură poză → campanie publicitară completă: multiple variante reclamă, texte persuasive, formatele corecte per platformă.', link: 'https://mrdelivery.ro', badge: 'LIVE' },
        { name: 'LeadGenius — Generare Lead-uri AI', desc: 'Identifică potențiali clienți din surse multiple, evaluează după criterii personalizabile, scorează și livrează lista gata de contactat.', link: 'https://mrdelivery.ro', badge: 'LIVE' },
        { name: 'SEO Mastermind — Audit Avansat', desc: 'Audit SEO enterprise: competitor intelligence, keyword gap, content strategy AI, link building, technical SEO, predicții ranking.', link: 'https://mrdelivery.ro', badge: 'LIVE' },
      ]
    },
    {
      cat: '☀️ Energie', color: 'from-yellow-500 to-orange-500', count: 5,
      projects: [
        { name: 'Helios — Calculator Solar Rapid', desc: '3-4 întrebări simple → estimare producție, economie lunară, cost și payback period. Zero jargon tehnic.', link: 'https://mrdelivery.ro', badge: 'LIVE' },
        { name: 'Smart Helios — Planificare Inteligentă', desc: 'Asistent AI planificare sistem fotovoltaic complet: panouri, invertor, baterii, cablare. Adaptat consumului tău real.', link: 'https://mrdelivery.ro', badge: 'LIVE' },
        { name: 'Smart Helios Dashboard — Monitorizare Live', desc: 'Dashboard timp real sisteme fotovoltaice: producție curentă, economii, consum vs producție, surplus injectat, stare baterii.', link: 'https://mrdelivery.ro', badge: 'LIVE' },
        { name: 'Smart Renewable — Energie Verde', desc: 'Aplicație educativă energie regenerabilă: solar, eolian, pompe căldură. Calculatoare impact ecologic și ghid tranziție.', link: 'https://mrdelivery.ro', badge: 'LIVE' },
        { name: 'Diagnosticare Energie Verde', desc: 'AI troubleshooting sisteme energie regenerabilă: identifică cauza problemei, sugerează soluții, estimează cost reparație.', link: 'https://mrdelivery.ro', badge: 'LIVE' },
      ]
    },
    {
      cat: '📊 Operațiuni', color: 'from-blue-500 to-cyan-500', count: 5,
      projects: [
        { name: 'Nexus Dashboard — Command Center', desc: 'Dashboard executiv all-in-one: venituri, cheltuieli, comenzi, clienți, retenție — actualizat real-time cu alarme automate.', link: 'https://mrdelivery.ro', badge: 'LIVE' },
        { name: 'Nexus 2027 — Platformă Business Futuristică', desc: 'Management business complet: project management, HR lite, CRM, raportare avansată, planificare strategică cu AI.', link: 'https://mrdelivery.ro', badge: 'LIVE' },
        { name: 'Claude Trading Agent — Investiții AI', desc: 'Agent AI trading 24/7: analizează acțiuni și crypto, identifică pattern-uri tehnice, evaluează sentiment, sugerează tranzacții.', link: 'https://mrdelivery.ro', badge: 'LIVE' },
        { name: 'Automation Hub — Conectare Servicii', desc: 'Hub automatizare: conectează toate aplicațiile între ele. Creează fluxuri automate fără cod între orice servicii digitale.', link: 'https://mrdelivery.ro', badge: 'LIVE' },
        { name: 'GreenThumb AI — Consultant Agricol', desc: 'Asistent AI agricultură: identifică plante din foto, diagnostichează boli, programe irigație, sfaturi sezon, calendar plantare.', link: 'https://mrdelivery.ro', badge: 'LIVE' },
      ]
    },
    {
      cat: '💼 Afaceri', color: 'from-emerald-500 to-teal-600', count: 5,
      projects: [
        { name: 'SocietyHUB CRM Imobiliar PRO', desc: 'CRM imobiliar complet: proprietăți, leads, matching AI, publicare multi-portal (OLX, Storia, Imobiliare.ro), contracte, vizionări.', link: 'https://ssocietyhub.store', badge: 'LIVE' },
        { name: 'MB EuroParts — Piese Auto Europene', desc: 'Marketplace piese auto Mercedes-Benz și europene: căutare OEM, comparare prețuri, verificare compatibilitate, livrare 24h.', link: 'https://mbeuroparts.lovable.app', badge: 'LIVE' },
        { name: 'Vreau Franciză — Aplicare MrDelivery', desc: 'Formular digital aplicare franciză MrDelivery: evaluare automată eligibilitate și pași următori personalizați.', link: 'https://mrdelivery.ro', badge: 'LIVE' },
        { name: 'Franchise Dream — Plan Personalizat', desc: 'Generator AI planuri franciză personalizate: model business, proiecții financiare, pași implementare, resurse necesare.', link: 'https://mrdelivery.ro', badge: 'LIVE' },
        { name: 'Dream Formula Maker — Blueprint Afacere', desc: 'Cristalizează ideea perfectă de afacere: combini pasiuni + skills + piață + buget → formula completă cu plan 90 zile.', link: 'https://mrdelivery.ro', badge: 'LIVE' },
      ]
    },
    {
      cat: '🛡️ Securitate', color: 'from-slate-600 to-slate-900', count: 2,
      projects: [
        { name: 'SecureScan Pro — Testare Etică', desc: 'Scanează API-uri, detectează vulnerabilități, creează rapoarte HackerOne/Bugcrowd. 100% conformitate legală Legea 161/2003.', link: 'https://ssocialsafe.lovable.app/', badge: 'LIVE' },
        { name: 'SSocietySafe — Ethical Hacking', desc: 'Platformă securitate cibernetică: descoperă vulnerabilități, scanări non-distructive, rapoarte profesionale bug bounty ready.', link: 'https://ssocietyhacking.lovable.app/', badge: 'LIVE' },
      ]
    },
    {
      cat: '✨ Lifestyle', color: 'from-violet-500 to-purple-600', count: 6,
      projects: [
        { name: 'LifeOS AI — Sistemul Tău de Operare Personal', desc: 'Gestionează obiective, finanțe, sănătate, rutine și productivitate. Goal tracking, finance manager, health dashboard, AI journal.', link: 'https://ssocietylifeos.lovable.app/', badge: 'LIVE' },
        { name: 'SSociety VIEW — Earth Intelligence Platform', desc: 'Monitorizare globală Pământ în timp real: straturi satelitare NASA, detectare incendii, tracking aeronave, monitorizare seismică.', link: 'https://ssociety-view.lovable.app/', badge: 'LIVE' },
        { name: 'Velvet & Rose — Wellness & Beauty', desc: 'Platformă wellness și self-care: rutine îngrijire piele personalizate AI, meditații ghidate, exerciții relaxare, jurnal bunăstare.', link: 'https://mrdelivery.ro', badge: 'LIVE' },
        { name: 'Heart Echo — Mesaje de Suflet', desc: 'Generator AI mesaje emoționale personalizate pentru orice ocazie: partener, părinte, prieten. Unic, sincer, emoționant.', link: 'https://mrdelivery.ro', badge: 'LIVE' },
        { name: 'Anchor — Guardian al Relațiilor', desc: 'AI relațional: amintește aniversări, sugerează activități quality time, sfaturi comunicare, te ajută să fii prezent cu cei dragi.', link: 'https://mrdelivery.ro', badge: 'LIVE' },
        { name: 'LifeKit — Kit pentru o Viață Mai Bună', desc: 'Instrumente AI dezvoltare personală: tracker obiceiuri, jurnal recunoștință, obiective, meditații, nutriție, coach AI personal.', link: 'https://mrdelivery.ro', badge: 'LIVE' },
      ]
    },
    {
      cat: '🍽️ Restaurante', color: 'from-orange-500 to-red-500', count: 15,
      projects: [
        { name: 'MrDelivery — Pagina Principală', desc: 'Platforma centrală cu toate serviciile digitale pentru restaurante. AI, automatizare, delivery optimization și consultanță.', link: 'https://mrdelivery.ro', badge: 'LIVE' },
        { name: 'Instant Menu Pictures — Poze Meniu AI', desc: 'Generează fotografii profesionale de meniu Michelin-quality doar din text. Logo branding, export multi-format, procesare bulk.', link: 'https://ssociety-image-generator-588412172690.us-west1.run.app/', badge: 'LIVE' },
        { name: 'AI Assistant pentru Clienți', desc: 'Chatbot AI care răspunde la întrebări despre meniu, prețuri, alergeni, preia comenzi și oferă suport 24/7 pe WhatsApp sau site.', link: 'https://mrdelivery.ro', badge: 'LIVE' },
        { name: 'AI Assistant pentru Echipă', desc: 'Asistent AI intern pentru personal: instrucțiuni preparare, checklist-uri deschidere/închidere, alertează managerii. Reduce erorile umane.', link: 'https://mrdelivery.ro', badge: 'LIVE' },
        { name: 'Gourmet Visionary AI', desc: 'Platformă AI premium fine dining: meniuri degustare sofisticate, perechi vin-mâncare, descrieri poetice, consultanță Michelin.', link: 'https://mrdelivery.ro', badge: 'LIVE' },
        { name: 'MrDelivery AI Central', desc: 'Dashboard central care controlează toate sistemele AI ale restaurantului. Status boti, performanță, setări, rapoarte consolidate.', link: 'https://mrdelivery.ro', badge: 'LIVE' },
        { name: 'Laborator de Texte AI', desc: 'Generator conținut specializat restaurante: postări social media, descrieri meniu, mesaje WhatsApp, răspunsuri recenzii Google.', link: 'https://mrdelivery.ro', badge: 'LIVE' },
        { name: 'FoodieQuest — Descoperă Restaurante', desc: 'App descoperire culinară cu AI: spui ce poftești, buget, locație și primești recomandări perfecte cu filtre alergeni și rating.', link: 'https://mrdelivery.ro', badge: 'LIVE' },
        { name: 'Audit AI — Analiză Restaurant', desc: 'Audit digital complet: meniu, prețuri, prezență online, recenzii, operațiuni, marketing. Raport cu note și recomandări concrete.', link: 'https://mrdelivery.ro', badge: 'LIVE' },
        { name: 'Audit Michelin — Evaluare Premium', desc: 'Evaluare AI pe criteriile reale Michelin: ingrediente, tehnici gătit, calitate-preț, consistență. Scor detaliat și plan de acțiune.', link: 'https://mrdelivery.ro', badge: 'LIVE' },
        { name: 'RestoMaster — Management All-in-One', desc: 'Platformă completă management restaurant: rezervări, meniu, stocuri, financiar, marketing, echipă, satisfacție clienți.', link: 'https://mrdelivery.ro', badge: 'LIVE' },
        { name: 'MisterDelivery Bot — Chelner Digital', desc: 'Chatbot AI chelner virtual 24/7: preia comenzi prin chat, recomandă preparate, informează alergeni, trimite la bucătărie.', link: 'https://mrdelivery.ro', badge: 'LIVE' },
        { name: 'MrDelivery Shop — Magazin Online', desc: 'Magazin online echipamente delivery și restaurante: cutii termice, pungi branduite, ambalaje eco, materiale marketing.', link: 'https://mrdelivery.ro', badge: 'LIVE' },
        { name: 'MrDelivery Online — Portal Parteneri', desc: 'Portal digital parteneri: resurse exclusive, documentație, tutoriale, management performanță și rapoarte din dashboard centralizat.', link: 'https://mrdelivery.ro', badge: 'LIVE' },
        { name: 'Audit MrDelivery — Interfață Modernă', desc: 'Versiunea redesignată a auditului restaurant cu interfață modernă, grafice interactive, scoruri colorate și recomandări pas-cu-pas.', link: 'https://mrdelivery.ro', badge: 'LIVE' },
      ]
    },
  ];

  const YOUTUBE_VIDEOS = [
    { title: "The Most Overlooked $10K/M Business Anyone Can Start", views: "2.1M", duration: "34:17" },
    { title: "The Most Profitable One-Man Business You've Never Heard Of", views: "1.2M", duration: "32:38" },
    { title: "6 Ways to Make Money With the New GPT Agent", views: "586K", duration: "39:57" },
    { title: "He Watched This Channel and Made $32K in His First 2 Months", views: "569K", duration: "42:46" },
    { title: "How I Make $35k/Month With Other People's Content (Legally)", views: "563K", duration: "23:43" },
    { title: "He Asked AI To Make Money. It Did.", views: "441K", duration: "30:46" },
    { title: "I Tried the Costco Gold Hack (How Much I Actually Made)", views: "432K", duration: "10:02" },
    { title: "How to Start Reselling (Even With $0 in the Bank)", views: "426K", duration: "1:02:13" },
    { title: "\"It's Not That Easy?\" Sam Launched Overnight to Prove It Is", views: "410K", duration: "26:58" },
    { title: "She Makes $1k/Day Sending Letters", views: "364K", duration: "53:16" },
    { title: "The Most Profitable Local Business Everyone Overlooks", views: "309K", duration: "50:57" },
    { title: "25 ChatGPT Hacks You Need to Know in 2026", views: "297K", duration: "19:51" },
    { title: "The Most Overlooked Way to Make Money On the Internet", views: "283K", duration: "52:31" },
    { title: "40 Ways to Make $400,000 from Unwanted Land", views: "247K", duration: "43:59" },
    { title: "Stop Buying Things. Start Buying Assets that Pay for Themselves", views: "235K", duration: "37:25" },
    { title: "This $15K/Person Grant Feels Like a Cheat Code", views: "223K", duration: "38:44" },
    { title: "Forget Dropshipping. This Side Hustle Is 10x Easier", views: "211K", duration: "35:19" },
    { title: "The Easiest $3K/Day Business Nobody Is Talking About", views: "192K", duration: "46:41" },
    { title: "The Most Passive Online Business No One Talks About", views: "179K", duration: "34:22" },
    { title: "I Started an Online Business in 56 Minutes", views: "174K", duration: "27:36" },
    { title: "The Most Hands-Off Side Hustle Anyone Can Copy", views: "173K", duration: "1:14:19" },
    { title: "This Business Makes Vending Machines Look Dumb", views: "170K", duration: "1:14:43" },
    { title: "She Buys $1 Pallets And Sells Them For $5,000", views: "169K", duration: "50:05" },
    { title: "If We Had to Make $1M Fast, We'd Start These Businesses", views: "154K", duration: "1:01:07" },
    { title: "Watch Me Build an AI Agency in 24 Minutes", views: "145K", duration: "24:31" },
    { title: "The Best Way to Clone These $1M+ Online Businesses (Legally)", views: "143K", duration: "25:00" },
    { title: "Facebook Ads For Beginners: Complete Guide (2026)", views: "142K", duration: "46:19" },
    { title: "The 4 Best Rural Side Hustles for 2026", views: "139K", duration: "33:44" },
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-background">
      <DaRomaniaBackButton onClick={goBack} />
      <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-background/95 px-4 py-4 pl-24 shadow-sm backdrop-blur sm:pl-60">
        <div>
          <h1 className="text-xl font-black text-slate-900">🎓 Academia DaRomania</h1>
          <p className="text-xs text-slate-500">71 proiecte construite de SSociety — comunitatea noastră</p>
        </div>
        <a href="https://ssociety.eu" target="_blank" rel="noopener noreferrer" className="text-xs font-black text-indigo-600 bg-indigo-50 px-3 py-2 rounded-full hover:bg-indigo-100 transition-all">ssociety.eu →</a>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Hero */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-4">71 Proiecte Active</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">De la roboți AI pentru restaurante și sisteme solare inteligente, până la unelte creative, platforme de securitate și proiecte de lifestyle. Construit cu pasiune & AI.</p>
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {[['71','Proiecte'],['8','Domenii'],['100%','Live'],['2026','Activ']].map(([n,l]) => (
              <div key={l} className="text-center">
                <p className="text-3xl font-black text-indigo-600">{n}</p>
                <p className="text-sm text-slate-500">{l}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Categorii */}
        {CATEGORIES.map((category, ci) => (
          <div key={ci} className="mb-12">
            <div className={"inline-flex items-center gap-2 bg-gradient-to-r " + category.color + " text-white px-4 py-2 rounded-full font-black text-sm mb-6"}>
              {category.cat} <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">{category.count}</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {category.projects.map((project, pi) => (
                <a key={pi} href={project.link} target="_blank" rel="noopener noreferrer" className="block bg-white rounded-2xl border border-slate-200 p-5 hover:shadow-xl hover:border-indigo-300 transition-all no-underline group">
                  <div className="flex items-start justify-between mb-3">
                    <span className={"text-xs font-black px-2 py-1 rounded-full " + (project.badge === 'LIVE' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700')}>{project.badge}</span>
                    <ArrowRight className="w-4 h-4 text-slate-300 group-hover:text-indigo-600 transition-all" />
                  </div>
                  <h3 className="font-black text-slate-900 mb-2 text-sm leading-tight">{project.name}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{project.desc}</p>
                </a>
              ))}
            </div>
          </div>
        ))}

        {/* Arsenal API Content — embedded */}
        <div className="mb-12">
          <ArsenalContent embedded />
        </div>

        {/* Info Cards + Pricing */}
        <div className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200/60 rounded-2xl p-5 flex gap-3 items-start">
              <span className="text-2xl mt-0.5">🤖</span>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                <span className="font-bold text-blue-700">85% din sarcini automatizate</span> — emailuri, rapoarte, programări, follow-up-uri. Tu te concentrezi pe cei <span className="font-bold">15% care contează</span>: relații, strategie, expertiză.
              </p>
            </div>
            <div className="bg-gradient-to-br from-emerald-50 to-green-50 border border-emerald-200/60 rounded-2xl p-5 flex gap-3 items-start">
              <span className="text-2xl mt-0.5">⚙️</span>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                <span className="font-bold text-emerald-700">Nu îți schimbăm cariera.</span> Îți dăm un sistem complet care lucrează <span className="font-bold">22h/zi</span> în locul tău, cu un cost real de <span className="font-bold text-emerald-700">$3–9/lună</span> în API-uri.
              </p>
            </div>
            <div className="bg-gradient-to-br from-violet-50 to-purple-50 border border-violet-200/60 rounded-2xl p-5 flex gap-3 items-start">
              <span className="text-2xl mt-0.5">📈</span>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                <span className="font-bold text-violet-700">Rezultatul?</span> Un business scalabil, fără angajați, cu venituri recurente <span className="font-bold">€2.000–€12.000/lună</span> — construit pe expertiza ta unică.
              </p>
            </div>
            <div className="bg-gradient-to-br from-amber-50 to-yellow-50 border border-amber-200/60 rounded-2xl p-5 flex gap-3 items-start">
              <span className="text-2xl mt-0.5">🚀</span>
              <p className="text-slate-700 text-sm md:text-base leading-relaxed">
                <span className="font-bold text-amber-700">Începi cu $9</span> pentru Arsenal API. Când ești gata, OpenClaw cu <span className="font-bold">$19/lună</span>. Simplu.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Arsenal API - $9 */}
            <button onClick={() => goTo('/arsenalapi')} className="group relative border border-blue-200/60 rounded-2xl p-6 hover:shadow-xl hover:border-blue-400 transition-all duration-300 hover:-translate-y-1 cursor-pointer text-left bg-white/60 backdrop-blur-sm flex flex-col">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Arsenal API</h3>
              <p className="text-slate-500 text-xs mb-4">Construiește orice sistem</p>
              <div className="mb-4">
                <span className="text-blue-600 font-black text-2xl">$9</span>
                <span className="text-slate-400 text-sm"> o singură dată</span>
              </div>
              <ul className="text-slate-600 text-xs space-y-2 flex-1 mb-4">
                <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">✓</span> 150+ API-uri incluse</li>
                <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">✓</span> Automatizări & integrări</li>
                <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">✓</span> Fluxuri complete de lucru</li>
                <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">✓</span> Structură completă de proiect</li>
              </ul>
              <span className="w-full text-center py-2.5 rounded-xl border border-blue-300 text-blue-600 font-semibold text-sm group-hover:bg-blue-600 group-hover:text-white transition-all">Vezi Detalii →</span>
            </button>

            {/* OpenClaw - $19/lună */}
            <button onClick={() => goTo('/openclaw')} className="group relative border border-green-200/60 rounded-2xl p-6 hover:shadow-xl hover:border-green-400 transition-all duration-300 hover:-translate-y-1 cursor-pointer text-left bg-white/60 backdrop-blur-sm flex flex-col">
              <div className="text-3xl mb-3">🤖</div>
              <h3 className="text-base font-bold text-slate-900 mb-1">OpenClaw</h3>
              <p className="text-slate-500 text-xs mb-4">Flota AI: CTO, CFO, CEO</p>
              <div className="mb-4">
                <span className="text-green-600 font-black text-2xl">$19</span>
                <span className="text-slate-400 text-sm">/lună</span>
              </div>
              <ul className="text-slate-600 text-xs space-y-2 flex-1 mb-4">
                <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> 1 proiect activ</li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Agent OpenClaw.ai inclus</li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Execuție automată 24/7</li>
                <li className="flex items-start gap-2"><span className="text-green-500 mt-0.5">✓</span> Anulezi oricând dintr-un click</li>
              </ul>
              <span className="w-full text-center py-2.5 rounded-xl border border-green-300 text-green-600 font-semibold text-sm group-hover:bg-green-500 group-hover:text-white transition-all">Vezi Detalii →</span>
            </button>

            {/* Academy - $29/lună */}
            <div className="group relative border-2 border-blue-400 rounded-2xl p-6 hover:shadow-xl hover:border-blue-500 transition-all duration-300 hover:-translate-y-1 text-left bg-blue-50/60 backdrop-blur-sm flex flex-col ring-1 ring-blue-200">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full">Ești aici ✓</span>
              <div className="text-3xl mb-3 mt-1">🎓</div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Academy DaRomania</h3>
              <p className="text-slate-500 text-xs mb-4">Acces complet la rețeaua de succes</p>
              <div className="mb-4">
                <span className="text-blue-600 font-black text-2xl">$29</span>
                <span className="text-slate-400 text-sm">/lună</span>
              </div>
              <ul className="text-slate-600 text-xs space-y-2 flex-1 mb-4">
                <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">✓</span> Tot ce include pachetul de $19</li>
                <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">✓</span> Acces în Academy DaRomania</li>
                <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">✓</span> 71 proiecte practice pas cu pas</li>
                <li className="flex items-start gap-2"><span className="text-blue-500 mt-0.5">✓</span> Vezi succesul monetizat al rețelei</li>
              </ul>
              <button onClick={() => handleCheckout(undefined, 'price_1TKPDvLDo9sXtuKJlsze4mNb', 'subscription')} className="w-full text-center py-2.5 rounded-xl bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-all">Alege Pachetul →</button>
            </div>

            {/* Afacere la Cheie - $99/lună */}
            <button onClick={() => goTo('/afacerelacheie')} className="group relative border border-orange-200/60 rounded-2xl p-6 hover:shadow-xl hover:border-orange-400 transition-all duration-300 hover:-translate-y-1 cursor-pointer text-left bg-white/60 backdrop-blur-sm flex flex-col">
              <div className="text-3xl mb-3">💼</div>
              <h3 className="text-base font-bold text-slate-900 mb-1">Afacere la Cheie</h3>
              <p className="text-slate-500 text-xs mb-4">Business complet gata de lansare</p>
              <div className="mb-4">
                <span className="text-orange-600 font-black text-2xl">$99</span>
                <span className="text-slate-400 text-sm">/lună</span>
              </div>
              <ul className="text-slate-600 text-xs space-y-2 flex-1 mb-4">
                <li className="flex items-start gap-2"><span className="text-orange-500 mt-0.5">✓</span> Tot ce include pachetul Academy</li>
                <li className="flex items-start gap-2"><span className="text-orange-500 mt-0.5">✓</span> Brand, site, automatizări incluse</li>
                <li className="flex items-start gap-2"><span className="text-orange-500 mt-0.5">✓</span> Strategie completă de monetizare</li>
                <li className="flex items-start gap-2"><span className="text-orange-500 mt-0.5">✓</span> Tu alegi nișa, noi livrăm totul</li>
              </ul>
              <span className="w-full text-center py-2.5 rounded-xl border border-orange-300 text-orange-600 font-semibold text-sm group-hover:bg-orange-500 group-hover:text-white transition-all">Vezi Detalii →</span>
            </button>
          </div>
        </div>

        {/* Tutoriale YouTube */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full font-black text-sm mb-6">
            🎬 Tutoriale YouTube <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs">28</span>
          </div>
          <p className="text-slate-600 text-sm mb-6">Cele mai populare videoclipuri de pe <a href="https://www.youtube.com/@thekoerneroffice" target="_blank" rel="noopener noreferrer" className="text-red-500 font-bold hover:underline">The Koerner Office</a> — business, AI și side hustles.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {YOUTUBE_VIDEOS.map((video, vi) => (
              <a
                key={vi}
                href={`https://www.youtube.com/results?search_query=${encodeURIComponent('Chris Koerner ' + video.title)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-white rounded-2xl border border-slate-200 hover:border-red-300 hover:shadow-xl transition-all no-underline group overflow-hidden"
              >
                <div className="relative aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
                  <PlayCircle className="w-10 h-10 text-white/30 group-hover:text-red-500 group-hover:scale-110 transition-all z-20" />
                  <span className="absolute bottom-2 right-2 bg-black/80 text-white text-xs font-bold px-2 py-0.5 rounded z-20">{video.duration}</span>
                </div>
                <div className="p-3.5">
                  <h3 className="font-black text-slate-900 text-xs leading-tight line-clamp-2 group-hover:text-red-600 transition-colors">{video.title}</h3>
                  <p className="text-xs text-slate-500 mt-1.5">👁 {video.views} vizualizări</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-8 md:p-12 text-white text-center mt-8">
          <h3 className="text-3xl font-black mb-4">Ai o idee de proiect?</h3>
          <p className="text-white/80 mb-6 text-lg">Construim împreună. Scrie-i lui Sergiu pe WhatsApp și visele devin realitate.</p>
          <a href="https://wa.me/40768676141" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-white text-indigo-600 px-8 py-4 rounded-full font-black text-lg hover:bg-indigo-50 transition-all no-underline">
            💬 Scrie pe WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
