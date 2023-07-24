import React, { useContext } from "react"
import Link from "next/link"
import { MenuContext } from "@/context/context"

export function Menu() {
  const { active, setActive } = useContext(MenuContext)
  return (
    <div className='flex flex-col w-full h-full md:mt-4 items-center overflow-x-hidden relative md:mb-8'>
      <ul
        className={`md:flex md:justify-center md:items-center md:py-0 py-20 text-pink-500 md:bg-purple-900 bg-slate-100 font-bold h-full w-full md:translate-x-0 md:translate-y-0
         transition-all ease-in duration-500 ${
           active ? "translate-y-52" : "translate-y-full"
         } md:static fixed z-10 left-4 md:h-12`}
      >
        <li className='mb-10 pb-4 text-xl text-purple-900 flex justify-center items-center md:hidden'>
          Menu
        </li>
        <li
          onClick={() => setActive(false)}
          className='mb-6 hover:bg-purple-500 flex justify-center items-center md:m-2'
        >
          <Link href='/standings'>Classement</Link>
        </li>
        <li
          onClick={() => setActive(false)}
          className='mb-6 md:m-2 hover:bg-purple-500  flex justify-center items-center md:mx-10'
        >
          <Link href='/teams'>Equipes</Link>
        </li>
        <li
          onClick={() => setActive(false)}
          className='mb-6 md:m-2 hover:bg-purple-500 flex justify-center items-center'
        >
          <Link href='/results'>Resultats</Link>
        </li>
      </ul>
    </div>
  )
}
