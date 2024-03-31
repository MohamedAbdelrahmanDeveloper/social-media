import BackLink from '@/components/global/BackLink'
import Card from '@/components/global/Card'
import SuggestAccount from '@/components/layouts/SuggestAccount'
import InputSearch from '@/components/search/InputSearch'
import React from 'react'

export default function searchPage() {
 return (
    <Card className='rounded-box overflow-hidden shadow-md'>
        <section className='space-y-4'>
            <div className=''>
                <BackLink title='Search ' />
            </div>
            <InputSearch isNav={false} />
            <div role="tablist" className="tabs tabs-bordered">
                <a role="tab" className="tab tab-active">People</a>
                <a role="tab" className="tab">Posts</a>
                <a role="tab" className="tab">Hashtags</a>
            </div>
            <SuggestAccount isSearch fullName='Mohamed Abdelrahman' username='MohamedAbdelrahmanDeveloper' isOnline={true} image='https://avatars.githubusercontent.com/u/54208900?v=40'/>
            <SuggestAccount isSearch fullName='Mohamed Ali' username='m_ali4' isOnline={true} image='https://avatars.githubusercontent.com/u/54208900?v=40'/>
            <SuggestAccount isSearch fullName='Kareem Ahmed' username='kareem_1' isOnline={true} image='https://avatars.githubusercontent.com/u/54208900?v=40'/>
            <SuggestAccount isSearch fullName='Saeed Rady' username='saeed' isOnline={true} image='https://avatars.githubusercontent.com/u/54208900?v=40'/>
            <SuggestAccount isSearch fullName='Salem Salama' username='m8_d' isOnline={true} image='https://avatars.githubusercontent.com/u/54208900?v=40'/>
            <SuggestAccount isSearch fullName='Taha Oraby' username='taha_59' isOnline={true} image='https://avatars.githubusercontent.com/u/54208900?v=40'/>     
        </section>
    </Card>
  )
}
