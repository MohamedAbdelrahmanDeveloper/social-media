import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import InputSearch from '../search/InputSearch'

export default function HeaderApp() {
    return (
        <div className="navbar container-app">
            <div className="flex-1">
                <label htmlFor="my-drawer-left" className="btn btn-square btn-ghost drawer-button lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </label>
                <div className='me-4'>
                    <a className="btn btn-ghost text-xl -ms-4">
                        <Image width={18} height={18} src="https://media.bassam.social/bassam_palestine_icon.png" alt=""/>
                    </a>
                </div>
                <InputSearch isNav />
                <Link href="/search" className="join-item rounded-r-full md:hidden -ms-4">
                    <MagnifyingGlassIcon className='w-6'/>
                </Link>
            </div>
            <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-8 h-8 rounded-full">
                            <img alt="Tailwind CSS Navbar component" src="https://avatars.githubusercontent.com/u/54208900?v=4" />
                        </div>
                    </div>
                    <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <Link href="/profile" className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </Link>
                        </li>
                        <li><Link href="/settings">Settings</Link></li>
                        <li><Link href="/auth/signin">Logout</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
