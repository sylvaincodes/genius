import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react'

export const Col = ({children,classPlus}: {children: ReactNode; classPlus?: string}) => {
  return (
    <div className={cn('flex flex-col h-full', classPlus)}>{children}</div>
  )
}
