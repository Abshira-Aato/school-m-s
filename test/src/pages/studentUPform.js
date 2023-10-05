import Dashboard from "../component/dashboard";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios"
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function StudenUPdate(){

    const [ID,setID] =useState("")
const [name,setName] =useState("")
const [age,setAge] =useState("")
const [address,setAddress] =useState("")
const [number,setNumber] =useState("")
const [parentName,setParentName] =useState("")
const [className,setClassName] =useState("")
const navigate =useNavigate()
const params =useParams()


const getOneStudent =()=>{

    axios.get(`http://localhost:3001/students/${params.id}`).then((response)=>{
        setID(response.data[0].ID)
        setName(response.data[0].name)
        setAge(response.data[0].age)
        setAddress(response.data[0].address)
        setNumber(response.data[0].number)
        setParentName(response.data[0].parentName)
        setClassName(response.data[0].className)
        
    }).catch((error)=>{
console.log(error)
    })
}

useEffect(()=>{
    getOneStudent()
},[])


const UpdateNotes =(event)=>{

    event.preventDefault()
  
    axios.put(`http://localhost:3001/students/update/${params.id}`,{
        "ID":ID,
        "name":name,
        "age":age,
        "address":address,
        "number":number,
        "parentName":parentName,
        "className":className
  }).then((response)=>{

    toast("Data updated sucessfully!",{
        onClose: () =>  navigate ("/students"),
        position:"top-right",
        autoClose:1000,
        hideProgressBar:false,
     });
  }).catch((error)=>{
    console.log(error)
  })
  }
    return<div className="update1">
        <Dashboard/>
        <div className="formd">
<form>
<h1>Student Form</h1>
<label></label>
<input type="text" placeholder="Enter your iD"  value={ID} onChange={(event)=>{setID(event.target.value)}}/><br></br>
<input type="text" placeholder="Enter your name" value={name} onChange={(event)=>{setName(event.target.value)}}/><br></br>
<input type="number" placeholder="Enter your age" value={age} onChange={(event)=>{setAge(event.target.value)}}/><br></br>
<input type="text" placeholder="Enter your address" value={address} onChange={(event)=>{setAddress(event.target.value)}}/><br></br>
<input type="number" placeholder="Enter your number"value={number} onChange={(event)=>{setNumber(event.target.value)}}/><br></br>
<input type="text" placeholder="Enter your parentNmae" value={parentName} onChange={(event)=>{setParentName(event.target.value)}}/><br></br>
<input type="text" placeholder="Enter your class" value={className} onChange={(event)=>{setClassName(event.target.value)}}/><br></br>
<input type="file" placeholder="select image"></input>
<button className="stUdate" onClick={UpdateNotes}>Update Student</button>

</form>
<ToastContainer/>
</div>
    </div>
}

export default StudenUPdate;