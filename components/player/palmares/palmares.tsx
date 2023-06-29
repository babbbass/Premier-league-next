import React from "react"
import { useQuery } from "react-query"
import styles from "./styles.module.css"
import { trophies } from "@/utils/dataTest/trophies"
import { PlayerProps } from "@/types/PlayerPalmares"
import { Trophies } from "@/types/PlayerTrophies"
import { fetchPlayerPalmares } from "@/queries/player"

export function Palmares({ player }: PlayerProps) {
  // const { data, isError, isLoading } = useQuery({
  //   queryKey: ["PlayerPalmares", player.id],
  //   queryFn: () => fetchPlayerPalmares(player.id),
  // })

  // const trophies = data ? data.response : []
  return (
    <div className='w-full flex items-center flex-wrap justify-around'>
      <h2 className='w-full mb-6 font-bold text-2xl text-center text-purple-900'>
        Palmares
      </h2>
      {trophies.map((competition: Trophies) => (
        <div
          key={`${competition.league}-${competition.season} `}
          className='w-4/5 xs:w-2/5 h-40 p-2 flex flex-col mt-2 mb-8 border rounded-2xl border-purple-800'
        >
          <h3 className='text-red-500 font-bold italic mb-5 text-center'>
            {competition.league}
          </h3>
          <div className='mb-2 flex justify-center items-center w-full'>
            Place:{" "}
            <span className='italic ml-2 font-medium'>{competition.place}</span>
          </div>
          <div className='mb-2 flex justify-center items-center w-full'>
            Pays:{" "}
            <span className='italic ml-2 font-medium'>
              {" "}
              {competition.country}
            </span>
          </div>
          <div className='text-red-500 mb-2 w-full flex justify-center items-center'>
            {competition.season}
          </div>
        </div>
      ))}
    </div>
  )
}
