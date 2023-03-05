import React from "react"
import { useRouter } from "next/router"
import { Civility } from "@/components/player/civility/civility"
import styles from "@/styles/Home.module.css"

export default function Player() {
  const router = useRouter()
  let { id } = router.query

  return (
    <main className={styles.main}>
      <Civility playerId={parseInt(id)} season={2022} />
    </main>
  )
}
