import React, { useState } from "react"
import Head from "next/head"
import styles from "@/styles/Home.module.css"
import { StandingTeams, fetchTeamsStanding } from "@/components/standings/teams"
import {
  StandingAssists,
  fetchTopAssists,
} from "@/components/standings/assists"
import {
  StandingScorers,
  fetchTopScorers,
} from "@/components/standings/scorers"
import { dehydrate, QueryClient } from "react-query"

const competitionId = 39
const season = 2022

export default function Standings() {
  const [displayTeams, setDisplayTeams] = useState(true)
  const [displayScorers, setDisplayScorers] = useState(false)
  const [displayAssiters, setDisplayAssiters] = useState(false)

  return (
    <>
      <Head>
        <title>Premier league - Classements</title>
        <meta
          name='description'
          content='Infos et résultats sur la premier league anglaise'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <div className={styles.standingButtonsContainer}>
          <button
            className={`${styles.button} ${displayTeams ? styles.active : ""}`}
            onClick={() => {
              setDisplayTeams(true)
              setDisplayScorers(false)
              setDisplayAssiters(false)
            }}
          >
            Equipes
          </button>
          <button
            className={`${styles.button} ${
              displayScorers ? styles.active : ""
            }`}
            onClick={() => {
              setDisplayScorers(true)
              setDisplayTeams(false)
              setDisplayAssiters(false)
            }}
          >
            Buteurs
          </button>
          <button
            className={`${styles.button} ${
              displayAssiters ? styles.active : ""
            }`}
            onClick={() => {
              setDisplayAssiters(true)
              setDisplayTeams(false)
              setDisplayScorers(false)
            }}
          >
            Passeurs
          </button>
        </div>
        <StandingTeams
          competitionId={39}
          season={2022}
          active={displayTeams}
        ></StandingTeams>
        <StandingScorers
          competitionId={39}
          season={2022}
          active={displayScorers}
        ></StandingScorers>
        <StandingAssists
          competitionId={39}
          season={2022}
          active={displayAssiters}
        ></StandingAssists>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const queryClient = new QueryClient()

  await queryClient.fetchQuery(["standingTeams", [season, competitionId]], () =>
    fetchTeamsStanding(season, competitionId)
  )

  await queryClient.fetchQuery(["topScorers", [season, competitionId]], () =>
    fetchTopScorers(season, competitionId)
  )

  await queryClient.fetchQuery(["topAssits", [season, competitionId]], () =>
    fetchTopAssists(season, competitionId)
  )
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
