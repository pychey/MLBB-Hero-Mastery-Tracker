import { SectionTitle } from "./section-title"
import { ListableInput } from "./listable-input"

type Props = {
  heroTips: string[]
  onHeroTipsChange: (val: string[]) => void
}

export function TipsSection({ heroTips, onHeroTipsChange }: Props) {
  return (
    <div>
      <SectionTitle title="Hero Tips" />
      <ListableInput
        label="Tips"
        placeholder="Add a tip..."
        values={heroTips}
        onChange={onHeroTipsChange}
      />
    </div>
  )
}