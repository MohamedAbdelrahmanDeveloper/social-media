"use client"
import Button from '@/components/global/Button'
import Card from '@/components/global/Card'
import React from 'react'


export default function page() {
    function submitHandler(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log('reset');
    }
  return (
    <Card className='shadow-md'>
        <div className='my-4 md:my-10 px-4 text-center'>
            <h2 className='text-xl font-bold'>Reset Password</h2>
        </div>
        <form onSubmit={submitHandler} className='md:w-3/4 m-auto space-y-2 [&>label>div>span]:text-xs md:[&>label>div>span]:text-sm'>
            <label className="form-control w-full">
                <div className="label">
                    <span className="label-text font-bold">Email or username</span>
                </div>
                <input type="email" placeholder="me@example.com" className="input input-sm md:input-md input-bordered w-full" />
            </label>
            <div className='flex justify-end'>
                <Button className='btn-primary rounded-full'>Reset Password</Button>
            </div>
        </form>
    </Card>
  )
}
