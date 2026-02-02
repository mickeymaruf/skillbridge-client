import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { bookingService } from "@/services/booking.service";

export default async function StudentBookings() {
  const { data: bookings } = await bookingService.getMyBookings({
    completed: true,
    cancelled: true,
  });

  console.log(bookings);

  return (
    <div className="p-5 space-y-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Booking History</h1>
      </div>
      <DataTable columns={columns} data={bookings.data} />
    </div>
  );
}
