"use client"

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
  const items = values.length === 0 ? [""] : values

  function handleChange(index: number, val: string) {
    const updated = [...items]
    updated[index] = val
    onChange(updated)
  }

  function handleAdd() {
    onChange([...items, ""])
  }

  function handleRemove(index: number) {
    const updated = items.filter((_, i) => i !== index)
    onChange(updated.length === 0 ? [""] : updated)
  }

  return (
    <div className="flex flex-col gap-1.5">
      <Label>{label}</Label>
      <div className="flex flex-col gap-2">
        {items.map((val, i) => (
          <div key={i} className="flex gap-2">
            <Input
              placeholder={placeholder}
              value={val}
              onChange={(e) => handleChange(i, e.target.value)}
            />
            {items.length > 1 && (
              <Button
                type="button"
                variant="outline"
                size="icon"
                className="cursor-pointer shrink-0"
                onClick={() => handleRemove(i)}
              >
                <X className="h-4 w-4" />
              </Button>
            )}
          </div>
        ))}
      </div>
      <Button
        type="button"
        variant="outline"
        size="sm"
        className="cursor-pointer w-fit"
        onClick={handleAdd}
      >
        <Plus className="h-4 w-4 mr-1" /> Add
      </Button>
    </div>
  )
}