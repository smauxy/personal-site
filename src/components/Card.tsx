import React from 'react'
export default function Card({ className = '', children }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={`glass p-6 ${className}`}>{children}</div>
}
