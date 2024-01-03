import React from 'react'
import Card from '../global/Card'
import ButtonIcon from '../Home/AddPost/ButtonIcon'
import { ArrowPathIcon, ChatBubbleOvalLeftIcon, EllipsisHorizontalIcon, HeartIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function Post() {
  return (
    <Card>
        <div className='flex items-center space-x-2'>
            <div className="avatar online">
                <div className="w-12 rounded-full">
                    <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
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
            <ChatBubbleOvalLeftIcon className='w-7'/>
            <ArrowPathIcon className='w-7'/>
            <HeartIcon className='w-7'/>
            <EllipsisHorizontalIcon className='w-7'/>
        </div>
    </Card>
  )
}
