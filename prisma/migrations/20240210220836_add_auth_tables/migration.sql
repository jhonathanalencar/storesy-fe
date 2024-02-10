/*
  Warnings:

  - The primary key for the `cart` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `cart_item` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `product` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - Changed the type of `cart_id` on the `cart` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `item_id` on the `cart_item` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `product_id` on the `cart_item` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `cart_id` on the `cart_item` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `product_id` on the `product` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "cart_item" DROP CONSTRAINT "cart_item_cart_id_fkey";

-- DropForeignKey
ALTER TABLE "cart_item" DROP CONSTRAINT "cart_item_product_id_fkey";

-- AlterTable
ALTER TABLE "cart" DROP CONSTRAINT "cart_pkey",
DROP COLUMN "cart_id",
ADD COLUMN     "cart_id" UUID NOT NULL,
ADD CONSTRAINT "cart_pkey" PRIMARY KEY ("cart_id");

-- AlterTable
ALTER TABLE "cart_item" DROP CONSTRAINT "cart_item_pkey",
ADD COLUMN     "order_id" UUID,
ADD COLUMN     "selected" BOOLEAN NOT NULL DEFAULT false,
DROP COLUMN "item_id",
ADD COLUMN     "item_id" UUID NOT NULL,
DROP COLUMN "product_id",
ADD COLUMN     "product_id" UUID NOT NULL,
DROP COLUMN "cart_id",
ADD COLUMN     "cart_id" UUID NOT NULL,
ADD CONSTRAINT "cart_item_pkey" PRIMARY KEY ("item_id");

-- AlterTable
ALTER TABLE "product" DROP CONSTRAINT "product_pkey",
DROP COLUMN "product_id",
ADD COLUMN     "product_id" UUID NOT NULL,
ADD CONSTRAINT "product_pkey" PRIMARY KEY ("product_id");

-- CreateTable
CREATE TABLE "account" (
    "account_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "provider_account_id" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "account_pkey" PRIMARY KEY ("account_id")
);

-- CreateTable
CREATE TABLE "session" (
    "session_id" TEXT NOT NULL,
    "session_token" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "session_pkey" PRIMARY KEY ("session_id")
);

-- CreateTable
CREATE TABLE "user" (
    "user_id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "email_verified" TIMESTAMP(3),
    "image" TEXT,

    CONSTRAINT "user_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "verification_token" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "account_provider_provider_account_id_key" ON "account"("provider", "provider_account_id");

-- CreateIndex
CREATE UNIQUE INDEX "session_session_token_key" ON "session"("session_token");

-- CreateIndex
CREATE UNIQUE INDEX "user_email_key" ON "user"("email");

-- CreateIndex
CREATE UNIQUE INDEX "verification_token_token_key" ON "verification_token"("token");

-- CreateIndex
CREATE UNIQUE INDEX "verification_token_identifier_token_key" ON "verification_token"("identifier", "token");

-- CreateIndex
CREATE UNIQUE INDEX "cart_cart_id_user_id_key" ON "cart"("cart_id", "user_id");

-- AddForeignKey
ALTER TABLE "cart_item" ADD CONSTRAINT "cart_item_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "product"("product_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cart_item" ADD CONSTRAINT "cart_item_cart_id_fkey" FOREIGN KEY ("cart_id") REFERENCES "cart"("cart_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "account" ADD CONSTRAINT "account_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "session" ADD CONSTRAINT "session_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE CASCADE ON UPDATE CASCADE;
