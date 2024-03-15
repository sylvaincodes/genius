import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const Logo = () => {
  return (
    <div className='flex gap-4 items-center'>
        <Link className='flex gap-4 items-center' href="/">
          <Image src="/logo.png" width="32" height="32" alt="logo" />
          <span className='font-bold tracking-tight'>
            AI Genius 
          </span>         
        </Link>
    </div>
  )
}


