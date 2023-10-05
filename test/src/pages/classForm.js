import { useState } from "react";
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

import Dashboard from "../component/dashboard";

function ClassForm(){

    const [className,setclassName] =useState("")
    const [classNum,setClassNum] =useState("")
    const [classTime,setclassTime] =useState("")
    const navigate =useNavigate()
    const registerClass =(event) =>{
        event.preventDefault()
    axios.post("http://localhost:3001/class/register",{
   
        "className":className,
        "classNum":classNum,
        "classTime":classTime
      
    
    }).then((response)=>{
        toast("class resgistered sucessfully",{
            onClose:()=> navigate("/classes"),
            autoClose:1000,
            hideProgressBar:false,
            position:"top-right"
        })
    }).catch((error)=>{
        console.log(error)
    })
    
    }









    return<div>
<Dashboard/>
<div className="formd">
<form>
<h1>class Form</h1>

<input type="text" placeholder="Enter your className" value={className} onChange={(event)=>{setclassName(event.target.value)}}/><br></br>
<input type="number" placeholder="Enter your classNum" value={classNum} onChange={(event)=>{setClassNum(event.target.value)}}/><br></br>
<input type="text" placeholder="Enter your classTime" value={classTime} onChange={(event)=>{setclassTime(event.target.value)}}/><br></br>
<input type="file" placeholder="select image"></input>
<button className="tar" onClick={registerClass}>Add class</button>

</form>
<ToastContainer/>
</div>
        
    </div>
}

export default ClassForm;