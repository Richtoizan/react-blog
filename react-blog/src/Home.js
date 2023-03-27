import BlogList from "./BlogList";
import useFetch from "./useFetch";


const Home = () => {
  
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');
    
    return (
        <div className="home">
            {blogs && <BlogList blogs={blogs} title="All Blogs" />}
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
        </div>
      );
}
 
export default Home;