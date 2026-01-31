"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { deleteCategory } from "@/actions/category";

export type Category = {
  id: string;
  name: string;
  slug: string;
};

export const columns: ColumnDef<Category>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "slug",
    header: "Slug",
  },
  {
    id: "actions",
    header: "Actions",
    cell: ({ row }) => {
      const category = row.original;

      return (
        <div className="flex gap-2">
          {/* <Button size="sm" variant="outline">
            Edit
          </Button> */}
          <Button
            onClick={async () => {
              const confirmed = window.confirm(
                "Are you sure you want to delete this?",
              );
              if (!confirmed) return;
              try {
                await deleteCategory(category.id);
              } catch (error) {
                console.log(error);
              }
            }}
            size="sm"
            variant="destructive"
          >
            Delete
          </Button>
        </div>
      );
    },
  },
];
