/*
  Warnings:

  - You are about to drop the column `order_id` on the `cart_item` table. All the data in the column will be lost.
  - Made the column `created_at` on table `category` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `category` required. This step will fail if there are existing NULL values in that column.
  - Made the column `discount_percent` on table `discount` required. This step will fail if there are existing NULL values in that column.
  - Made the column `active` on table `discount` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `discount` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `discount` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `released_date` on table `product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `quantity` on table `product` required. This step will fail if there are existing NULL values in that column.
  - Made the column `product_id` on table `product_category` required. This step will fail if there are existing NULL values in that column.
  - Made the column `category_id` on table `product_category` required. This step will fail if there are existing NULL values in that column.
  - Made the column `product_id` on table `product_rate` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `product_rate` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `product_rate` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "cart_item" DROP COLUMN "order_id";

-- AlterTable
ALTER TABLE "category" ALTER COLUMN "created_at" SET NOT NULL,
ALTER COLUMN "updated_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "discount" ALTER COLUMN "discount_percent" SET NOT NULL,
ALTER COLUMN "active" SET NOT NULL,
ALTER COLUMN "created_at" SET NOT NULL,
ALTER COLUMN "updated_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "product" ALTER COLUMN "created_at" SET NOT NULL,
ALTER COLUMN "updated_at" SET NOT NULL,
ALTER COLUMN "released_date" SET NOT NULL,
ALTER COLUMN "quantity" SET NOT NULL;

-- AlterTable
ALTER TABLE "product_category" ALTER COLUMN "product_id" SET NOT NULL,
ALTER COLUMN "category_id" SET NOT NULL;

-- AlterTable
ALTER TABLE "product_rate" ALTER COLUMN "product_id" SET NOT NULL,
ALTER COLUMN "created_at" SET NOT NULL,
ALTER COLUMN "updated_at" SET NOT NULL;
