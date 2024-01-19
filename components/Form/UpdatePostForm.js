import React, { useState } from 'react'
import Submit from '../Button/Submit'
import NavigateBtn from '../Button/NavigateBtn'
import data from '@/public/data';

export default function UpdatePostForm(
    {
    handleChange,
    handleSubmit,
    handleCheckboxChange,
    image,
    university,
    country,
    continent,
    programArr,
    department,
    city,
    award,
    shortDesc,
    desc,
    language,
    deadline,
    applyLink,
    }
    ){
    const [continents, setcontinents] = useState(data.continents);
    const [programs, setprograms] = useState(data.programs);
    const [languages, setlanguages] = useState(data.language);
    const [countries, setcountries] = useState(data.countries);

    console.log(deadline);
    return (
    <div>
    <div className='flex flex-col justify-center items-center  '>
        <div className=' w-full px-3 lg:w-1/2'>
            <div className='flex space-x-3 items-center my-3 '>
                <h1>Form Table</h1> 
            </div>
            <form action="post" onSubmit={handleSubmit}>
                <div  className="relative z-0 w-full mb-5 group mt-3">
                    <input autoComplete='off' onChange={handleChange} type="text" value={image}  name="image" id="image" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b border-gray-300 appearance-non focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "   />
                    <label htmlFor="image" className="peer-focus:font-medium capitalize absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >Image</label>
                </div>  
                <div  className="relative z-0 w-full mb-5 group mt-3">
                    <input autoComplete='off' onChange={handleChange} type="text" value={university}  name="university" id="university" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b border-gray-300 appearance-non focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "   />
                    <label htmlFor="university" className="peer-focus:font-medium capitalize absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >university</label>
                </div> 
                <div  className="relative z-0 w-full mb-5 group mt-3">
                    <input autoComplete='off' onChange={handleChange} type="text" value={department}  name="department" id="department" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b border-gray-300 appearance-non focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "   />
                    <label htmlFor="department" className="peer-focus:font-medium capitalize absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >department</label>
                </div> 
                <div  className="relative z-0 w-full mb-5 group mt-3">
                    <input autoComplete='off' onChange={handleChange} type="text" value={city}  name="city" id="city" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b border-gray-300 appearance-non focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "   />
                    <label htmlFor="city" className="peer-focus:font-medium capitalize absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >city</label>
                </div>   
                <div  className="relative z-0 w-full mb-5 group mt-3">
                    <input autoComplete='off' onChange={handleChange} type="text" value={award}  name="award" id="award" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b border-gray-300 appearance-non focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "   />
                    <label htmlFor="award" className="peer-focus:font-medium capitalize absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >award</label>
                </div> 
                <div  className="relative z-0 w-full mb-5 group mt-3">
                    <input autoComplete='off' onChange={handleChange} type="text" value={shortDesc}  name="shortDesc" id="shortDesc" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b border-gray-300 appearance-non focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "   />
                    <label htmlFor="shortDesc" className="peer-focus:font-medium capitalize absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >shortDesc</label>
                </div> 
                <div  className="relative z-0 w-full mb-5 group mt-3">
                    <input autoComplete='off' onChange={handleChange} type="text" value={applyLink}  name="applyLink" id="applyLink" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-b border-gray-300 appearance-non focus:outline-none focus:ring-0 focus:border-green-600 peer" placeholder=" "   />
                    <label htmlFor="applyLink" className="peer-focus:font-medium capitalize absolute text-sm text-gray-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-green-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" >applyLink</label>
                </div> 
                <div className="relative z-0 w-full mb-5 group ">
                    <select name="country" id="country" value={country} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-b border-gray-300 appearance-non focus:outline-none focus:ring-0 focus:border-green-600 peer capitalize ">
                        <option value="">country</option>
                        {
                            countries.map((country,i)=>(
                                <option key={i} value={country.toLowerCase()}>{country}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="relative z-0 w-full mb-5 group ">
                    <select name="language" id="language" value={language} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-b border-gray-300 appearance-non focus:outline-none focus:ring-0 focus:border-green-600 peer capitalize ">
                        <option value="">language</option>
                        {
                            languages.map((language,i)=>(
                                <option key={i} value={language.toLowerCase()}>{language}</option>
                            ))
                        }
                    </select>
                </div>
                <div className="relative z-0 w-full mb-5 group ">
                    <select name="continent" id="continent" value={continent} onChange={handleChange} className="block py-2.5 px-0 w-full text-sm text-gray-500 bg-transparent border-b border-gray-300 appearance-non focus:outline-none focus:ring-0 focus:border-green-600 peer capitalize ">
                        <option value="">continent</option>
                        {
                            continents.map((continent,i)=>(
                                <option key={i} value={continent.name.toLowerCase()}>{continent.name}</option>
                            ))
                        }
                    </select>
                </div>
                <div className='mt-3 text-gray-500'>
                    <p className='w-32 text-gray-500 capitalize text-sm'>Select Program</p>
                    {
                        programs.map((program,i)=>(
                            <div className='flex space-x-3 items-center mt-3 ml-3' key={i}>
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
                <div className='text-xs flex mt-9 mb-6'>
                    <p className='w-32 text-gray-500 capitalize text-sm'>Deadline :</p>
                    <input required  type="date" name='deadline' onChange={handleChange} />
                   
                </div>
                <NavigateBtn name={'Convert Text to Html'} target={`_blank`} link={`https://wordtohtml.net/`} />
                <div>
                    <textarea name="desc" value={desc} onChange={handleChange} placeholder='Input more inforamtion '  className='p-3 h-60 text-black w-full border rounded-lg mt-3 text-sm shadow-xl'></textarea>
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
