import type { ReactNode } from 'react'
import { FixedGuides } from './FixedGuides'
import { NavBar } from './NavBar'

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="w-full h-full min-h-screen relative selection:bg-white selection:text-black text-primary bg-base">
      <FixedGuides />
      <NavBar />
      <main className="w-full">{children}</main>
    </div>
  )
}

