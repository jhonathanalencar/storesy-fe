'use client';

import { useState } from 'react';

import { Menu } from '../menu.component';

export function NavbarMenu() {
  const [activeMenuId, setActiveMenuId] = useState('1');

  return (
    <Menu.Root>
      <Menu.Main activeMenuId={activeMenuId}>
        <Menu.Title>Shop By Department</Menu.Title>
        <Menu.Item callback={() => setActiveMenuId('2')}>
          Electronics
          <Menu.ArrowRight />
        </Menu.Item>
      </Menu.Main>
      <Menu.Submenu activeMenuId={activeMenuId} menuId="2">
        <Menu.Back callback={() => setActiveMenuId('1')}>Main Menu</Menu.Back>
        <Menu.Title>Electronics</Menu.Title>
        <Menu.Link href="/products/category/headphones">Headphones</Menu.Link>
      </Menu.Submenu>
    </Menu.Root>
  );
}
