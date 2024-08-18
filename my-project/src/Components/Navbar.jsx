import React from 'react'
import './Navbar.css'
import SearchComponent from './SearchComponent'
import { Button } from '@mui/material'
import Dropdown from './Dropdown'
import { useNavigate } from 'react-router-dom'


 


const NavbarComponent = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div class="navbar">
        <div class="ecommerceplus">
            <button onClick={()=> navigate('/')}>Ecommerce Plus</button>
            <SearchComponent />
            <Button variant='outlined' sx={{background:'white', paddingX: 5}}>Login</Button>
            <Button variant='contained' sx={{background: "#2874f0", boxShadow: "none", fontWeight:"Bold"}}>Become a seller</Button>
            <Dropdown />
            <Button variant='contained' sx={{background: "#2874f0", boxShadow: "none", fontWeight:"Bold"}}>Cart</Button>
        </div>
      </div>
    </div>
  )
}

export default NavbarComponent
