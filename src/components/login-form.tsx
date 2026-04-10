"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldGroup,
  FieldLabel,
  FieldError,
  FieldDescription,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { useForm } from "@tanstack/react-form";
import z from "zod";
import { authClient } from "@/lib/auth-client";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { UserRole } from "@/constants/user";
import { useState } from "react";
import { Loader2, UserCircle } from "lucide-react";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Must be at least 8 characters long."),
});

interface UserWithRole {
  id: string;
  role: string;
}

export function LoginForm({ ...props }: React.ComponentProps<typeof Card>) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const form = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    validators: {
      onSubmit: formSchema,
    },
    onSubmit: async ({ value }) => {
      if (loading) return;
      const id = toast.loading("Logging in...");
      try {
        setLoading(true);
        const { data, error } = await authClient.signIn.email(value);

        if (error) return toast.error(error.message, { id });

        const role = (data?.user as any)?.role;
        toast.success("Logged in successfully", { id });

        if (role === UserRole.STUDENT) router.push("/dashboard");
        else if (role === UserRole.TUTOR) router.push("/tutor/dashboard");
        else if (role === UserRole.ADMIN) router.push("/admin");
      } catch (error) {
        toast.error("An unexpected error occurred", { id });
      } finally {
        setLoading(false);
      }
    },
  });

  // Just fills the fields, does NOT submit
  const fillTestAccount = (email: string) => {
    form.setFieldValue("email", email);
    form.setFieldValue("password", "Pa$$w0rd!");
    toast.info(`Filled form with ${email}`, { duration: 2000 });
  };

  return (
    <Card {...props}>
      <CardHeader>
        <CardTitle>Login</CardTitle>
        <CardDescription>
          Select a role to autofill or enter your credentials.
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Autofill Section */}
        <div className="space-y-3">
          <label className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Quick Fill (Demo)
          </label>
          <div className="grid grid-cols-3 gap-2">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => fillTestAccount("nivoq@mailinator.com")}
            >
              Student
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => fillTestAccount("gaka@mailinator.com")}
            >
              Tutor
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => fillTestAccount("alex@skillbridge.com")}
            >
              Admin
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or Manual Login
            </span>
          </div>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
        >
          <FieldGroup className="space-y-4">
            <form.Field
              name="email"
              children={(field) => (
                <Field>
                  <FieldLabel>Email</FieldLabel>
                  <Input
                    type="email"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                    placeholder="name@example.com"
                  />
                  {field.state.meta.isTouched && (
                    <FieldError errors={field.state.meta.errors} />
                  )}
                </Field>
              )}
            />
            <form.Field
              name="password"
              children={(field) => (
                <Field>
                  <div className="flex items-center justify-between">
                    <FieldLabel>Password</FieldLabel>
                    <Link
                      href="#"
                      className="text-sm text-primary hover:underline"
                    >
                      Forgot password?
                    </Link>
                  </div>
                  <Input
                    type="password"
                    value={field.state.value}
                    onChange={(e) => field.handleChange(e.target.value)}
                  />
                  {field.state.meta.isTouched && (
                    <FieldError errors={field.state.meta.errors} />
                  )}
                </Field>
              )}
            />
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              ) : null}
              {loading ? "Verifying..." : "Login"}
            </Button>
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter className="flex justify-center border-t py-4">
        <p className="text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link
            href="/signup"
            className="font-medium text-primary hover:underline"
          >
            Sign up
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
