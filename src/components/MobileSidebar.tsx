import { Logo } from '@/components';
import { isActiveLink } from '@/utils/is-active-link';
import { navigation, tags } from '@/utils/mocks';
import { Bars3CenterLeftIcon, XMarkIcon } from '@heroicons/react/24/outline';
import * as Dialog from '@radix-ui/react-dialog';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function MobileSidebar() {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger className="text-gray-11 lg:hidden">
        <span className="sr-only">Open sidebar</span>
        <Bars3CenterLeftIcon className="h-6 w-6" aria-hidden="true" />
      </Dialog.Trigger>

      <AnimatePresence>
        {open ? (
          <Dialog.Portal forceMount>
            <Dialog.Overlay asChild>
              <motion.div
                className="fixed inset-0 z-40 bg-gray-9/75"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { type: 'spring', duration: 0.3 },
                }}
                exit={{ opacity: 0, transition: { duration: 0.3 } }}
              />
            </Dialog.Overlay>
            <Dialog.Content className="fixed inset-0 z-40 flex">
              <motion.div
                className="relative flex w-full max-w-xs flex-1 flex-col bg-gray-1 pt-5 pb-4"
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ type: 'spring', bounce: 0, duration: 0.3 }}
                  className="absolute top-0 right-0 -mr-12 pt-2"
                >
                  <Dialog.Close className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Close sidebar</span>
                    <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </Dialog.Close>
                </motion.div>

                <div className="flex flex-shrink-0 items-center px-4">
                  <Logo className="h-8 w-auto text-primary-9" />
                  <span className="ml-1 text-xl font-bold tracking-tight text-gray-12">
                    chowder.
                  </span>
                </div>
                <div className="mt-5 h-0 flex-1 overflow-y-auto">
                  <nav className="px-2">
                    <div className="space-y-1">
                      {navigation.map((item) => (
                        <Link
                          key={item.name}
                          href={item.href}
                          className={clsx(
                            isActiveLink(router, item.href)
                              ? 'bg-primary-9 text-white'
                              : 'text-gray-11 hover:bg-gray-5 hover:text-gray-12 active:bg-gray-6',
                            'group flex items-center rounded-md px-2 py-2 font-medium',
                          )}
                        >
                          <item.icon
                            className={clsx(
                              isActiveLink(router, item.href)
                                ? 'text-white'
                                : 'text-gray-9 group-hover:text-gray-11',
                              'mr-3 h-6 w-6 flex-shrink-0',
                            )}
                            aria-hidden="true"
                          />
                          {item.name}
                        </Link>
                      ))}
                    </div>
                    <div className="mt-8">
                      <h3 className="px-3 text-sm font-medium text-gray-11">Tags</h3>
                      <div className="mt-1 space-y-1" role="group">
                        {tags.map((tag) => (
                          <a
                            key={tag.name}
                            href={tag.href}
                            className="group flex items-center rounded-md px-3 py-2 font-medium leading-5 text-gray-11 hover:bg-gray-5 hover:text-gray-12 active:bg-gray-6"
                          >
                            <span
                              className={clsx(tag.bgColorClass, 'mr-4 h-2.5 w-2.5 rounded-full')}
                              aria-hidden="true"
                            />
                            <span className="truncate">{tag.name}</span>
                          </a>
                        ))}
                      </div>
                    </div>
                  </nav>
                </div>
              </motion.div>
            </Dialog.Content>
          </Dialog.Portal>
        ) : null}
      </AnimatePresence>
    </Dialog.Root>
  );
}
