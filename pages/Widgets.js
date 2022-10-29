import React, { useState } from 'react'
import { BiSearch } from "react-icons/bi";
import { News } from './News';

export const Widgets = ({res}) => {
    const [articleNum,setArticleNum] = useState(2)
  return (
    <div className='xl:w-[600px] hidden lg:inline ml-8 space-y-5'>
        <div className='w-[90%] xl:w-[75%] sticky top-0 py-1.5 z-10'>
            <div className='flex items-center p-3 rounded-full bg-red-300 relative'>
                <BiSearch className='h-5 z-10 text-gray-500'/>
                <input className='absolute inset-0 rounded-full pl-10 border-gray-500 text-gray-700 focus:shadow-md' type="text" placeholder='twitter'/>
            </div>
        </div>
        <div className='text-gray-700 space-y-3 bg-gray-100 rounded-xl p-2 w-[90%] xl:w-[75%]'>
            <h4 className='font-bold text-lg px-4'>whats Happening</h4>
            {res.slice(0,articleNum).map((article)=>(
            <News key={article.title} article={article}/>
        ))}
        <button onClick={()=>setArticleNum(articleNum+2)} className='text-blue-300 pl-4 pb-3 hover:text-blue-500'>Show More</button>
        </div>
        
    </div>
  )
}
