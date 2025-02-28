import React from 'react'
import Layout from './Layout'
import { salesData } from '../assets'
import Navbar2 from './Navbar2'

const Admin = () => {
  return (
    <div>
      <Navbar2/>
      <Layout/>
      <salesData/>
    </div>
  )
}

export default Admin