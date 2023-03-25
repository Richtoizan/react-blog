import {useState , useEffect} from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'Learning React', body: 'lorem ipsum...', author: 'Zaid', id: 1 },
        { title: 'Shoulder Surgery Rehabilation Tips', body: 'lorem ipsum...', author: 'Hamzeh', id: 2 },
        { title: 'Best Dog Food Recipes', body: 'lorem ipsum...', author: 'Lucy', id: 3 }
    ]);

    const [name, setName] = useState('Zaid');

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect(() => {
        console.log("useEffect ran");
        console.log(name);
    }, [name]);

  
    return (
        <div className="home">
           <BlogList blogs={blogs} title={"All Blogs"} handleDelete={handleDelete}/>
            <button onClick={()=> setName('Hamzeh')}>Change Name</button>
            <p>{name}</p>
        </div>
      );
}
 
export default Home;