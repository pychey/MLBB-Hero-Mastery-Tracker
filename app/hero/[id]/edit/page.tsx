import { notFound, redirect } from "next/navigation"
import { auth } from "@/auth"
import { getHeroById } from "@/lib/actions/heroes"
import { HeroEditForm } from "@/app/hero/[id]/edit/_components/hero-edit-form"
import { ThemeToggleButton } from "@/components/theme-toggle-button"
import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"

export default async function HeroEditPage({
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

  return (
    <main className="min-h-screen max-w-lg mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Link href={`/hero/${heroId}`}>
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-xl font-bold">Edit {hero.name}</h1>
        </div>
        <ThemeToggleButton />
      </div>
      <HeroEditForm
        heroId={hero.id}
        heroName={hero.name}
        initial={hero.heroProgress}
      />
    </main>
  )
}