import Dashboard from "../component/dashboard";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios"
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function TeacherUpdate(){


    const [name,setName] =useState("")
    const [title,settitle] =useState("")
    const [email,setEmail] =useState("")
    const [number,setNumber] =useState("")
    const [salary,setSalary] =useState("")
    const navigate =useNavigate()
    const params =useParams()

    const getOneSTeac =()=>{
  
        axios.get(`http://localhost:3001/teachers/${params.id}`).then((response)=>{
            setName(response.data[0].name)
            settitle(response.data[0].title)
            setEmail(response.data[0].email)
            setNumber(response.data[0].number)
            setSalary(response.data[0].salary)
            
            
        }).catch((error)=>{
    console.log(error)
        })
    }

    useEffect(()=>{
        getOneSTeac()
    },[])

    const UpdateClass =(event)=>{

        event.preventDefault()
        axios.put(`http://localhost:3001/teachers/update/${params.id}`,{
            "name":name,
            "title":title,
            "email":email,
            "number":number,
            "salary":salary,
         
      }).then((response)=>{
    
        toast(" teacher updated sucessfully!",{
            onClose: () =>  navigate("/teacheres"),
            position:"top-right",
            autoClose:1000,
            hideProgressBar:false,
         });
      }).catch((error)=>{
        console.log(error)
      })
      }





















    return<div>
<Dashboard/>
<div className="formd">
<form>
<h1>update Teacher Form</h1>

<input type="text" placeholder="Enter your name" value={name} onChange={(event)=>{setName(event.target.value)}}/><br></br>
<input type="text" placeholder="Enter your title" value={title} onChange={(event)=>{settitle(event.target.value)}}/><br></br>
<input type="email" placeholder="Enter your email" value={email} onChange={(event)=>{setEmail(event.target.value)}}/><br></br>
<input type="number" placeholder="Enter your number"value={number} onChange={(event)=>{setNumber(event.target.value)}}/><br></br>
<input type="text" placeholder="Enter your salary" value={salary} onChange={(event)=>{setSalary(event.target.value)}}/><br></br>
<input type="file" placeholder="select image"></input>
<button className="tar" onClick={UpdateClass}>update Teacher</button>

</form>
<ToastContainer/>
</div>


  </div>


}




















export default TeacherUpdate;