import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

export default function NotFoundButton() {
  const router = useRouter();

  return <Button onClick={() => router.back()}>Go back</Button>;
}
