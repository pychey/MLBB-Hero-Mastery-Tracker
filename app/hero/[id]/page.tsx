import { notFound, redirect } from "next/navigation"
import { auth } from "@/auth"
import { getHeroById } from "@/lib/actions/heroes"
import { DetailRow } from "@/components/detail-row"
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
        <DetailRow
          label="Role"
          value={p?.roles && p.roles.length > 0 ? p.roles.join(", ") : null}
        />
        <DetailRow
          label="Complexity Level"
          value={p?.complexityLevel ?? null}
        />
        <DetailRow
          label="Spell"
          value={p?.spell && p.spell.length > 0 ? p.spell.join(", ") : null}
        />
      </div>

      <div className="rounded-xl border bg-card px-4 mb-4">
        <div className="flex flex-col gap-0.5 py-3 border-b">
          <span className="text-xs text-muted-foreground">Emblem</span>
          <span className="text-sm font-medium">
            {p?.emblemRole ? (
              <span>
                {[p.emblemRole, p.emblemTalent1, p.emblemTalent2, p.emblemCoreTalent]
                  .filter(Boolean)
                  .join(" · ")}
              </span>
            ) : (
              <span className="text-muted-foreground italic">Not set</span>
            )}
          </span>
        </div>
        <DetailRow
          label="Core Items"
          value={p?.coreItems && p.coreItems.length > 0 ? p.coreItems.join(", ") : null}
        />
        <DetailRow
          label="Optional Items"
          value={p?.optionalItems && p.optionalItems.length > 0 ? p.optionalItems.join(", ") : null}
        />
      </div>

      <div className="rounded-xl border bg-card px-4 mb-4">
        <DetailRow label="Skill Combo" value={p?.skillCombo ?? null} />
        <DetailRow label="First Skill to Upgrade" value={p?.firstSkillUpgrade ?? null} />
        <DetailRow label="Skill to Max" value={p?.skillToMax ?? null} />
        <DetailRow label="Special Passive" value={p?.specialPassive ?? null} />
      </div>

      <div className="rounded-xl border bg-card px-4">
        <DetailRow label="Power Spike" value={p?.powerSpike ?? null} />
        <DetailRow label="Counter Who" value={p?.counterWho ?? null} />
        <DetailRow label="Who Counter" value={p?.whoCounter ?? null} />
      </div>
    </main>
  )
}