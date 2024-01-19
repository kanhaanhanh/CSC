import Link from 'next/link'
import React from 'react'

export default function Logo() {
  return (
    <>
       <Link className='flex items-center' href={`/`}>
          <img src="/logo.jpg" className="mr-3 h-12 md:h-16 " alt="Logo" />
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
