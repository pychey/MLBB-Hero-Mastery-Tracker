/*
  Warnings:

  - You are about to drop the column `items` on the `HeroProgress` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "HeroProgress" DROP COLUMN "items",
ADD COLUMN     "coreItems" TEXT[],
ADD COLUMN     "optionalItems" TEXT[];
