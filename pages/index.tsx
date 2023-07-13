import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/slider/slider"

export default function Home() {
  return (
    <>
      <main className={`flex grow w-full h-full justify-center items-center`}>
        {/* <div className='flex flex-col w-full h-full items-center p-2'> */}
        <Slider />
        {/* 
          <Link href='/teams'>
            <Button
              variant='secondary'
              className={`font-bold mb-10 p-16 aspect-video border text-red-500 border-purple-900 rounded-3xl
              hover:border-purple-700 hover:bg-purple-800 hover:text-slate-50`}
            >
              Equipes
            </Button>
          </Link>
          <Link href='/results'>
            <Button
              variant='secondary'
              className={`font-bold mb-10 text-red-500 border-purple-900 p-16 aspect-video border rounded-3xl
              hover:border-purple-700 hover:bg-purple-800 hover:text-slate-50`}
            >
              Resultats
            </Button>
          </Link> */}
        {/* </div> */}
      </main>
    </>
  )
}
