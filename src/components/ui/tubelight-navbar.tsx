"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 2
      for (let i = items.length - 1; i >= 0; i--) {
        const section = document.querySelector(items[i].url)
        if (section) {
          const el = section as HTMLElement
          if (scrollY >= el.offsetTop) {
            setActiveTab(items[i].name)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [items])

  return (
    <div
      className={cn(
        "fixed right-0 top-1/2 -translate-y-1/2 z-50 mr-4",
        className,
      )}
    >
      <div
        className="flex flex-col items-center gap-1.5 py-1.5 px-1.5 rounded-full shadow-2xl"
        style={{
          background: 'rgba(13, 14, 18, 0.7)',
          backdropFilter: 'blur(24px) saturate(140%)',
          border: '1px solid rgba(212, 175, 55, 0.12)',
          boxShadow: '0 8px 32px -4px rgba(0, 0, 0, 0.7), 0 0 16px -2px rgba(212, 175, 55, 0.06)',
        }}
      >
        {items.map((item) => {
          const Icon = item.icon
          const isActive = activeTab === item.name

          return (
            <a
              key={item.name}
              href={item.url}
              onClick={() => setActiveTab(item.name)}
              className={cn(
                "relative cursor-pointer font-outfit font-light p-2.5 rounded-full transition-colors duration-300 group",
                "text-[#A1A1AA] hover:text-champagne",
                isActive && "text-gold",
              )}
              title={item.name}
            >
              <Icon size={18} strokeWidth={isActive ? 2.5 : 2} />

              {/* Tooltip label on hover */}
              <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-md text-[11px] font-jakarta font-medium tracking-wide whitespace-nowrap opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200"
                style={{
                  background: 'rgba(13, 14, 18, 0.9)',
                  border: '1px solid rgba(212, 175, 55, 0.15)',
                  color: '#E5C378',
                }}
              >
                {item.name}
              </span>

              {isActive && (
                <motion.div
                  layoutId="tubelight"
                  className="absolute inset-0 w-full h-full rounded-full -z-10"
                  style={{
                    background: 'rgba(212, 175, 55, 0.08)',
                  }}
                  initial={false}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 30,
                  }}
                >
                  {/* Tubelight glow bar — right edge */}
                  <div className="absolute top-1/2 -translate-y-1/2 -right-2 h-8 w-1 rounded-r-full"
                    style={{ background: 'linear-gradient(to bottom, #D4AF37, #E5C378)' }}
                  >
                    <div className="absolute h-12 w-6 rounded-full blur-md -right-2 -top-2"
                      style={{ background: 'rgba(212, 175, 55, 0.25)' }}
                    />
                    <div className="absolute h-8 w-6 rounded-full blur-md -right-1"
                      style={{ background: 'rgba(212, 175, 55, 0.2)' }}
                    />
                    <div className="absolute h-4 w-4 rounded-full blur-sm right-0 top-2"
                      style={{ background: 'rgba(212, 175, 55, 0.2)' }}
                    />
                  </div>
                </motion.div>
              )}
            </a>
          )
        })}
      </div>
    </div>
  )
}

