import React from 'react'
import Logo from './Logo'
import Menu from './Menu'

export default function Navbar({page}) {
  return (
    <>
        <div className='flex justify-between px-3 py-1 border-b shadow-lg'>
            <Logo />
            <Menu page={page} />
        </div>
    </>
  )
}
