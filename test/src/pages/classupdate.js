import Dashboard from "../component/dashboard";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios"
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function ClassUpdate(){
    const [className,setclassName] =useState("")
    const [classNum,setClassNum] =useState("")
    const [classTime,setclassTime] =useState("")
    const navigate =useNavigate()
    const params =useParams()


    const getOneSclass =()=>{
  
        axios.get(`http://localhost:3001/classes/${params.id}`).then((response)=>{
            setclassName(response.data[0].className)
            setClassNum(response.data[0].classNum)
            setclassTime(response.data[0].classTime)
            
            
        }).catch((error)=>{
    console.log(error)
        })
    }

    useEffect(()=>{
        getOneSclass()
    },[])
    const UpdateClass =(event)=>{

        event.preventDefault()
        axios.put(`http://localhost:3001/classes/update/${params.id}`,{
            "className":className,
            "classNum":classNum,
            "classTime":classTime,
         
      }).then((response)=>{
    
        toast("Class updated sucessfully!",{
            onClose: () =>  navigate("/classes"),
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
<h1>Update Form</h1>
<label></label>
<input type="text" placeholder="Enter your className"  value={className} onChange={(event)=>{setclassName(event.target.value)}}/><br></br>
<input type="number" placeholder="Enter your classNum" value={classNum} onChange={(event)=>{setClassNum(event.target.value)}}/><br></br>
<input type="text" placeholder="Enter your classTime" value={classTime} onChange={(event)=>{setclassTime(event.target.value)}}/><br></br>
<input type="file" placeholder="select image"></input>
<button className="updateBUT" onClick={UpdateClass}>update</button>

</form>
<ToastContainer/>
</div>


</div>


}
export default ClassUpdate;