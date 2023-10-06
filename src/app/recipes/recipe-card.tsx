'use client';

import { deleteRecipe } from '@/app/recipes/actions';
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
import type { Recipe } from '@prisma/client';

import { PenSquareIcon, Trash2Icon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <AlertDialog key={recipe.id}>
      <ContextMenu>
        <ContextMenuTrigger>
          <Link
            href={`/recipes/${recipe.id}`}
            className="flex flex-col overflow-hidden rounded-xl border hover:bg-muted"
          >
            <Image
              className="h-40 w-full object-cover"
              src={recipe?.image ?? 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg'}
              alt="TODO"
              width={100}
              height={100}
              unoptimized
            />
            <div className="flex flex-col px-4 py-2">
              <div className="line-clamp-1 font-semibold">{recipe.name}</div>
              <div className="mt-1 line-clamp-2 text-sm text-muted-foreground">{recipe.description}</div>
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
