import React from "react"
import styles from "./styles.module.css"

type headerTeam = {
  team: {
    logo: string
    name: string
  }
}
export function HeaderTeam({ team }: headerTeam) {
  return (
    <div className={styles.headerTeam}>
      <img
        className={styles.teamLogo}
        src={team.logo}
        alt={`${team.name}-logo`}
      />
      <h2 className={styles.teamName}>{team.name}</h2>
    </div>
  )
}
