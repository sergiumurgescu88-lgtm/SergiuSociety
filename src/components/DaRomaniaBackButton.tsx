import { ArrowLeft } from "lucide-react";

import { Button } from "@/components/ui/button";

interface DaRomaniaBackButtonProps {
  onClick: () => void;
  className?: string;
}

export default function DaRomaniaBackButton({ onClick, className }: DaRomaniaBackButtonProps) {
  return (
    <Button
      type="button"
      variant="outline"
      onClick={onClick}
      aria-label="Back to DaRomania"
      className={`fixed left-4 top-4 z-[120] h-auto rounded-full border-border bg-card/95 px-3 py-2 text-foreground shadow-lg backdrop-blur transition hover:bg-accent hover:text-accent-foreground sm:left-6 sm:top-6 sm:px-4 ${className ?? ""}`}
    >
      <ArrowLeft className="h-4 w-4" />
      <span className="text-sm font-black sm:hidden">Back</span>
      <span className="hidden text-sm font-black sm:inline">Back to 🇷🇴 DaRomania</span>
    </Button>
  );
}