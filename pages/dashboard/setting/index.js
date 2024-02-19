import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/Navbar/Navbar'
import { db } from '@/firebaseConfig';
import data from '@/public/data'
import { collection, deleteDoc, doc, getDocs, limit, orderBy, query, setDoc } from 'firebase/firestore';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

export default function index() {
  const [countries,setCountries] = useState([]);
  const [languages,setLanguages] = useState([]);
  const [programs,setPrograms]= useState([]);
  const [country,setCountry] = useState("");
  const [language,setLanguage]= useState("");
  const [program,setProgram]= useState("");
  const addCountry = async (e)=>{
    if (country=="") {
      alert("No Text");
    }else{
      await setDoc(doc(db, "countries", country+Date.now()), {
        country:country
      });
      setCountry("");
    }
  };

  const addLanguage = async (e)=>{
    if (language == "") {
      alert("No Text")
    }else{
      await setDoc(doc(db, "languages", language+Date.now()), {
        language:language
      });
      setLanguage("");
    }
  }

  const addProgram = async (e)=>{
    if (program == "") {
      alert("No Text")
    }else{
      await setDoc(doc(db, "programs", country+Date.now()), {
        program:program
      });
      setProgram("");
    }
  }


  const fetchCountries = async ()=>{
    const q = query(collection(db, "countries"),orderBy("country","asc"));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({ ...doc.data(),id:doc.id }));
    setCountries(data);
    console.log(data);
  }
  const fetchLanguages = async ()=>{
    const q = query(collection(db, "languages"),orderBy("language","asc"));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({  ...doc.data(),id:doc.id }));
    setLanguages(data);
  }
  const fetchPrograms = async ()=>{
    const q = query(collection(db, "programs"),orderBy("program","asc"));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((doc) => ({  ...doc.data(),id:doc.id }));
    setPrograms(data);
  }

  const deleteCountry = async (e,countryId)=>{
    e.preventDefault();
    await deleteDoc(doc(db, "countries", countryId));
  };

  const deleteLanguage = async (e,languageId)=>{
    e.preventDefault();
    await deleteDoc(doc(db, "languages", languageId));
  };

  const deleteProgram = async (e,programId)=>{
    e.preventDefault();
    await deleteDoc(doc(db, "programs", programId));
  };


  useEffect(()=>{
    fetchCountries();
    fetchLanguages();
    fetchPrograms();
  },[addCountry,addLanguage,addProgram,deleteLanguage,deleteCountry,deleteProgram])

  console.log(countries);
  return (
    <div>
        <Navbar page={'/dashboard/setting'} />
            <div className='flex flex-wrap p-9 justify-center '>
                <section className='w-96 border-2 rounded-lg shadow-lg p-6 m-3 h-fit'>
                  <p className='font-bold text-sm '>Country</p>
                  <div className='flex justify-between space-x-3 items-center mt-3'>
                  <input type="text" value={country} onChange={(e)=>setCountry(e.target.value)} placeholder='Input Country' className='p-2 text-xs w-full  placeholder:text-xs border rounded-lg' />
                  <button onClick={addCountry} className='bg-green-500 text-xs text-white font-medium px-3 py-2 rounded-lg'>Add</button>
                  </div>
                  <div className='space-y-3 mt-3'>
                    {
                      countries?.map((item,i)=>(
                        <div key={i} className='border-b-2 flex justify-between items-center p-1'>
                          <p className='text-sm font-medium'>{item.country}</p>
                          <Link href={"/"} onClick={(e)=>deleteCountry(e,item.id)}>
                          <svg className='hover:scale-105' xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 72 72"><path fill="#FFF" d="M51.76 17H20.153v37.65c0 4.06 3.29 5.62 7.35 5.62H44.41c4.06 0 7.35-1.56 7.35-5.62zM31 16v-4h10v4"/><path fill="#9b9b9a" d="M51 37v20.621L48.3 60H33z"/><path fill="#FFF" d="M17 16h38v4H17z"/><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M31 16v-4h10v4m10 9v31a4 4 0 0 1-4 4H25a4 4 0 0 1-4-4V25m-4-9h38v4H17zm24 12.25V55M31 28.25V55"/></svg>
                          </Link>
                        </div>
                      ))
                    }
                  </div>
                </section>
                <div>
                  <section className='w-96 border-2 rounded-lg shadow-lg p-6 m-3 h-fit'>
                    <p className='font-bold text-sm '>Language</p>
                    <div className='flex justify-between space-x-3 items-center mt-3'>
                    <input type="text" value={language} onChange={(e)=>setLanguage(e.target.value)} placeholder='Input Language' className='p-2 text-xs w-full  placeholder:text-xs border rounded-lg' />
                    <button onClick={addLanguage} className='bg-green-500 text-xs text-white font-medium px-3 py-2 rounded-lg'>Add</button>
                    </div>
                    <div className='space-y-3 mt-3'>
                      {
                        languages?.map((item,i)=>(
                          <div key={i} className='border-b-2 flex justify-between items-center p-1'>
                            <p className='text-sm font-medium'>{item.language}</p>
                            <Link href={"/"} onClick={(e)=>deleteLanguage(e,item.id)}>
                            <svg className='hover:scale-105' xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 72 72"><path fill="#FFF" d="M51.76 17H20.153v37.65c0 4.06 3.29 5.62 7.35 5.62H44.41c4.06 0 7.35-1.56 7.35-5.62zM31 16v-4h10v4"/><path fill="#9b9b9a" d="M51 37v20.621L48.3 60H33z"/><path fill="#FFF" d="M17 16h38v4H17z"/><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M31 16v-4h10v4m10 9v31a4 4 0 0 1-4 4H25a4 4 0 0 1-4-4V25m-4-9h38v4H17zm24 12.25V55M31 28.25V55"/></svg>
                            </Link>
                          </div>
                        ))
                      }
                    </div>
                  </section>
                  <section className='w-96 border-2 rounded-lg shadow-lg p-6 m-3 h-fit'>
                    <p className='font-bold text-sm '>Program</p>
                    <div className='flex justify-between space-x-3 items-center mt-3'>
                    <input type="text" value={program} onChange={(e)=>setProgram(e.target.value)} placeholder='Input Program' className='p-2 text-xs w-full  placeholder:text-xs border rounded-lg' />
                    <button onClick={addProgram} className='bg-green-500 text-xs text-white font-medium px-3 py-2 rounded-lg'>Add</button>
                    </div>
                    <div className='space-y-3 mt-3'>
                      {
                        programs?.map((item,i)=>(
                          <div key={i} className='border-b-2 flex justify-between items-center p-1'>
                            <p className='text-sm font-medium'>{item.program}</p>
                            <Link href={"/"} onClick={(e)=>deleteProgram(e,item.id)}>
                            <svg className='hover:scale-105' xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 72 72"><path fill="#FFF" d="M51.76 17H20.153v37.65c0 4.06 3.29 5.62 7.35 5.62H44.41c4.06 0 7.35-1.56 7.35-5.62zM31 16v-4h10v4"/><path fill="#9b9b9a" d="M51 37v20.621L48.3 60H33z"/><path fill="#FFF" d="M17 16h38v4H17z"/><path fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M31 16v-4h10v4m10 9v31a4 4 0 0 1-4 4H25a4 4 0 0 1-4-4V25m-4-9h38v4H17zm24 12.25V55M31 28.25V55"/></svg>
                            </Link>
                          </div>
                        ))
                      }
                    </div>
                  </section>
                </div>
            </div>
        <Footer />
    </div>
  )
}
