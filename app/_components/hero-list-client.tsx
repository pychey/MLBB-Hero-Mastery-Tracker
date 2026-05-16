"use client"

import { useState, useMemo } from "react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Search, SlidersHorizontal } from "lucide-react"
import { ProgressBadge } from "@/components/progress-badge"
import { HeroProgress, HeroRole, HeroStrength, HeroInterest, HeroWithProgress } from "@/lib/types"

type Props = {
  heroes: HeroWithProgress[]
}

export function HeroListClient({ heroes }: Props) {
  const [search, setSearch] = useState("")
  const [selectedRoles, setSelectedRoles] = useState<HeroRole[]>([])
  const [selectedProgress, setSelectedProgress] = useState<HeroProgress[]>([])
  const [selectedStrength, setSelectedStrength] = useState<HeroStrength[]>([])
  const [selectedInterest, setSelectedInterest] = useState<HeroInterest[]>([])
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("asc")

  const toggleRole = (role: HeroRole) =>
    setSelectedRoles((prev) => prev.includes(role) ? prev.filter((r) => r !== role) : [...prev, role])

  const toggleProgress = (progress: HeroProgress) =>
    setSelectedProgress((prev) => prev.includes(progress) ? prev.filter((p) => p !== progress) : [...prev, progress])

  const toggleStrength = (strength: HeroStrength) =>
    setSelectedStrength((prev) => prev.includes(strength) ? prev.filter((s) => s !== strength) : [...prev, strength])

  const toggleInterest = (interest: HeroInterest) =>
    setSelectedInterest((prev) => prev.includes(interest) ? prev.filter((i) => i !== interest) : [...prev, interest])

  const filtered = useMemo(() => {
    let result = [...heroes]

    if (search.trim()) {
      result = result.filter((h) => h.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (selectedRoles.length > 0) {
      result = result.filter((h) =>
        h.heroProgress?.roles?.some((r) => selectedRoles.includes(r as HeroRole))
      )
    }

    if (selectedProgress.length > 0) {
      result = result.filter((h) => {
        const p = (h.heroProgress?.progress ?? HeroProgress.Pending) as HeroProgress
        return selectedProgress.includes(p)
      })
    }

    if (selectedStrength.length > 0) {
      result = result.filter((h) =>
        selectedStrength.includes(h.heroProgress?.strengthLevel as HeroStrength)
      )
    }

    if (selectedInterest.length > 0) {
      result = result.filter((h) =>
        selectedInterest.includes(h.heroProgress?.interest as HeroInterest)
      )
    }

    if (sortOrder === "desc") {
      result = result.reverse()
    }

    return result
  }, [heroes, search, selectedRoles, selectedProgress, selectedStrength, selectedInterest, sortOrder])

  const hasActiveFilters =
    selectedRoles.length > 0 ||
    selectedProgress.length > 0 ||
    selectedStrength.length > 0 ||
    selectedInterest.length > 0 ||
    sortOrder === "desc"

  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search by name..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className={hasActiveFilters ? "border-primary text-primary" : ""}
            >
              <SlidersHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-52">
            <DropdownMenuLabel>Filter by Progress</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {Object.values(HeroProgress).map((p) => (
              <DropdownMenuCheckboxItem
                key={p}
                checked={selectedProgress.includes(p)}
                onCheckedChange={() => toggleProgress(p)}
              >
                {p}
              </DropdownMenuCheckboxItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Filter by Interest</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {Object.values(HeroInterest).map((i) => (
              <DropdownMenuCheckboxItem
                key={i}
                checked={selectedInterest.includes(i)}
                onCheckedChange={() => toggleInterest(i)}
              >
                {i}
              </DropdownMenuCheckboxItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Filter by Strength</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {Object.values(HeroStrength).map((s) => (
              <DropdownMenuCheckboxItem
                key={s}
                checked={selectedStrength.includes(s)}
                onCheckedChange={() => toggleStrength(s)}
              >
                {s}
              </DropdownMenuCheckboxItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Filter by Role</DropdownMenuLabel>
            <DropdownMenuSeparator />
            {Object.values(HeroRole).map((r) => (
              <DropdownMenuCheckboxItem
                key={r}
                checked={selectedRoles.includes(r)}
                onCheckedChange={() => toggleRole(r)}
              >
                {r}
              </DropdownMenuCheckboxItem>
            ))}
            <DropdownMenuSeparator />
            <DropdownMenuLabel>Sort Order</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuRadioGroup
              value={sortOrder}
              onValueChange={(v) => setSortOrder(v as "asc" | "desc")}
            >
              <DropdownMenuRadioItem value="asc">Earliest to Latest</DropdownMenuRadioItem>
              <DropdownMenuRadioItem value="desc">Latest to Earliest</DropdownMenuRadioItem>
            </DropdownMenuRadioGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <div className="flex flex-col gap-2">
        {filtered.length === 0 ? (
          <p className="text-center text-muted-foreground py-8 text-sm">No heroes found</p>
        ) : (
          filtered.map((hero) => (
            <Link
              key={hero.id}
              href={`/hero/${hero.id}`}
              className="flex items-center justify-between px-4 py-3 rounded-xl border bg-card hover:bg-accent transition-colors"
            >
              <span className="font-medium text-sm">
                {hero.id}. {hero.name}
              </span>
              <ProgressBadge
                progress={(hero.heroProgress?.progress as HeroProgress) ?? null}
              />
            </Link>
          ))
        )}
      </div>
    </div>
  )
}