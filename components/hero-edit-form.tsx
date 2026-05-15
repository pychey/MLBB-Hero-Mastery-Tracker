"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
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
  HeroProgressRecord,
  ITEM_CATEGORIES,
} from "@/lib/types"
import { saveHeroProgress } from "@/lib/actions/heroes"

type Props = {
  heroId: number
  heroName: string
  initial: HeroProgressRecord | null
}

function SectionTitle({ title }: { title: string }) {
  return (
    <div className="mb-3">
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {title}
      </p>
      <Separator className="mt-1.5" />
    </div>
  )
}

function CheckboxGroup<T extends string>({
  label,
  options,
  selected,
  onChange,
}: {
  label: string
  options: T[]
  selected: T[]
  onChange: (val: T[]) => void
}) {
  const toggle = (val: T) => {
    onChange(
      selected.includes(val) ? selected.filter((v) => v !== val) : [...selected, val]
    )
  }

  return (
    <div className="flex flex-col gap-1.5">
      <Label>{label}</Label>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => toggle(opt)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
              selected.includes(opt)
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card text-muted-foreground border-border hover:border-primary"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  )
}

function RadioGroup<T extends string>({
  label,
  options,
  selected,
  onChange,
}: {
  label: string
  options: T[]
  selected: T | null
  onChange: (val: T | null) => void
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label>{label}</Label>
      <div className="flex flex-wrap gap-2">
        {options.map((opt) => (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(selected === opt ? null : opt)}
            className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
              selected === opt
                ? "bg-primary text-primary-foreground border-primary"
                : "bg-card text-muted-foreground border-border hover:border-primary"
            }`}
          >
            {opt}
          </button>
        ))}
      </div>
    </div>
  )
}

export function HeroEditForm({ heroId, heroName, initial }: Props) {
  const router = useRouter()
  const [saving, setSaving] = useState(false)

  const [progress, setProgress] = useState<HeroProgress>(
    initial?.progress ?? HeroProgress.Pending
  )
  const [roles, setRoles] = useState<HeroRole[]>(initial?.roles ?? [])
  const [complexity, setComplexity] = useState<ComplexityLevel | null>(
    initial?.complexityLevel ?? null
  )
  const [spell, setSpell] = useState<BattleSpell[]>(initial?.spell ?? [])
  const [coreItems, setCoreItems] = useState<MLBBItem[]>(initial?.coreItems ?? [])
  const [optionalItems, setOptionalItems] = useState<MLBBItem[]>(initial?.optionalItems ?? [])
  const [emblemRole, setEmblemRole] = useState<EmblemsRole | null>(
    initial?.emblemRole ?? null
  )
  const [emblemTalent1, setEmblemTalent1] = useState<EmblemTalent1 | null>(
    initial?.emblemTalent1 ?? null
  )
  const [emblemTalent2, setEmblemTalent2] = useState<EmblemTalent2 | null>(
    initial?.emblemTalent2 ?? null
  )
  const [emblemCoreTalent, setEmblemCoreTalent] = useState<EmblemCoreTalent | null>(
    initial?.emblemCoreTalent ?? null
  )
  const [skillCombo, setSkillCombo] = useState(initial?.skillCombo ?? "")
  const [firstSkillUpgrade, setFirstSkillUpgrade] = useState(
    initial?.firstSkillUpgrade ?? ""
  )
  const [skillToMax, setSkillToMax] = useState(initial?.skillToMax ?? "")
  const [specialPassive, setSpecialPassive] = useState(initial?.specialPassive ?? "")
  const [powerSpike, setPowerSpike] = useState(initial?.powerSpike ?? "")
  const [counterWho, setCounterWho] = useState(initial?.counterWho ?? "")
  const [whoCounter, setWhoCounter] = useState(initial?.whoCounter ?? "")

  async function handleSave() {
    setSaving(true)
    await saveHeroProgress(heroId, {
      progress,
      roles,
      coreItems,
      optionalItems,
      emblemRole,
      emblemTalent1,
      emblemTalent2,
      emblemCoreTalent,
      skillCombo: skillCombo || null,
      firstSkillUpgrade: firstSkillUpgrade || null,
      skillToMax: skillToMax || null,
      specialPassive: specialPassive || null,
      complexityLevel: complexity,
      spell,
      powerSpike: powerSpike || null,
      counterWho: counterWho || null,
      whoCounter: whoCounter || null,
    })
    setSaving(false)
    router.push(`/hero/${heroId}`)
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <SectionTitle title="Status" />
        <div className="flex flex-col gap-4">
          <RadioGroup
            label="Progress"
            options={Object.values(HeroProgress)}
            selected={progress}
            onChange={(v) => v && setProgress(v)}
          />
          <CheckboxGroup
            label="Role"
            options={Object.values(HeroRole)}
            selected={roles}
            onChange={setRoles}
          />
          <RadioGroup
            label="Complexity Level"
            options={Object.values(ComplexityLevel)}
            selected={complexity}
            onChange={setComplexity}
          />
        </div>
      </div>

      <div>
        <SectionTitle title="Battle Spell" />
        <CheckboxGroup
          label="Spell"
          options={Object.values(BattleSpell)}
          selected={spell}
          onChange={setSpell}
        />
      </div>

      <div>
        <SectionTitle title="Emblem" />
        <div className="flex flex-col gap-4">
          <RadioGroup
            label="Emblem Role"
            options={Object.values(EmblemsRole)}
            selected={emblemRole}
            onChange={setEmblemRole}
          />
          <RadioGroup
            label="First Talent"
            options={Object.values(EmblemTalent1)}
            selected={emblemTalent1}
            onChange={setEmblemTalent1}
          />
          <RadioGroup
            label="Second Talent"
            options={Object.values(EmblemTalent2)}
            selected={emblemTalent2}
            onChange={setEmblemTalent2}
          />
          <RadioGroup
            label="Core Talent"
            options={Object.values(EmblemCoreTalent)}
            selected={emblemCoreTalent}
            onChange={setEmblemCoreTalent}
          />
        </div>
      </div>

      <div>
        <SectionTitle title="Items" />
        <div className="flex flex-col gap-6">
          {["Core Items", "Optional Items"].map((slotLabel, slotIndex) => {
            const selected = slotIndex === 0 ? coreItems : optionalItems
            const setSelected = slotIndex === 0 ? setCoreItems : setOptionalItems
            return (
              <div key={slotLabel} className="flex flex-col gap-4">
                <p className="text-sm font-semibold">{slotLabel}</p>
                {ITEM_CATEGORIES.map((category) => (
                  <div key={category.label} className="flex flex-col gap-1.5">
                    <Label className="text-muted-foreground text-xs">{category.label}</Label>
                    <div className="flex flex-wrap gap-2">
                      {category.items.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() =>
                            setSelected((prev) =>
                              prev.includes(item)
                                ? prev.filter((i) => i !== item)
                                : [...prev, item]
                            )
                          }
                          className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                            selected.includes(item)
                              ? "bg-primary text-primary-foreground border-primary"
                              : "bg-card text-muted-foreground border-border hover:border-primary"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )
          })}
        </div>
      </div>

      <div>
        <SectionTitle title="Skills" />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <Label>Skill Combo</Label>
            <Input
              placeholder="e.g. 2+1+3"
              value={skillCombo}
              onChange={(e) => setSkillCombo(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label>First Skill to Upgrade</Label>
            <Input
              placeholder="e.g. 2"
              value={firstSkillUpgrade}
              onChange={(e) => setFirstSkillUpgrade(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label>Skill to Max</Label>
            <Input
              placeholder="e.g. 1"
              value={skillToMax}
              onChange={(e) => setSkillToMax(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label>Special Passive</Label>
            <Textarea
              placeholder="Describe the special passive..."
              value={specialPassive}
              onChange={(e) => setSpecialPassive(e.target.value)}
              rows={3}
            />
          </div>
        </div>
      </div>

      <div>
        <SectionTitle title="Other" />
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1.5">
            <Label>Power Spike</Label>
            <Input
              placeholder="e.g. Level 4"
              value={powerSpike}
              onChange={(e) => setPowerSpike(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label>Counter Who</Label>
            <Input
              placeholder="Heroes this hero counters..."
              value={counterWho}
              onChange={(e) => setCounterWho(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-1.5">
            <Label>Who Counter</Label>
            <Input
              placeholder="Heroes that counter this hero..."
              value={whoCounter}
              onChange={(e) => setWhoCounter(e.target.value)}
            />
          </div>
        </div>
      </div>

      <Button onClick={handleSave} disabled={saving} className="w-full">
        {saving ? "Saving..." : "Save"}
      </Button>
    </div>
  )
}