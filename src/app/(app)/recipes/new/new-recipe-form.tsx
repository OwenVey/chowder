'use client';

import { createRecipe } from '@/app/(app)/recipes/actions';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as z from 'zod';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Name must be at least 2 characters.',
  }),
  image: z.string(),
  description: z.string(),
  servings: z.coerce.number().min(1),
  prepTime: z.coerce.number().min(0),
  cookTime: z.coerce.number().min(0),
  ingredients: z.string(),
  directions: z.string(),
  public: z.boolean(),
});

export function NewRecipeForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      image: `https://picsum.photos/seed/${new Date().getTime()}/200`,
      description: '',
      servings: 1,
      prepTime: 0,
      cookTime: 0,
      ingredients: '',
      directions: '',
      public: true,
    },
  });

  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(recipe: z.infer<typeof formSchema>) {
    setIsLoading(true);
    createRecipe(recipe);
  }

  return (
    <Form {...form}>
      <form id="create-recipe" onSubmit={form.handleSubmit(onSubmit)} className="mx-auto space-y-8 p-4 lg:max-w-3xl">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Give your recipe a name" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex gap-4">
          <FormField
            control={form.control}
            name="servings"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Servings</FormLabel>
                <FormControl>
                  <Input type="number" inputMode="numeric" min={1} {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="prepTime"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Prep Time</FormLabel>
                <FormControl>
                  <Input type="number" inputMode="numeric" trailingLabel="min" min={1} {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cookTime"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Cook Time</FormLabel>
                <FormControl>
                  <Input type="number" inputMode="numeric" trailingLabel="min" min={1} {...field} />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="ingredients"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Ingredients</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="directions"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Directions</FormLabel>
              <FormControl>
                <Textarea {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="public"
          render={({ field }) => (
            <FormItem className="flex items-center gap-2 space-y-0">
              <FormControl>
                <Switch checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <FormLabel>Public</FormLabel>
            </FormItem>
          )}
        />

        <Button type="submit" loading={isLoading} className="float-right w-full lg:w-fit">
          Create
        </Button>
      </form>
    </Form>
  );
}
