import Head from "next/head"
import { Menu } from "@/components/menu/menu"
import Link from "next/link"
import logo from "@/public/pleague-logo.png"
import Image from "next/image"
import { OpenClose } from "@/components/menu/openClose"
import { MenuContext } from "@/context/context"
import { useContext } from "react"

export function Header() {
  const { active, setActive } = useContext(MenuContext)
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
      <header>
        <div className='text-center h-full pt-4 px-2'>
          <div className='flex md:justify-center justify-between items-center'>
            <Image
              src={logo}
              width={50}
              height={50}
              alt='premier league logo'
              className='inline-block'
            />
            <Link href='/'>
              <h1 className='font-bold text-xl md:text-3xl italic text-red-500'>
                Premier League
              </h1>
            </Link>
            <OpenClose isActive={active} setActive={setActive} />
          </div>
          <Menu />
        </div>
      </header>
    </>
  )
}
