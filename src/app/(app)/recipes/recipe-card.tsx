'use client';

import { deleteRecipe } from '@/app/(app)/recipes/actions';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { ContextMenu, ContextMenuContent, ContextMenuItem, ContextMenuTrigger } from '@/components/ui/context-menu';
import { Separator } from '@/components/ui/separator';
import type { Recipe } from '@prisma/client';

import { CarrotIcon, PenSquareIcon, TimerIcon, Trash2Icon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { parseIngredient } from 'parse-ingredient';

export function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <AlertDialog key={recipe.id}>
      <ContextMenu>
        <ContextMenuTrigger>
          <Link
            href={`/recipes/${recipe.id}`}
            className="flex h-full flex-col overflow-hidden rounded-xl border hover:bg-muted"
          >
            <Image
              className="h-36 w-full object-cover"
              src={recipe?.image ?? 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg'}
              alt="TODO"
              width={100}
              height={100}
              unoptimized
            />
            <div className="flex flex-1 flex-col justify-between px-4 py-2">
              <div>
                <div className="line-clamp-1 font-semibold">{recipe.name}</div>
                <div className="mt-1 line-clamp-2 text-sm text-muted-foreground">{recipe.description}</div>
              </div>
              <div className="mt-2 flex items-center gap-2 text-xs font-medium text-muted-foreground">
                <div className="flex items-center">
                  <TimerIcon className="mr-1 h-4 w-4" />
                  {(recipe?.prepTime ?? 0) + (recipe?.cookTime ?? 0)} min
                </div>
                <Separator orientation="vertical" />
                <div className="flex items-center">
                  <CarrotIcon className="mr-1 h-4 w-4" />
                  {parseIngredient(recipe.ingredients ?? '').length} ingredients
                </div>
              </div>
            </div>
          </Link>
        </ContextMenuTrigger>

        <ContextMenuContent>
          <ContextMenuItem asChild>
            <Link href={`/recipes/${recipe.id}/edit`}>
              <PenSquareIcon className="mr-2 h-4 w-4" /> Edit
            </Link>
          </ContextMenuItem>

          <AlertDialogTrigger asChild>
            <ContextMenuItem className="text-destructive focus:bg-destructive/10 focus:text-destructive">
              <Trash2Icon className="mr-2 h-4 w-4" />
              Delete
            </ContextMenuItem>
          </AlertDialogTrigger>
        </ContextMenuContent>
      </ContextMenu>

      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete &quot;{recipe.name}&quot;?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete this recipe.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction variant="destructive" onClick={() => deleteRecipe(recipe.id)}>
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
