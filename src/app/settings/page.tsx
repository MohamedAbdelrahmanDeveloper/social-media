import BackLink from '@/components/global/BackLink'
import Card from '@/components/global/Card'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

export default function settingsPage() {
  return (
    <Card className='rounded-box overflow-hidden shadow-md'>
        <div>
            <BackLink title='Settings ' />
        </div>
        <section className='space-y-4 mt-2'>
            <div className='space-y-2'>
                <h3 className='text-xl font-bold'>Profile</h3>
                <Link href="/settings/profile" className='rounded-lg bg-primary/10 p-2 flex justify-between items-center text-base-content/80 hover:bg-primary/20'>
                    <span>Edit Profile</span>
                    <div className='flex items-center space-x-4'>
                        <span>Mohamed Abdelrahman</span>
                        <ChevronRightIcon className='w-6' />
                    </div>
                </Link>
            </div>
            <div className='space-y-2'>
                <h3 className='text-xl font-bold'>Privacy</h3>
                <div className='join join-vertical w-full'>
                    <Link href="/settings" className='join-item w-full rounded-lg bg-primary/10 p-2 flex justify-between items-center text-base-content/80 hover:bg-primary/20'>
                        <span>Mutes</span>
                        <div className='flex items-center space-x-4'>
                            <ChevronRightIcon className='w-6' />
                        </div>
                    </Link>
                    <Link href="/settings" className='join-item w-full rounded-lg bg-primary/10 p-2 flex justify-between items-center text-base-content/80 hover:bg-primary/20'>
                        <span>Blocks</span>
                        <div className='flex items-center space-x-4'>
                            <ChevronRightIcon className='w-6' />
                        </div>
                    </Link>
                </div>
            </div>
            <div className='space-y-2'>
                <h3 className='text-xl font-bold'>Security</h3>
                <div className='join join-vertical w-full'>
                    <Link href="/settings" className='join-item w-full rounded-lg bg-primary/10 p-2 flex justify-between items-center text-base-content/80 hover:bg-primary/20'>
                        <span>Change Email</span>
                        <div className='flex items-center space-x-4'>
                            <ChevronRightIcon className='w-6' />
                        </div>
                    </Link>
                    <Link href="/settings" className='join-item w-full rounded-lg bg-primary/10 p-2 flex justify-between items-center text-base-content/80 hover:bg-primary/20'>
                        <span>Change Password</span>
                        <div className='flex items-center space-x-4'>
                            <ChevronRightIcon className='w-6' />
                        </div>
                    </Link>
                </div>
            </div>
            <div className='space-y-2'>
                <h3 className='text-xl font-bold'>Chats</h3>
                <div className='join join-vertical w-full'>
                    <div className='join-item w-full rounded-lg bg-primary/10 p-2 flex justify-between items-center text-base-content/80 hover:bg-primary/20'>
                        <label htmlFor='chats-allow-users' className='cursor-pointer'>Allow users to start a new chat with you</label>
                        <div className='flex items-center space-x-4'>
                            <input type="checkbox" id='chats-allow-users' className="toggle toggle-primary" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </Card>
  )
}
