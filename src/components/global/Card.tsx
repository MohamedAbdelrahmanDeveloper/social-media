import React from 'react'

export default function Card({children, className, classBody}: {children: React.ReactNode, className?: string, classBody?: string}) {
  return (
    <div className={`card bg-base-100 ${className}`}>
        <div className={`card-body p-5 ${classBody}`}>
            {children}
        </div>
    </div>
  )
}
