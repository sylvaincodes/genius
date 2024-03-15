import React from 'react'
import { Menu } from 'lucide-react'
import { SidebarOne } from '../wrappers/sidebar/sidebar-one'
import { Sheet, SheetContent, SheetTrigger } from './sheet'

export const MobileSidebar = () => {

  
  return (

    <Sheet>
            <SheetTrigger>
               <Menu/>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
               <SidebarOne/>
            </SheetContent>
    </Sheet>
  )
}
