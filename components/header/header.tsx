import React, { useState } from "react"
import styles from "./styles.module.css"

import { Menu } from "@/components/menu/menu"
import Link from "next/link"

export function Header() {
  return (
    <header className={styles.container}>
      <Link href='/'>
        <h1>Premier League</h1>
      </Link>
      <Menu />
    </header>
  )
}
