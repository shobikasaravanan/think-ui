"use client"

import Link from 'next/link'
import React, { useState } from 'react'

import github from '../../../images/github.svg'
import linkedin from '../../../images/linkedin.svg'
import email from '../../../images/email.png'
import twitter from '../../../images/twitter.png'
import home from '../../../images/home.png'
import Image from 'next/image'
import If from '@/helper/If'

const Header = () => {
  return (
        <div className="grid grid-cols-5 justify-between items-center h-24 mx-10">
            <h1 className='md:text-4xl flex md:block text-2xl col-span-5 md:col-span-3'>
                <Link href="/">Think UI Library</Link>
            </h1>
            <nav className="text-xl flex col-span-5 md:col-span-2 justify-between items-center ">
              <Link  href="./" className="mx-2"><Image width={20} height={20} src={home} alt={''}></Image></Link>
              <Link target='_blank' href="https://twitter.com/shobilav" className="mx-2"><Image width={20} height={20} src={twitter} alt={''}></Image></Link>
              <Link target='_blank' href="https://www.linkedin.com/in/shobika-saravanan/" className="mx-2"><Image width={20} height={20} src={linkedin} alt={''}></Image></Link>
              <Link target='_blank' href="https://github.com/shobikasaravanan" className="mx-2"><Image width={20} height={20} src={github} alt={''}></Image></Link>
              <Link target='_blank' href="mailto:shobikasaravanan1998@gmail.com" className="mx-2"><Image width={20} height={20} src={email} alt={''}></Image></Link>
            </nav>
          </div>  )
}

export default Header