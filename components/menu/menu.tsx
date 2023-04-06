import React, { useState } from "react"
import styles from "./styles.module.css"
import Link from "next/link"
import { OpenClose } from "./openClose"

export function Menu() {
  const [active, setActive] = useState(false)

  return (
    <div className={styles.container}>
      <OpenClose isActive={active} setActive={setActive} />
      <nav className={styles.navigation}>
        <ul className={`${styles.menu} ${active ? styles.active : ""} `}>
          <li>
            <Link href='/standings'>Classements</Link>
          </li>
          <li>
            <Link href='/teams'>Equipes</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
