/*
  Warnings:

  - The `skillCombo` column on the `HeroProgress` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `firstSkillUpgrade` column on the `HeroProgress` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `skillToMax` column on the `HeroProgress` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `specialPassive` column on the `HeroProgress` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `counterWho` column on the `HeroProgress` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The `whoCounter` column on the `HeroProgress` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "HeroProgress" ADD COLUMN     "heroTips" TEXT[],
ADD COLUMN     "strengthLevel" TEXT,
DROP COLUMN "skillCombo",
ADD COLUMN     "skillCombo" TEXT[],
DROP COLUMN "firstSkillUpgrade",
ADD COLUMN     "firstSkillUpgrade" TEXT[],
DROP COLUMN "skillToMax",
ADD COLUMN     "skillToMax" TEXT[],
DROP COLUMN "specialPassive",
ADD COLUMN     "specialPassive" TEXT[],
DROP COLUMN "counterWho",
ADD COLUMN     "counterWho" TEXT[],
DROP COLUMN "whoCounter",
ADD COLUMN     "whoCounter" TEXT[];
