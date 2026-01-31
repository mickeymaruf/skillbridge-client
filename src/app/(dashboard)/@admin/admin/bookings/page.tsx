import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { bookingService } from "@/services/booking.service";

export default async function AllBookingsPage() {
  const { data } = await bookingService.getAllBookings();

  return (
    <div className="p-6 space-y-4">
      <h1 className="text-2xl font-bold">Bookings</h1>
      <DataTable columns={columns} data={data.data} />
    </div>
  );
}
