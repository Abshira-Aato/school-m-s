import { useState } from "react";
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

import Dashboard from "../component/dashboard";


function SubjectForm(){

    const [subjectName,setSubName] =useState("")
    const [subjectCode,setSubCode] =useState("")
    const [subTeacher,setSubTeacher] =useState("")
    const navigate =useNavigate()
    const registerSubject =(event) =>{
        event.preventDefault()
    axios.post("http://localhost:3001/subject/register",{
   
        "subjectName":subjectName,
        "subjectCode":subjectCode,
        "subTeacher":subTeacher
      
    
    }).then((response)=>{
        toast("subject resgistered sucessfully",{
            onClose:()=> navigate("/subjects"),
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
<h1>Subject Form</h1>

<input type="text" placeholder="Enter your subjectName" value={subjectName} onChange={(event)=>{setSubName(event.target.value)}}/><br></br>
<input type="number" placeholder="Enter your subjectCode" value={subjectCode} onChange={(event)=>{setSubCode(event.target.value)}}/><br></br>
<input type="text" placeholder="Enter your subTeacher" value={subTeacher} onChange={(event)=>{setSubTeacher(event.target.value)}}/><br></br>
<input type="file" placeholder="select image"></input>
<button className="tar" onClick={registerSubject}>Add Subject</button>

</form>
<ToastContainer/>
</div>
        
    </div>
}

export default SubjectForm;