import React from "react"
import { BASE_FOOTBALL_URL, requestOptions } from "@/utils/config"
import { useQuery } from "react-query"
import styles from "./styles.module.css"
import { trophies } from "@/utils/dataTest/trophies"

type player = {
  player: {
    playerId: number
    name: string
    nationality: string
    age: number
    weight: number
    height: number
    photo: string
    season: number
  }
}
const fetchPlayerPalmares = async (playerId: player) => {
  const response = await fetch(
    `${BASE_FOOTBALL_URL}/trophies?player=${playerId}`,
    requestOptions
  )

  return await response.json()
}
export function Palmares({ playerId }: any) {
  const { data, isError, isLoading } = useQuery({
    queryKey: ["Player Palmares", playerId],
    queryFn: () => fetchPlayerPalmares(playerId),
  })

  const trophies = data ? data.response : []
  // console.log(trophies)
  return (
    <div className={styles.palmares}>
      <h2 className={styles.titleComponent}>Palmares</h2>
      {trophies.map((competition) => (
        <div className={styles.competition}>
          <h3>{competition.league}</h3>
          <div>Place: {competition.place}</div>
          <div>Pays: {competition.country}</div>
          <div>Année: {competition.season}</div>
        </div>
      ))}
    </div>
  )
}
