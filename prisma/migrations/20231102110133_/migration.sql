/*
  Warnings:

  - You are about to drop the column `slug` on the `NestedCategory` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[slug]` on the table `Menu` will be added. If there are existing duplicate values, this will fail.
  - Made the column `slug` on table `Menu` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Menu" ALTER COLUMN "slug" SET NOT NULL;

-- AlterTable
ALTER TABLE "NestedCategory" DROP COLUMN "slug";

-- CreateIndex
CREATE UNIQUE INDEX "Menu_slug_key" ON "Menu"("slug");
