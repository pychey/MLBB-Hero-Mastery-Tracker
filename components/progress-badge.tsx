import { HeroProgress } from "@/lib/types"
import { Badge } from "@/components/ui/badge"

const progressStyles: Record<HeroProgress, string> = {
  [HeroProgress.Pending]: "bg-zinc-500/20 text-zinc-400 border-zinc-500/30 hover:bg-zinc-500/20",
  [HeroProgress.Progressing]: "bg-blue-500/20 text-blue-400 border-blue-500/30 hover:bg-blue-500/20",
  [HeroProgress.Understood]: "bg-amber-500/20 text-amber-400 border-amber-500/30 hover:bg-amber-500/20",
  [HeroProgress.Mastered]: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30 hover:bg-emerald-500/20",
}

export function ProgressBadge({ progress }: { progress: HeroProgress | null }) {
  const value = progress ?? HeroProgress.Pending
  return (
    <Badge variant="outline" className={`text-xs font-medium ${progressStyles[value]}`}>
      {value}
    </Badge>
  )
}