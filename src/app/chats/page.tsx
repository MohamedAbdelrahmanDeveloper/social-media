import AccountDetails from '@/components/chats/AccountDetails'
import BackLink from '@/components/global/BackLink'
import Button from '@/components/global/Button'
import Card from '@/components/global/Card'
import { Cog6ToothIcon, PencilSquareIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function page() {
  return (
    <Card classBody='m-p-0 shadow rounded-box'>
        <div className='flex flex-col md:flex-row m-h-screen'>
            <div className='md:w-2/5 h-full p-3 md:rounded-s-box bg-base-200/50'>
                <div className='flex justify-between'>
                    <BackLink title='Chats' />
                    <div className='flex space-x-2'>
                        <Cog6ToothIcon className='w-6 rounded-full bg-base-100 p-0.5'/>
                        <PencilSquareIcon className='w-6 rounded-full bg-base-100 p-0.5'/>
                    </div>
                </div>
                <div className='space-y-4 p-2'>
                    <AccountDetails fullName='Mohamed Abdelrahman' username='m7md0a' isOnline={true} image='https://avatars.githubusercontent.com/u/54208900?v=40'/>
                    <AccountDetails fullName='Mohamed Ali' username='m_ali4' isOnline={true} image='https://avatars.githubusercontent.com/u/54208900?v=40'/>
                    <AccountDetails fullName='Kareem Ahmed' username='kareem_1' isOnline={true} image='https://avatars.githubusercontent.com/u/54208900?v=40'/>
                    <AccountDetails fullName='Saeed Rady' username='saeed' isOnline={true} image='https://avatars.githubusercontent.com/u/54208900?v=40'/>
                    <AccountDetails fullName='Salem Salama' username='m8_d' isOnline={true} image='https://avatars.githubusercontent.com/u/54208900?v=40'/>
                    <AccountDetails fullName='Taha Oraby' username='taha_59' isOnline={true} image='https://avatars.githubusercontent.com/u/54208900?v=40'/>      
                </div>
            </div>
            <div className='md:w-3/4 bg-base-100 hidden md:flex justify-center items-center'>
                <div className='md:w-2/4 text-center space-y-3'>
                    <h2 className='text-2xl font-bold'>Select a chat</h2>
                    <p className='text-base-content/60 text-sm'>Select from one of your open chats or create a new message.</p>
                    <Button className='rounded-full btn-primary opacity-95'>Message Someone</Button>
                </div>
            </div>
        </div>
    </Card>
  )
}
