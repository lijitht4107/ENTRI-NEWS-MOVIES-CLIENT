import React from 'react'
import {useForm} from 'react-router-dom'
import axios from 'axios'
import './LoginForm.css'
import { useNavigate } from 'react-router-dom'

const logForm = () => {
  const navigate = useNavigate()
    const { register, handleSubmit, formState:{errors}} = useForm();
    // const onSubmit = data => console.log(data);
    const onSubmit= async(data)=>{
      const response = await axios.post('https://entri-news-movie-server.onrender.com/users/login',data)
      sessionStorage.setItem('userToken',response.data.token)
      if(response.data.message === 'Login successfull'){
          navigate('/')
      }
      console.log(response);
    }
  return (
    <div>
      <h2 className='login-form-h'>Login Form</h2>
       <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
       <input className='form-input' placeholder='User Name' {...register("email", { required: "Please enter your first name.", maxLength: 20 })} />
      <input className='form-input' type='password' {...register("password")}  placeholder='password '/>
     
      {/* <select className='form-input' {...register("gender")}>
        <option value="female">female</option>
        <option value="male">male</option>
        <option value="other">other</option>
      </select> */}
      <input className='form-submit' type="submit" />
    </form>
    </div>
  )
}

export default logForm
