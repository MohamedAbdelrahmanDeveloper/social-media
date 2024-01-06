import { PlusIcon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'

type SuggestAccountType = {
  fullName: string;
  image: string;
  username: string;
  isOnline: boolean;
  isSearch?: boolean;
}

export default function SuggestAccount({fullName, image, username, isOnline, isSearch}: SuggestAccountType) {
  return (
    <div className='accounts flex justify-between'>
        <Link href='/profile' className='flex space-x-2'>
          <div className={`avatar ${isOnline ? "online": "offline"}`}>
              <div className="w-10 h-10 rounded-full">
                <Image width={40} height={50} alt='image' src={image} />
              </div>
          </div>
          <div className='flex flex-col justify-center'>
              <h1 className='text-sm font-bold'>{fullName}</h1>
              <span className='text-base-content/50 text-sm'>@{username}</span>
          </div>
        </Link>
        {isSearch ? <div className=''>
          <button className='btn btn-primary btn-sm'>
            <PlusIcon className='rounded-full hover:bg-base-100/50 p-0.5 w-6 h-6'/>
            <span className='hidden md:block'>Follow</span>
          </button>
        </div>:
        <div className=''>
          <XMarkIcon className='rounded-full hover:bg-base-100/50 p-0.5 w-7 h-7'/>
        </div>}
    </div>
  )
}
