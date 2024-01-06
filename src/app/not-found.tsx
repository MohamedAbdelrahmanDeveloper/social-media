import Card from '@/components/global/Card'
import React from 'react'

export default function notFound() {
  return (
    <Card className='shadow-md text-center'>
      <h3 className='text-xl font-bold'>Not found</h3>
      <p className='text-sm text-base-content/50'>This resource could not be found</p>
    </Card>
  )
}
