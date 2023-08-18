import React, { useState, useReducer } from "react"
import Head from "next/head"
import styles from "@/styles/Home.module.css"
import { StandingTeams } from "@/components/standings/teams"
import {
  fetchTeamsStanding,
  fetchTopAssists,
  fetchTopScorers,
} from "@/queries/standing"
import { StandingAssists } from "@/components/standings/assists"
import { StandingScorers } from "@/components/standings/scorers"
import { SEASON } from "@/utils/config"
import { dehydrate, QueryClient } from "react-query"
export default function Standings() {
  const [displayTeams, setDisplayTeams] = useState(true)
  const [displayScorers, setDisplayScorers] = useState(false)
  const [displayAssiters, setDisplayAssiters] = useState(false)

  return (
    <>
      <Head>
        <title>Classements - Premier league</title>
        <meta
          name='description'
          content='Infos et résultats sur la premier league anglaise'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <h2 className={`text-red-500 mt-4 ${styles.titlePage}`}>Classement</h2>
        <div className='mb-4'>
          <button
            className={`hover:bg-purple-900 hover:text-slate-50 p-2 sm:p-4 cursor:pointer rounded-3xl ${
              displayTeams
                ? "bg-purple-900 text-slate-50 font-bold rounded-3xl"
                : ""
            }`}
            onClick={() => {
              setDisplayTeams(true)
              setDisplayScorers(false)
              setDisplayAssiters(false)
            }}
          >
            Equipes
          </button>
          <button
            className={`hover:bg-purple-900 hover:text-slate-50 p-2 sm:p-4 sm:m-2 cursor:pointer rounded-3xl ${
              displayScorers
                ? "bg-purple-900 text-slate-50 font-bold rounded-3xl"
                : ""
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
            className={`hover:bg-purple-900 hover:text-slate-50 p-2 sm:p-4 cursor:pointer rounded-3xl ${
              displayAssiters
                ? "bg-purple-900 text-slate-50 font-bold rounded-3xl"
                : ""
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
        <StandingTeams season={SEASON} active={displayTeams}></StandingTeams>
        <StandingScorers
          season={SEASON}
          active={displayScorers}
        ></StandingScorers>
        <StandingAssists
          season={SEASON}
          active={displayAssiters}
        ></StandingAssists>
      </main>
    </>
  )
}

export async function getServerSideProps() {
  const queryClient = new QueryClient()

  await queryClient.fetchQuery(["standingTeams", SEASON], () =>
    fetchTeamsStanding(SEASON)
  )

  await queryClient.fetchQuery(["topScorers", SEASON], () =>
    fetchTopScorers(SEASON)
  )

  await queryClient.fetchQuery(["topAssits", SEASON], () =>
    fetchTopAssists(SEASON)
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
