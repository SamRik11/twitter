import { FaceSmileIcon, PhotoIcon } from '@heroicons/react/24/outline'
import React from 'react'

export default function Input  ()  {
  return (
    <div className='flex border-b p-3 border-gray-200 space-x-3'>
        <img className='w-11 h-11 rounded-full cursor-pointer' src='https://media-exp1.licdn.com/dms/image/C4D03AQE2MeDKG-GnEA/profile-displayphoto-shrink_200_200/0/1658045991027?e=1670457600&v=beta&t=-T5_jLvnIl_hYepjgEa4Xtb3K2P401C4u0Bw3nx8Zps' alt='input'/>
        <div className='w-full divide-y divide-gray-200'>
            <div className=''>
                <textarea className='w-full border-none focus:ring-0 text-lg placeholder-gray-700 tracking-wide min-h-[50px] text-gray-700' rows="2" placeholder='write something...'></textarea>
            </div>
            <div className='flex items-center justify-between'>
                <div className='flex'>
                    <PhotoIcon className='h-10 w-10 hover-effect p-2 text-sky-400 hover:bg-sky-100 pt-2.5'/>
                    <FaceSmileIcon className='h-10 w-10 hover-effect p-2 text-sky-400 hover:bg-sky-100'/>
                </div>
                <button className='bg-blue-400 text-white px-4 py-1.5 rounded-full font-bold shadow-md hover:brightness-95 disabled:opacity-50' disabled>Tweet</button>
            </div>
        </div>
    </div>
  )
}
