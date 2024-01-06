import { BellIcon, BookmarkIcon, ChatBubbleLeftRightIcon, Cog6ToothIcon, EllipsisHorizontalCircleIcon, GlobeAltIcon, HomeIcon, ListBulletIcon, MagnifyingGlassIcon, TicketIcon, UserIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'
import SideLink from './SideLink'

export default function Links() {
    let links = [
        {
            title: "Home",
            url: '/',
            icon: <HomeIcon className='w-5' />
        },
        {
            title: "Search",
            url: '/search',
            icon: <MagnifyingGlassIcon className='w-5'/>
        },
        {
            title: "Notifications",
            url: '/notifications',
            icon: <BellIcon className='w-5'/>
        },
        {
            title: "Chats",
            url: '/chats',
            icon: <ChatBubbleLeftRightIcon className='w-5'/>
        },
        {
            title: "Profile",
            url: '/profile',
            icon: <UserIcon className='w-5'/>
        },
        {
            title: "Settings",
            url: '/settings',
            icon: <Cog6ToothIcon className='w-5'/>
        },
        {
            title: "Local",
            url: '/local',
            icon: <svg className="h-5 w-5 text-gray-600 dark:text-gray-500 group-hover:text-primary-500 dark:group-hover:text-primary-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" data-testid="svg-icon"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M5.931 6.936l1.275 4.249m5.607 5.609l4.251 1.275"></path><path d="M11.683 12.317l5.759 -5.759"></path><path d="M5.5 5.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0"></path><path d="M18.5 5.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0"></path><path d="M18.5 18.5m-1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 1 0 -3 0"></path><path d="M8.5 15.5m-4.5 0a4.5 4.5 0 1 0 9 0a4.5 4.5 0 1 0 -9 0"></path></svg>
        },
        {
            title: "Fediverse",
            url: '/fediverse',
            icon: <GlobeAltIcon className='w-5'/>
        }
    ]
  return (
    <ul className="menu p-4 h-screen w-80 md:w-72 text-base-content/70 space-y-4 bg-base-100 md:bg-transparent">
        {links.map(link => (
            <SideLink key={link.title} link={link}></SideLink>
        ))}
        <li className="dropdown dropdown-top dropdown-end">
            <button className='w-full py-3 px-4 rounded-full'>
                <EllipsisHorizontalCircleIcon className='w-5'/>
                More
            </button>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                    <a>
                        <BookmarkIcon className='w-4'/>
                        Bookmarks
                    </a>
                </li>
                <li>
                    <a>
                        <ListBulletIcon className='w-4'/>
                        Lists
                    </a>
                </li>
                <li>
                    <a>
                        <TicketIcon className='w-4'/>
                        Events
                    </a>
                </li>
            </ul>
        </li>
        <Link href="/?post" className='btn btn-sm md:btn-md w-full btn-primary opacity-85 rounded-full'>Compose</Link>
        <Link href="/auth/signin" className='btn btn-sm md:btn-md w-full btn-primary opacity-85 rounded-full'>Auth</Link>
    </ul>
  )
}
