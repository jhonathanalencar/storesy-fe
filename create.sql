drop schema lak;
drop table lak.cart;
drop table lak.cart_item;

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