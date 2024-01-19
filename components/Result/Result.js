import React from 'react'
import Card from '../Card/Card'

export default function Result({result,posts}) {
  return (
    <div>
        <div className='flex justify-center items-center flex-col mt-3'>
            <p className='font-medium text-3xl'>{result}</p>
            <p className='text-sm text-green-600 font-medium'>SEARCH RESULT</p>
            <div className='border-2 h-0 w-36 mt-9'></div>
        </div>
        <div className='flex flex-col justify-center items-center min-h-36'>
          {
            posts?.map((post,i)=>{
              return  <Card key={i} post={post} />
            })
          }
        </div>
    </div>
  )
}
