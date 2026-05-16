export default function HomeLoading() {
  return (
    <main className="min-h-screen max-w-lg mx-auto px-4 py-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex flex-col gap-1.5">
          <div className="h-7 w-36 bg-muted rounded-lg animate-pulse" />
          <div className="h-3 w-24 bg-muted rounded animate-pulse" />
        </div>
        <div className="flex gap-2">
          <div className="h-9 w-9 bg-muted rounded-lg animate-pulse" />
          <div className="h-9 w-9 bg-muted rounded-lg animate-pulse" />
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <div className="flex gap-2">
          <div className="h-10 flex-1 bg-muted rounded-lg animate-pulse" />
          <div className="h-10 w-10 bg-muted rounded-lg animate-pulse" />
        </div>
        <div className="flex flex-col gap-2">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="h-12 w-full bg-muted rounded-xl animate-pulse" />
          ))}
        </div>
      </div>
    </main>
  )
}