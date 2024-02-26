'use client';

import { useState } from 'react';

import type { TCategory } from '../../types/category.type';

import { Menu } from '../menu.component';

interface NavbarMenuProps {
  categories: TCategory[];
}

export function NavbarMenu({ categories }: NavbarMenuProps) {
  const [activeMenuId, setActiveMenuId] = useState('1');
  const uniqueDepartments = categories.reduce((acc, value) => {
    acc.add(value.department);
    return acc;
  }, new Set<string>());
  const departments = Array.from(uniqueDepartments).map((department, index) => {
    return {
      departmentId: `${department}-${index}`,
      title: department,
      menuId: String(index + 2),
    };
  });

  return (
    <Menu.Root>
      <Menu.Main activeMenuId={activeMenuId}>
        <Menu.Title>Shop By Department</Menu.Title>
        {departments.map((department) => {
          return (
            <Menu.Item
              key={department.departmentId}
              callback={() => setActiveMenuId(department.menuId)}
            >
              {department.title}
              <Menu.ArrowRight />
            </Menu.Item>
          );
        })}
      </Menu.Main>
      {departments.map((department) => {
        return (
          <Menu.Submenu
            key={department.departmentId}
            activeMenuId={activeMenuId}
            menuId={department.menuId}
          >
            <Menu.Back callback={() => setActiveMenuId('1')}>
              Main Menu
            </Menu.Back>
            <Menu.Title>{department.title}</Menu.Title>
            {categories.map((category) => {
              if (category.department === department.title) {
                return (
                  <Menu.Link
                    key={category.categoryId}
                    href={`/products/category/${category.slug}`}
                  >
                    {category.name}
                  </Menu.Link>
                );
              }
              return null;
            })}
          </Menu.Submenu>
        );
      })}
    </Menu.Root>
  );
}
