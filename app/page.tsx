import { redirect } from "next/navigation"
import { auth } from "@/auth"
import { getHeroes } from "@/lib/actions/heroes"
import { HeroListClient } from "@/components/hero-list-client"
import { ThemeToggleButton } from "@/components/theme-toggle-button"

export default async function Home() {
  const session = await auth()

  if (!session) {
    redirect("/login")
  }

  const heroes = await getHeroes()

  return (
    <main className="min-h-screen max-w-lg mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-bold">MLBB Hero Tracker</h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            {session.user?.name}
          </p>
        </div>
        <ThemeToggleButton />
      </div>
      <HeroListClient heroes={heroes} />
    </main>
  )
}