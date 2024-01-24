/*
  Warnings:

  - You are about to drop the `lak.cart` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `lak.cart_item` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `lak.product` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "lak.cart_item" DROP CONSTRAINT "lak.cart_item_cart_id_fkey";

-- DropForeignKey
ALTER TABLE "lak.cart_item" DROP CONSTRAINT "lak.cart_item_product_id_fkey";

-- DropTable
DROP TABLE "lak.cart";

-- DropTable
DROP TABLE "lak.cart_item";

-- DropTable
DROP TABLE "lak.product";

-- CreateTable
CREATE TABLE "product" (
    "product_id" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "summary" TEXT NOT NULL,
    "image_url" TEXT NOT NULL,
    "categories" TEXT[],
    "price" INTEGER NOT NULL,
    "quantity_available" INTEGER NOT NULL,
    "is_deal" BOOLEAN NOT NULL DEFAULT false,
    "discount_percent" DOUBLE PRECISION NOT NULL DEFAULT 0,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "released_date" TIMESTAMP(3),

    CONSTRAINT "product_pkey" PRIMARY KEY ("product_id")
);

-- CreateTable
CREATE TABLE "cart" (
    "cart_id" TEXT NOT NULL,
    "user_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "cart_pkey" PRIMARY KEY ("cart_id")
);

-- CreateTable
CREATE TABLE "cart_item" (
    "item_id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "cart_id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "cart_item_pkey" PRIMARY KEY ("item_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "product_slug_key" ON "product"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "cart_cart_id_user_id_key" ON "cart"("cart_id", "user_id");

-- AddForeignKey
ALTER TABLE "cart_item" ADD CONSTRAINT "cart_item_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "product"("product_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cart_item" ADD CONSTRAINT "cart_item_cart_id_fkey" FOREIGN KEY ("cart_id") REFERENCES "cart"("cart_id") ON DELETE CASCADE ON UPDATE CASCADE;
