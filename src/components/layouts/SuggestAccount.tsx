import { XMarkIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

type SuggestAccountType = {
  fullName: string;
  image: string;
  username: string;
  isOnline: boolean;
}

export default function SuggestAccount({fullName, image, username, isOnline}: SuggestAccountType) {
  return (
    <Link href='/profile' className='accounts flex justify-between'>
        <div className='flex space-x-2'>
        <div className={`avatar ${isOnline ? "online": "offline"}`}>
            <div className="w-10 h-10 rounded-full">
              <img src={image} />
            </div>
        </div>
        <div className='flex flex-col justify-center'>
            <h1 className='text-sm font-bold'>{fullName}</h1>
            <span className='text-base-content/50 text-sm'>@{username}</span>
        </div>
        </div>
        <div className=''>
          <XMarkIcon className='rounded-full hover:bg-base-100/50 p-0.5 w-7 h-7'/>
        </div>
    </Link>
  )
}
