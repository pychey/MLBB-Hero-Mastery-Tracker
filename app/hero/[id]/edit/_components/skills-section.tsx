import { SectionTitle } from "./section-title"
import { ListableInput } from "./listable-input"

type Props = {
  skillCombo: string[]
  firstSkillUpgrade: string[]
  skillToMax: string[]
  onSkillComboChange: (val: string[]) => void
  onFirstSkillUpgradeChange: (val: string[]) => void
  onSkillToMaxChange: (val: string[]) => void
}

export function SkillsSection({
  skillCombo,
  firstSkillUpgrade,
  skillToMax,
  onSkillComboChange,
  onFirstSkillUpgradeChange,
  onSkillToMaxChange,
}: Props) {
  return (
    <div>
      <SectionTitle title="Skills" />
      <div className="flex flex-col gap-4">
        <ListableInput
          label="Skill Combo"
          placeholder="e.g. 2+1+3"
          values={skillCombo}
          onChange={onSkillComboChange}
        />
        <ListableInput
          label="First Skill to Upgrade"
          placeholder="e.g. Skill 2"
          values={firstSkillUpgrade}
          onChange={onFirstSkillUpgradeChange}
        />
        <ListableInput
          label="Skill to Max"
          placeholder="e.g. Skill 1"
          values={skillToMax}
          onChange={onSkillToMaxChange}
        />
      </div>
    </div>
  )
}