import React from 'react'
import Link from 'next/link'
import SuggestAccount from './SuggestAccount';

export default function SideRight() {
  return (
    <div>
        <input id="my-drawer-right" type="checkbox" className="drawer-right-toggle hidden" />
        <label htmlFor='my-drawer-right' aria-label="close sidebar" className="overlay"></label> 
        <div className='drawer-side-right h-screen md:w-2/6 active'>
            <div className='p-4 h-screen w-80 text-base-content space-y-4 [&>li>a]:p-3 bg-base-100 md:bg-transparent'>
              <div className='flex justify-between items-center'>
                <h3 className='text-xl font-bold'>People To Follow</h3>
                <Link href='/suggestions' className='link link-primary text-sm'>View all</Link>
              </div>
              <div className='flex flex-col space-y-3'>
                <SuggestAccount fullName='Mohamed Abdelrahman' username='m7md0a' isOnline={true} image='https://avatars.githubusercontent.com/u/54208900?v=40'/>
                <SuggestAccount fullName='Mohamed Ali' username='m_ali4' isOnline={true} image='https://avatars.githubusercontent.com/u/54208900?v=40'/>
                <SuggestAccount fullName='Kareem Ahmed' username='kareem_1' isOnline={true} image='https://avatars.githubusercontent.com/u/54208900?v=40'/>
                <SuggestAccount fullName='Saeed Rady' username='saeed' isOnline={true} image='https://avatars.githubusercontent.com/u/54208900?v=40'/>
                <SuggestAccount fullName='Salem Salama' username='m8_d' isOnline={true} image='https://avatars.githubusercontent.com/u/54208900?v=40'/>
                <SuggestAccount fullName='Taha Oraby' username='taha_59' isOnline={true} image='https://avatars.githubusercontent.com/u/54208900?v=40'/>
              </div>
            </div>
        </div>
    </div>
  )
}
