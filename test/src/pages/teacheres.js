import { useState,useEffect } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import Dashboard from "../component/dashboard";

function Teachers(){
    const [teacher,setTeacher]=useState([]);
    const getAllTeachers = ()=>{
        axios.get("http://localhost:3001/teachers").then((response)=>{
            setTeacher(response.data)
        }).catch((error)=>{
            console.log(error)
        })
    }
    
    
    useEffect(()=>{
        getAllTeachers()
    },[])





    const  deleteTeacher=(id)=>{
        axios.delete(`http://localhost:3001/teachers/delete/${id}`).then((respose)=>{
            getAllTeachers()
            alert("deleted Teacher")
        }).catch((error)=>{
            console.log(error)
        })
    }


    return <div>
        <Dashboard/>

        <div className="te"> <Link to={"/teacherForm"}><button>Add Teacher</button></Link></div>
       <div className="teaForm">


       <div className="main">

            
<table>
    <tr>

        
        <th>
         Name
        </th>
        <th>
            Title
        </th>
        <th>
        Email
        </th>
        <th>
        Salary
        </th>
        <th>
            Number
        </th>
        <th>
            Delete
        </th>
        <th>
       update
        </th>
       
    </tr>
{
teacher.map((data,index)=>(
<tr key={index}>
<td>{data.name}</td>
<td>{data.title}</td>
<td>{data.email}</td>
<td>${data.salary}</td>
<td>{data.number}</td>
<td><button className="bott1"  onClick={()=>deleteTeacher(data._id)}>Delete</button></td>
<td><Link to={`/teacherUpdate/${data._id}`}><button className="bott2">update</button></Link></td>

</tr>
))

}
</table>


</div>







       </div>
    </div>
}
export default Teachers;