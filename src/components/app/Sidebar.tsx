'use client'
import { sidebarList } from '@/Constants/sidebarList'
import { capitalise, initialLetterCapitalise } from '@/helper/utils'
import Link from 'next/link'
import React from 'react'
import { usePathname } from 'next/navigation';
import path from 'path'

const Sidebar = () => {
  const pathname = usePathname().slice(1);
  const isActive = (path: string) => path === pathname;

  return (
    <>
        <div className='overflow-scroll text-lg mt-5'>
            {
                sidebarList.map((value:any) => { return <div key={value.text} className='my-4'><Link href={value.link} className={isActive(value.name) ? 'font-extrabold': ''}>{initialLetterCapitalise(value.name)}</Link></div>})
            }
        </div>
    </>
  )
}

export default Sidebar