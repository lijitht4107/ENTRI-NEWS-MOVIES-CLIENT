import React,{useState} from 'react'
import axios from 'axios'
import './NewBlog.css'
import { useNavigate } from 'react-router-dom'

const NewBlog = () => {
    const navigate = useNavigate()
    const [image, setImage]=useState(null);
    const [title, setTitle] =useState('');
    const [subtitle,setSubTitle] = useState('');
    const [desc,setDesc] =useState('');

    const handleImageChange=(e)=>{
        setImage(e.target.files[0])
        console.log(image);
    }
    const handleSubmit =async(e)=>{
        e.preventDefault();
        const formData = new FormData();
        formData.append('image', image);
        formData.append('title', title);
        formData.append('subtitle', subtitle);
        formData.append('desc', desc);

        try {
            const token =sessionStorage.getItem('userToken')
            if(token){
                const response = await axios.post('http://localhost:3000/post/addpost',
                    formData,
                {headers:{
                    "Content-Type":"multipart/form-data",
                    "Authorization":`Bearer ${token}`
                }})
                
                navigate('/blogs')
                console.log(response.data);
            }
            else{
                navigate('/signup')
            }

            
        } catch (error) {
            console.log(error);
        }

    }

  return (
    <div className='blog-container'>
        <form className='form' onSubmit={handleSubmit}>
        <h2 className="subtitle">Create a new post</h2>
        
        <div className='blog-item'>
            <label htmlFor="">Blog image</label>
            <input type="file" 
            id='image'
            name='image'
            onChange={handleImageChange}
            required />
        </div>
        <div className='blog-item'>
            <label htmlFor="">Title</label>
            <input type="text" 
            id='title'
            name='title'
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            required />
        </div>
        <div className='blog-item'>
            <label htmlFor="">Sub title</label>
            <input type="text" 
            id='subtitle'
            name='subtitle'
            value={subtitle}
            onChange={(e)=>setSubTitle(e.target.value)}
            required />
        </div>
        <div className='blog-item'>
            <label htmlFor="">description</label>
            <input type="text" 
            id='desc'
            name='desc'
            value={desc}
            onChange={(e)=>setDesc(e.target.value)}
            required />
        </div>
        <button className='blog-submit' type='submit'>Create a new post</button>
        </form>
    </div>
  )
}

export default NewBlog
