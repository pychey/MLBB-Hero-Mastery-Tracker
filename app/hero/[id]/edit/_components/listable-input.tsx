"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { X, Plus } from "lucide-react"

type Props = {
  label: string
  placeholder?: string
  values: string[]
  onChange: (val: string[]) => void
}

export function ListableInput({ label, placeholder, values, onChange }: Props) {
  const [draft, setDraft] = useState("")

  function handleAdd() {
    const trimmed = draft.trim()
    if (!trimmed) return
    onChange([...values, trimmed])
    setDraft("")
  }

  function handleRemove(index: number) {
    onChange(values.filter((_, i) => i !== index))
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Enter") {
      e.preventDefault()
      handleAdd()
    }
  }

  return (
    <div className="flex flex-col gap-1.5">
      <Label>{label}</Label>
      <div className="flex gap-2">
        <Input
          placeholder={placeholder}
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <Button type="button" variant="outline" size="icon" onClick={handleAdd}>
          <Plus className="h-4 w-4" />
        </Button>
      </div>
      {values.length > 0 && (
        <div className="flex flex-col gap-1 mt-1">
          {values.map((val, i) => (
            <div key={i} className="flex items-center justify-between px-3 py-1.5 rounded-lg border bg-card text-sm">
              <span>{val}</span>
              <button type="button" onClick={() => handleRemove(i)}>
                <X className="h-3.5 w-3.5 text-muted-foreground hover:text-foreground transition-colors" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}