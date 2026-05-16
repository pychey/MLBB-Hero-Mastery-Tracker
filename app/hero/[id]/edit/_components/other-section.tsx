import { SectionTitle } from "./section-title"
import { ListableInput } from "./listable-input"

type Props = {
  counterWho: string[]
  whoCounter: string[]
  onCounterWhoChange: (val: string[]) => void
  onWhoCounterChange: (val: string[]) => void
}

export function OtherSection({
  counterWho,
  whoCounter,
  onCounterWhoChange,
  onWhoCounterChange,
}: Props) {
  return (
    <div>
      <SectionTitle title="Other" />
      <div className="flex flex-col gap-4">
        <ListableInput
          label="Counter Who"
          placeholder="Heroes this hero counters..."
          values={counterWho}
          onChange={onCounterWhoChange}
        />
        <ListableInput
          label="Who Counter"
          placeholder="Heroes that counter this hero..."
          values={whoCounter}
          onChange={onWhoCounterChange}
        />
      </div>
    </div>
  )
}