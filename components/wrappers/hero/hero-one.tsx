import { Container } from '@/components/ui/container'
import { Col } from '@/components/ui/col'
import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const HeroOne = () => {
  return (
    <section className='py-36'>
        <Container>
            <Col classPlus='justify-center items-center gap-y-6'>
                <h1 className="text-[100px] text-gray-700 capitalize font-bold p-6">the best ai tools </h1>
                <div className='max-w-4xl text-center text-gray-700 text-2xl leading-loose'>
                    Used by some of the worlds largest companies, Genius enables you to create high-quality tools with the power of AI.
                </div>

                <div className='flex gap-x-12'>
                    <Link href="/sign-up">
                      <Button variant="primary" className='p-6 capitalize'>
                          get started
                      </Button>
                    </Link>
                    <Link href="/sign-in">
                      <Button variant="outline" className='p-6 capitalize'>
                          learn more
                      </Button>
                    </Link>
                </div>
            </Col>
        </Container>
    </section>
  )
}
