'use client';

import { Button } from '@/components/ui/button';
import { Modal, ModalContent, ModalDescription, ModalHeader, ModalTitle, ModalTrigger } from '@/components/ui/modal';
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import type { LucideIcon } from 'lucide-react';
import { ChevronRightIcon, LinkIcon, PenSquareIcon, Wand2Icon } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

type CreateRecipeModalProps = {
  children: React.ReactNode;
};
export function AddRecipeModal({ children }: CreateRecipeModalProps) {
  return (
    <Modal>
      <ModalTrigger asChild>{children}</ModalTrigger>
      <ModalContent>
        <ModalHeader>
          <ModalTitle>Add New Recipe</ModalTitle>
          <ModalDescription>
            Add a new recipe by creating one manually, importing from a URL, or using AI.
          </ModalDescription>
        </ModalHeader>

        <div className="flex flex-col gap-2">
          <Link href="/recipes/new" className="flex">
            <AddRecipeButton
              className="flex-1"
              icon={PenSquareIcon}
              title="Add manually"
              description="Manually create a new recipe with Chowder"
            />
          </Link>

          <Modal>
            <ModalTrigger asChild>
              <AddRecipeButton
                icon={LinkIcon}
                title="Import from website"
                description="Add a recipe by importing a link from another site"
              />
            </ModalTrigger>

            <ModalContent>
              <ModalHeader>
                <ModalTitle>Import from website</ModalTitle>
                <ModalDescription>
                  Enter a URL of a recipe from a website and Chowder will do its best to import it
                </ModalDescription>
              </ModalHeader>
            </ModalContent>
          </Modal>

          <AddRecipeButton
            icon={Wand2Icon}
            title="Ask AI"
            description="Generate a recipe based on an idea or ingredients"
          />
        </div>
      </ModalContent>
    </Modal>
  );
}

interface AddRecipeButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  asChild?: boolean;
  title: string;
  description: string;
  icon: LucideIcon;
}

const AddRecipeButton = React.forwardRef<HTMLButtonElement, AddRecipeButtonProps>(
  ({ title, description, icon: Icon, className, ...props }, ref) => {
    const Comp = props.asChild ? Slot : Button;
    return (
      <Comp
        variant="ghost"
        ref={ref}
        key={title}
        className={cn('h-auto px-0 py-2 text-left lg:-mx-4 lg:px-4', className)}
        {...props}
      >
        <Icon className="h-6 w-6 text-muted-foreground lg:h-5 lg:w-5" />
        <div className="ml-4">
          <div className="text-base font-medium lg:text-sm">{title}</div>
          <p className="text-sm text-muted-foreground lg:text-xs">{description}</p>
        </div>
        <ChevronRightIcon className="ml-auto h-6 w-6 text-muted-foreground lg:h-5 lg:w-5" />
      </Comp>
    );
  },
);
AddRecipeButton.displayName = 'AddRecipeButton';
