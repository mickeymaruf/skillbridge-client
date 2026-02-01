import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { bookingService } from "@/services/booking.service";

export default async function StudentDashboard() {
  const { data: bookings } = await bookingService.getMyBookings({
    confirmed: true,
  });

  return (
    <div className="p-5 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">My bookings</h1>
      </div>
      <DataTable columns={columns} data={bookings.data} />
    </div>
  );
}
