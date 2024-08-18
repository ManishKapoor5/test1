import React from 'react'
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { FaCartArrowDown } from 'react-icons/fa';
import { useDispatch } from "react-redux";
import {useSelector} from "react-redux";
import NavbarComponent1 from '../Components/Navbar1';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const AddtoCart = (props) => {
    const dispatch = useDispatch();
    const count = useSelector((state)=>state)
    const id = useSelector((state)=>state.id)
    const title = useSelector((state)=>state.title)
    const category = useSelector((state)=>state.category)
    const price = useSelector((state)=>state.price)
    const image = useSelector((state)=>state.image)
  return (
    <div>
       <NavbarComponent1 /> 
             
              <div key={id} className="bookframe">
                {console.log(title)}
                <div>
                  {" "}
                  <img src={image} />{" "}
                </div>
                <div className="bookDescription">
                  <div>{title}</div>
                  <div>Category- {category}</div>
                  <div>Price- {price}</div>
                  {/* <div>Description:- {t.description}</div> */}
                  <div>
                    <button onClick={(e)=>dispatch({type: 'DECREMENT'})}><CiCircleMinus /></button> {count}
                    <button onClick={(e) => dispatch({type: 'INCREMENT'})}><CiCirclePlus /></button>
                  </div>
                </div>
              </div>
          
        </div>
      
    
  )
            
}
export default AddtoCart
