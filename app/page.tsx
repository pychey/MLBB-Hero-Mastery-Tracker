import { redirect } from "next/navigation"
import { auth, signOut } from "@/auth"
import { getHeroes } from "@/lib/actions/heroes"
import { HeroListClient } from "@/app/_components/hero-list-client"
import { ThemeToggleButton } from "@/components/theme-toggle-button"
import { Button } from "@/components/ui/button"
import { LogOut } from "lucide-react"

export default async function Home() {
  const session = await auth()

  if (!session) {
    redirect("/login")
  }

  const heroes = await getHeroes()

  async function handleSignOut() {
    "use server"
    await signOut({ redirectTo: "/login" })
  }

  return (
    <main className="min-h-screen max-w-lg mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-xl font-bold">MLBB Hero Tracker</h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            {session.user?.name}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <ThemeToggleButton />
          <form action={handleSignOut}>
            <Button variant="outline" size="icon">
              <LogOut className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
      <HeroListClient heroes={heroes} />
    </main>
  )
}