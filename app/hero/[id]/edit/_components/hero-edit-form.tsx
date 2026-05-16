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
import { OtherSection } from "./other-section"
import { TipsSection } from "./tips-section"

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
  const [specialPassive, setSpecialPassive] = useState<string[]>(initial?.specialPassive ?? [])
  const [heroTips, setHeroTips] = useState<string[]>(initial?.heroTips ?? [])
  const [counterWho, setCounterWho] = useState<string[]>(initial?.counterWho ?? [])
  const [whoCounter, setWhoCounter] = useState<string[]>(initial?.whoCounter ?? [])

  async function handleSave() {
    setSaving(true)
    await saveHeroProgress(heroId, {
      progress,
      roles,
      coreItems: initial?.coreItems ?? [],
      optionalItems: initial?.optionalItems ?? [],
      emblemRole: initial?.emblemRole ?? null,
      emblemTalent1: initial?.emblemTalent1 ?? null,
      emblemTalent2: initial?.emblemTalent2 ?? null,
      emblemCoreTalent: initial?.emblemCoreTalent ?? null,
      skillCombo,
      firstSkillUpgrade,
      skillToMax,
      specialPassive,
      complexityLevel: complexity,
      strengthLevel,
      interest,
      spell,
      powerSpike: initial?.powerSpike ?? null,
      heroTips,
      counterWho,
      whoCounter,
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
        specialPassive={specialPassive}
        onSkillComboChange={setSkillCombo}
        onFirstSkillUpgradeChange={setFirstSkillUpgrade}
        onSkillToMaxChange={setSkillToMax}
        onSpecialPassiveChange={setSpecialPassive}
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