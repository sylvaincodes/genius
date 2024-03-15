import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react'

export const Row = ({children,classPlus}: {children: ReactNode; classPlus?: string}) => {
  return (
    <div className={cn('flex items-center h-full', classPlus)}>{children}</div>
  )
}
