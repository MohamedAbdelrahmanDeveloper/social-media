import AccountDetails from '@/components/chats/AccountDetails'
import BackLink from '@/components/global/BackLink'
import Button from '@/components/global/Button'
import Card from '@/components/global/Card'
import { Cog6ToothIcon, PaperAirplaneIcon, PaperClipIcon, PencilSquareIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'

export default function chat() {
  return (
    <Card classBody='m-p-0 shadow rounded-box'>
        <div className='flex flex-col md:flex-row m-h-screen'>
            <div className='md:w-2/5 p-3 md:rounded-s-box bg-base-200/50 hidden md:block'>
                <div className='flex justify-between'>
                    <BackLink title='Chats' />
                    <div className='flex space-x-2'>
                        <Cog6ToothIcon className='w-6 rounded-full bg-base-100 p-0.5'/>
                        <PencilSquareIcon className='w-6 rounded-full bg-base-100 p-0.5'/>
                    </div>
                </div>
                <div className='space-y-4 p-2'>
                    <AccountDetails fullName='Mohamed Abdelrahman' username='MohamedAbdelrahmanDeveloper' isOnline={true} image='https://avatars.githubusercontent.com/u/54208900?v=40'/>
                    <AccountDetails fullName='Mohamed Ali' username='m_ali4' isOnline={true} image='https://avatars.githubusercontent.com/u/54208900?v=40'/>
                    <AccountDetails fullName='Kareem Ahmed' username='kareem_1' isOnline={true} image='https://avatars.githubusercontent.com/u/54208900?v=40'/>
                    <AccountDetails fullName='Saeed Rady' username='saeed' isOnline={true} image='https://avatars.githubusercontent.com/u/54208900?v=40'/>
                    <AccountDetails fullName='Salem Salama' username='m8_d' isOnline={true} image='https://avatars.githubusercontent.com/u/54208900?v=40'/>
                    <AccountDetails fullName='Taha Oraby' username='taha_59' isOnline={true} image='https://avatars.githubusercontent.com/u/54208900?v=40'/>      
                </div>
            </div>
            <div className='md:w-3/4 bg-base-100 m-h-screen flex flex-col'>
                <div className='shadow px-3 py-1'>
                    <AccountDetails isPrivate fullName='Mohamed Abdelrahman' username='MohamedAbdelrahmanDeveloper' isOnline={true} image='https://avatars.githubusercontent.com/u/54208900?v=40'/>
                </div>
                <div className='flex-1'>
                    <div className='p-4 h-full flex flex-col justify-end'>
                        <div className="chat chat-start">
                            <div className="chat-image avatar">
                                <div className="w-10 rounded-full">
                                    <Image width={40} height={40} alt="chat" src="https://avatars.githubusercontent.com/u/54208900?v=40" />
                                </div>
                            </div>
                            <div className="chat-bubble">Hello, I&apos;m Mohamed</div>
                        </div>
                        <div className="chat chat-end">
                            <div className="chat-image avatar">
                                <div className="w-10 rounded-full">
                                    <Image width={40} height={40} alt="chat" src="https://avatars.githubusercontent.com/u/54208900?v=40" />
                                </div>
                            </div>
                            <div className="chat-bubble">Hi, nice to meet you</div>
                        </div>
                        <div className="chat chat-end">
                            <div className="chat-image avatar">
                                <div className="w-10 rounded-full">
                                    <Image width={40} height={40} alt="chat" src="https://avatars.githubusercontent.com/u/54208900?v=40" />
                                </div>
                            </div>
                            <div className="chat-bubble">How are you today?</div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between space-x-4 p-2'>
                    <button><PaperClipIcon className='w-7'/></button>
                    <div className='flex-1'>
                        <input className='input input-bordered w-full' placeholder='Type a message'/>
                    </div>
                    <button><PaperAirplaneIcon className='w-7 -rotate-45 text-primary hover:fill-primary'/></button>
                </div>
            </div>
        </div>
    </Card>
  )
}
