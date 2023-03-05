import React, { useState } from "react"
import styles from "./styles.module.css"
import Link from "next/link"

export function Menu() {
  const [active, setActive] = useState(false)
  return (
    <nav className={styles.container}>
      <div className={styles.openCloseMenu} onClick={() => setActive(!active)}>
        <span
          className={`${styles.line1} ${active ? styles.active : ""}`}
        ></span>
        <span
          className={`${styles.line2} ${active ? styles.active : ""}`}
        ></span>
        <span
          className={`${styles.line3} ${active ? styles.active : ""}`}
        ></span>
      </div>
      <ul className={`${styles.menu} ${active ? styles.active : ""} `}>
        <li>
          <Link href='/standings'>Classements</Link>
        </li>
        <li>
          <Link href='/teams'>Equipes</Link>
        </li>
        {/* <li>
          <Link href='/standings'>Calendrier</Link>
        </li> */}
      </ul>
    </nav>
  )
}
