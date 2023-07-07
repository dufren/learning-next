import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'users',
}

export default function UsersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <nav className="bg-green-400">users Layout</nav>
      <main>{children}</main>
    </>
  )
}
