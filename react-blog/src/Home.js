import { useState } from "react";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'Learning React', body: 'lorem ipsum...', author: 'Zaid', id: 1 },
        { title: 'Shoulder Surgery Rehabilation Tips', body: 'lorem ipsum...', author: 'Hamzeh', id: 2 },
        { title: 'Best Dog Food Recipes', body: 'lorem ipsum...', author: 'Lucy', id: 3 }
    ]);
  
    return (
        <div className="home">
           {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>   
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                </div>
           ))}   
        </div>
      );
}
 
export default Home;