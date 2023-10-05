import Dashboard from "../component/dashboard";
import { useState } from "react";
import axios from "axios"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

function  StudentForm(){
const [ID,setID] =useState("")
const [name,setName] =useState("")
const [age,setAge] =useState("")
const [address,setAddress] =useState("")
const [number,setNumber] =useState("")
const [parentName,setParentName] =useState("")
const [className,setClassName] =useState("")

const [image,setImage] = useState(null)

const navigate =useNavigate()
const registerStudent =(event) =>{

    let formData = new FormData()
    
    formData.append("ID",ID)
    formData.append("name",name)
    formData.append("age",age)
    formData.append("address",address)
    formData.append("number",number)
    formData.append("parentName",parentName)
    formData.append("className",className)
    formData.append("image",image)

    event.preventDefault()
axios.post("http://localhost:3001/register",formData,{
    headers:{
        'Content-Type' :'multipart/form-data'
    }
  
}).then((response)=>{
    toast("student resgistered sucessfully",{
        onClose:()=> navigate("/Students"),
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

<div>
<div className="formd">
<form onSubmit={registerStudent}>

<h1>Student Form</h1>
<label></label>
<input type="text" placeholder="Enter your iD"  value={ID} onChange={(event)=>{setID(event.target.value)}}/><br></br>
<input type="text" placeholder="Enter your name" value={name} onChange={(event)=>{setName(event.target.value)}}/><br></br>
<input type="number" placeholder="Enter your age" value={age} onChange={(event)=>{setAge(event.target.value)}}/><br></br>
<input type="text" placeholder="Enter your address" value={address} onChange={(event)=>{setAddress(event.target.value)}}/><br></br>
<input type="number" placeholder="Enter your number"value={number} onChange={(event)=>{setNumber(event.target.value)}}/><br></br>
<input type="text" placeholder="Enter your parentNmae" value={parentName} onChange={(event)=>{setParentName(event.target.value)}}/><br></br>
<input type="text" placeholder="Enter your class" value={className} onChange={(event)=>{setClassName(event.target.value)}}/><br></br>
<input type="file" placeholder="select image" onChange={(event)=>{setImage(event.target.files[0])}}></input>
<button className="tar" type="submit"  >Add Student</button>

</form>
<ToastContainer/>
</div>



</div>
    </div>
}
export default StudentForm;