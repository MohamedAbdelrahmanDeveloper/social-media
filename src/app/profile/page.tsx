import Card from '@/components/global/Card'
import Post from '@/components/post/Post'
import { formatNumber } from '@/components/post/formatNumber'
import { CalendarIcon, MapPinIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Profile() {
  return (
    <Card className='rounded-box shadow-md overflow-hidden' classBody='m-p-0'>
        <section>
            <div className='h-52 w-full relative'>
                <Image className='w-full h-full object-cover' width={500} height={300} src="https://media.bassam.social/036c7df8098402cb69802a6d024108adeeb911677c4895e474d17f95846fe85b.jpg" alt='MohamedAbdelrahmanDeveloper'/> 
                <div className="avatar online absolute -bottom-8 left-4 z-10">
                    <div className="w-24 rounded-full">
                        <Image className='w-24 h-24 rounded-full object-cover p-1 bg-base-100' width={300} height={100} src="https://avatars.githubusercontent.com/u/54208900?v=4" alt='MohamedAbdelrahmanDeveloper'/> 
                    </div>
                </div>
            </div>
            <div className='flex justify-end px-4 mt-2'>
                <Link href="/settings/profile" className='btn btn-sm rounded-full btn-outline' >Edit profile</Link>
            </div>
            <div className='p-4 space-y-2'>
                <div>
                    <h1 className='text-lg font-bold -mb-1.5'>Mohamed Abdelrahman</h1>
                    <span className='text-sm text-base-content/50'>@MohamedAbdelrahmanDeveloper</span>
                </div>
                <div className='flex space-x-2 font-bold text-sm'>
                    <span><b className='text-primary'>{formatNumber(8595287)}</b> Followers</span>
                    <span><b className='text-primary'>{formatNumber(5156)}</b> Following</span>
                </div>
                <div>
                    <p className='text-base-content/80'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptatibus animi saepe magnam voluptates incidunt assumenda laboriosam suscipit tempore corporis?</p>
                    <div className='flex flex-col md:flex-row gap-2 text-sm mt-1 text-base-content/75'>
                        <span className='flex items-center space-x-0.5'>
                            <CalendarIcon className='w-5' />
                            <time>Joined September 2023</time>
                        </span>
                        <a href="https://mohamedabdelrahmandeveloper.vercel.app/" className='flex items-center space-x-0.5'>
                            <MapPinIcon className='w-5' />
                            <span>mohamedabdelrahmandeveloper.vercel.app</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <section className='space-y-2'>
            <div role="tablist" className="tabs tabs-bordered px-4">
                <a role="tab" className="tab tab-active">Posts</a>
                <a role="tab" className="tab">Media</a>
            </div>
            <Post />
            <div className="divider px-4"></div> 
            <Post /> 
            <div className="divider px-4"></div> 
            <Post /> 
        </section>
    </Card>
  )
}
