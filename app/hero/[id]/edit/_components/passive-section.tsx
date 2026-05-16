import { SectionTitle } from "./section-title"
import { ListableInput } from "./listable-input"

type Props = {
  passiveSkill: string[]
  skill1: string[]
  skill2: string[]
  skill3: string[]
  skill4: string[]
  onPassiveSkillChange: (val: string[]) => void
  onSkill1Change: (val: string[]) => void
  onSkill2Change: (val: string[]) => void
  onSkill3Change: (val: string[]) => void
  onSkill4Change: (val: string[]) => void
}

export function PassiveSection({
  passiveSkill,
  skill1,
  skill2,
  skill3,
  skill4,
  onPassiveSkillChange,
  onSkill1Change,
  onSkill2Change,
  onSkill3Change,
  onSkill4Change,
}: Props) {
  return (
    <div>
      <SectionTitle title="Hero Passive" />
      <div className="flex flex-col gap-4">
        <ListableInput
          label="Passive"
          placeholder="Add passive note..."
          values={passiveSkill}
          onChange={onPassiveSkillChange}
        />
        <ListableInput
          label="Skill 1"
          placeholder="Add skill 1 note..."
          values={skill1}
          onChange={onSkill1Change}
        />
        <ListableInput
          label="Skill 2"
          placeholder="Add skill 2 note..."
          values={skill2}
          onChange={onSkill2Change}
        />
        <ListableInput
          label="Skill 3"
          placeholder="Add skill 3 note..."
          values={skill3}
          onChange={onSkill3Change}
        />
        <ListableInput
          label="Skill 4"
          placeholder="Add skill 4 note..."
          values={skill4}
          onChange={onSkill4Change}
        />
      </div>
    </div>
  )
}