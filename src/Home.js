import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const {
    data: blogs,
    isPending,
    error,
  } = useFetch("http://localhost:8000/blogs");
  // const [blogs, setBlogs] = useState(null);
  // const [isPending, setIsPending] = useState(true);
  // const [error, setError] = useState(null);

  // const [name, setName] = useState("mario");

  // const handleDelete = (id) => {
  //   const newBlogs = blogs.filter((blog) => blog.id !== id);
  //   setBlogs(newBlogs);
  // };

  // useEffect(() => {
  //   //u cant use async and await
  //   setTimeout(() => {
  //     fetch("http://localhost:8000/blogs")
  //       .then((res) => {
  //         console.log(res);
  //         if (!res.ok) {
  //           throw Error("could not fetch the data for that resource");
  //         }
  //         return res.json();
  //       })
  //       .then((data) => {
  //         setBlogs(data);
  //         setIsPending(false);
  //         setError(null);
  //       })
  //       .catch((err) => {
  //         setError(err.message);
  //         setIsPending(false);
  //       });
  //   }, 1000); //in real world we dont do setTimeout
  // }, []);

  // useEffect(() => {
  //   //everytime render
  //   console.log("use effect ran");
  //   console.log(name);
  // }, [name]);
  //what a [] array do btshof enaha t run function just once
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {blogs && <BlogList blogs={blogs} title="All blogs" />}
      {
        // blogs passed in as a prop
      }
      {/* <BlogList
        blogs={blogs.filter((blog) => blog.author === "mario")}
        title="Mario's blogs"
      /> */}

      {/* <button onClick={() => setName("luigi")}>Change name</button> */}
      {/* annonymous function invokes setName 3shan el parameter */}
      {/* <p>{name}</p> */}
    </div>
  );
};

export default Home;

// let name = "bebo";
// const [name, setName] = useState("habiba");
// const [age, setAge] = useState(22);

// const handleClick = () => {
//   console.log("hello ninja");
//   setName("saba7"); //reactive //hatghyr el p
//   setAge(12); //reactive //hatghyr el p
// };

// const handleClickAgain = (name, e) => {
//   console.log("hello " + name, e.target);
// };

/* <p>
        {name} is {age} years
      </p>
      <button onClick={handleClick}>click me</button> */

/* <button onClick={(e) => handleClickAgain("hanan", e)}> */

/* Click me again
      </button> */
