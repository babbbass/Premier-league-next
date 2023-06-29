import React from "react"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const seasons: any = []
let seasonStart = 2020

for (let i = 0; i < 4; i++) {
  seasons.push(seasonStart)
  seasonStart++
}

export default function MatchDaySelect({ setSeason, season }: any) {
  function handleChange(year: number) {
    return setSeason(year)
  }

  return (
    <div>
      <Select onValueChange={(e) => handleChange(parseInt(e))}>
        <SelectTrigger className='border-0 focus:tw-ring-0 w-[180px] '>
          <SelectValue placeholder={`${season}`} />
        </SelectTrigger>
        <SelectContent>
          {seasons.map((day: number, key: number) => (
            <SelectItem key={key++} value={`${day}`}>
              {day}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}
