import Dashboard from "../component/dashboard";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios"
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function SubUpdate(){
    const [subjectName,setSubName] =useState("")
    const [subjectCode,setSubCode] =useState("")
    const [subTeacher,setSubTeacher] =useState("")
    const navigate =useNavigate()
    const params =useParams()


    const getOneSubject =()=>{
  
        axios.get(`http://localhost:3001/subjects/${params.id}`).then((response)=>{
            setSubName(response.data[0].subjectName)
            setSubCode(response.data[0].subjectCode)
            setSubTeacher(response.data[0].subTeacher)
            
            
        }).catch((error)=>{
    console.log(error)
        })
    }

    useEffect(()=>{
        getOneSubject()
    },[])
    const UpdateSubject =(event)=>{

        event.preventDefault()
        axios.put(`http://localhost:3001/subjects/update/${params.id}`,{
            "subjectName":subjectName,
        "subjectCode":subjectCode,
        "subTeacher":subTeacher
         
      }).then((response)=>{
    
        toast("Subject updated sucessfully!",{
            onClose: () =>  navigate("/subjects"),
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
<input type="text" placeholder="Enter your subjectName"  value={subjectName} onChange={(event)=>{setSubName(event.target.value)}}/><br></br>
<input type="number" placeholder="Enter your subjectCode" value={subjectCode} onChange={(event)=>{setSubCode(event.target.value)}}/><br></br>
<input type="text" placeholder="Enter your subTeacher" value={subTeacher} onChange={(event)=>{setSubTeacher(event.target.value)}}/><br></br>
<input type="file" placeholder="select image"></input>
<button className="updateBUT" onClick={UpdateSubject}>update</button>

</form>
<ToastContainer/>
</div>


</div>


}
export default SubUpdate;