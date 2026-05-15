import { auth, signIn } from "@/auth"
import { redirect } from "next/navigation"
import { Button } from "@/components/ui/button"

export default async function LoginPage() {
  const session = await auth()
  if (session) redirect("/")

  return (
    <main className="min-h-screen flex flex-col items-center justify-center gap-6 px-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold">MLBB Hero Tracker</h1>
        <p className="text-muted-foreground text-sm mt-1">
          Track your hero mastery progress
        </p>
      </div>
      <form
        action={async () => {
          "use server"
          await signIn("google", { redirectTo: "/" })
        }}
      >
        <Button type="submit" className="w-full">
          Sign in with Google
        </Button>
      </form>
    </main>
  )
}