import React from "react"
import { BASE_FOOTBALL_URL, requestOptions } from "@/utils/config"
import { useQuery } from "react-query"
import styles from "./styles.module.css"
import { trophies } from "@/utils/dataTest/trophies"
import { PlayerProps } from "@/types/PlayerType"
import { Trophies } from "@/types/PlayerTrophies"

export const fetchPlayerPalmares = async (playerId: number) => {
  const response = await fetch(
    `${BASE_FOOTBALL_URL}/trophies?player=${playerId}`,
    requestOptions
  )

  return await response.json()
}

export function Palmares({ player }: PlayerProps) {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["PlayerPalmares", player.id],
    queryFn: () => fetchPlayerPalmares(player.id),
  })

  const trophies = data ? data.response : []
  return (
    <div className={styles.palmares}>
      <h2 className={styles.titleComponent}>Palmares</h2>
      {trophies.map((competition: Trophies) => (
        <div
          key={`${competition.league}-${competition.season} `}
          className={styles.competition}
        >
          <h3>{competition.league}</h3>
          <div>Place: {competition.place}</div>
          <div>Pays: {competition.country}</div>
          <div>Année: {competition.season}</div>
        </div>
      ))}
    </div>
  )
}
