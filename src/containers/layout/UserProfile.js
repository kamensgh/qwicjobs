import React from 'react'
import Header from '../header/Userprofile'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom';


const Layout = () => {
  return (
    <>
        <Header />
        <Outlet />
    </>
  )
}

export default Layout