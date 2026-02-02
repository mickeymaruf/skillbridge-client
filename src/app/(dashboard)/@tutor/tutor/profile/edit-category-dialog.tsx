"use client";

import { useEffect, useState } from "react";
import { useForm } from "@tanstack/react-form";
import z from "zod";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { categoryService } from "@/services/category.service";
import { setTutorCategories } from "@/actions/tutor";
import { getCategories } from "@/actions/category";

const schema = z.object({
  categories: z.array(z.string()),
});

type Category = {
  id: string;
  name: string;
};

export default function EditCategoryDialog({
  selectedCategories,
}: {
  selectedCategories: string[];
}) {
  const [allCategories, setAllCategories] = useState<Category[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const { data } = await getCategories();
      setAllCategories(data.data);
    })();
  }, []);

  const form = useForm({
    defaultValues: {
      categories: selectedCategories,
    },
    validators: { onSubmit: schema },
    onSubmit: async ({ value }) => {
      await setTutorCategories(value.categories);
      toast.success("Categories updated");
      setOpen(false);
    },
  });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button size="sm">Edit</Button>
      </DialogTrigger>

      <DialogContent>
        <DialogTitle>Edit categories</DialogTitle>
        <form
          id="edit-categories-form"
          onSubmit={(e) => {
            e.preventDefault();
            form.handleSubmit();
          }}
        >
          <FieldGroup>
            <form.Field
              name="categories"
              children={(field) => {
                const selectedIds = field.state.value;

                return (
                  <Field>
                    <FieldLabel>Add Category</FieldLabel>

                    <Select
                      onValueChange={(id) => {
                        if (selectedIds.includes(id)) return;
                        field.handleChange([...selectedIds, id]);
                      }}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select category" />
                      </SelectTrigger>

                      <SelectContent>
                        {allCategories.map((category) => (
                          <SelectItem
                            key={category.id}
                            value={category.id}
                            disabled={selectedIds.includes(category.id)}
                          >
                            {category.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {selectedIds.map((id) => {
                        const category = allCategories.find((c) => c.id === id);

                        return (
                          <Badge
                            key={id}
                            variant="secondary"
                            className="flex items-center gap-1"
                          >
                            {category?.name}
                            <button
                              type="button"
                              onClick={() =>
                                field.handleChange(
                                  field.state.value.filter((cId) => cId !== id),
                                )
                              }
                              className="ml-1 text-xs"
                            >
                              ✕
                            </button>
                          </Badge>
                        );
                      })}
                    </div>

                    {!field.state.meta.isValid && (
                      <FieldError errors={field.state.meta.errors} />
                    )}
                  </Field>
                );
              }}
            />
          </FieldGroup>
        </form>

        <DialogFooter className="flex justify-end gap-2">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button form="edit-categories-form">Save</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
