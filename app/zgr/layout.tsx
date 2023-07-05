import React from 'react'

export default function ZgrLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <nav className="bg-orange-400">zgr Layout</nav>
      <main>{children}</main>
    </>
  )
}
