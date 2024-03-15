import { Container } from '@/components/ui/container'
import { MobileSidebar } from '@/components/ui/mobile-sidebar'
import { Row } from '@/components/ui/row'
import { UserButton } from '@clerk/nextjs'
import React from 'react'

export const HeaderTwo = () => {
  return (
    <header className='h-[72px]'>
        <Container>
            <Row classPlus='justify-between'>
                <MobileSidebar/>
                <UserButton afterSignOutUrl='/' /> 
            </Row>
        </Container>
    </header>
  )
}
