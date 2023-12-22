import { cn } from '@/lib/utils'
import React, { PropsWithChildren } from 'react'
interface MaxWidthWrapperProps extends PropsWithChildren {
  className?: string
}

export const MaxWidthWrapper = ({
  children,
  className,
}: MaxWidthWrapperProps) => {
  return (
    <div className={cn('mx-auto w-full max-w-screen-xl px-2.5 md:px-20', className)}>{children}</div>
  )
}

