import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {BiSolidDashboard} from "react-icons/bi";
import {FaUser} from "react-icons/fa";
import {FaChalkboardTeacher} from "react-icons/fa";
import {FaList} from "react-icons/fa";
import {AiOutlineClose} from "react-icons/ai";
import {SiGoogleclassroom} from "react-icons/si";
import {MdOutlineSubject} from "react-icons/md";
import {BiSolidUserPlus} from "react-icons/bi";
import {AiOutlineLogout} from "react-icons/ai";


function Dashboard(){

    const logout=()=>{
        localStorage.clear()
    }

    const[isOpen,setIsOpen] =useState(false);

    const handleBut=()=>{
        setIsOpen(!isOpen);
    };
    

    
        return<div className="parent1">
       
            <div className='dash'            style={{width: isOpen == true ? "54px" : ""}}>
   <button className="but1"   onClick={handleBut}  style={{marginLeft: isOpen == true ? "-12%" : "" ,display: isOpen == false? "block" : "none" }}><AiOutlineClose/></button>
    <button className="but2" onClick={handleBut}  style={{marginLeft: isOpen == true ? "-12%" : "" ,display: isOpen == true? "block" : "none" }}><FaList  /></button>
   
    <ul>
<li> <NavLink to="/"><BiSolidDashboard className="Sicon"/>Dashboard</NavLink> </li>
<li>  <NavLink to="/Students"><FaUser className="Sicon"/>Students</NavLink> </li>
<li> <NavLink to="/teacheres"><FaChalkboardTeacher className="Sicon"/>Teachers</NavLink></li>
<li><NavLink to="/classes"><SiGoogleclassroom className="Sicon"/>Classes</NavLink></li>
<li><NavLink to="/subjects"><MdOutlineSubject className="Sicon"/>Subjects</NavLink></li>
<li className="son"><NavLink to={"/stafs"}> <BiSolidUserPlus className="Sicon"/>Stafs </NavLink></li>
<li><NavLink  to={"/logout"} onClick={logout}  ><AiOutlineLogout className="Sicon"/>Logout</NavLink></li>

    </ul>
    
    
    
    
       
       </div>
   

       </div>
   
       }
    export default Dashboard;   