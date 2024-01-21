import { db } from '@/firebaseConfig';
import { collection, count, endBefore, getCountFromServer, getDocs, limit, limitToLast, orderBy, query, startAfter } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'

function Pagination({setpoststate}) {
  const [posts,setposts]= useState([]);
  const [currentData,setcurrentdata]=useState(null);
  const [pageSize,setpagesize]= useState(15);
  const [pageNum,setpagenum] = useState(1);
  const [total, settotal] = useState();
  const lastPage = Math.ceil(total/pageSize);
  //handle click
  const handleClick = async (event,btn) =>{
    event.preventDefault();
    console.log(btn);
    if (btn == "next") {
      const lastVisible = currentData.docs[currentData.docs.length-1];
      const q = query(collection(db, "posts"),orderBy("createdAt","desc"),limit(pageSize),startAfter(lastVisible),);
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => ({  ...doc.data() }));
      setcurrentdata(querySnapshot);
      setposts(data);
      setpagenum(pageNum+1)
      setpoststate(data);
    }
    if (btn =="prev") {
      if (posts.length <pageSize) {
        const lastVisible = currentData.docs[currentData.docs.length-posts.length];
        const q = query(collection(db, "posts"),orderBy("createdAt","desc"),limitToLast(pageSize),endBefore(lastVisible));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({  ...doc.data() }));
        setcurrentdata(querySnapshot);
        setposts(data);
        setpagenum(pageNum-1)
        setpoststate(data);

      }else{
        const lastVisible = currentData.docs[currentData.docs.length-pageSize];
        const q = query(collection(db, "posts"),orderBy("createdAt","desc"),limitToLast(pageSize),endBefore(lastVisible));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({  ...doc.data() }));
        setcurrentdata(querySnapshot);
        setposts(data);
        setpagenum(pageNum-1)
        setpoststate(data);
    
      } ;
    }
  }

  //fetchData
  const fetch = async ()=>{
    const q = query(collection(db, "posts"),orderBy("createdAt","desc"), limit(pageSize));
    const querySnapshot = await getDocs(q);
    const posts = querySnapshot.docs.map((doc) => ({  ...doc.data() }));
    setposts(posts);
    setcurrentdata(querySnapshot);
    //
    const coll = collection(db, "posts");
    const snapshot = await getCountFromServer(coll);
    settotal(snapshot.data().count);
    setpoststate(posts);
    console.log("done");
   
  }


  if (posts.length==0) {
    fetch();
  }

  if ( pageNum > lastPage) {
    setpagenum(1)
  }

  if (pageNum <= 0) {
    setpagenum(1)
  }
  return (
    <div className='mt-3'>
      <div className='flex items-center'>
      <p className='text-xs mx-3'>Total items : {total}</p>
      <button disabled={pageNum==1}  className='border m-1 text-xs py-1 px-3 rounded-l-full text-center shadow-lg hover:scale-105 transition-all' onClick={()=>handleClick(event,"prev")}>Back</button>
      <div className='border m-1 text-xs py-1 px-3 text-center shadow-lg hover:scale-105 transition-all w-fit'>
        {pageNum}
      </div>
      <button disabled={posts.length<pageSize || pageNum == lastPage} className='border m-1 text-xs py-1 px-3 rounded-r-full text-center shadow-lg hover:scale-105 transition-all' onClick={()=>handleClick(event,"next")}>Next </button>
      </div>
    </div>
  );
};

export default Pagination