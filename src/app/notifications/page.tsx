import BackLink from '@/components/global/BackLink'
import Card from '@/components/global/Card'
import React from 'react'

export default function notificationPage() {
 return (
    <Card className='rounded-box overflow-hidden shadow-md'>
        <section className='space-y-4'>
            <div className=''>
                <BackLink title='Notifications' />
            </div>
            <div role="tablist" className="tabs tabs-bordered">
                <a role="tab" className="tab tab-active">All</a>
                <a role="tab" className="tab">Mentions</a>
            </div>
            <Card className='shadow'>
                <span>You don&apos;t have any notifications of this type yet.</span>
            </Card>
        </section>
    </Card>
  )
}
