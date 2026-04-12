import AgentLandingPage from "@/components/AgentLandingPage";

const otherAgents = [
  { name: "Paperclip", path: "/paperclipclaw" },
  { name: "NemoClaw", path: "/nemoclaw" },
  { name: "Hermes", path: "/hermesclaw" },
];

const OpenClaw = () => (
  <AgentLandingPage
    config={{
      name: "OpenClaw",
      accentColor: "green",
      accentHex: "#22c55e",
      title: "OpenClaw — Agentul tău AI personal, 24/7",
      stats: [
        { value: "250K+", label: "Stars" },
        { value: "60", label: "zile" },
        { value: "20+", label: "platforme" },
        { value: "700+", label: "Skills" },
      ],
      features: [
        { title: "Multi-platform Messaging", description: "Conectează-te pe Discord, Telegram, Slack și multe altele dintr-un singur agent." },
        { title: "Memorie Persistentă", description: "Agentul își amintește conversațiile anterioare și învață din interacțiuni." },
        { title: "700+ Skills", description: "Bibliotecă vastă de abilități pre-construite gata de utilizare." },
        { title: "100% Local & Privat", description: "Rulează complet pe mașina ta fără date trimise în cloud." },
        { title: "Browser Automation", description: "Automatizează sarcini în browser cu navigare autonomă." },
        { title: "Cron Jobs", description: "Programează taskuri recurente pe care agentul le execută automat." },
      ],
      githubUrl: "https://github.com/openclaw/openclaw",
      otherAgents,
    }}
  />
);

export default OpenClaw;
