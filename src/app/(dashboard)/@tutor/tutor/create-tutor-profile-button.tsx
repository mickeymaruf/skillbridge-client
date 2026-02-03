"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";
import { useFormStatus } from "react-dom";

export function CreateTutorProfileButton() {
  const { pending } = useFormStatus();

  return (
    <Button size="lg" disabled={pending} className="gap-2">
      {pending && <Loader2 className="h-4 w-4 animate-spin" />}
      {pending ? "Creating profile..." : "Create Tutor Profile"}
    </Button>
  );
}
