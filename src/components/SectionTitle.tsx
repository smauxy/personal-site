import React from 'react'
export default function SectionTitle({ children }: { children: React.ReactNode }) {
  return <h2 className="mb-8 text-center text-4xl font-extrabold tracking-tight text-cyan-400 md:text-5xl">{children}</h2>
}
