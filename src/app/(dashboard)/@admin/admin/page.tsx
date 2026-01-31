import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { adminService } from "@/services/admin.service";
import { STAT_CONFIG } from "./stat.config";

export default async function AdminDashboardStats() {
  const { data } = await adminService.getStats();

  const stats = Object.entries(data.data).map(([key, value]) => ({
    metric: key,
    count: Number(value) || 0,
    category: STAT_CONFIG[key].category ?? "Other",
  }));

  const groupedStats = stats.reduce<Record<string, typeof stats>>(
    (acc, item) => {
      (acc[item.category] ||= []).push(item);
      return acc;
    },
    {},
  );

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Stats</h1>
      {Object.entries(groupedStats).map(([category, items]) => (
        <div key={category} className="mb-8">
          <h2 className="mb-2 text-lg font-semibold">{category}</h2>
          <DataTable columns={columns} data={items} />
        </div>
      ))}
    </div>
  );
}
