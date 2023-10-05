
import { useState } from "react";
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

import Dashboard from "../component/dashboard";

function TeacherForm(){

    const [name,setName] =useState("")
    const [title,settitle] =useState("")
    const [email,setEmail] =useState("")
    const [number,setNumber] =useState("")
    const [salary,setSalary] =useState("")

    const navigate =useNavigate()
    const registerTeacher =(event) =>{
        event.preventDefault()
    axios.post("http://localhost:3001/teacher/register",{
   
        "name":name,
        "title":title,
        "email":email,
        "number":number,
        "salary":salary,
    
    }).then((response)=>{
        toast("teacher resgistered sucessfully",{
            onClose:()=> navigate("/teacheres"),
            autoClose:1000,
            hideProgressBar:false,
            position:"top-right"
        })
    }).catch((error)=>{
        console.log(error)
    })
    
    }
    
    return <div>
        <Dashboard/>
  <div>


  <div className="formd">
<form>
<h1>Teacher Form</h1>

<input type="text" placeholder="Enter your name" value={name} onChange={(event)=>{setName(event.target.value)}}/><br></br>
<input type="text" placeholder="Enter your title" value={title} onChange={(event)=>{settitle(event.target.value)}}/><br></br>
<input type="email" placeholder="Enter your email" value={email} onChange={(event)=>{setEmail(event.target.value)}}/><br></br>
<input type="number" placeholder="Enter your number"value={number} onChange={(event)=>{setNumber(event.target.value)}}/><br></br>
<input type="text" placeholder="Enter your salary" value={salary} onChange={(event)=>{setSalary(event.target.value)}}/><br></br>
<input type="file" placeholder="select image"></input>
<button className="tar" onClick={registerTeacher}>Add Teacher</button>

</form>
<ToastContainer/>
</div>


  </div>
    </div>
}
export default TeacherForm;