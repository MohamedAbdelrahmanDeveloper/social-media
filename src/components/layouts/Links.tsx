import { BellIcon, ChatBubbleLeftRightIcon, Cog6ToothIcon, EllipsisHorizontalCircleIcon, GlobeAltIcon, HomeIcon, MagnifyingGlassIcon, UserIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

export default function Links() {
  return (
    <ul className="menu p-4 h-screen w-80 md:w-72 text-base-content/70 space-y-4 bg-base-100 md:bg-transparent">
        <li>
        <Link href="/" className='active'>
            <HomeIcon className='w-5'/>
            Home
        </Link>
        </li>
        <li>
        <Link href="/search" >
            <MagnifyingGlassIcon className='w-5'/>
            Search
        </Link>
        </li>
        <li>
        <Link href="/">
            <BellIcon className='w-5'/>
            Notification
        </Link>
        </li>
        <li>
        <Link href="/">
            <ChatBubbleLeftRightIcon className='w-5'/>
            Messages
        </Link>
        </li>
        <li>
        <Link href="/profile">
            <UserIcon className='w-5'/>
            Profile
        </Link>
        </li>
        <li>
        <Link href="/">
            <Cog6ToothIcon className='w-5'/>
            Settings
        </Link>
        </li>
        <li>
        <Link href="/">
            <svg className="h-5 w-5 text-gray-600 dark:text-gray-500 group-hover:text-primary-500 dark:group-hover:text-primary-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" data-testid="svg-icon"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5.931 6.936l1.275 4.249m5.607 5.609l4.251 1.275"></path><path d="M11.683 12.317l5.759 -5.759"></path><path d="M5.5 5.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0"></path><path d="M18.5 5.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0"></path><path d="M18.5 18.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0"></path><path d="M8.5 15.5m-4.5 0a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0 -9 0"></path></svg>
            Local
        </Link>
        </li>
        <li>
        <Link href="/">
            <GlobeAltIcon className='w-5'/>
            Fediverse
        </Link>
        </li>
        <li>
        <Link href="/">
            <EllipsisHorizontalCircleIcon className='w-5'/>
            More
        </Link>
        </li>
        <Link href="/?post" className='btn w-full btn-primary opacity-85 btn-circle'>Compose</Link>
    </ul>
  )
}
