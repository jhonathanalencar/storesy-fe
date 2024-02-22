/*
  Warnings:

  - You are about to alter the column `discount_percent` on the `discount` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Integer`.
  - You are about to alter the column `quantity` on the `product` table. The data in that column could be lost. The data in that column will be cast from `Decimal` to `Integer`.

*/
-- AlterTable
ALTER TABLE "discount" ALTER COLUMN "discount_percent" SET DEFAULT 0,
ALTER COLUMN "discount_percent" SET DATA TYPE INTEGER;

-- AlterTable
ALTER TABLE "product" ALTER COLUMN "quantity" SET DEFAULT 0,
ALTER COLUMN "quantity" SET DATA TYPE INTEGER;
