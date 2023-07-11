import React, { useState } from "react"
import { Menu } from "@/components/menu/menu"
import Link from "next/link"
import logo from "@/public/pleague-logo.png"
import Image from "next/image"

export function Header() {
  return (
    <header>
      <div className='text-center h-full pt-4 relative'>
        <div className='flex justify-center items-center'>
          <Image
            src={logo}
            width={50}
            height={50}
            alt='premier league logo'
            className='inline-block mr-2'
          />
          <Link href='/'>
            <h1 className='font-bold text-2xl md:text-3xl italic text-red-500'>
              Premier League
            </h1>
          </Link>
        </div>
        <Menu />
      </div>
    </header>
  )
}
