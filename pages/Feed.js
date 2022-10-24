import { SparklesIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { Input } from './Input'

export const Feed = () => {
  return (
    <div className='xl:ml-[370px] border-l border-r xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl'>
        <div className='flex py-2 px-3 sticky top-0 z-10 bg-white border-b border-gray-200'>
            <h2 className='text-lg font-bold cursor-pointer sm:text-xl'>Home</h2>
            <div className='flex justify-center ml-auto hover-effect px-0 w-9 h-9'>
                <SparklesIcon className='h-5'/>
            </div>
        </div>
        <Input/>
    </div>
  )
}
