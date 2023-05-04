import React from "react"
import styles from "./styles.module.css"

type headerTeam = {
  team: {
    logo: string
    name: string
  }

  teamForm: []
}
export function HeaderTeam({ team, teamForm }: headerTeam) {
  return (
    <div className={styles.headerTeam}>
      <img
        className={styles.teamLogo}
        src={team.logo}
        alt={`${team.name}-logo`}
      />
      <div className={styles.teamDatasContainer}>
        <h2 className={styles.teamName}>{team.name}</h2>
        <div className={styles.teamForm}>
          {teamForm.map((result) => (
            <div className={`${styles.icon} ${styles[result]}`}></div>
          ))}
        </div>
      </div>
    </div>
  )
}
