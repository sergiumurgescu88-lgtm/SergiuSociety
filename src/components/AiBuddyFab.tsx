import { useNavigate } from "react-router-dom";

export default function AiBuddyFab() {
  const nav = useNavigate();
  
  return (
    <button
      onClick={() => nav("/chatbuddy")}
      title="Vibe Buddy — AI Companion"
      className="fixed bottom-6 right-6 z-[9999] flex items-center justify-center w-14 h-14 rounded-full bg-[#f97316] text-2xl shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_30px_rgba(249,115,22,0.6)] hover:scale-110 transition-all no-underline cursor-pointer border-none"
    >
      🤖
    </button>
  );
}
