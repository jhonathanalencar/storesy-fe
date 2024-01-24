drop schema lak;
drop table lak.cart;
drop table lak.cart_item;
drop table lak.product;

create schema lak;
create table lak.cart (
  cart_id uuid primary key,
  user_id uuid null,
  created_at timestamp default current_timestamp,
  updated_at timestamp default current_timestamp,
  constraint cart_user unique(cart_id,user_id)
);
create table lak.cart_item (
  item_id uuid primary key,
  product_id uuid,
  cart_id uuid references lak.cart (cart_id),
  quantity integer not null
);
create table lak.product (
  product_id uuid primary key,
  name text not null,
  slug text not null unique,
  description text not null,
  summary varchar(103) not null,
  price integer not null,
  categories text not null,
  image_url text not null,
  is_deal boolean not null default false,
  discount_percent numeric not null default 0,
  quantity_available smallint not null,
  created_at timestamp not null default current_timestamp,
  updated_at timestamp not null default current_timestamp,
  released_date timestamp null
);

insert into lak.product (product_id, name, slug, description, summary, price, categories, image_url, is_deal, discount_percent, quantity_available, created_at, updated_at, released_date)
values ('7ddfb3ef-ec05-4f8c-8097-6d460deaf853', 'HarmonyPod Wireless Earbuds', 'harmonypod-wireless-earbuds', 'Immerse yourself in unparalleled audio bliss with HarmonyPod Wireless Earbuds. These sleek and compact earbuds deliver crystal-clear sound and deep bass, providing an immersive listening experience. With touch controls, a secure fit, and long-lasting battery life, HarmonyPod is the perfect companion for music lovers on the go. Elevate your auditory journey and embrace the harmony of superior sound quality with HarmonyPod Wireless Earbuds.', 'Immerse yourself in unparalleled audio bliss with HarmonyPod Wireless Earbuds. These sleek and compa...', 6999, 'technology,headphones', 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', true, 0.3, 4, '2023-12-10T10:00:00', '2023-12-10T10:00:00', '2023-12-13T10:00:00');