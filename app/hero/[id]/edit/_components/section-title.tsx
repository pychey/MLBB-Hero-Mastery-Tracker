import { Separator } from "@/components/ui/separator"

export function SectionTitle({ title }: { title: string }) {
  return (
    <div className="mb-3">
      <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {title}
      </p>
      <Separator className="mt-1.5" />
    </div>
  )
}