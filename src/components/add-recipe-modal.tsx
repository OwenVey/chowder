'use client';

import { Modal, ModalContent, ModalDescription, ModalHeader, ModalTitle, ModalTrigger } from '@/components/ui/modal';
import { Slot } from '@radix-ui/react-slot';
import type { LucideIcon } from 'lucide-react';
import { ChevronRightIcon, LinkIcon, PenSquareIcon, Wand2Icon } from 'lucide-react';
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

        <div className="flex flex-col gap-6">
          <Modal>
            <ModalTrigger asChild>
              <AddRecipeButton
                icon={PenSquareIcon}
                title="Add manually"
                description="Manually create a new recipe with Chowder"
              />
            </ModalTrigger>

            <ModalContent>
              <ModalHeader>
                <ModalTitle>Create Recipe</ModalTitle>
              </ModalHeader>
            </ModalContent>
          </Modal>

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
  ({ title, description, icon: Icon, ...props }, ref) => {
    const Comp = props.asChild ? Slot : 'button';
    return (
      <Comp
        ref={ref}
        key={title}
        className="flex items-center rounded text-left hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 lg:-mx-4 lg:-my-2 lg:px-4 lg:py-2"
        {...props}
      >
        <Icon className="h-6 w-6 text-muted-foreground lg:h-5 lg:w-5" />
        <div className="ml-4">
          <div className="font-medium lg:text-sm">{title}</div>
          <p className="text-sm text-muted-foreground lg:text-xs">{description}</p>
        </div>
        <ChevronRightIcon className="ml-auto h-6 w-6 text-muted-foreground lg:h-5 lg:w-5" />
      </Comp>
    );
  },
);
AddRecipeButton.displayName = 'AddRecipeButton';
