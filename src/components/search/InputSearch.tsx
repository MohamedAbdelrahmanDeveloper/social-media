import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function InputSearch({isNav}: {isNav: boolean}) {
  return (
    <div className={`join rounded-full input border-none input-primary h-10 bg-base-200 ${isNav ? "md:w-auto hidden md:flex" : "md:w-full"}`}>
        <input className="text-lg bg-base-200 join-item w-full" placeholder="Search"/>
        <button className="join-item">
            <MagnifyingGlassIcon className='w-6'/>
        </button>
    </div>
  )
}
