import React from 'react'
import SignupForm from './conponents/LoginForm'
import { BrowserRouter,Routes,Route } from "react-router-dom";
import NewSignup from './conponents/NewSignup';
import { Link } from 'react-router-dom';
import Hero from './conponents/Hero';
import Articles from './conponents/Articles';
import './App.css'
const App = () => {
  return (
    <div>
      {/* <BrowserRouter>
      <Routes>
        <Route path='/' element={<SignupForm/>}/>
        <Route path='/newsign' element={<NewSignup/>}/>
      </Routes>
      </BrowserRouter> */}
      <p className='blog-button'><Link className='blog-button-link' to='/blogs' > Blogs</Link></p>
      <Hero/>
      <Articles/>
      {/* <p><Link to='/hero'> Hero</Link></p>
      <p><Link to='/article'> Article</Link></p> */}


    </div>
  )
}

export default App
