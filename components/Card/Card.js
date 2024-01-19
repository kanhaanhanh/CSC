    import Link from 'next/link'
    import React from 'react'

    export default function Card({post}) {
        //const newdate = new Date(post.createdAt);
    return (
        <>
            <div className='hidden lg:block'>
                <div className='border rounded-lg shadow-lg p-3 flex space-x-3 w-fit my-6'>
                <div className='left flex flex-col w-60'>
                        <img className='w-32 h-12 object-cover' src={post.image} alt="image" />
                        <p className='text-sm line-clamp-1 capitalize'>{post.university}</p>
                        <p className='text-xs text-gray-600 capitalize' >{post.country},{post.city}</p>
                        <p className='text-xs text-gray-600 capitalize'>{post.department}</p>
                        <p className='text-xs text-gray-600 capitalize'>{post.city}</p>
                </div>
                <div className='middle flex flex-col justify-between w-96'>
                        <div>
                            <div className='flex space-x-3 w-full'>
                                <button className='px-2 py-1 bg-gray-300 text-gray-500 text-xs rounded-lg '>{post.award}</button>
                                <p className='text-sm line-clamp-1'>{post.shortDesc}</p>
                            </div>
                            <p className='text-xs text-gray-600 capitalize'>Study language : {post.language}</p>
                            <p className='text-xs text-gray-600 capitalize'>Program : {post.program.map((item,i)=>(item+" "))}</p>
                            
                        </div>
                        <div>
                            <button  className='px-2 py-1 bg-gray-300 text-gray-500 text-xs rounded-t-lg min-w-full'><Link href={`/post/${post.id}`}>! More Information</Link></button>
                        </div>
                </div>
                <div>
                        <button className='bg-green-600 text-white font-medium text-xs rounded-lg py-1 px-2 w-60 text-center'><Link href={post.applyLink}>Apply now !</Link></button>
                        <div className='flex space-x-3 mt-1'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9zm6.82 6L12 12.72L5.18 9L12 5.28zM17 16l-5 2.72L7 16v-3.73L12 15l5-2.73z"/></svg>
                            <div>
                                <p className='text-xs font-medium'>Application Deadline</p>
                                <p className='text-xs text-gray-600 font-medium'>{post.deadline.substring(0,10)}</p>
                            </div>
                        </div>
                </div>
                </div>
            </div>
            <div className='lg:hidden'>
                <div className='border rounded-lg shadow-lg flex flex-col w-96 my-6 p-3'>
                    <div className='flex space-x-3'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9zm6.82 6L12 12.72L5.18 9L12 5.28zM17 16l-5 2.72L7 16v-3.73L12 15l5-2.73z"/></svg>
                        <div className='flex flex-col'>
                            <p className='text-sm font-medium'>{post.university}</p>  
                            <p className='text-xs text-gray-600 capitalize'>{post.country},{post.department}</p>
                        </div>
                    </div>
                    <div className=" w-full h-0 border-2 my-3">
                    </div>
                    <div>
                        <div className='flex space-x-3 w-full'>
                            <button className='px-2 py-1 bg-gray-300 text-gray-500 text-xs rounded-lg '>{post.award}</button>
                            <p className='text-sm line-clamp-1'>{post.shortDesc}</p>
                        </div>
                        <p className='text-xs text-gray-600 capitalize'>Study language : {post.language}</p>
                        <p className='text-xs text-gray-600 capitalize'>Program : {post.program.map((item,i)=>(item+" "))}</p>
                    </div>
                    <div className='flex space-x-3 mt-1 items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9zm6.82 6L12 12.72L5.18 9L12 5.28zM17 16l-5 2.72L7 16v-3.73L12 15l5-2.73z"/></svg>
                            <div>
                                <p className='text-xs font-medium'>Application Deadline : { post.deadline.substring(0,10)}</p>
                            </div>
                        </div>
                    <div className='my-3'>
                        <button className='bg-green-600 text-white font-medium text-xs rounded-lg py-1 px-2 text-center w-full'><Link href={post.applyLink}>Apply now !</Link></button>
                    </div>
                    <div>
                        <button  className='px-2 py-1 bg-gray-300 text-gray-500 text-xs rounded-t-lg w-full'><Link href={`/post/${post.id}`}>! More Information</Link></button>
                    </div>
                
                </div>
            </div>
        </>



    )
    }
