'use client'
import React, { useEffect, useState } from 'react'
import { ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline';
import { formatNumber } from './formatNumber';

export default function Comments() {
    const [comments, setComments] = useState<number>(0)
    useEffect(() => {
        setComments(Math.floor(Math.random()*144100))
    }, [])
  return (
    <button className='flex items-center'>
       <ChatBubbleOvalLeftIcon className='w-7'/>
       <span>{formatNumber(comments)}</span>
    </button>
  )
}
