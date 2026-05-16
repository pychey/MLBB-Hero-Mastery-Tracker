import { HeroProgress, HeroRole, ComplexityLevel, HeroStrength, HeroInterest } from "@/lib/types"
import { RadioGroup } from "./radio-group"
import { CheckboxGroup } from "./checkbox-group"
import { SectionTitle } from "./section-title"

type Props = {
  progress: HeroProgress
  roles: HeroRole[]
  complexity: ComplexityLevel | null
  strengthLevel: HeroStrength | null
  interest: HeroInterest | null
  onProgressChange: (val: HeroProgress) => void
  onRolesChange: (val: HeroRole[]) => void
  onComplexityChange: (val: ComplexityLevel | null) => void
  onStrengthLevelChange: (val: HeroStrength | null) => void
  onInterestChange: (val: HeroInterest | null) => void
}

export function StatusSection({
  progress,
  roles,
  complexity,
  strengthLevel,
  interest,
  onProgressChange,
  onRolesChange,
  onComplexityChange,
  onStrengthLevelChange,
  onInterestChange,
}: Props) {
  return (
    <div>
      <SectionTitle title="Status" />
      <div className="flex flex-col gap-4">
        <RadioGroup
          label="Progress"
          options={Object.values(HeroProgress)}
          selected={progress}
          onChange={(v) => v && onProgressChange(v)}
        />
        <RadioGroup
          label="Interest"
          options={Object.values(HeroInterest)}
          selected={interest}
          onChange={onInterestChange}
        />
        <RadioGroup
          label="Strength Level"
          options={Object.values(HeroStrength)}
          selected={strengthLevel}
          onChange={onStrengthLevelChange}
        />
        <CheckboxGroup
          label="Role"
          options={Object.values(HeroRole)}
          selected={roles}
          onChange={onRolesChange}
        />
        <RadioGroup
          label="Complexity Level"
          options={Object.values(ComplexityLevel)}
          selected={complexity}
          onChange={onComplexityChange}
        />
      </div>
    </div>
  )
}