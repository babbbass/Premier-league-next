import React, { useState } from "react"
import styles from "./styles.module.css"
import Link from "next/link"
import { OpenClose } from "./openClose"

export function Menu() {
  const [active, setActive] = useState(false)

  return (
    <div className='flex flex-col mt-6 w-full h-full items-center overflow-x-hidden relative'>
      <OpenClose isActive={active} setActive={setActive} />
      <ul
        className={`md:flex md:justify-center bg-purple-900 text-slate-50 font-bold h-full w-full md:translate-x-0
         transition-all ease-in duration-500 ${
           active ? "translate-x-0" : "translate-x-full"
         } `}
      >
        <li className='m-2 hover:bg-purple-500 h-10 flex justify-center items-center'>
          <Link href='/standings'>Classements</Link>
        </li>
        <li className='m-2 hover:bg-purple-500 h-10 flex justify-center items-center md:mx-10'>
          <Link href='/teams'>Equipes</Link>
        </li>
        <li className='m-2 hover:bg-purple-500 h-10 flex justify-center items-center mb-0'>
          <Link href='/results'>Resultats</Link>
        </li>
      </ul>
    </div>
  )
}
