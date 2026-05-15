"use server"

import { prisma } from "@/lib/prisma"
import { auth } from "@/auth"
import { HeroProgress, HeroRole, MLBBItem, EmblemsRole, EmblemTalent1, EmblemTalent2, EmblemCoreTalent, BattleSpell, HeroWithProgress, ComplexityLevel, HeroProgressRecord } from "@/lib/types"

export async function getHeroes(): Promise<HeroWithProgress[]> {
  const session = await auth()
  if (!session?.user?.id) return []

  const heroes = await prisma.hero.findMany({
    orderBy: { id: "asc" },
    include: {
      heroProgress: {
        where: { userId: session.user.id },
      },
    },
  })

  return heroes.map((hero) => {
    const p = hero.heroProgress[0] ?? null
    return {
      id: hero.id,
      name: hero.name,
      heroProgress: p
        ? {
            id: p.id,
            userId: p.userId,
            heroId: p.heroId,
            progress: p.progress as HeroProgress,
            roles: p.roles as HeroRole[],
            items: p.items as MLBBItem[],
            emblemRole: p.emblemRole as EmblemsRole | null,
            emblemTalent1: p.emblemTalent1 as EmblemTalent1 | null,
            emblemTalent2: p.emblemTalent2 as EmblemTalent2 | null,
            emblemCoreTalent: p.emblemCoreTalent as EmblemCoreTalent | null,
            skillCombo: p.skillCombo,
            firstSkillUpgrade: p.firstSkillUpgrade,
            skillToMax: p.skillToMax,
            specialPassive: p.specialPassive,
            complexityLevel: p.complexityLevel as null,
            spell: p.spell as BattleSpell[],
            powerSpike: p.powerSpike,
            counterWho: p.counterWho,
            whoCounter: p.whoCounter,
          }
        : null,
    }
  })
}

export async function getHeroById(heroId: number): Promise<HeroWithProgress | null> {
  const session = await auth()
  if (!session?.user?.id) return null

  const hero = await prisma.hero.findUnique({
    where: { id: heroId },
    include: {
      heroProgress: {
        where: { userId: session.user.id },
      },
    },
  })

  if (!hero) return null

  const p = hero.heroProgress[0] ?? null

  return {
    id: hero.id,
    name: hero.name,
    heroProgress: p
      ? {
          id: p.id,
          userId: p.userId,
          heroId: p.heroId,
          progress: p.progress as HeroProgress,
          roles: p.roles as HeroRole[],
          items: p.items as MLBBItem[],
          emblemRole: p.emblemRole as EmblemsRole | null,
          emblemTalent1: p.emblemTalent1 as EmblemTalent1 | null,
          emblemTalent2: p.emblemTalent2 as EmblemTalent2 | null,
          emblemCoreTalent: p.emblemCoreTalent as EmblemCoreTalent | null,
          skillCombo: p.skillCombo,
          firstSkillUpgrade: p.firstSkillUpgrade,
          skillToMax: p.skillToMax,
          specialPassive: p.specialPassive,
          complexityLevel: p.complexityLevel as ComplexityLevel | null,
          spell: p.spell as BattleSpell[],
          powerSpike: p.powerSpike,
          counterWho: p.counterWho,
          whoCounter: p.whoCounter,
        }
      : null,
  }
}

export async function saveHeroProgress(
  heroId: number,
  data: Omit<HeroProgressRecord, "id" | "userId" | "heroId">
) {
  const session = await auth()
  if (!session?.user?.id) return { error: "Not authenticated" }

  await prisma.heroProgress.upsert({
    where: {
      userId_heroId: {
        userId: session.user.id,
        heroId,
      },
    },
    update: {
      progress: data.progress,
      roles: data.roles,
      items: data.items,
      emblemRole: data.emblemRole,
      emblemTalent1: data.emblemTalent1,
      emblemTalent2: data.emblemTalent2,
      emblemCoreTalent: data.emblemCoreTalent,
      skillCombo: data.skillCombo,
      firstSkillUpgrade: data.firstSkillUpgrade,
      skillToMax: data.skillToMax,
      specialPassive: data.specialPassive,
      complexityLevel: data.complexityLevel,
      spell: data.spell,
      powerSpike: data.powerSpike,
      counterWho: data.counterWho,
      whoCounter: data.whoCounter,
    },
    create: {
      userId: session.user.id,
      heroId,
      progress: data.progress,
      roles: data.roles,
      items: data.items,
      emblemRole: data.emblemRole,
      emblemTalent1: data.emblemTalent1,
      emblemTalent2: data.emblemTalent2,
      emblemCoreTalent: data.emblemCoreTalent,
      skillCombo: data.skillCombo,
      firstSkillUpgrade: data.firstSkillUpgrade,
      skillToMax: data.skillToMax,
      specialPassive: data.specialPassive,
      complexityLevel: data.complexityLevel,
      spell: data.spell,
      powerSpike: data.powerSpike,
      counterWho: data.counterWho,
      whoCounter: data.whoCounter,
    },
  })

  return { success: true }
}