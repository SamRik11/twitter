import { SparklesIcon } from '@heroicons/react/24/outline'
import React from 'react'
import  Input  from './Input'
import  Post  from './Post'

export default function Feed  ()  {
    let posts=[
        {
            id:"1",
            name:"Sam",
            username:"Sam@1",
            userImg:"https://media-exp1.licdn.com/dms/image/C4D03AQE2MeDKG-GnEA/profile-displayphoto-shrink_200_200/0/1658045991027?e=1670457600&v=beta&t=-T5_jLvnIl_hYepjgEa4Xtb3K2P401C4u0Bw3nx8Zps",
            img:"https://images.unsplash.com/photo-1576716323192-ad8e7be619ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
            text:"wow great picture",
            timestamp:"2 hours ago"
        },
        {
            id:"2",
            name:"Sami",
            username:"Sam@2",
            userImg:"https://media-exp1.licdn.com/dms/image/C4D03AQE2MeDKG-GnEA/profile-displayphoto-shrink_200_200/0/1658045991027?e=1670457600&v=beta&t=-T5_jLvnIl_hYepjgEa4Xtb3K2P401C4u0Bw3nx8Zps",
            img:"https://images.unsplash.com/photo-1561987422-3901c86d8fe3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
            text:"wow great picture",
            timestamp:"2 days ago"
        },
    ]
  return (
    <div className='xl:ml-[370px] border-l border-r xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl'>
        <div className='flex py-2 px-3 sticky top-0 z-10 bg-white border-b border-gray-200'>
            <h2 className='text-lg font-bold cursor-pointer sm:text-xl'>Home</h2>
            <div className='flex justify-center ml-auto hover-effect px-0 w-9 h-9'>
                <SparklesIcon className='h-5'/>
            </div>
        </div>
        <Input/>
        {posts.map((post)=>(
            <Post key={post.id} post={post} />
        ))}
    </div>
  )
}
