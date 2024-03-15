import { cn } from '@/lib/utils';
import React, { ReactNode } from 'react'

export const Grid = ({children,classPlus}: {children: ReactNode; classPlus?: string}) => {
  return (
    <div className={cn('grid', classPlus)}>{children}</div>
  )
}
