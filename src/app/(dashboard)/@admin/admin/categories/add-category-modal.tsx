"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "@tanstack/react-form";
import { z } from "zod";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { createCategory } from "@/actions/category";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export const categorySchema = z.object({
  name: z.string().min(2, "Name is required"),
  slug: z.string().min(2, "Slug is required"),
});

export function AddCategoryModal({ modal }: { modal: boolean }) {
  const router = useRouter();
  const form = useForm({
    defaultValues: {
      name: "",
      slug: "",
    },
    validators: { onSubmit: categorySchema },
    onSubmit: async ({ value }) => {
      await createCategory(value);

      router.push("/admin/categories");
      toast.success("Category added!");
      form.reset();
    },
  });

  return (
    <Dialog
      open={modal}
      onOpenChange={() =>
        router.push(
          modal ? "/admin/categories" : "/admin/categories/?modal=true",
        )
      }
    >
      <DialogTrigger asChild>
        <Button className="cursor-pointer">Add Category</Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add Category</DialogTitle>
        </DialogHeader>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            e.stopPropagation();
            form.handleSubmit();
          }}
        >
          <FieldGroup>
            <form.Field
              name="name"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Name</FieldLabel>
                    <Input
                      id={field.name}
                      type="text"
                      value={field.state.value}
                      onChange={(e) => {
                        field.handleChange(e.target.value);
                        form.setFieldValue(
                          "slug",
                          e.target.value.toLowerCase().replace(/\s+/g, "-"),
                        );
                      }}
                      aria-invalid={isInvalid}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />
            <form.Field
              name="slug"
              children={(field) => {
                const isInvalid =
                  field.state.meta.isTouched && !field.state.meta.isValid;

                return (
                  <Field data-invalid={isInvalid}>
                    <FieldLabel htmlFor={field.name}>Slug</FieldLabel>
                    <Input
                      id={field.name}
                      type="text"
                      value={field.state.value}
                      onChange={(e) => field.handleChange(e.target.value)}
                      aria-invalid={isInvalid}
                    />
                    {isInvalid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />

            <Button
              type="submit"
              className="w-full"
              disabled={!form.state.canSubmit}
            >
              Add Category
            </Button>
          </FieldGroup>
        </form>
      </DialogContent>
    </Dialog>
  );
}
