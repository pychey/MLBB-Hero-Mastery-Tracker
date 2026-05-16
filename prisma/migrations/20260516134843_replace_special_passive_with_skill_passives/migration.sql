/*
  Warnings:

  - You are about to drop the column `specialPassive` on the `HeroProgress` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "HeroProgress" DROP COLUMN "specialPassive",
ADD COLUMN     "passiveSkill" TEXT[],
ADD COLUMN     "skill1" TEXT[],
ADD COLUMN     "skill2" TEXT[],
ADD COLUMN     "skill3" TEXT[],
ADD COLUMN     "skill4" TEXT[];
