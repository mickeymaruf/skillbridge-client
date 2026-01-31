import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { userService } from "@/services/user.service";

export default async function UsersPage() {
  const { data: users } = await userService.getUsers();

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Users</h1>
      <DataTable columns={columns} data={users.data} />
    </div>
  );
}
