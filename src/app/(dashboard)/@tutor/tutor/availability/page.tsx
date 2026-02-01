import { tutorService } from "@/services/tutor.service";
import CreateSlotDialog from "./create-slot-dialog";
import { DataTable } from "@/components/ui/data-table";
import { availabilityColumns } from "./availability-columns";

export default async function Availability() {
  const { data: availability } = await tutorService.getTutorAvailability();

  return (
    <div className="p-5 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Availability</h1>
        <CreateSlotDialog />
      </div>
      <DataTable columns={availabilityColumns} data={availability.data} />
    </div>
  );
}
