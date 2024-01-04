'use client'
import React, { useEffect, useState } from 'react'
import { HeartIcon } from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid';
import { formatNumber } from './formatNumber';

export default function Like() {
    const [likes, setLikes] = useState<number>(0)
    const [isLiked, setIsLiked] = useState<boolean>(false)
    function increase() {
        if (isLiked) {
            setIsLiked(false)
            setLikes((prev) => {
                return prev - 1
            })
        }else {
            setIsLiked(true)
            setLikes((prev) => {
                return prev + 1
            })
        }
    }
    useEffect(() => {
      setLikes(Math.floor(Math.random()*10000000))
    }, [])
  return (
    <button onClick={increase} className='flex items-center'>
      {isLiked ?
       <HeartSolidIcon className='w-7 text-red-500'/> :
       <HeartIcon className='w-7'/>}
       <span>{formatNumber(likes)}</span>
    </button>
  )
}
