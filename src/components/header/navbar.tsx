'use client'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import menu  from './../../../public/icons8-menu.svg'

function Navbar() {
  const pathName = usePathname()
  const pages = [
    {path: '/', title: 'home'},
    {path: '/allNews', title: 'News'},
    {path: '/create', title: 'create'},
  ]
  return (<div>
    <button className="sm:hidden">
      <Image src={menu} alt='menu image'/>
    </button>
    <ul className='flex gap-10 px-10 rounded items-center justify-between bg-amber-50 max-sm:hidden'>
      {pages.map(page => (
        <li className={`${pathName == page.path ? 'bg-amber-900 rounded-t py-2 px-3 text-white': 'bg-amber-50 py-2'}`} key={page.title}><Link href={page.path}>{page.title}</Link></li>
      ))}
    </ul>
    </div>
  )
}

export default Navbar
