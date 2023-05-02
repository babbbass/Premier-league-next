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
          <table className={styles.tableStats}>
            <thead>
              <tr>
                <th></th>
                <th>M</th>
                <th>B</th>
                <th>P</th>
              </tr>
            </thead>
            <tbody>
              {statistics.map((infos: Statistics, key: number) => (
                <tr
                  key={`${++key}-${infos.league.name}-statistics`}
                  className={styles.rowCompetition}
                >
                  <td className={styles.leagueName}>
                    <img src={infos.league.logo} />
                    {infos.league.name}
                  </td>
                  <td>{infos.games.appearences}</td>
                  <td>{infos.goals.total}</td>
                  <td>{infos.goals.assists ? infos.goals.assists : 0}</td>
                  {/* <img className={styles.name} src={infos.team.logo} /> */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}
