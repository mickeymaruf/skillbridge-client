"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { STAT_CONFIG } from "./stat.config";

export type MetricRow = {
  metric: string;
  count: number;
};

export const columns: ColumnDef<MetricRow>[] = [
  {
    accessorKey: "metric",
    header: "Metrics",
    cell: ({ row }) => {
      const Icon = STAT_CONFIG[row.original.metric].icon;
      const label = STAT_CONFIG[row.original.metric].label;

      return (
        <div className="flex items-center gap-2">
          {Icon && <Icon className="h-4 w-4 text-muted-foreground" />}
          <span className="font-medium">{label}</span>
        </div>
      );
    },
  },
  {
    accessorKey: "count",
    header: "Count",
  },
  {
    id: "actions",
    header: "View",
    cell: ({ row }) => {
      return (
        <Button
          variant="outline"
          size="sm"
          onClick={() => {
            console.log("Clicked:", row.original.metric);
          }}
        >
          <ArrowRight />
        </Button>
      );
    },
  },
];
