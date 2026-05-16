export default function HeroDetailLoading() {
  return (
    <main className="min-h-screen max-w-lg mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <div className="h-7 w-40 bg-muted rounded-lg animate-pulse" />
        <div className="flex gap-2">
          <div className="h-9 w-9 bg-muted rounded-lg animate-pulse" />
          <div className="h-9 w-9 bg-muted rounded-lg animate-pulse" />
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="rounded-xl border bg-card px-4 py-4 flex flex-col gap-3">
            {[...Array(3)].map((_, j) => (
              <div key={j} className="flex flex-col gap-1.5">
                <div className="h-3 w-16 bg-muted rounded animate-pulse" />
                <div className="h-4 w-32 bg-muted rounded animate-pulse" />
              </div>
            ))}
          </div>
        ))}
      </div>
    </main>
  )
}