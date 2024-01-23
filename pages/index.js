import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Result from "@/components/Result/Result";
import Search from "@/components/Search/Search";
import { db } from "@/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useState } from "react";
import { toast } from "sonner";

export default function Home() {
  const [search, setSearch] = useState('');
  const [country, setCountry] = useState('');
  const [program, setProgram] = useState('');
  const [language, setLanguage] = useState('');
  const [deadline, setDeadline] = useState(new Date());
  const [today, setToday] = useState(new Date());
  const [loading, setLoading] = useState('');
  const [continent, setContinent] = useState('');
  const [posts,setPost] = useState([]);
  const [filter, setfilter] = useState(false);
  const [filterCountry, setfiltercountry] = useState('');
  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
      switch (name) {
        case 'search':
          setSearch(value);
          break;
        case 'country':
          setCountry(value);
          break;
        case 'program':
          setProgram(value);
          break;
        case 'language':
          setLanguage(value);
          break;
        case 'continent':
          setContinent(value);
          break;
        case 'deadline':
          setDeadline(event.target.valueAsDate);
          break;
        case 'filterCountry':
          setfiltercountry(value);
            break;
        default:
          break;
      }
  }
  
  const handleSubmit = async (e) => {
      e.preventDefault();
      console.log(filterCountry);
      setPost([]);
      let q;
      if (filterCountry != "") {
        q = query(
          collection(db, "posts"),
          where("country", "==",filterCountry.toLowerCase()), 
        );
      }else{
         q = query(
          collection(db, "posts"),
          where("deadline", "<=",deadline.toISOString()), 
          where("program", "array-contains",program.toLowerCase()), 
          where("language", "==",language.toLowerCase()), 
          where("country", "==",country.toLowerCase()), 
        );
      }
      setLoading('loading')
      await getDocs(q)
        .then((querySnapshot) => {
          querySnapshot.forEach((doc) => {
           setPost((prev)=>{return[...prev,doc.data()]})
           console.log(querySnapshot);
          });
          setLoading('done')
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
  }
  if (loading =='loading') {
    toast.loading('Loading data',{
      position: 'top-center',
    });
  }

  const handleFilter = (event)=>{
    event.preventDefault();
    setfilter(!filter);
    console.log(filter);
  }
  return (
   <>
    <Navbar page="/" />
    <Search handleChange={handleChange} handleSubmit={handleSubmit} handleFilter={handleFilter} filter={filter}  />
    <Result result={posts.length} posts={posts}/>
    <Footer />
   </>
  )
}
