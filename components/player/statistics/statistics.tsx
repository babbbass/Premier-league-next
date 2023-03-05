import React from "react"
import styles from "./styles.module.css"
import { Palmares } from "@/components/player/palmares/palmares"
// import { player } from "@/utils/dataTest/player"

type player = [
  player: {
    id: number
    name: string
    nationality: string
    age: number
    weight: number
    height: number
    photo: string
    season: number
  }
]
export function Statistics({ player }: any) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.statistics}>
          <h2 className={styles.titleComponent}>Statistiques</h2>
          {player[0].statistics.map((infos: any) => (
            <div className={styles.competition}>
              <h3>{infos.league.name}</h3>
              <div className={styles.name}>
                Matchs: {infos.games.appearences}
              </div>
              <div className={styles.name}>Buts: {infos.goals.total}</div>
              <div className={styles.name}>
                Passes: {infos.goals.assists ? infos.goals.assists : 0}
              </div>
              <div className={styles.name}>{infos.team.name}</div>
            </div>
          ))}
        </div>
        <Palmares playerId={player[0].player.id} />
      </div>
    </>
  )
}
