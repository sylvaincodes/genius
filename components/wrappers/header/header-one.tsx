import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { Logo } from '@/components/ui/logo'
import { Row } from '@/components/ui/row'
import Link from 'next/link'
import React from 'react'
import { useAuth } from '@clerk/nextjs'


export const HeaderOne = () => {
  
  return (
    <header className='h-[72px]'>
        <Container>
            <Row classPlus='justify-between '>
              
                  <Logo/>

                  <div>
                        <Link href="sign-in"
                        >
                          <Button variant="outline" className=' capitalize rounded-none rounded-full'>
                                login
                          </Button>
                        </Link>
                  </div> 
                 
            </Row>
        </Container>
    </header>
  )
}
