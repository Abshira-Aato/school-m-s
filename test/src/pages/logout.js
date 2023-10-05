import { useState } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";


function Log(){
const navigate=useNavigate()
    const [username,setUsename] =useState("")
    const [password,setPassword] =useState("")

const loginAdmin = (event)=>{
    event.preventDefault()
    axios.post("http://localhost:3001/admin/login",
    {
        "username":username,
        "password":password
    }).then((response)=>{

        if(response.data.username){
            localStorage.setItem("admin",JSON.stringify(response.data))
            navigate("/")
        }
        else{
            alert("username or password incorect!")
        }
       
    }).catch((error)=>{
        console.log(error)
    })
}

    return <div>
   <div className="admin-login">
<form className="form-log">
<input type="text" placeholder="Enter your username" value={username} onChange={(event)=>{
    setUsename(event.target.value)
}}/><br></br>
<input type="text" placeholder="enter your password"    value={password} onChange={(event)=>{
    setPassword(event.target.value)
}}/><br></br>
<button onClick={loginAdmin}>login</button>
</form>


   </div>
    </div>
}
export default Log;