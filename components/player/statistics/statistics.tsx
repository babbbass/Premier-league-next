import React from "react"
import styles from "./styles.module.css"
import {
  PlayerStatisticsProps as PlayerStatictics,
  Statistics,
} from "@/types/PlayerStatisticsType"

export function Statistics({ statistics }: PlayerStatictics) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.statistics}>
          <h2 className={styles.titleComponent}>Statistiques</h2>
          {statistics.map((infos: Statistics, key: number) => (
            <div
              key={`${++key}-${infos.league.name}-statistics`}
              className={styles.competition}
            >
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
      </div>
    </>
  )
}
