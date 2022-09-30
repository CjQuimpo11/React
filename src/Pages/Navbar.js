import React,{ useEffect, useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"
import Adduser from "./Adduser";

const Navbar = () =>{
    
    
    

    return (
       
        <div className="w-full h-16 bg-blue-600 flex items-center px-10 py-2 justify-between">
            <Link to={"/"}><h1 className= "text-3xl font-semibold font-Montserrat"> Crud</h1></Link>
            
      
            {/* <Link to={"add-user"} className="hover:bg-green-600
                hover:border-2 hover:border-white hover:text-white-200 hover:shadow-md rounded-lg bg-white font-bold text-black py-2 px-2"
                
            >
                    Add User 
            </Link> */}
          
        </div>
       
  //      <button className="hover:bg-green-600
  //      hover:border-2 hover:border-white hover:text-white-200 hover:shadow-md rounded-lg bg-white font-bold text-black py-2 px-2"
  //      onClick={()=>setShowModal(true)}
  //      >
       
  //      Add User 
  //  </button>
            
            
    )
    
}

export default Navbar;