import AgentLandingPage from "@/components/AgentLandingPage";

const otherAgents = [
  { name: "OpenClaw", path: "/openclaw" },
  { name: "Paperclip", path: "/paperclipclaw" },
  { name: "Hermes", path: "/hermesclaw" },
];

const NemoClaw = () => (
  <AgentLandingPage
    config={{
      name: "NemoClaw",
      accentColor: "violet",
      accentHex: "#c084fc",
      title: "NemoClaw — OpenClaw în sandbox securizat NVIDIA",
      quote: {
        text: "Mac și Windows sunt OS-urile pentru PC. OpenClaw este OS-ul pentru AI personal. NemoClaw oferă stratul de infrastructură lipsă.",
        author: "Jensen Huang",
      },
      stats: [
        { value: "4", label: "straturi securitate" },
        { value: "deny-by-default", label: "" },
        { value: "L7", label: "inspection" },
        { value: "K3s", label: "intern" },
      ],
      features: [
        { title: "Network Egress Control", description: "Control granular asupra traficului de rețea de ieșire." },
        { title: "Landlock Filesystem", description: "Izolarea sistemului de fișiere cu politici stricte Landlock." },
        { title: "Process Isolation", description: "Fiecare proces rulează izolat pentru securitate maximă." },
        { title: "Inference Privacy", description: "Inferența rămâne privată, fără scurgeri de date." },
        { title: "Kubernetes intern", description: "Cluster K3s integrat pentru orchestrare containerizată." },
        { title: "Alpha Software", description: "Software în fază alpha cu dezvoltare activă și actualizări frecvente." },
      ],
      warningBox: "Alpha Software — NU pentru producție",
      githubUrl: "https://github.com/NVIDIA/NemoClaw",
      otherAgents,
    }}
  />
);

export default NemoClaw;
