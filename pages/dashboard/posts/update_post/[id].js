import Footer from '@/components/Footer/Footer';
import UpdatePostForm from '@/components/Form/UpdatePostForm';
import Navbar from '@/components/Navbar/Navbar';
import { db } from '@/firebaseConfig';
import { doc, getDoc, updateDoc } from 'firebase/firestore';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { toast } from 'sonner';

export async function getServerSideProps(context) {
  const { id } = context.params;
  const docRef = doc(db, "posts", id);
  const docSnap = await getDoc(docRef);
  const post = docSnap.data();
  return { props: { post } };
}

export default function Index({ post }) {
  const [id, setId] = useState(post.id);
  const [image, setImage] = useState(post.image);
  const [university, setUniversity] = useState(post.university);
  const [country, setCountry] = useState(post.country);
  const [continent, setContinent] = useState(post.continent);
  const [department, setDepartment] = useState(post.department);
  const [city, setCity] = useState(post.city);
  const [award, setAward] = useState(post.award);
  const [shortDesc, setShortDesc] = useState(post.shortDesc);
  const [desc, setDesc] = useState(post.desc);
  const [language, setLanguage] = useState(post.language);
  const [deadline, setDeadline] = useState(post.deadline || ''); // Initialize as string
  const [applyLink, setApplyLink] = useState(post.applyLink);
  const [createdAt, setCreatedAt] = useState(new Date());
  const [program, setProgram] = useState(post.program);
  const router = useRouter();

  const [user, setUser] = useState({});
  useEffect(() => {
    const userAuth = JSON.parse(localStorage.getItem('user'));
    setUser(userAuth);
  }, []);

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
      case 'continent':
        setContinent(value);
        break;
      case 'department':
        setDepartment(value);
        break;
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
        // Handle date input and format to MM-DD
        const date = new Date(value);
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        setDeadline(`${month}-${day}`); // Save as MM-DD
        break;
      case 'applyLink':
        setApplyLink(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const postRef = doc(db, 'posts', id);
      await updateDoc(postRef, {
        image,
        university,
        country: country.toLowerCase(),
        department,
        city,
        award,
        shortDesc,
        desc,
        continent: continent.toLowerCase(),
        language: language.toLowerCase(),
        deadline, // Already in MM-DD format
        applyLink,
        program,
        createdAt: createdAt.toISOString(),
        author: user.id,
      });
      router.push('/dashboard/posts');
      toast.success('Saved Successfully', {
        position: 'top-center',
      });
    } catch (error) {
      router.push('/dashboard/posts');
      toast.error('Something went wrong', {
        position: 'top-center',
      });
      console.log(error);
    }
  };

  const handleCheckboxChange = (event) => {
    const program = event.target.value;
    setProgram((prev) =>
      event.target.checked
        ? [...prev, program]
        : prev.filter((c) => c !== program)
    );
  };

  console.log(deadline);

  return (
    <div>
      <Navbar />
      <UpdatePostForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        handleCheckboxChange={handleCheckboxChange}
        image={image}
        university={university}
        country={country}
        continent={continent}
        department={department}
        city={city}
        award={award}
        shortDesc={shortDesc}
        desc={desc}
        programArr={program}
        language={language}
        deadline={deadline}
        applyLink={applyLink}
      />
      <Footer />
    </div>
  );
}
