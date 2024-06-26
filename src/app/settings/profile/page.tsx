import BackLink from '@/components/global/BackLink'
import Button from '@/components/global/Button'
import Image from 'next/image'
import React from 'react'

export default function EditProfile() {
  return (
    <section className='bg-base-100 rounded-box overflow-hidden'>
        <section>
            <div className='p-4'>
                <BackLink title='Settings' />
            </div>
            <div className='h-40 w-full relative'>
                <Image className='w-full h-full object-cover' width={500} height={300} src="https://media.bassam.social/036c7df8098402cb69802a6d024108adeeb911677c4895e474d17f95846fe85b.jpg" alt='MohamedAbdelrahmanDeveloper'/> 
                <button className='btn absolute right-2 top-2'>Edit</button>
                <div className="avatar absolute -bottom-8 left-4 z-10">
                    <div className="w-24 rounded-full">
                        <Image className='w-24 h-24 rounded-full object-cover p-1 bg-base-100' width={300} height={100} src="https://avatars.githubusercontent.com/u/54208900?v=4" alt='MohamedAbdelrahmanDeveloper'/> 
                    </div>
                    <button className='btn btn-sm -ml-8 mt-16'>Edit</button>
                </div>
            </div>
            <form className='p-4 space-y-2 mt-8'>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Display name</span>
                    </div>
                    <input type="text" placeholder="Name" className="input input-bordered w-full" value="Mohamed Abdelrahman"/>
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Birthday</span>
                    </div>
                    <input type="text" placeholder="Your birthday" className="input input-bordered w-full" />
                </label>
                <label className="form-control w-full">
                    <div className="label">
                        <span className="label-text">Location</span>
                    </div>
                    <input type="text" placeholder="Location" className="input input-bordered w-full" value="https://m-Abdelrahman.vercel.app"/>
                </label>
                <label className="form-control">
                    <div className="label">
                        <span className="label-text">Your bio</span>
                    </div>
                    <textarea className="textarea textarea-bordered h-24" placeholder="Tell us about yourself">Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptatibus animi saepe magnam voluptates incidunt assumenda laboriosam suscipit tempore corporis?</textarea>
                </label>
                <Button className='btn-primary w-full mt-2'>Save</Button>
            </form>
        </section>
    </section>
  )
}
