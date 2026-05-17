"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  HeroProgress,
  HeroRole,
  MLBBItem,
  EmblemsRole,
  EmblemTalent1,
  EmblemTalent2,
  EmblemCoreTalent,
  BattleSpell,
  ComplexityLevel,
  HeroStrength,
  HeroInterest,
  HeroProgressRecord,
} from "@/lib/types"
import { saveHeroProgress } from "@/lib/actions/heroes"
import { StatusSection } from "./status-section"
import { SpellSection } from "./spell-section"
import { SkillsSection } from "./skills-section"
import { PassiveSection } from "./passive-section"
import { TipsSection } from "./tips-section"
import { OtherSection } from "./other-section"

type Props = {
  heroId: number
  heroName: string
  initial: HeroProgressRecord | null
}

export function HeroEditForm({ heroId, heroName, initial }: Props) {
  const router = useRouter()
  const [saving, setSaving] = useState(false)

  const [progress, setProgress] = useState<HeroProgress>(initial?.progress ?? HeroProgress.Pending)
  const [roles, setRoles] = useState<HeroRole[]>(initial?.roles ?? [])
  const [complexity, setComplexity] = useState<ComplexityLevel | null>(initial?.complexityLevel ?? null)
  const [strengthLevel, setStrengthLevel] = useState<HeroStrength | null>(initial?.strengthLevel ?? null)
  const [interest, setInterest] = useState<HeroInterest | null>(initial?.interest ?? null)
  const [spell, setSpell] = useState<BattleSpell[]>(initial?.spell ?? [])
  const [skillCombo, setSkillCombo] = useState<string[]>(initial?.skillCombo ?? [])
  const [firstSkillUpgrade, setFirstSkillUpgrade] = useState<string[]>(initial?.firstSkillUpgrade ?? [])
  const [skillToMax, setSkillToMax] = useState<string[]>(initial?.skillToMax ?? [])
  const [passiveSkill, setPassiveSkill] = useState<string[]>(initial?.passiveSkill ?? [])
  const [skill1, setSkill1] = useState<string[]>(initial?.skill1 ?? [])
  const [skill2, setSkill2] = useState<string[]>(initial?.skill2 ?? [])
  const [skill3, setSkill3] = useState<string[]>(initial?.skill3 ?? [])
  const [skill4, setSkill4] = useState<string[]>(initial?.skill4 ?? [])
  const [heroTips, setHeroTips] = useState<string[]>(initial?.heroTips ?? [])
  const [counterWho, setCounterWho] = useState<string[]>(initial?.counterWho ?? [])
  const [whoCounter, setWhoCounter] = useState<string[]>(initial?.whoCounter ?? [])

  async function handleSave() {
    setSaving(true)

    const clean = (arr: string[]) => arr.filter((s) => s.trim() !== "")

    await saveHeroProgress(heroId, {
      progress,
      roles,
      coreItems: initial?.coreItems ?? [],
      optionalItems: initial?.optionalItems ?? [],
      emblemRole: initial?.emblemRole ?? null,
      emblemTalent1: initial?.emblemTalent1 ?? null,
      emblemTalent2: initial?.emblemTalent2 ?? null,
      emblemCoreTalent: initial?.emblemCoreTalent ?? null,
      skillCombo: clean(skillCombo),
      firstSkillUpgrade: clean(firstSkillUpgrade),
      skillToMax: clean(skillToMax),
      passiveSkill: clean(passiveSkill),
      skill1: clean(skill1),
      skill2: clean(skill2),
      skill3: clean(skill3),
      skill4: clean(skill4),
      complexityLevel: complexity,
      strengthLevel,
      interest,
      spell,
      powerSpike: initial?.powerSpike ?? null,
      heroTips: clean(heroTips),
      counterWho: clean(counterWho),
      whoCounter: clean(whoCounter),
    })
    setSaving(false)
    router.push(`/hero/${heroId}`)
  }

  return (
    <div className="flex flex-col gap-6">
      <div className="sticky top-0 z-10 py-2 bg-background flex justify-end">
        <Button onClick={handleSave} disabled={saving}>
          {saving ? "Saving..." : "Save"}
        </Button>
      </div>
      <StatusSection
        progress={progress}
        roles={roles}
        complexity={complexity}
        strengthLevel={strengthLevel}
        interest={interest}
        onProgressChange={setProgress}
        onRolesChange={setRoles}
        onComplexityChange={setComplexity}
        onStrengthLevelChange={setStrengthLevel}
        onInterestChange={setInterest}
      />
      <SpellSection
        spell={spell}
        onSpellChange={setSpell}
      />
      <SkillsSection
        skillCombo={skillCombo}
        firstSkillUpgrade={firstSkillUpgrade}
        skillToMax={skillToMax}
        onSkillComboChange={setSkillCombo}
        onFirstSkillUpgradeChange={setFirstSkillUpgrade}
        onSkillToMaxChange={setSkillToMax}
      />
      <PassiveSection
        passiveSkill={passiveSkill}
        skill1={skill1}
        skill2={skill2}
        skill3={skill3}
        skill4={skill4}
        onPassiveSkillChange={setPassiveSkill}
        onSkill1Change={setSkill1}
        onSkill2Change={setSkill2}
        onSkill3Change={setSkill3}
        onSkill4Change={setSkill4}
      />
      <TipsSection
        heroTips={heroTips}
        onHeroTipsChange={setHeroTips}
      />
      <OtherSection
        counterWho={counterWho}
        whoCounter={whoCounter}
        onCounterWhoChange={setCounterWho}
        onWhoCounterChange={setWhoCounter}
      />
    </div>
  )
}