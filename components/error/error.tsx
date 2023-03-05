import React from "react"
import styles from "./styles.module.css"

export function Error({ message, active }: any) {
  console.log(active)

  return (
    <div className={`${styles.limitedRequests} ${active ? styles.active : ""}`}>
      {message}
    </div>
  )
}
