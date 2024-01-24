-- CreateTable
CREATE TABLE "lak.product" (
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

    CONSTRAINT "lak.product_pkey" PRIMARY KEY ("product_id")
);

-- CreateTable
CREATE TABLE "lak.cart" (
    "cart_id" TEXT NOT NULL,
    "user_id" TEXT,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "lak.cart_pkey" PRIMARY KEY ("cart_id")
);

-- CreateTable
CREATE TABLE "lak.cart_item" (
    "item_id" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "cart_id" TEXT NOT NULL,
    "quantity" INTEGER NOT NULL,

    CONSTRAINT "lak.cart_item_pkey" PRIMARY KEY ("item_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "lak.product_slug_key" ON "lak.product"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "lak.cart_cart_id_user_id_key" ON "lak.cart"("cart_id", "user_id");

-- AddForeignKey
ALTER TABLE "lak.cart_item" ADD CONSTRAINT "lak.cart_item_product_id_fkey" FOREIGN KEY ("product_id") REFERENCES "lak.product"("product_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "lak.cart_item" ADD CONSTRAINT "lak.cart_item_cart_id_fkey" FOREIGN KEY ("cart_id") REFERENCES "lak.cart"("cart_id") ON DELETE CASCADE ON UPDATE CASCADE;
