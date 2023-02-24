import React from 'react'
import Navbar from './Navbar'

import '../scss/main.scss'

const Layout = ({children}) => {
  return (
    <>
        <Navbar/>
        {children}
    </>
  )
}

export default Layout