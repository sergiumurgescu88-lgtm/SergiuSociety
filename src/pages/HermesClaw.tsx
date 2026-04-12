import AgentLandingPage from "@/components/AgentLandingPage";

const otherAgents = [
  { name: "OpenClaw", path: "/openclaw" },
  { name: "Paperclip", path: "/paperclipclaw" },
  { name: "NemoClaw", path: "/nemoclaw" },
];

const HermesClaw = () => (
  <AgentLandingPage
    config={{
      name: "Hermes",
      accentColor: "amber",
      accentHex: "#fbbf24",
      title: "Hermes — Agentul AI care crește cu tine",
      subtitle: "Primul agent cu buclă închisă de învățare",
      stats: [
        { value: "47", label: "Tools" },
        { value: "74", label: "Skills" },
        { value: "15+", label: "platforme" },
        { value: "8", label: "workers paraleli" },
      ],
      features: [
        { title: "Memorie Persistentă", description: "MEMORY.md + USER.md — agentul își construiește propria bază de cunoștințe." },
        { title: "Skill System auto-generativ", description: "Agentul creează noi skills pe baza experiențelor anterioare." },
        { title: "FTS5 Search", description: "Căutare full-text rapidă prin toate datele agentului." },
        { title: "Browser Automation", description: "Navigare autonomă în browser pentru taskuri complexe." },
        { title: "Code Execution", description: "Execută cod în timp real pentru a rezolva probleme." },
        { title: "Multi-platform Gateway", description: "Gateway unificat pentru conectare pe multiple platforme." },
      ],
      warningBox: "Windows nativ NU este suportat! Folosește WSL2.",
      githubUrl: "https://github.com/NousResearch/hermes-agent",
      otherAgents,
    }}
  />
);

export default HermesClaw;
