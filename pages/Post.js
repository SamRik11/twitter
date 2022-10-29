import { ChartBarIcon, ChatBubbleLeftIcon, HeartIcon, ShareIcon, TrashIcon } from '@heroicons/react/24/outline';
import Image from 'next/image'
import React from 'react';
import { BsThreeDots } from "react-icons/bs";

export default function Post  ({post})  {
  return (
    <div className='flex p-3 cursor-pointer border-b border-gray-200'>
      {/* user image */}
      <img src={post.userImg} alt="user-img" className='rounded-full h-11 w-11 mr-4'/>
      {/* right side */}
      <div className=''>
        {/* header */}
        <div className='flex items-center justify-between'>
          {/* post user info */}
          <div className='flex item-center space-x-1 whitespace-nowrap'>
              <h4 className='font-bold text-[15px] sm:text-[16px] hover:underline'>{post.name}</h4>
              <span className='text-sm sm:text-[15px]'>@{post.username} -</span>
              <span className='text-sm sm:text-[15px] hover:underline'>{post.timestamp}</span>
          </div>
          {/* dot icon */}
          <BsThreeDots className='hover-effect h-10 w-10 hover:bg-sky-100 hover:text-sky-500'/>
        </div>
        {/* post text */}
        <p className='text-gray-800 text-[15px] sm:text-[16px] mb-2'>{post.text}</p>
        {/* post image */}
        <Image src={post.img} alt="user-img" className='rounded-xl mr-2' width="600px" height="300px"/>
        {/* icons */}
        <div className='flex justify-between text-gray-600 p-2'>
            <ChatBubbleLeftIcon className='h-9 hover-effect p-2 hover:text-sky-500 hover:bg-sky-100'/>
            <TrashIcon className='h-9 hover-effect p-2 hover:text-red-500 hover:bg-red-100'/>
            <HeartIcon className='h-9 hover-effect p-2 hover:text-red-500 hover:bg-red-100'/>
            <ShareIcon className='h-9 hover-effect p-2 hover:text-sky-500 hover:bg-sky-100'/>
            <ChartBarIcon className='h-9 hover-effect p-2 hover:text-sky-500 hover:bg-sky-100'/>
        </div>
      </div>
    </div>
  )
}
