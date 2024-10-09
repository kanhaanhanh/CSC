import React, { useState } from 'react'
import Submit from '../Button/Submit';
import NavigateBtn from '../Button/NavigateBtn';
import data from '@/public/data';
export default function Form({ handleChange, handleSubmit, handleCheckboxChange, programArr }) {
    const inputs = [
        "image", 'university', 'department', 'city', 'award', 'shortDesc', 'applyLink'
    ]
    const [continents, setcontinents] = useState(data.continents);
    const [programs, setprograms] = useState(data.programs);
    const [languages, setlanguages] = useState(data.language);
    const [countries, setcountries] = useState(data.countries);


    return (
        <div>
            <div className='flex flex-col justify-center items-center  '>
                <div className=' w-full px-3 lg:w-1/2'>
                    <form action="post" onSubmit={handleSubmit}>
                        <h1 className='mt-3'>Form</h1>
                        {
                            inputs.map((input, i) =>
                            (
                                <div key={i} className="relative z-0 w-full mb-5 group mt-3">
                                    <input autoComplete='off' onChange={handleChange} type="text" name={input} id={input} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b border-gray-300 appearance-non focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" " />
                                    <label htmlFor={input} className="peer-focus:font-medium capitalize absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >{input}</label>
                                </div>
                            ))
                        }
                        <div className="relative z-0 w-full mb-5 group ">
                            <select name="country" id="country" onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-b border-gray-300 appearance-non focus:outline-none focus:ring-0 focus:border-green-600 peer capitalize ">
                                <option value="">country</option>
                                {
                                    countries.map((country, i) => (
                                        <option key={i} value={country}>{country}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="relative z-0 w-full mb-5 group ">
                            <select name="language" id="language" onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-b border-gray-300 appearance-non focus:outline-none focus:ring-0 focus:border-green-600 peer capitalize ">
                                <option value="">language</option>
                                {
                                    languages.map((language, i) => (
                                        <option key={i} value={language}>{language}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="relative z-0 w-full mb-5 group ">
                            <select name="continent" id="continent" onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-b border-gray-300 appearance-non focus:outline-none focus:ring-0 focus:border-green-600 peer capitalize ">
                                <option value="">continent</option>
                                {
                                    continents.map((continent, i) => (
                                        <option key={i} value={continent.name}>{continent.name}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className='mt-3 text-gray-500'>
                            <p className='w-32 text-gray-500 capitalize text-sm'>Select Program</p>
                            {
                                programs.map((program, i) => (
                                    <div key={i} className='flex space-x-3 items-center mt-3 ml-3'>
                                        <input
                                            type="checkbox"
                                            value={program.toLowerCase()}
                                            checked={programArr.includes(program.toLowerCase())}
                                            onChange={handleCheckboxChange}
                                        />
                                        <p className='w-32 text-gray-500 capitalize text-xs'>{program}</p>
                                    </div>
                                ))
                            }



                        </div>
                        <div className='text-xs flex mt-9'>
                            <p className='w-32 text-gray-500 capitalize text-sm'>Deadline</p>
                            <input type="date" name='deadline' onChange={handleChange} />
                        </div>
                        <div className='mt-3'>
                            <NavigateBtn name={'Convert Text to Html'} target={`_blank`} link={`https://wordtohtml.net/`} />
                        </div>

                        <div>
                            <textarea name="desc" onChange={handleChange} placeholder='input disabled more inforamtion ' className='p-3 text-black w-full border rounded-lg mt-3 shadow-xl h-36'></textarea>
                        </div>
                        <div>
                            <Submit />
                        </div>
                    </form>

                </div>
            </div>
        </div>
    )
}
