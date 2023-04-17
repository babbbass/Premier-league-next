import React from "react"
import styles from "./styles.module.css"

type Error = {
  message: string
  active: boolean
}

export function Error({ message, active }: Error) {
  return (
    <div className={`${styles.limitedRequests} ${active ? styles.active : ""}`}>
      {message}
    </div>
  )
}
