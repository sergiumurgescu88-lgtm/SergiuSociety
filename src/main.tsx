import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import DaRomaniaApp from "./DaRomaniaApp";
import ArsenalPage from "./ArsenalPage";
import OpenClawPage from "./OpenClawPage";
import AcademyPage from "./AcademyPage";
import AfacereLaCheiePage from "./AfacereLaCheiePage";
import SergiuClawPage from "./SergiuClawPage";
import NemoClawPage from "./NemoClawPage";
import HermesPage from "./HermesPage";
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
        <Route path="/openclaw" element={<OpenClawPage />} />
        <Route path="/academy" element={<AcademyPage />} />
        <Route path="/afacerelacheie" element={<AfacereLaCheiePage />} />
        <Route path="/sergiuclaw" element={<SergiuClawPage />} />
        <Route path="/nemoclaw" element={<NemoClawPage />} />
        <Route path="/hermes" element={<HermesPage />} />
        <Route path="/openclawlanding" element={<OpenClaw />} />
        <Route path="/paperclipclaw" element={<PaperclipClaw />} />
        <Route path="/nemoclawlanding" element={<NemoClaw />} />
        <Route path="/hermesclaw" element={<HermesClaw />} />
        <Route path="/*" element={<DaRomaniaApp />} />
      </Routes>
    </BrowserRouter>
  </AuthProvider>
);
