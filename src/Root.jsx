import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from './conponents/Header'
import NewsHeader from './conponents/NewsHeader'

const Root = () => {
  return (
    <>
    <div className='conrainer'>
    <Header />
    
    <Outlet />
    </div>
    </>
    
  )
}

export default Root
