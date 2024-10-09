import { db } from '@/firebaseConfig';
import { collection, getCountFromServer, getDocs, limit, orderBy, query, startAfter, endBefore, limitToLast } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';

function Pagination({ setpoststate }) {
  const [posts, setposts] = useState([]);
  const [currentData, setcurrentdata] = useState(null);
  const [pageSize] = useState(10); // Fixed page size
  const [pageNum, setpagenum] = useState(1);
  const [total, settotal] = useState(0);

  const lastPage = Math.ceil(total / pageSize);

  const handleClick = async (event, btn) => {
    event.preventDefault();

    if (btn === "next") {
      const lastVisible = currentData.docs[currentData.docs.length - 1];
      const q = query(collection(db, "posts"), orderBy("createdAt", "desc"), limit(pageSize), startAfter(lastVisible));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => ({ ...doc.data() }));
      setcurrentdata(querySnapshot);
      setposts(data);
      setpagenum(prev => Math.min(prev + 1, lastPage));
      setpoststate(data);
    } else if (btn === "prev") {
      const lastVisible = currentData.docs[currentData.docs.length - (posts.length || pageSize)];
      const q = query(collection(db, "posts"), orderBy("createdAt", "desc"), limitToLast(pageSize), endBefore(lastVisible));
      const querySnapshot = await getDocs(q);
      const data = querySnapshot.docs.map((doc) => ({ ...doc.data() }));
      setcurrentdata(querySnapshot);
      setposts(data);
      setpagenum(prev => Math.max(prev - 1, 1));
      setpoststate(data);
    }
  };

  const fetch = async () => {
    const q = query(collection(db, "posts"), orderBy("createdAt", "desc"), limit(pageSize));
    const querySnapshot = await getDocs(q);
    const postsData = querySnapshot.docs.map((doc) => ({ ...doc.data() }));
    setposts(postsData);
    setcurrentdata(querySnapshot);

    const coll = collection(db, "posts");
    const snapshot = await getCountFromServer(coll);
    settotal(snapshot.data().count);
    setpoststate(postsData);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <div className='mt-3'>
      <div className='flex items-center'>
        <p className='text-xs mx-3'>Total items: {total}</p>
        <button disabled={pageNum === 1} className='border m-1 text-xs py-1 px-3 rounded-l-full text-center shadow-lg hover:scale-105 transition-all' onClick={(event) => handleClick(event, "prev")}>Back</button>
        <div className='border m-1 text-xs py-1 px-3 text-center shadow-lg hover:scale-105 transition-all w-fit'>
          {pageNum}
        </div>
        <button disabled={posts.length < pageSize || pageNum === lastPage} className='border m-1 text-xs py-1 px-3 rounded-r-full text-center shadow-lg hover:scale-105 transition-all' onClick={(event) => handleClick(event, "next")}>Next</button>
      </div>
    </div>
  );
}

export default Pagination;
