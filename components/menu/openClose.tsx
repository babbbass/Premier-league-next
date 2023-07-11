import React, { useState } from "react"
import styles from "./styles.module.css"

export function OpenClose({ isActive, setActive }: any) {
  return (
    <div
      className='flex flex-col justify-center absolute h-8 w-8 z-10 right-5 top-2 md:hidden'
      onClick={() => {
        setActive(!isActive)
      }}
    >
      <span
        className={`transition-all ease-in absolute border w-full block border-solid border-purple-900 -translate-y-2.5  ${
          isActive ? "translate-y-0 -rotate-45" : ""
        }`}
      ></span>
      <span
        className={`transition-all ease-in absolute border w-full block border-solid border-purple-900 ${
          isActive ? "rotate-45" : ""
        }`}
      ></span>
      <span
        className={`absolute transition-all ease-in border w-full block border-solid border-purple-900 translate-y-2.5 ${
          isActive ? "opacity-0" : ""
        }`}
      ></span>
    </div>
  )
}
