"use client";

import { Button } from "@/components/ui/button";
import { deleteCategory } from "@/actions/category";
import { useState } from "react";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

export function DeleteCategoryButton({ id }: { id: string }) {
  const [loading, setLoading] = useState(false);

  const handleDelete = async () => {
    const confirmed = window.confirm("Are you sure you want to delete this?");
    if (!confirmed) return;

    try {
      setLoading(true);
      await deleteCategory(id);
      toast.success("Category deleted");
    } catch (err) {
      toast.error("Failed to delete category");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      size="sm"
      variant="destructive"
      onClick={handleDelete}
      disabled={loading}
    >
      {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Delete"}
    </Button>
  );
}
