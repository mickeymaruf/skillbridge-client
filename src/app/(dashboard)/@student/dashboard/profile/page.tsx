import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { authService } from "@/services/auth.service";
import EditProfileDialog from "./edit-profile-dialog";

export default async function UserProfile() {
  const { data } = await authService.getSession();
  const user = data?.user;

  if (user)
    return (
      <div className="space-y-6">
        <Card className="relative">
          <CardContent className="flex gap-6 items-start px-5 py-3">
            <Avatar className="h-20 w-20">
              <AvatarFallback>{user.name?.[0]}</AvatarFallback>
            </Avatar>

            <div className="flex-1">
              <h1 className="text-2xl font-semibold">{user.name}</h1>
              <p className="text-sm text-muted-foreground">{user.email}</p>

              <div className="flex gap-4 mt-2 text-sm text-muted-foreground">
                <span>Role: {user.role}</span>
                <span>Status: {user.status}</span>
                <span>
                  Joined: {new Date(user.createdAt).toLocaleDateString()}
                </span>
              </div>

              {/* <p className="mt-2 text-sm text-muted-foreground">
                Email Verified: {user.emailVerified ? "Yes" : "No"}
              </p> */}
            </div>
          </CardContent>
          <div className="absolute right-6 top-6">
            <EditProfileDialog user={user} />
          </div>
        </Card>
      </div>
    );
}
