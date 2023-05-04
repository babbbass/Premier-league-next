import React from "react"
import { useRouter } from "next/router"
import { Civility } from "@/components/player/civility/civility"
import styles from "@/styles/Home.module.css"
import { fetchPlayerDatas, fetchPlayerPalmares } from "@/queries/player"
import { QueryClient, dehydrate } from "react-query"
import { SEASON } from "@/utils/config"

type Context = {
  params: {
    id: string
  }
}

export default function Player() {
  const router = useRouter()
  const id = parseInt(router.query.id as string)

  return (
    <main className={styles.main}>
      <Civility id={id} season={2022} />
    </main>
  )
}

export async function getServerSideProps(context: Context) {
  const queryClient = new QueryClient()
  const PLAYER_ID = parseInt(context.params.id)
  await queryClient.fetchQuery(["fetchPlayer", [PLAYER_ID, SEASON]], () =>
    fetchPlayerDatas(PLAYER_ID, SEASON)
  )

  await queryClient.fetchQuery(["PlayerPalmares", PLAYER_ID], () =>
    fetchPlayerPalmares(PLAYER_ID)
  )

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}
