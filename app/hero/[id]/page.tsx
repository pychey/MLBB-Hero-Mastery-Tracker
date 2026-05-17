import { notFound, redirect } from "next/navigation"
import { auth } from "@/auth"
import { getHeroById } from "@/lib/actions/heroes"
import { DetailRow } from "./_components/detail-row"
import { ProgressBadge } from "@/components/progress-badge"
import { ThemeToggleButton } from "@/components/theme-toggle-button"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Pencil } from "lucide-react"
import Link from "next/link"
import { HeroProgress } from "@/lib/types"

export default async function HeroDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const session = await auth()
  if (!session) redirect("/login")

  const { id } = await params
  const heroId = parseInt(id)
  if (isNaN(heroId)) notFound()

  const hero = await getHeroById(heroId)
  if (!hero) notFound()

  const p = hero.heroProgress

  return (
    <main className="min-h-screen max-w-lg mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Link href="/">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <div>
            <h1 className="text-xl font-bold">
              {hero.id}. {hero.name}
            </h1>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggleButton />
          <Link href={`/hero/${hero.id}/edit`}>
            <Button variant="outline" size="icon">
              <Pencil className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>

      <div className="rounded-xl border bg-card px-4 mb-4">
        <div className="flex flex-col gap-0.5 py-3 border-b">
          <span className="text-xs text-muted-foreground">Progress</span>
          <ProgressBadge progress={(p?.progress as HeroProgress) ?? null} />
        </div>
        <DetailRow label="Interest" value={p?.interest ?? null} />
        <DetailRow label="Strength Level" value={p?.strengthLevel ?? null} />
        <DetailRow label="Role" value={p?.roles && p.roles.length > 0 ? p.roles.join(", ") : null} />
        <DetailRow label="Complexity Level" value={p?.complexityLevel ?? null} />
        <DetailRow label="Spell" value={p?.spell && p.spell.length > 0 ? p.spell.join(", ") : null} />
      </div>

      <div className="rounded-xl border bg-card px-4 mb-4">
        <ListDetailRow label="Skill Combo" values={p?.skillCombo ?? []} />
        <ListDetailRow label="First Skill to Upgrade" values={p?.firstSkillUpgrade ?? []} />
        <ListDetailRow label="Skill to Max" values={p?.skillToMax ?? []} />
      </div>

      <div className="rounded-xl border bg-card px-4 mb-4">
        <ListDetailRow label="Passive" values={p?.passiveSkill ?? []} />
        <ListDetailRow label="Skill 1" values={p?.skill1 ?? []} />
        <ListDetailRow label="Skill 2" values={p?.skill2 ?? []} />
        <ListDetailRow label="Skill 3" values={p?.skill3 ?? []} />
        <ListDetailRow label="Skill 4" values={p?.skill4 ?? []} />
      </div>

      <div className="rounded-xl border bg-card px-4 mb-4">
        <ListDetailRow label="Hero Tips" values={p?.heroTips ?? []} />
      </div>

      <div className="rounded-xl border bg-card px-4">
        <ListDetailRow label="Counter Who" values={p?.counterWho ?? []} />
        <ListDetailRow label="Who Counter" values={p?.whoCounter ?? []} />
      </div>
    </main>
  )
}

function ListDetailRow({ label, values }: { label: string; values: string[] }) {
  return (
    <div className="flex flex-col gap-0.5 py-3 border-b last:border-b-0">
      <span className="text-xs text-muted-foreground">{label}</span>
      {values && values.length > 0 ? (
        values.length === 1 ? (
          <span className="text-sm font-medium">{values[0]}</span>
        ) : (
          <ul className="flex flex-col gap-0.5 mt-0.5">
            {values.map((v, i) => (
              <li key={i} className="text-sm font-medium">• {v}</li>
            ))}
          </ul>
        )
      ) : (
        <span className="text-sm text-muted-foreground italic">Not set</span>
      )}
    </div>
  )
}