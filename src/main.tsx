import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import DaRomaniaApp from "./DaRomaniaApp";
import ArsenalPage from "./ArsenalPage";
import AcademyPage from "./AcademyPage";
import AfacereLaCheiePage from "./AfacereLaCheiePage";
import ChatBuddyPage from "./ChatBuddyPage";
import OpenClaw from "./pages/OpenClaw";
import PaperclipClaw from "./pages/PaperclipClaw";
import NemoClaw from "./pages/NemoClaw";
import HermesClaw from "./pages/HermesClaw";
import { AuthProvider } from "./auth/AuthContext";

createRoot(document.getElementById("root")!).render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/arsenalapi" element={<ArsenalPage />} />
        <Route path="/academy" element={<AcademyPage />} />
        <Route path="/afacerelacheie" element={<AfacereLaCheiePage />} />
        <Route path="/openclaw" element={<OpenClaw />} />
        <Route path="/paperclipclaw" element={<PaperclipClaw />} />
        <Route path="/nemoclaw" element={<NemoClaw />} />
        <Route path="/hermesclaw" element={<HermesClaw />} />
        <Route path="/*" element={<DaRomaniaApp />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);
