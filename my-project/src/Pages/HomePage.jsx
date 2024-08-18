import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaCartArrowDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavbarComponent from "../Components/Navbar";
import '../App.css'
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";

const HomePage = (props) => {
  const count = useSelector((state) => state);
  const [data,setData] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then(function (output) {
      setData(output.data);
    });
  }, []);
  return (
    <div>
      <NavbarComponent />
        <div className="bookPage">
          {data
            .map((t) => (
              <div key={t.id} className="bookframe">
                {console.log(t)}
                <div>
                  {" "}
                  <img src={t.image} />{" "}
                </div>
                <div className="bookDescription">
                  <div>{t.title}</div>
                  <div>Category- {t.category}</div>
                  <div>Price- {t.price}</div>
                  {/* <div>Description:- {t.description}</div> */}
                  <div>
                    <button onClick={(e)=>{dispatch({type: 'ADDTOCART'});navigate("/cart")}}>
                      Add to Cart
                    </button>
                    <button onClick={(e)=>dispatch({type: 'DECREMENT'})}><CiCircleMinus /></button> {count}
                    <button onClick={(e) => dispatch({type: 'INCREMENT'})}><CiCirclePlus /></button>
                  </div>
                </div>
              </div>
            ))}
            
        </div>
      </div>
  );
};

export default HomePage;
