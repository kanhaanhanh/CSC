import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Logo() {
  return (
    <>
       <Link className='flex items-center' href={`/`}>
          <div className='w-14'>
          <Image priority unoptimized={true} width={60} height={60} src={"/logo.jpg"} className='w-auto h-auto object-cover'  alt="Logo" />
          </div>
          <div className="hidden xl:flex flex-col -space-y-2  text-black ">
            <div className=" font-bold text-xl">Cambodia</div>
            <div className="-space-y-2 font-bold text-sm">
                <div className="italic">scholarship</div>
                <div className="italic">center</div>
            </div>
          </div>
       </Link> 
    </>
  )
}
