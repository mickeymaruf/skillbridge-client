"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { deleteCategory } from "@/actions/category";
import { DeleteCategoryButton } from "./delete-category-button";

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
      return <DeleteCategoryButton id={row.original.id} />;
    },
  },
];
