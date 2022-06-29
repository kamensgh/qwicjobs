import React from 'react'
import Header from '../header/Workerprofile'
import Footer from '../footer/Footer'
import { Outlet } from 'react-router-dom';


const Layout = () => {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout