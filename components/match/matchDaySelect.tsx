import React, { ChangeEvent } from "react"

const seasons: any = []
let seasonStart = 2020

for (let i = 0; i < 4; i++) {
  seasons.push(seasonStart)
  seasonStart++
}

export default function MatchDaySelect({ setSeason, season }: any) {
  function handleChange(e: ChangeEvent<HTMLSelectElement>) {
    return setSeason(e.target.value)
  }

  return (
    <div className='pr-6'>
      <select className='bg-purple-900 w-20' onChange={(e) => handleChange(e)}>
        <option className='text-center' value={season}>
          {season}
        </option>
        {seasons.map((year: number, key: number) => {
          if (year === parseInt(season)) {
            return
          }
          return (
            <option className='text-center w-20' key={key++} value={year}>
              {year}
            </option>
          )
        })}
      </select>
    </div>
  )
}
