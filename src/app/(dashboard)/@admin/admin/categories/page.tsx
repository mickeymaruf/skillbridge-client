import { columns } from "@/app/(dashboard)/@admin/admin/categories/columns";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { categoryService } from "@/services/category.service";

export default async function CategoriesPage() {
  const { data: categories } = await categoryService.getCategories();

  return (
    <div className="p-6 space-y-4">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Categories</h1>
        <Button>Add Category</Button>
      </div>

      <DataTable columns={columns} data={categories.data} />
    </div>
  );
}
