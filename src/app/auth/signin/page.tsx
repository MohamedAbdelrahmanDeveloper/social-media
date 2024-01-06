'use client'
import Button from '@/components/global/Button'
import Card from '@/components/global/Card'
import Link from 'next/link'
import React from 'react'

export default function page() {
    function submitHandler(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log('login');
    }
  return (
    <Card className='shadow-md'>
        <div className='md:my-5 text-center'>
            <h2 className='text-2xl font-bold'>Sign In</h2>
        </div>
        <form onSubmit={submitHandler} className='md:w-3/4 m-auto space-y-2 [&>label>div>span]:text-xs md:[&>label>div>span]:text-sm'>
            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text font-bold">Email or username</span>
                </div>
                <input type="email" placeholder="Email or username" className="input input-bordered input-sm md:input-md w-full" />
            </label>
            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text font-bold">Password</span>
                    <Link href="/auth/reset-password" className="label-text link link-primary">Trouble logging in?</Link>
                </div>
                <input type="password" placeholder="Password" className="input input-bordered input-sm md:input-md w-full" />
            </label>
            <div className='flex justify-end'>
                <div className='flex flex-col items-end space-y-2'>
                    <Button className='btn-primary rounded-full w-24'>Sign in</Button>
                    <Link href="/auth/signup" className=" link link-primary">Sign up?</Link>
                </div>
            </div>
        </form>
    </Card>
  )
}
