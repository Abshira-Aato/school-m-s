import Dashboard from "../component/dashboard";
import {Link} from "react-router-dom";
import { useState,useEffect } from "react";
import axios from "axios";







function Student(){
const [student,setStudent]=useState([]);
const getAllStudent = ()=>{
    axios.get("http://localhost:3001/students").then((response)=>{
        setStudent(response.data)
    }).catch((error)=>{
        console.log(error)
    })
}


useEffect(()=>{
    getAllStudent()
},[])
const  deleteStudent=(id)=>{
    axios.delete(`http://localhost:3001/students/delete/${id}`).then((respose)=>{
        getAllStudent()
        alert("deleted students")
    }).catch((error)=>{
        console.log(error)
    })
}

const SearchHandle =(event) =>{
    let key = event.target.value;
    if(key){
        axios.get(`http://localhost:3001/students/data/${key}`).then((response)=>{
            setStudent(response.data)
        }).catch((error)=>{
            console.log(error)
        })
    }
    else{
        getAllStudent()
    }
}










    return <div className="dashStu">
<Dashboard/>


< div className="Footer" >
    <div className="area">
<Link to="/studentForm"> <button className="tag">AddStudent</button> </Link>
<textarea onChange={SearchHandle}></textarea>
</div>
        <div className="mainn">
        
            
            <table>
         
                <tr>

                    <th>
                        ID
                    </th>
                    <th>
                        Name
                    </th>
                    <th>
                        Age
                    </th>
                    <th>
                    Address
                    </th>
                    <th>
                    Number
                    </th>
                    <th>
            parentName
                    </th>
                    <th>
            class
                    </th>
                    <th>
            image
                    </th>
                </tr>
{
student.map((data,index)=>(
    <tr key={index}>
<td>{data.ID}</td>
<td>{data.name}</td>
<td>{data.age}</td>
<td>{data.address}</td>
<td>{data.number}</td>
<td>{data.parentName}</td>
<td>{data.className}</td>
<td><img width="50px" height="50px" style={{borderRadius:"50%"}} src={`http://localhost:3001/images/${data.image}`}/></td>
<td><button className="bott1"  onClick={()=>deleteStudent(data._id)}>Delete</button></td>
<td><Link to={`/studentUPform/${data._id}`}><button className="bott2">update</button></Link></td>

    </tr>
))
     
}
            </table>


        </div>
       




    </div>
    </div>





}
export default Student;