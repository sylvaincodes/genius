import React, { Fragment } from 'react'
import { Toaster } from 'react-hot-toast'
import { ClerkProvider } from '@clerk/nextjs'
import { Theme } from '@radix-ui/themes';

export const Providers = ({children}: {children: React.ReactNode}) => {
  return (
    <Fragment>
        <ClerkProvider>
        <Toaster/>
        <Theme>
            {children}
        </Theme>
        </ClerkProvider>
    </Fragment>
  )
}
