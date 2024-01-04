'use client'
import React, { useEffect, useState } from 'react'
import { ArrowPathIcon } from '@heroicons/react/24/outline';
import { formatNumber } from './formatNumber';

export default function Reposts() {
    const [reposts, setReposts] = useState<number>(0)
    useEffect(() => {
        setReposts(Math.floor(Math.random()*144100))
    }, [])
  return (
    <button className='flex items-center'>
       <ArrowPathIcon className='w-7'/>
       <span>{formatNumber(reposts)}</span>
    </button>
  )
}
