import Link from 'next/link';
import React from 'react'
type SuggestAccountType = {
    fullName: string;
    image: string;
    username: string;
    isOnline: boolean;
    isSearch?: boolean;
    isPrivate?: boolean
  }

export default function AccountDetails({fullName, image, username, isOnline, isPrivate}: SuggestAccountType) {
    const name = isPrivate ? fullName : fullName.split(' ')[0] 
  return (
    <div className='accounts flex justify-between hover:bg-base-100/50 p-2 rounded-lg'>
        <Link href={`/chats/@${username}`} className='flex space-x-2'>
          <div className={`avatar ${isOnline ? "online": "offline"}`}>
              <div className="w-10 h-10 rounded-full">
                <img src={image} />
              </div>
          </div>
          <div className='flex flex-col justify-center'>
              <h1 className='text-sm font-bold'>{name}</h1>
              <span className='text-base-content/50 text-xs'>{isPrivate ? "@"+username : "Hello, I'm Mohamed"}</span>
          </div>
        </Link>
        {!isPrivate && <div className='text-xs'>
          <time>15-5-2012</time>
        </div>}
    </div>
  )
}
