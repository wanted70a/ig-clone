import React from 'react'
import Image from 'next/image'
import { SearchIcon } from '@heroicons/react/outline'


export default function Header() {
  return (
        <div className="flex items-center justify-between max-w-6xl">
      {/* LEFT */}
          <div className="h-24 w-24 relative hidden lg:inline-grid cursor-pointer">
            <Image 
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/2560px-Instagram_logo.svg.png'
              layout='fill'
              className='object-contain'
              alt='iglogo'
              />
          </div>
          <div className="h-24 w-10 relative lg:hidden cursor-pointer">
            <Image 
              src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/480px-Instagram-Icon.png'
              layout='fill'
              className='object-contain'
              alt='iglogo'
            />
          </div>
          {/* MIDDLE */}
          <div className="relative mt-2">
            <div className="absolute top-2 left-2">
              <SearchIcon class='h-5 text-gray-500'/>
            </div>
            <input type="text" placeholder='search' className='bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md'/>
          </div>
          {/* RIGHT */}
          <h1>RIGTH</h1>
        </div>
  )
}
