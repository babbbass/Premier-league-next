import Head from "next/head"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <>
      <Head>
        <title>Premier league - Next</title>
        <meta
          name='description'
          content='Infos et résultats sur la premier league anglaise'
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='flex grow justify-center items-center'>
        <div className='flex flex-col h-full items-center p-2'>
          <Button
            variant='secondary'
            className={`font-bold mb-10 p-16 text-red-500 border-purple-900 aspect-video border rounded-3xl
               hover:border-purple-700 hover:bg-purple-800 hover:text-slate-50`}
          >
            <Link href='/standings'>Classement</Link>
          </Button>
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
          </Link>
        </div>
      </main>
    </>
  )
}
