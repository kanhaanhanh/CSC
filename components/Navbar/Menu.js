import Link from 'next/link'
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'

export default function Menu({page}) {
  const router = useRouter()
  const [user,setUser]= useState({});
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem('user');
    router.push('/login')
  }
  useEffect(()=>{
    const userAuth = JSON.parse(localStorage.getItem('user'));
    setUser(userAuth);
  },[])

  return (
    <>
        <div className='flex justify-center items-center text-sm'>
            <Link href={`/`} className={ page === '/' ? 'font-medium  mx-3 my-1 bg-green-600 rounded-full text-white text-xs px-2 py-1 transition' : 'font-medium mx-3 my-1 hover:bg-green-600 rounded-full hover:text-white text-xs px-2 py-1 transition' }>Home</Link>
            {
              user ?
              <>
              <Link href={`/dashboard/posts`} className={ page === '/dashboard/posts' ? 'font-medium mx-3 my-1 bg-green-600 rounded-full text-white text-xs px-2 py-1 transition' : 'font-medium mx-3 my-1 hover:bg-green-600 rounded-full hover:text-white text-xs px-2 py-1 transition' }>Post</Link>
              <button onClick={logout} className='font-medium mx-3 my-1 hover:bg-green-600 rounded-full hover:text-white text-xs px-2 py-1 transition'>Log out</button>
              <p className='hidden md:block font-medium cursor-pointer'>{user.name}</p>
              </> 
              :
              <Link href={`/login`} className='font-medium mx-3 my-1 hover:bg-green-600 rounded-full hover:text-white text-xs px-2 py-1 transition'>Log In</Link>
            }
        </div>
    </>
  )
}
