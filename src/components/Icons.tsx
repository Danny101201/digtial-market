import { LucideProps } from 'lucide-react'
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import dynamic from 'next/dynamic'
import React from 'react'
import { LogoIcon } from './icons/Logo';
interface IconsProps extends LucideProps {
  name: keyof typeof dynamicIconImports
}
export const DynamicIcons = ({ name, ...props }: IconsProps) => {
  const LucideIcon = dynamic(dynamicIconImports[name])
  return <LucideIcon {...props} />
}


export const Icons = {
  logo: ({ ...props }: LucideProps) => (
    <LogoIcon  {...props} />
  )
}
