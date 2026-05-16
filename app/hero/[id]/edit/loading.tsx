export default function HeroEditLoading() {
  return (
    <main className="min-h-screen max-w-lg mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <div className="h-7 w-40 bg-muted rounded-lg animate-pulse" />
        <div className="h-9 w-9 bg-muted rounded-lg animate-pulse" />
      </div>
      <div className="flex flex-col gap-6">
        <div className="h-10 w-full bg-muted rounded-lg animate-pulse" />
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex flex-col gap-3">
            <div className="h-3 w-20 bg-muted rounded animate-pulse" />
            <div className="h-px w-full bg-border" />
            <div className="flex flex-wrap gap-2">
              {[...Array(4)].map((_, j) => (
                <div key={j} className="h-8 w-20 bg-muted rounded-lg animate-pulse" />
              ))}
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}