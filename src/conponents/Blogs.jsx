import React,{useEffect,useState} from 'react'
import axios from 'axios'
import './Blog.css'

const Blogs = () => {

    const [posts, setPosts] =useState([]);
    useEffect(()=>{
        const fetchData = async (req,res)=>{
            try {
                const posts = await axios.get('https://entri-news-movie-server.onrender.com/post/getposts')
                setPosts(posts.data)
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    },[])
  return (
    <div className='gridContainer'>
        
      {posts.map((post,index)=>(
        <div className='blogs'>
            
            <img className='blogImage'
            key={index}
            src={`https://entri-news-movie-server.onrender.com/${post.image}`}>
            </img>
            <h3>{post.title}</h3>
            <p>{post.subtitle}</p>
            <p>{post.desc}</p>


        </div>
      ))}
    </div>
  )
}

export default Blogs
