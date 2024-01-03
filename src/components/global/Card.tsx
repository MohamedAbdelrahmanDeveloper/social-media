import React from 'react'

export default function Card({children}: {children: React.ReactNode}) {
  return (
    <div className='card bg-base-100'>
        <div className='card-body p-5'>
            {children}
        </div>
    </div>
  )
}
