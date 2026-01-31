"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { STAT_CONFIG } from "./stat.config";
import Link from "next/link";

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
      const href = STAT_CONFIG[row.original.metric].href;
      return (
        <div className="h-8">
          {href && (
            <Button asChild variant="outline" size="sm">
              <Link href={href}>
                <ArrowRight />
              </Link>
            </Button>
          )}
        </div>
      );
    },
  },
];
