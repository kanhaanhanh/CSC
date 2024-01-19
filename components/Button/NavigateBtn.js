import Link from 'next/link'
import React from 'react'

export default function NavigateBtn({name,link,target}) {
  return (
    <Link href={link} target={target} className='font-medium text-xs text-white bg-orange-600 rounded-full py-1 px-3 '>{name} </Link>
  )
}
