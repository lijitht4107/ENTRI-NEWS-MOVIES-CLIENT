import React from 'react'
import {useForm} from 'react-hook-form'
import './NewSignup.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const NewSignup = () => {
  const navigate =useNavigate()
    const {register,handleSubmit,formState:{errors}}=useForm();
    console.log(errors);
    const onSubmit = async (data) => {
      try {
        
        const response = await axios.post('http://localhost:3000/users/addUser', data);
        console.log('Success:', response.data);
        if(response.data.message === "signup successfull"){
          navigate('/login')
        }
        // Handle successful response (e.g., show a success message, redirect, etc.)
      } catch (error) {
        console.error('Error:', error);
        // Handle error response (e.g., show an error message)
      }
    };
    
  return (
    <div>
      <div className='newsignup-h'>
      <h2 >Signup Form</h2>
      <p>let's create your account</p>
      </div>
      <form className='newsignup' action="" onSubmit={handleSubmit((onSubmit))}>
        <input className='signup-input' type="text" {...register("userName",{required:'this is required',minLength: {value:6,message:'atleast min 6 charector need'}})} placeholder='User Name' />
       <span className='signup-span'>{errors.userName?.message}</span>
        <input className='signup-input' type="email" placeholder='email' {...register("email",{required:{
            value:/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message:'add a valied email address'
            
   }})} id="email" />
   <span className='signup-span'>{errors.email?.message}</span>
        <div>
        <label htmlFor="genter">Genter :</label>
        <select {...register("genter",{required:'this is required'})} id="genter">
            <option value="Male">Male</option>
            <option value="Female">Femaile</option>
            <option value="Other">Other</option>
        </select>
        </div>
        <input className='signup-input' type="number" placeholder='age'{...register("age",{required:'this is required',min:{value:18,message:'you are not eligible to acces this platform'}, max:{value:100,message:'you are not eligible to acces this platform'}})} id="age" />
        <span className='signup-span'>{errors.age?.message}</span>
        <input className='signup-input' type="password" placeholder='password' {...register("password",{required:'this is required',minLength:{value:6,message:'atlest min 6 charector need'}})} id="password" />
        <span className='signup-span'>{errors.password?.message}</span>
        <input className='signup-button' type="submit" value="submit" />
      
      </form>
    </div>
  )
}

export default NewSignup
