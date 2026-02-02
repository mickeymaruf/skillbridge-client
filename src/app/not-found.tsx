"use client";
import NotFoundButton from "@/components/not-found-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FileQuestion } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <Card className="max-w-md w-full text-center">
        <CardHeader>
          <div className="flex justify-center mb-4">
            <FileQuestion className="h-10 w-10 text-muted-foreground" />
          </div>
          <CardTitle>Page not found</CardTitle>
          <CardDescription>
            The page you’re looking for doesn’t exist or was moved.
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <NotFoundButton />

          {/* <Button asChild variant="outline" className="w-full">
            <Link href="/dashboard">Go to dashboard</Link>
          </Button> */}
        </CardContent>
      </Card>
    </div>
  );
}
