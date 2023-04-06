import React, { useState } from "react"
import styles from "./styles.module.css"

export function OpenClose({ isActive, setActive }: any) {
  return (
    <div
      className={styles.openCloseMenu}
      onClick={() => {
        setActive(!isActive)
      }}
    >
      <span
        className={`${styles.line1} ${isActive ? styles.active : ""}`}
      ></span>
      <span
        className={`${styles.line2} ${isActive ? styles.active : ""}`}
      ></span>
      <span
        className={`${styles.line3} ${isActive ? styles.active : ""}`}
      ></span>
    </div>
  )
}
