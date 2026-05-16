import { MLBBItem, ITEM_CATEGORIES } from "@/lib/types"
import { Label } from "@/components/ui/label"
import { SectionTitle } from "./section-title"

type Props = {
  coreItems: MLBBItem[]
  optionalItems: MLBBItem[]
  onCoreItemsChange: (val: MLBBItem[]) => void
  onOptionalItemsChange: (val: MLBBItem[]) => void
}

export function ItemsSection({ coreItems, optionalItems, onCoreItemsChange, onOptionalItemsChange }: Props) {
  const slots = [
    { label: "Core Items", selected: coreItems, setSelected: onCoreItemsChange },
    { label: "Optional Items", selected: optionalItems, setSelected: onOptionalItemsChange },
  ]

  return (
    <div>
      <SectionTitle title="Items" />
      <div className="flex flex-col gap-6">
        {slots.map(({ label, selected, setSelected }) => (
          <div key={label} className="flex flex-col gap-4">
            <p className="text-sm font-semibold">{label}</p>
            {ITEM_CATEGORIES.map((category) => (
              <div key={category.label} className="flex flex-col gap-1.5">
                <Label className="text-muted-foreground text-xs">{category.label}</Label>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() =>
                        setSelected(
                          selected.includes(item)
                            ? selected.filter((i) => i !== item)
                            : [...selected, item]
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
        ))}
      </div>
    </div>
  )
}