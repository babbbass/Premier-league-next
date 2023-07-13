import React, { useContext, useEffect, useRef } from "react"
import Link from "next/link"
import { MenuContext } from "@/context/context"
import { Button } from "@/components/ui/button"

export function Menu() {
  const { active, setActive } = useContext(MenuContext)
  return (
    <div className='flex flex-col w-full h-full md:mt-4 items-center overflow-x-hidden relative md:mb-8'>
      <ul
        className={`md:flex md:justify-center md:items-center md:py-0 py-20 text-pink-500 bg-purple-900 font-bold h-full w-full md:translate-x-0
         transition-all ease-in duration-500 ${
           active ? "translate-x-0" : "translate-x-full"
         } md:static fixed z-10 left-4 md:h-12`}
      >
        <li
          onClick={() => setActive(false)}
          className='m-2 hover:bg-purple-500 flex justify-center items-center'
        >
          <Link href='/standings'>
            {/* <Button
                variant='secondary'
                className={`bg-pink-500 font-bold mb-10 text-orange-400 border-purple-900 p-12 aspect-video border rounded-3xl
              hover:border-purple-700 hover:bg-purple-800 hover:text-slate-50`}
              > */}
            Classement
            {/* </Button> */}
          </Link>
        </li>
        <li
          onClick={() => setActive(false)}
          className='m-2 hover:bg-purple-500  flex justify-center items-center md:mx-10'
        >
          <Link href='/teams'>
            {/* <Button
              variant='secondary'
              className={`bg-pink-500 font-bold mb-10 text-orange-400 border-purple-900 p-12 aspect-video border rounded-3xl
              hover:border-purple-700 hover:bg-purple-800 hover:text-slate-50`}
            >*/}
            Equipes
            {/* </Button> */}
          </Link>
        </li>
        <li
          onClick={() => setActive(false)}
          className='m-2 hover:bg-purple-500 flex justify-center items-center'
        >
          <Link href='/results'>
            {/* <Button
              variant='secondary'
              className={`bg-pink-500 font-bold mb-10 text-orange-400 border-purple-900 p-12 aspect-video border rounded-3xl
              hover:border-purple-700 hover:bg-purple-800 hover:text-slate-50`}
            > */}
            Resultats
            {/* </Button> */}
          </Link>
        </li>
      </ul>
    </div>
  )
}
