import { EmblemsRole, EmblemTalent1, EmblemTalent2, EmblemCoreTalent } from "@/lib/types"
import { RadioGroup } from "./radio-group"
import { SectionTitle } from "./section-title"

type Props = {
  emblemRole: EmblemsRole | null
  emblemTalent1: EmblemTalent1 | null
  emblemTalent2: EmblemTalent2 | null
  emblemCoreTalent: EmblemCoreTalent | null
  onEmblemRoleChange: (val: EmblemsRole | null) => void
  onEmblemTalent1Change: (val: EmblemTalent1 | null) => void
  onEmblemTalent2Change: (val: EmblemTalent2 | null) => void
  onEmblemCoreTalentChange: (val: EmblemCoreTalent | null) => void
}

export function EmblemSection({
  emblemRole,
  emblemTalent1,
  emblemTalent2,
  emblemCoreTalent,
  onEmblemRoleChange,
  onEmblemTalent1Change,
  onEmblemTalent2Change,
  onEmblemCoreTalentChange,
}: Props) {
  return (
    <div>
      <SectionTitle title="Emblem" />
      <div className="flex flex-col gap-4">
        <RadioGroup
          label="Emblem Role"
          options={Object.values(EmblemsRole)}
          selected={emblemRole}
          onChange={onEmblemRoleChange}
        />
        <RadioGroup
          label="First Talent"
          options={Object.values(EmblemTalent1)}
          selected={emblemTalent1}
          onChange={onEmblemTalent1Change}
        />
        <RadioGroup
          label="Second Talent"
          options={Object.values(EmblemTalent2)}
          selected={emblemTalent2}
          onChange={onEmblemTalent2Change}
        />
        <RadioGroup
          label="Core Talent"
          options={Object.values(EmblemCoreTalent)}
          selected={emblemCoreTalent}
          onChange={onEmblemCoreTalentChange}
        />
      </div>
    </div>
  )
}