import React, { useEffect, useState } from 'react';
import Submit from '../Button/Submit';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from '@/firebaseConfig';

export default function Search({ handleChange, handleSubmit, handleFilter, setCountry,
    setProgram,
    setLanguage, filter, setDeadlineBeforeDay,
    setDeadlineBeforeMonth,
    setDeadlineAfterDay,
    setDeadlineAfterMonth }) {
    const [programs, setPrograms] = useState([]);
    const [countries, setCountries] = useState([]);
    const [languages, setLanguages] = useState([]);
    const [posts, setPosts] = useState([]); // State for posts
    const fetchCountries = async () => {
        const q = query(collection(db, 'countries'), orderBy('country', 'asc'));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setCountries(data);
    };

    const fetchLanguages = async () => {
        const q = query(collection(db, 'languages'), orderBy('language', 'asc'));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setLanguages(data);
    };

    const fetchPrograms = async () => {
        const q = query(collection(db, 'programs'), orderBy('program', 'asc'));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setPrograms(data);
    };

    const fetchPosts = async () => {
        const q = query(collection(db, 'posts'), orderBy('deadline', 'asc'));
        const querySnapshot = await getDocs(q);
        const data = querySnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setPosts(data);
    };

    useEffect(() => {
        fetchCountries();
        fetchLanguages();
        fetchPrograms();
        fetchPosts(); // Fetch posts as well
    }, []);



    return (
        <div>
            {!filter ? (
                <form onSubmit={handleSubmit} className="flex flex-col items-center p-3">
                    {/* Your existing form and input elements */}
                    <div className="w-96 lg:w-1/2 grid lg:grid-cols-4 gap-3 md:grid-cols-3 grid-cols-2">
                        {/* Program Selection */}
                        <div className="mt-3 space-y-2">
                            <h2>Program :</h2>
                            {programs.map((item, i) => (
                                <div className="flex space-x-2 items-center" key={i}>
                                    <input
                                        onChange={(e) => setProgram(e.target.value)}
                                        value={item.program.toLowerCase()}
                                        type="radio"
                                        className="text-black"
                                        id="program"
                                        name="program"
                                    />
                                    <span className="text-xs">{item.program}</span>
                                </div>
                            ))}
                        </div>
                        {/* Country and Language Selection */}
                        <div className="mt-3 space-y-2">
                            <h2>Country :</h2>
                            <select name="country" className="text-xs focus:outline-none w-28" onChange={(e) => setCountry(e.target.value)}>
                                <option value="">Select Country</option>
                                {countries.map((item, i) => (
                                    <option value={item.country} key={i}>
                                        {item.country}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="mt-3 space-y-2">
                            <h2>Language :</h2>
                            {languages.map((item, i) => (
                                <div className="flex space-x-2 items-center" key={i}>
                                    <input
                                        onChange={(e) => setLanguage(e.target.value)}
                                        value={item.language.toLowerCase()}
                                        type="radio"
                                        className="text-black"
                                        id="language"
                                        name="language"
                                    />
                                    <span className="text-xs">{item.language}</span>
                                </div>
                            ))}
                        </div>
                        {/* Deadline After Inputs */}
                        <div className="mt-3 space-y-2">
                            <h2>Deadline After:</h2>
                            <input type="text" className="text-black" name="deadlineAfterMonth" placeholder="MM" onChange={(e) => setDeadlineAfterMonth(e.target.value)} />
                            <input type="text" className="text-black" name="deadlineAfterDay" placeholder="DD" onChange={(e) => setDeadlineAfterDay(e.target.value)} />
                        </div>
                        {/* Deadline Inputs */}
                        <div className="mt-3 space-y-2">
                            <h2>Deadline Before:</h2>
                            <input type="text" className="text-black" name="deadlineBeforeMonth" placeholder="MM" onChange={(e) => setDeadlineBeforeMonth(e.target.value)} />
                            <input type="text" className="text-black" name="deadlineBeforeDay" placeholder="DD" onChange={(e) => setDeadlineBeforeDay(e.target.value)} />
                        </div>


                    </div>
                    <div className="w-96 lg:w-1/2 flex justify-between items-center space-x-3">
                        <div className="border-2 w-full h-0"></div>
                        <Submit />
                        <div className="border-2 w-full h-0"></div>
                    </div>
                </form>
            ) : (
                <div className="flex justify-center items-center w-full mt-3">
                    <div className="w-96 flex space-x-3 justify-center items-center">
                        <div className="flex items-center space-x-3">
                            <h1>Find Program</h1>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="hover:scale-105 cursor-pointer"
                                onClick={handleFilter}
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                            >
                                <path fill="currentColor" d="M10 18v-2h4v2zm-4-5v-2h12v2zM3 8V6h18v2z" />
                            </svg>
                        </div>
                        <form onSubmit={handleSubmit}>
                            <div className="flex space-x-3">
                                <select name="filterCountry" className="text-xs focus:outline-none w-28" onChange={handleChange}>
                                    <option value="">Select Country</option>
                                    {countries.map((item, i) => (
                                        <option value={item.country} key={i}>
                                            {item.country}
                                        </option>
                                    ))}
                                </select>
                                <Submit />
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
}
