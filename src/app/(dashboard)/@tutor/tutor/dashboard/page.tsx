import { tutorService } from "@/services/tutor.service";
import { DataTable } from "@/components/ui/data-table";
import { bookingColumns } from "./booking-columns";
import Stats from "./stats";

export default async function TutorDashboard() {
  const { data: bookings } = await tutorService.getTutorBookings();

  return (
    <div className="p-5 space-y-16">
      <Stats />

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">All Bookings</h1>
        </div>
        <DataTable columns={bookingColumns} data={bookings.data} />
      </div>
    </div>
  );
}
