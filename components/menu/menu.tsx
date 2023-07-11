import React, { useContext } from "react"
import Link from "next/link"
import { OpenClose } from "./openClose"
import { MenuContext } from "@/context/context"

export function Menu() {
  const { active, setActive } = useContext(MenuContext)

  return (
    <div className='flex flex-col mt-6 w-full h-12 items-center overflow-x-hidden relative md:mb-8'>
      <OpenClose isActive={active} setActive={setActive} />
      <ul
        className={`md:flex md:justify-center md:items-center md:py-0 py-20 bg-purple-900 text-slate-50 font-bold h-full w-full md:translate-x-0
         transition-all ease-in duration-500 ${
           active ? "translate-x-0" : "translate-x-full"
         } fixed left-4 md:static`}
      >
        <li className='m-2 hover:bg-purple-500 h-10 flex justify-center items-center'>
          <Link href='/standings'>Classements</Link>
        </li>
        <li className='m-2 hover:bg-purple-500 h-10 flex justify-center items-center md:mx-10'>
          <Link href='/teams'>Equipes</Link>
        </li>
        <li className='m-2 hover:bg-purple-500 h-10 flex justify-center items-center'>
          <Link href='/results'>Resultats</Link>
        </li>
      </ul>
    </div>
  )
}
