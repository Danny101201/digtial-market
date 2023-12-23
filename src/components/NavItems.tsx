'use client'
import { PRODUCT_CATEGORIES } from '@/config'
import React, { useEffect, useRef, useState } from 'react'
import { NavItem } from './NavItem'
import { useOnClickOutside } from '@/hooks/useOnClickOutside'

export const NavItems = () => {
  const [activeIndex, setActiveIndex] = useState<null | number>(null)
  const navRef = useRef<HTMLDivElement | null>(null)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveIndex(null)
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [])
  const isAnyOpen = activeIndex === null
  useOnClickOutside(navRef, () => setActiveIndex(null))
  return (
    <div className='flex gap-4 h-full' ref={navRef}>
      {PRODUCT_CATEGORIES.map((category, index) => {
        const handleOpen = () => {
          if (activeIndex === index) {
            setActiveIndex(null);
          } else {
            setActiveIndex(index);
          }
        }
        const handleClose = () => {
          setActiveIndex(null)
        }
        const isActive = activeIndex === index
        return (
          <NavItem
            key={index}
            handleOpen={handleOpen}
            close={handleClose}
            isActive={isActive}
            isAnyOpen={isAnyOpen}
            category={category}
          />
        )
      })}
    </div>
  )
}

