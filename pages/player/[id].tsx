import React from "react"
import { useRouter } from "next/router"
import { Civility } from "@/components/player/civility/civility"
import styles from "@/styles/Home.module.css"

export default function Player() {
  const router = useRouter()
  const id = parseInt(router.query.id as string)

  return (
    <main className={styles.main}>
      <Civility id={id} season={2022} />
    </main>
  )
}
