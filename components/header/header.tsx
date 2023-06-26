import React, { useState } from "react"
import { Menu } from "@/components/menu/menu"
import Link from "next/link"

export function Header() {
  return (
    <header className='mt-4 mb-16'>
      <Link href='/'>
        <h1 className='font-bold text-2xl italic'>Premier League</h1>
      </Link>
      <Menu />
    </header>
  )
}
