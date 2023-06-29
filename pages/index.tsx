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
      <main className='h-screen flex items-center justify-center'>
        <div className='flex flex-col h-full justify-center items-center p-2 mb-auto'>
          <Link href='/standings'>
            <Button
              variant='secondary'
              className={`font-bold mb-10 p-16 text-purple-900 border-purple-900 aspect-video border rounded-3xl
               hover:border-purple-700 hover:bg-purple-800 hover:text-slate-50`}
            >
              Classement
            </Button>
          </Link>
          <Link href='/teams'>
            <Button
              variant='secondary'
              className={`font-bold mb-10 p-16 aspect-video border text-purple-900 border-purple-900 rounded-3xl
              hover:border-purple-700 hover:bg-purple-800 hover:text-slate-50`}
            >
              Equipes
            </Button>
          </Link>
          <Link href='/results'>
            <Button
              variant='secondary'
              className={`font-bold mb-10 text-purple-900 border-purple-900 p-16 aspect-video border rounded-3xl
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
