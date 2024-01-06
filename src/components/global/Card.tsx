import React from 'react'

export default function Card({children, className}: {children: React.ReactNode, className?: string}) {
  return (
    <div className={`card bg-base-100 ${className}`}>
        <div className='card-body p-5'>
            {children}
        </div>
    </div>
  )
}
