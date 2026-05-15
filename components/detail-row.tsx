type Props = {
  label: string
  value: string | null | undefined
}

export function DetailRow({ label, value }: Props) {
  return (
    <div className="flex flex-col gap-0.5 py-3 border-b last:border-b-0">
      <span className="text-xs text-muted-foreground">{label}</span>
      <span className="text-sm font-medium">
        {value && value.trim() !== "" ? value : (
          <span className="text-muted-foreground italic">Not set</span>
        )}
      </span>
    </div>
  )
}