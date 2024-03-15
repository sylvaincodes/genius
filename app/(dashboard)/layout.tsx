import { HeaderTwo } from '@/components/wrappers/header/header-two'
import { SidebarOne } from '@/components/wrappers/sidebar/sidebar-one'
import React, { Fragment, ReactNode } from 'react'

export default function DashboardLayout  ({children}: {children: ReactNode}){
  return (
    <Fragment>

        {/* sidebar  */}
        {/* <SidebarOne/> */}
        {/* header */}
        <HeaderTwo/>

        {/* content */}
        
        {children}

    </Fragment>

  )
}
