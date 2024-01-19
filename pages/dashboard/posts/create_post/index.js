import Form from '@/components/Form/Form'
import Navbar from '@/components/Navbar/Navbar'
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '@/firebaseConfig';
import { toast } from 'sonner';
import { v4 as uuidv4 } from 'uuid';
import Auth from '@/pages/login/Auth';
import Footer from '@/components/Footer/Footer';

export default function index() {
  Auth();
  const [image, setImage] = useState('');
  const [university, setUniversity] = useState('');
  const [country, setCountry] = useState('');
  const [department, setDepartment] = useState('');
  const [city, setCity] = useState('');
  const [award, setAward] = useState('');
  const [shortDesc, setShortDesc] = useState('');
  const [desc, setDesc] = useState('');
  const [language, setLanguage] = useState('');
  const [deadline, setDeadline] = useState(new Date());
  const [applyLink, setApplyLink] = useState('');
  const [createdAt,setCreatedAt] = useState(new Date());
  const [program, setProgram] = useState([]);
  const [continent,setContinent] = useState('');
  const [user,setUser]= useState({});

  useEffect(()=>{
    const userAuth = JSON.parse(localStorage.getItem('user'));
    setUser(userAuth);
  },[])


  const router = useRouter();

  const handleChange = (event) => {
      const { name, value } = event.target;
      switch (name) {
        case 'image':
          setImage(value);
          break;
        case 'university':
          setUniversity(value);
          break;
        case 'country':
          setCountry(value);
          break;
        case 'department':
          setDepartment(value);
          break;
        case 'continent':
          setContinent(value);
        case 'city':
          setCity(value);
          break;
        case 'award':
          setAward(value);
          break;
        case 'shortDesc':
          setShortDesc(value);
          break;
        case 'desc':
          setDesc(value);
          break;
        case 'language':
          setLanguage(value);
          break;
        case 'deadline':
          setDeadline(event.target.valueAsDate);
          break;
        case 'applyLink':
          setApplyLink(value);
          break;
        default:
          break;
      }
    };
  
  const handleSubmit = async (e) =>{
      const id = uuidv4();
      e.preventDefault();
   try {
          await setDoc(doc(db,'posts',id),{
              id:id,
              image,
              university,
              country:country.toLowerCase(),
              department,
              city,
              award,
              shortDesc,
              desc,
              continent:continent.toLowerCase(),
              language : language.toLowerCase(),
              deadline :deadline.toISOString(),
              applyLink,
              program,
              createdAt:createdAt.toISOString(),
              author : user.id
          })
          router.push('/dashboard/posts');
          toast.success('Created Successfully', {
              position: 'top-center',
            });
      } catch (error) {
          router.push('/dashboard/posts');
          toast.error('Something went wrong', {
              position: 'top-center',
            });
            console.log(error);
      }
  }


  const handleCheckboxChange = (event) => {
    const program = event.target.value;
    setProgram((prev) =>
      event.target.checked
        ? [...prev, program]
        : prev.filter((c) => c !== program)
    );
  };
  const date = new Date();



  return (
    <>
      <Navbar page={`/posts`} />
      <Form handleSubmit={handleSubmit} handleChange={handleChange} handleCheckboxChange={handleCheckboxChange} programArr={program} />
      <Footer />
    </>
  )
}
