import React, { ReactNode } from 'react'

export const Container = ({children}: {children: ReactNode;}) => {
  return (
    <div className='container h-full'>{children}</div>
  )
}
