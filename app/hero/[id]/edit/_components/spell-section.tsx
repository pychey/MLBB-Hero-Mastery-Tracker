import { BattleSpell } from "@/lib/types"
import { CheckboxGroup } from "./checkbox-group"
import { SectionTitle } from "./section-title"

type Props = {
  spell: BattleSpell[]
  onSpellChange: (val: BattleSpell[]) => void
}

export function SpellSection({ spell, onSpellChange }: Props) {
  return (
    <div>
      <SectionTitle title="Battle Spell" />
      <CheckboxGroup
        label="Spell"
        options={Object.values(BattleSpell)}
        selected={spell}
        onChange={onSpellChange}
      />
    </div>
  )
}