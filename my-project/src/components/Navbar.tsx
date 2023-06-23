import React from 'react'
import requests from '@/utils/requests'
import { useRouter } from 'next/router'
export const Navbar = () => {
const router = useRouter()
  return (
    <nav className='relative' >
        <div className='flex px-10 sm:px-20 text-lg whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll  scrollbar-hide' >
         {Object.entries(requests).map(([key,{title,url}])=>(<h2 onClick={()=>router.push(`/?genre=${key}`)} className='cursor-pointer transition transform hover:scale-125 hover:text-white last:pr-24 active:text-red-500' key={key}>{title}</h2>))}
        </div>
        <div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-2/12'/>
    </nav>
  )
}
