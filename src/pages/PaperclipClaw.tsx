import AgentLandingPage from "@/components/AgentLandingPage";

const otherAgents = [
  { name: "OpenClaw", path: "/openclaw" },
  { name: "NemoClaw", path: "/nemoclaw" },
  { name: "Hermes", path: "/hermesclaw" },
];

const PaperclipClaw = () => (
  <AgentLandingPage
    config={{
      name: "Paperclip",
      accentColor: "blue",
      accentHex: "#60a5fa",
      title: "Paperclip — Compania ta AI autonomă",
      quote: { text: "Dacă OpenClaw este angajatul, Paperclip este compania." },
      stats: [
        { value: "46.6K+", label: "Stars" },
        { value: "21", label: "zile" },
        { value: "Multi-company", label: "" },
        { value: "$0", label: "runaway costs" },
      ],
      features: [
        { title: "Goal Alignment", description: "Definește obiective clare și agentul le urmărește autonom." },
        { title: "Heartbeat Mechanism", description: "Monitorizare continuă a stării agenților pentru fiabilitate maximă." },
        { title: "Cost Control", description: "Controlează cheltuielile și previne costurile neașteptate." },
        { title: "Audit Trail", description: "Jurnal complet al tuturor acțiunilor pentru transparență totală." },
        { title: "Multi-Company", description: "Gestionează mai multe companii AI simultan." },
        { title: "Bring Your Own Agent", description: "Integrează orice agent existent în ecosistemul Paperclip." },
      ],
      githubUrl: "https://github.com/paperclipai/paperclip",
      otherAgents,
    }}
  />
);

export default PaperclipClaw;
