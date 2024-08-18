import React from 'react'
import SearchComponent from './SearchComponent'
import { Button } from '@mui/material'
import Dropdown from './Dropdown'
import { useNavigate } from 'react-router-dom'
import './Navbar.css'
const Navbar1 = () => {
const navigate = useNavigate();
  return (
    <div>
      <div className="bg-[#2874f0]">
        <div className="text-white flex justify-evenly">
            <span className="flex">
            <button variant='outlined' sx={{color: 'white'}} onClick={() => navigate('/')}>Ecommerce Plus</button>
            <SearchComponent />
            </span>
            <button variant='outlined' sx={{background:'white', paddingX: 5}}>Login</button>
            </div>
            </div>
      </div>
    
  )
}

export default Navbar1
