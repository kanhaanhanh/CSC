import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar';
import { db } from '@/firebaseConfig';
import { doc, getDoc } from 'firebase/firestore';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

export async function getServerSideProps(context) {
    const { id } = context.params;
    const docRef = doc(db, "posts", id);
    const docSnap = await getDoc(docRef);
    const post = docSnap.data();
    return { props: { post } };
  }

export default function index({post}) {
  return (
    <div>
      <Navbar />
      <div className='flex flex-col justify-center items-center'>
        <div className=' p-6 lg:w-1/2 '>
            <div className=' flex my-3 border-b p-3 space-x-3'>
                <Image className='w-32 h-12 object-cover' src={post.image} alt="image" />
                <div>
                  <div className='flex space-x-3 w-full'>
                    <button className='px-2 py-1 bg-gray-300 text-gray-500 text-sm rounded-lg '>{post.award}</button>
                    <p className='text-lg line-clamp-1 font-medium'>{post.shortDesc}</p>
                  </div>
                  <div className='flex space-x-3 mt-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9zm6.82 6L12 12.72L5.18 9L12 5.28zM17 16l-5 2.72L7 16v-3.73L12 15l5-2.73z"/></svg>
                    <div>
                      <p className='text-sm font-medium line-clamp-1 capitalize'>{post.university}</p>
                      <p className='text-xs text-gray-600 capitalize'>{post.country},{post.city}</p>
                      <p className='text-xs  font-medium capitalize'>{post.department}</p>
                    </div> 
                  </div>
                </div>
            </div>
            <div className='space-y-3'>
              <div className='flex space-x-6'>
                <p className='text-sm text-gray-400 w-36'>Study Location </p>
                <p className='text-sm capitalize'>{post.country},{post.city}</p>
              </div>
              <div className='flex space-x-6'>
                <p className='text-sm text-gray-400 w-36'>Type </p>
                <p className='text-sm capitalize'>{post.program.map((item,i)=>(item+" "))}</p>
              </div>
              <div className='flex space-x-6'>
                <p className='text-sm text-gray-400 w-36'>Study Language </p>
                <p className='text-sm capitalize'>{post.language}</p>
              </div>
              <div className='flex space-x-6'>
                <p className='text-sm text-gray-400 w-36'>Award </p>
                <p className='text-sm'>{post.award}</p>
              </div>
            </div>
            <div className='my-3' dangerouslySetInnerHTML={{ __html: post.desc }} >
            </div>
            <div className='flex  items-center space-x-3'>
              <div className='flex space-x-3 mt-1 items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9zm6.82 6L12 12.72L5.18 9L12 5.28zM17 16l-5 2.72L7 16v-3.73L12 15l5-2.73z"/></svg>
                <div>
                    <p className='text-xs font-medium'>Application Deadline : {post.date}</p>
                </div>
              </div>
              <div className='my-3'>
                <button className='bg-green-600 text-white font-medium text-xs rounded-lg py-1 px-2 text-center w-60'><Link href={post.applyLink}>Apply now !</Link></button>
              </div>
            </div>
          </div>
      </div>
      <Footer />
    </div>
  )
}
