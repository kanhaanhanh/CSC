import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navbar/Navbar'
import Pagination from '@/components/Pagination/Pagination';
import Table from '@/components/Table/Table'
import { auth, db } from '@/firebaseConfig';
import Auth from '@/pages/login/Auth';
import { collection, getDocs, limit, orderBy, query } from 'firebase/firestore';
import React, { useState } from 'react'
function Index() {
  const th = [ 'No.','Universiy','Location','City','Type','Deadline','Action' ];
  const tbName = 'Post';
  const [posts, setposts] = useState([]);
  Auth();
  return (
    <>
        <Navbar page="/dashboard/posts"/>
        <Table th={th} name={tbName} posts={posts}  />
        <Pagination setpoststate={setposts} />
        <Footer />
    </>
  )
}

export default Index