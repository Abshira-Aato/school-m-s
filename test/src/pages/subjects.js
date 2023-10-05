import { Link } from "react-router-dom";

import axios from "axios";
import { useEffect, useState } from "react";


import Dashboard from "../component/dashboard"

function Subjects(){


    const [subjects, setSubject] = useState([]);
    const getAllSubject = () => {
        axios.get("http://localhost:3001/subjects").then((response) => {
            setSubject(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }

    useEffect(() => {
        getAllSubject()
    }, [])


    const deleteSubject = (id) => {
        axios.delete(`http://localhost:3001/subjects/delete/${id}`).then((respose) => {
            getAllSubject()
            alert("deleted subject")
        }).catch((error) => {
            console.log(error)
        })
    }

    const SearchHandle =(event) =>{
        let key = event.target.value;
        if(key){
            axios.get(`http://localhost:3001/subjects/data/${key}`).then((response)=>{
                setSubject(response.data)
            }).catch((error)=>{
                console.log(error)
            })
        }
        else{
            getAllSubject()
    
        }
    }









    return <div>
        <Dashboard/>
    <div className="classdiv">
    <div className="area">
<Link to={"/sujectForm"}> <button className="subBOT"  >Add subject</button></Link>
<textarea onChange={SearchHandle}></textarea></div>

<div className="clasmain">


    <table>
        <tr>


            <th>
            subjectName
            </th>
            <th>
                subjectCode
            </th>
            <th>
                subTeacher
            </th>

            <th>
                Delete
            </th>
            <th>
                update
            </th>

        </tr>
        {
            subjects.map((data, index) => (
                <tr key={index}>
                    <td>{data.subjectName}</td>
                    <td>{data.subjectCode}</td>
                    <td>{data.subTeacher}</td>

                    <td><button className="bott1" onClick={() => deleteSubject(data._id)}>Delete</button></td>
                    <td><Link to={`/subUpdate/${data._id}`}><button className="bott2">update</button></Link></td>

                </tr>
            ))

        }
    </table>


</div>
</div>
    </div>
}
export default Subjects;