import React from 'react'
import Card from '../global/Card'
import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Like from './Like'
import Comments from './Comments'
import Reposts from './Reposts'
import Image from 'next/image'

export default function Post({shadow}: {shadow?: boolean}) {
  return (
    <Card className={`${shadow && "shadow-md"}`} >
        <div className='flex items-center space-x-2'>
            <div className="avatar online">
                <div className="w-12 rounded-full">
                    <Image width={40} height={50} alt='image' src="https://avatars.githubusercontent.com/u/54208900?v=4" />
                </div>
            </div>
            <div className='flex flex-col -space-y-0.5'>
                <h2>Mohamed Abdelrahman</h2>
                <span className='text-sm text-base-content/50'>
                    <Link href='/'>@m7md0a</Link> .
                    <time>1d</time>
                </span>
            </div>
        </div>
        <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos est nisi enim cumque quisquam molestias quaerat alias iusto voluptatibus ad sit, voluptatum provident necessitatibus reprehenderit voluptatem distinctio labore nobis eligendi fugiat vitae nam molestiae magnam, exercitationem fugit! Ipsa optio, incidunt dolor natus nostrum, vero assumenda esse reiciendis quibusdam adipisci veritatis!</p>
        </div>
        <div className='card-actions text-base-content/70'>
            <Comments />
            <Reposts />
            <Like />
            <EllipsisHorizontalIcon className='w-7'/>
        </div>
    </Card>
  )
}
