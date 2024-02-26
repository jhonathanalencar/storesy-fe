'use client';

import * as Dialog from '@radix-ui/react-dialog';
import { Bars3Icon } from '@heroicons/react/24/solid';

import { Sidebar } from './sidebar.component';
import { TCategory } from '../../types/category.type';

interface MenuButtonProps {
  categories: TCategory[];
}

export function MenuButton({ categories }: MenuButtonProps) {
  return (
    <Dialog.Root>
      <Dialog.Trigger title="menu" className="outline-none">
        <Bars3Icon className="h-8 w-8 text-green-500" />
      </Dialog.Trigger>
      <Sidebar categories={categories} />
    </Dialog.Root>
  );
}
