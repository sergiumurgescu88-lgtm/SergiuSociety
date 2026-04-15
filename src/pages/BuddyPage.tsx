import BuddyChat from "@/components/BuddyChat";

export default function BuddyPage() {
  return (
    <div style={{ minHeight: "100vh", background: "#080808", padding: "40px 20px" }}>
      <div style={{ textAlign: "center", marginBottom: "32px" }}>
        <h1 style={{ color: "white", fontSize: "32px", fontWeight: "700", margin: 0 }}>
          Buddy <span style={{ color: "#7c3aed" }}>PREMIUM</span>
        </h1>
        <p style={{ color: "#666", marginTop: "8px", fontSize: "15px" }}>
          Chief of Staff AI · Partenerul tău strategic DaRomânia
        </p>
      </div>
      <BuddyChat />
    </div>
  );
}
