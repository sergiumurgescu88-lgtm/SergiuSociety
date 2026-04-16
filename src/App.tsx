import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import OpenClaw from "./pages/OpenClaw.tsx";
import PaperclipClaw from "./pages/PaperclipClaw.tsx";
import NemoClaw from "./pages/NemoClaw.tsx";
import HermesClaw from "./pages/HermesClaw.tsx";
import Academy from "./pages/Academy.tsx";
import AfacereLaCheie from "./pages/AfacereLaCheie.tsx";
import ArsenalAPI from "./pages/ArsenalAPI.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/openclaw" element={<OpenClaw />} />
          <Route path="/paperclipclaw" element={<PaperclipClaw />} />
          <Route path="/nemoclaw" element={<NemoClaw />} />
          <Route path="/hermesclaw" element={<HermesClaw />} />
          <Route path="/academy" element={<Academy />} />
          <Route path="/afacerelacheie" element={<AfacereLaCheie />} />
          <Route path="/arsenalapi" element={<ArsenalAPI />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
