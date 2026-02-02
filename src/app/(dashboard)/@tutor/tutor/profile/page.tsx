import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";
import { tutorService } from "@/services/tutor.service";
import EditTutorDialog from "./edit-tutor-dialog";
import EditCategoryDialog from "./edit-category-dialog";

export default async function TutorProfile() {
  const {
    data: { user, bio, hourlyRate, rating, reviewCount, categories, reviews },
  } = await tutorService.getMyTutorProfile();

  return (
    <div className="space-y-6">
      {/* Details */}
      <Card className="relative">
        <CardContent className="flex gap-6 items-start px-5 py-3">
          <Avatar className="h-20 w-20">
            <AvatarFallback>{user.name?.[0]}</AvatarFallback>
          </Avatar>

          <div className="flex-1">
            <h1 className="text-2xl font-semibold">{user.name}</h1>
            <p className="text-sm text-muted-foreground">{user.email}</p>
            <p className="text-sm text-muted-foreground mt-2">{bio}</p>

            <div className="flex items-center gap-3 mt-2">
              <div className="flex items-center gap-1">
                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                <span className="font-medium">{rating}</span>
                <span className="text-muted-foreground">
                  ({reviewCount} reviews)
                </span>
              </div>

              <Badge variant="secondary">${hourlyRate}/hr</Badge>
            </div>
          </div>
        </CardContent>
        <div className="absolute right-6 top-6">
          <EditTutorDialog
            user={{
              name: user.name,
              bio,
              hourlyRate,
            }}
          />
        </div>
      </Card>

      {/* Categories */}
      <Card className="relative">
        <CardHeader>
          <CardTitle>Subjects</CardTitle>
        </CardHeader>
        <CardContent className="flex flex-wrap gap-2">
          {categories.length === 0 ? (
            <p className="text-sm text-muted-foreground">
              No subjects added yet. Click edit to add one.
            </p>
          ) : (
            categories.map((c: any) => (
              <Badge key={c.id} variant="outline">
                {c.category.name}
              </Badge>
            ))
          )}
        </CardContent>

        <div className="absolute right-6 top-6">
          <EditCategoryDialog
            selectedCategories={categories.map((c) => c.categoryId)}
          />
        </div>
      </Card>

      {/* Reviews */}
      <Card>
        <CardHeader>
          <CardTitle>Reviews</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {reviews.length === 0 ? (
            <p className="text-sm text-muted-foreground text-center py-6">
              No reviews yet
            </p>
          ) : (
            reviews.map((r: any) => (
              <div key={r.id} className="border rounded-xl p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{r.student.name}</p>
                    <div className="flex items-center gap-1 text-sm">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      {r.rating}
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {new Date(r.createdAt).toLocaleDateString()}
                  </span>
                </div>
                <p className="mt-2 text-sm text-muted-foreground">{r.review}</p>
              </div>
            ))
          )}
        </CardContent>
      </Card>
    </div>
  );
}
