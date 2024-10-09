import Footer from "@/components/Footer/Footer";
import Navbar from "@/components/Navbar/Navbar";
import Result from "@/components/Result/Result";
import Search from "@/components/Search/Search";
import { db } from "@/firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";
import { useState, useEffect } from "react";
import { toast } from "sonner";

export default function Home() {
  const [search, setSearch] = useState('');
  const [country, setCountry] = useState('');
  const [program, setProgram] = useState('');
  const [language, setLanguage] = useState('');
  const [deadlineBeforeDay, setDeadlineBeforeDay] = useState('');  // Day before deadline
  const [deadlineBeforeMonth, setDeadlineBeforeMonth] = useState(''); // Month before deadline
  const [deadlineAfterDay, setDeadlineAfterDay] = useState('');    // Day after deadline
  const [deadlineAfterMonth, setDeadlineAfterMonth] = useState(''); // Month after deadline
  const [loading, setLoading] = useState('');
  const [filterCountry, setFilterCountry] = useState('');
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState(false);

  // Fetch all posts when the page loads
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading('loading');
      try {
        const q = query(collection(db, "posts"));
        const querySnapshot = await getDocs(q);
        const allPosts = [];
        querySnapshot.forEach((doc) => {
          allPosts.push(doc.data());
        });
        setPosts(allPosts);
        setLoading('done');
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading('error');
      }
    };

    fetchPosts();
  }, []);

  // Function to filter posts by deadline
  const filterByDeadline = (allPosts) => {
    if (!deadlineBeforeDay && !deadlineBeforeMonth && !deadlineAfterDay && !deadlineAfterMonth) return allPosts;

    return allPosts.filter((post) => {
      if (post.deadline) {
        const [month, day] = post.deadline.split('-').map(Number);

        const isAfter = deadlineAfterDay && deadlineAfterMonth
          ? (month > Number(deadlineAfterMonth) || (month === Number(deadlineAfterMonth) && day >= Number(deadlineAfterDay)))
          : true;

        const isBefore = deadlineBeforeDay && deadlineBeforeMonth
          ? (month < Number(deadlineBeforeMonth) || (month === Number(deadlineBeforeMonth) && day <= Number(deadlineBeforeDay)))
          : true;

        return isAfter && isBefore;
      }
      return false;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPosts([]); // Clear previous results
    let q = collection(db, "posts");

    const conditions = [];

    if (filterCountry) {
      conditions.push(where("country", "==", filterCountry.toLowerCase()));
    }
    if (country) {
      conditions.push(where("country", "==", country.toLowerCase()));
    }
    if (program) {
      conditions.push(where("program", "array-contains", program.toLowerCase()));
    }
    if (language) {
      conditions.push(where("language", "==", language.toLowerCase()));
    }

    if (conditions.length > 0) {
      q = query(q, ...conditions);
    }

    try {
      const querySnapshot = await getDocs(q);
      let allPosts = [];
      querySnapshot.forEach((doc) => {
        allPosts.push(doc.data());
      });

      allPosts = filterByDeadline(allPosts);
      setPosts(allPosts);
    } catch (error) {
      console.error("Error fetching filtered posts:", error);
    }
  };

  if (loading === 'loading') {
    toast.loading('Loading data', { position: 'top-center' });
  }

  const handleFilter = (event) => {
    event.preventDefault();
    setFilter(!filter);
  };

  return (
    <>
      <Navbar page="/" />
      <Search
        handleChange={setSearch}
        handleSubmit={handleSubmit}
        handleFilter={handleFilter}
        filter={filter}
        setCountry={setCountry}
        setProgram={setProgram}
        setLanguage={setLanguage}
        setDeadlineBeforeDay={setDeadlineBeforeDay}
        setDeadlineBeforeMonth={setDeadlineBeforeMonth}
        setDeadlineAfterDay={setDeadlineAfterDay}
        setDeadlineAfterMonth={setDeadlineAfterMonth}
      />
      <Result result={posts.length} posts={posts} />
      <Footer />
    </>
  );
}
