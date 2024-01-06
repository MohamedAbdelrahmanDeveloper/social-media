'use client'
import React, { useRef, useState } from 'react'
import Card from '../../global/Card'
import { CalendarIcon, ChartBarSquareIcon, ExclamationTriangleIcon, FaceSmileIcon, GlobeAltIcon, PaperClipIcon } from '@heroicons/react/24/outline'
import ButtonIcon from './ButtonIcon'
import Button from '@/components/global/Button'
import Sensitive from './Sensitive'
import Media from './Media'

export default function AddPost() {
    const [textLength, setTextLength] = useState<number>(0)
    const [sensitive, setSensitive] = useState<boolean>(false)
    const inputFileRef = useRef<HTMLInputElement>(null)
    const handelFileInputClick = () => {
        inputFileRef.current?.click();
    }
  return (
    <Card className='shadow-md'>
        <div className="flex space-x-5 items-center">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="rounded-full">
              <img alt="Tailwind CSS Navbar component" src="https://avatars.githubusercontent.com/u/54208900?v=4" />
            </div>
          </div>
          <textarea onChange={(e) => setTextLength(e.target.value.length)} minLength={0} maxLength={5000} className="textarea focus:ring-0 focus:border-none flex-1 placeholder:text-base h-auto"  placeholder="What's on your mind?" ></textarea>
        </div>
        <div className="flex justify-end">
          <div className='border-t md:w-10/12'>
            <Media ref={inputFileRef} />
            { sensitive && <Sensitive close={() => setSensitive(false)} />}
          </div>
        </div>
        <div className="flex justify-end items-center">
            <div className='md:w-10/12 flex flex-col md:flex-row items-end md:justify-between'>
              <div className='space-x-2'>
                <ButtonIcon action={handelFileInputClick} Icon={PaperClipIcon} title='Add media attachment' />
                <ButtonIcon Icon={FaceSmileIcon} title='Insert emoji'/>
                <ButtonIcon Icon={ChartBarSquareIcon} title='Add a poll'/>
                <ButtonIcon Icon={GlobeAltIcon} title='Adjust  post privacy'/>
                <ButtonIcon Icon={CalendarIcon} title='Schedule post for later'/>
                <ButtonIcon action={() => setSensitive(true)} Icon={ExclamationTriangleIcon} title='Text is hidden behind warning'/>
              </div>
              <div className='flex space-x-4'>
                <div className='flex space-x-2 items-center text-base-content/80 text-lg'>
                    <span>{textLength > 0 ? (5000 - textLength) : 5000}</span>
                    <span className='w-4 h-4 ring-4 ring-base-content/30 rounded-full' title='Text is hidden behind warning'></span>
                </div>
                <Button className='btn-primary'>Post!</Button>
              </div>
            </div>
        </div>
    </Card>
  )
}
