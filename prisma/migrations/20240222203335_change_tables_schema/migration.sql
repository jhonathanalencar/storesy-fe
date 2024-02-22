/*
  Warnings:

  - You are about to drop the column `categories` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `discount_percent` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `is_deal` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `quantity_available` on the `product` table. All the data in the column will be lost.
  - You are about to alter the column `summary` on the `product` table. The data in that column could be lost. The data in that column will be cast from `Text` to `VarChar(103)`.

*/
-- AlterTable
ALTER TABLE "product" DROP COLUMN "categories",
DROP COLUMN "discount_percent",
DROP COLUMN "is_deal",
DROP COLUMN "quantity_available",
ADD COLUMN     "discount_id" UUID,
ADD COLUMN     "quantity" DECIMAL DEFAULT 0,
ALTER COLUMN "summary" SET DATA TYPE VARCHAR(103),
ALTER COLUMN "price" SET DATA TYPE DECIMAL,
ALTER COLUMN "created_at" DROP NOT NULL,
ALTER COLUMN "created_at" SET DATA TYPE TIMESTAMP(6),
ALTER COLUMN "updated_at" DROP NOT NULL,
ALTER COLUMN "updated_at" SET DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "updated_at" SET DATA TYPE TIMESTAMP(6),
ALTER COLUMN "released_date" SET DATA TYPE TIMESTAMP(6);

-- CreateTable
CREATE TABLE "category" (
    "category_id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "category_pkey" PRIMARY KEY ("category_id")
);

-- CreateTable
CREATE TABLE "discount" (
    "discount_id" UUID NOT NULL,
    "discount_percent" DECIMAL DEFAULT 0,
    "active" BOOLEAN DEFAULT false,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "discount_pkey" PRIMARY KEY ("discount_id")
);

-- CreateTable
CREATE TABLE "product_category" (
    "product_category_id" SERIAL NOT NULL,
    "product_id" UUID,
    "category_id" UUID,

    CONSTRAINT "product_category_pkey" PRIMARY KEY ("product_category_id")
);

-- CreateTable
CREATE TABLE "product_rate" (
    "product_rate_id" UUID NOT NULL,
    "user_id" UUID NOT NULL,
    "product_id" UUID,
    "score" INTEGER NOT NULL,
    "description" TEXT NOT NULL,
    "created_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "product_rate_pkey" PRIMARY KEY ("product_rate_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "category_slug_key" ON "category"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "product_user" ON "product_rate"("product_id", "user_id");

-- AddForeignKey
ALTER TABLE "product" ADD CONSTRAINT "product_discount_id_fkey" FOREIGN KEY ("discount_id") REFERENCES "discount"("discount_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "product_category" ADD CONSTRAINT "fk_category" FOREIGN KEY ("category_id") REFERENCES "category"("category_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "product_category" ADD CONSTRAINT "fk_product" FOREIGN KEY ("product_id") REFERENCES "product"("product_id") ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "product_rate" ADD CONSTRAINT "fk_product" FOREIGN KEY ("product_id") REFERENCES "product"("product_id") ON DELETE CASCADE ON UPDATE NO ACTION;
