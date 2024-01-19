import React, { useState } from 'react'
import Submit from '../Button/Submit'
import data from '@/public/data'

export default function Search({handleChange,handleSubmit,handleFilter,filter}) {
   const [continents, setcontinents] = useState(data.continents);
   const [programs, setprograms] = useState(data.programs);
   const [countries, setcountries] = useState(data.countries);
   const [languages, setlanguages] = useState(data.language)
  return (
    <div>
        {
            !filter ? 
            <form onSubmit={handleSubmit} className=' flex flex-col items-center p-3 '>
                <div className='w-96 lg:w-1/2 flex items-center space-x-3'>
                    <h1>Find Program</h1>
                    <svg xmlns="http://www.w3.org/2000/svg" className='hover:scale-105 cursor-pointer' onClick={handleFilter} width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 18v-2h4v2zm-4-5v-2h12v2zM3 8V6h18v2z"/></svg>
                </div>
                <div className='w-96 lg:w-1/2 grid lg:grid-cols-5 gap-3 md:grid-cols-3 grid-cols-2'>
                    <div className=' mt-3 space-y-2'>
                        <h2>Program :</h2>
                        {
                            programs.map((program,i)=>(
                                <div className=' flex space-x-2 items-center' key={i}>
                                    <input onChange={handleChange} value={program.toLowerCase()} type="radio" className='text-black' id='program' name='program'/><span className='text-xs'>{program}</span>
                                </div>
                            ))
                        }
                    </div>
                    <div className=' mt-3 space-y-2'>
                        <h2>Contitent :</h2>
                        {
                            continents.map((continent,i)=>(
                                <div className=' flex space-x-2 items-center' key={i}>
                                    <input onChange={handleChange} value={continent.name} type="radio" className='text-black' id='continent' name='continent'/><span className='text-xs'>{continent.name}</span>
                                </div>
                            ))
                        }
                    </div>
                    <div className=' mt-3 space-y-2'>
                        <h2>Country :</h2>
                        <select name="country" className='text-xs focus:outline-none w-28' onChange={handleChange} id="">
                            <option value="" >Select Country</option>
                            {
                                countries.map((country,i)=>(
                                    <option value={country}  key={i}>{country}</option>
                                ))
                            }
                        </select>
                    </div>
                    <div className=' mt-3 space-y-2'>
                        <h2>Language :</h2>
                        {
                            languages.map((language,i)=>(
                                <div className=' flex space-x-2 items-center' key={i}> 
                                    <input onChange={handleChange} value={language.toLowerCase()} type="radio" className='text-black' id='language' name='language'/><span className='text-xs'>{language}</span>
                                </div>
                            ))
                        }
                    </div>
                    <div className=' mt-3 space-y-2 '>
                        <h2>Deadline Before:</h2>
                        <div className=' flex space-x-2 items-center'>
                            <input onChange={handleChange}  type="date" className='text-black focus:outline-none text-xs font-normal'  id='deadline' name='deadline'/>

                        </div>
                    </div>
                </div>
                <div className='w-96 lg:w-1/2 flex justify-between items-center space-x-3'>
                    <div className=' border-2 w-full h-0'> </div>
                    <Submit />
                    <div className=' border-2 w-full h-0 '> </div>
                </div>
            </form> : 
            <div className='flex justify-center items-center w-full mt-3 '>
                <div className='w-96 flex space-x-3 justify-center items-center'>
                    <div className=' flex items-center space-x-3'>
                        <h1>Find Program</h1>
                        <svg xmlns="http://www.w3.org/2000/svg" className='hover:scale-105 cursor-pointer' onClick={handleFilter} width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M10 18v-2h4v2zm-4-5v-2h12v2zM3 8V6h18v2z"/></svg>
                    </div>
                    <form action=""  onSubmit={handleSubmit}>
                        <div className='flex space-x-3'>
                                <select name="filterCountry" className='text-xs focus:outline-none w-28' onChange={handleChange} id="">
                                    <option value="" >Select Country</option>
                                    {
                                        countries.map((country,i)=>(
                                            <option value={country}  key={i}>{country}</option>
                                        ))
                                    }
                                </select>
                                <Submit />
                        </div>
                    </form>
                </div>
            </div>
        }
    </div>

  )
}
