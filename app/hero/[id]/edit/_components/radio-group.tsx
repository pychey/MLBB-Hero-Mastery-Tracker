import { Label } from "@/components/ui/label"

type Props<T extends string> = {
  label: string
  options: T[]
  selected: T | null
  onChange: (val: T | null) => void
}

export function RadioGroup<T extends string>({ label, options, selected, onChange }: Props<T>) {
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