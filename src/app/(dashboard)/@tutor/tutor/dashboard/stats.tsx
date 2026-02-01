import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { tutorService } from "@/services/tutor.service";

interface DashboardStats {
  totalSlots: number;
  bookedSlots: number;
  upcomingSessions: number;
  completedSessions: number;
  totalEarnings: number;
}

export default async function Stats() {
  const { data } = await tutorService.getTutorStats();
  const stats: DashboardStats = data.data;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      <Card>
        <CardHeader>
          <CardTitle>Total Slots</CardTitle>
        </CardHeader>
        <CardContent>
          <Badge variant="secondary" className="text-lg">
            {stats.totalSlots}
          </Badge>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Booked Slots</CardTitle>
        </CardHeader>
        <CardContent>
          <Badge variant="secondary" className="text-lg">
            {stats.bookedSlots}
          </Badge>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Upcoming Sessions</CardTitle>
        </CardHeader>
        <CardContent>
          <Badge variant="secondary" className="text-lg">
            {stats.upcomingSessions}
          </Badge>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Completed Sessions</CardTitle>
        </CardHeader>
        <CardContent>
          <Badge variant="secondary" className="text-lg">
            {stats.completedSessions}
          </Badge>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Total Earnings</CardTitle>
        </CardHeader>
        <CardContent>
          <Badge variant="secondary" className="text-lg">
            ${stats.totalEarnings}
          </Badge>
        </CardContent>
      </Card>
    </div>
  );
}
