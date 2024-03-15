"use client"
import { Col } from '@/components/ui/col'
import { Logo } from '@/components/ui/logo'
import { cn } from '@/lib/utils'
import { Code, LayoutDashboard, MessageSquare, Music, Settings, VideoIcon } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const navlinks = [
    {
        label: "Dashboard",
        icon: LayoutDashboard ,
        href:'/dashboard',
        color:'text-black'
    },{
        label: "Conversation",
        icon: MessageSquare ,
        href:'/conversation',
        color:'text-black'
    },{
        label: "video generator",
        icon: VideoIcon ,
        href:'/video',
        color:'text-black'
    },{
        label: "music generator",
        icon: Music ,
        href:'/music',
        color:'text-black'
    },{
        label: "code generator",
        icon: Code ,
        href:'/code',
        color:'text-black'
    },{
        label: "settings",
        icon: Settings ,
        href:'/music'
    }
]

export const SidebarOne = () => {

  const pathname = usePathname();

  return (

    <div className='md:flex fixed top-0 left-0 bg-white shadow-lg  w-[300px] max-w-[400px] min-h-screen py-12 px-4 w-full'>
        <Col classPlus='gap-y-12'>
            <div className='flex'>
                <Logo/>
            </div>
            <nav className='ps-2'>
                <ul className='flex flex-col gap-y-12'>
                   {
                    navlinks.map( (route, idx)=> {
                        return  <li key={idx}>
                        <Link href={route.href} className={cn('', pathname === route.href ? 
                        "font-extrabold" : "font-normal") }>
                            <div className='flex item-center flex-1 capitalize'>
                                 <route.icon className={cn('h-5 w-5 mr-3', route.color)} />
                                 {route.label}
                            </div>
                        </Link>
                    </li>
                    })
                   }
                </ul>
            </nav>
        </Col>
    </div>
  )
}
