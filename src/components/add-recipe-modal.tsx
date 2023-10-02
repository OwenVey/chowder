'use client';

import { Modal, ModalContent, ModalDescription, ModalHeader, ModalTitle, ModalTrigger } from '@/components/ui/modal';
import { ChevronRightIcon, LinkIcon, PenSquareIcon, Wand2Icon } from 'lucide-react';

type CreateRecipeModalProps = {
  children: React.ReactNode;
};
export function AddRecipeModal({ children }: CreateRecipeModalProps) {
  const types = [
    {
      icon: PenSquareIcon,
      title: 'Add manually',
      description: 'Manually create a new recipe with Chowder',
      onClick: () => console.log('Create new recipe'),
    },
    {
      icon: LinkIcon,
      title: 'Import from website',
      description: 'Add a recipe by importing a link from another site',
      onClick: () => console.log('Import from URL'),
    },
    {
      icon: Wand2Icon,
      title: 'Ask AI',
      description: 'Generate a recipe based on an idea or ingredients',
      onClick: () => console.log('Ask AI'),
    },
  ];

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
          {types.map((type) => (
            <button
              key={type.title}
              className="flex items-center rounded text-left hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 lg:-mx-4 lg:-my-2 lg:px-4 lg:py-2"
              onClick={type.onClick}
            >
              <type.icon className="h-6 w-6 text-muted-foreground lg:h-5 lg:w-5" />
              <div className="ml-4">
                {/* <Text size="sm" weight="medium">
                  {type.title}
                </Text>
                <Text size="xs" variant="muted">
                  {type.description}
                </Text> */}
                <div className="font-medium lg:text-sm">{type.title}</div>
                <p className="text-sm text-muted-foreground lg:text-xs">{type.description}</p>
              </div>
              <ChevronRightIcon className="ml-auto h-6 w-6 text-muted-foreground lg:h-5 lg:w-5" />
            </button>
          ))}
        </div>
      </ModalContent>
    </Modal>
  );
}
