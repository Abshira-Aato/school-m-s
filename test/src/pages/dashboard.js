
import { useEffect, useState } from "react";
import Dashboard from "../component/dashboard";
import axios from "axios";
import {useNavigate } from "react-router-dom";

function Dash() {
    const navigate=useNavigate()
    const admin =localStorage.getItem("admin")
const protectRoute =()=>{
    if (admin){
        navigate("/")
    }
    else{
        navigate("/logout")
    }
}
useEffect(()=>{
    protectRoute()
},[])




    const [totalStudent, SetTotalStudent] = useState("");
    const [totalSalary, setTotalSalary] = useState("");
    const [totalteacher, setTotalTeacher] = useState("");
    const getTotalTaecher = () => {
        axios.get("http://localhost:3001/totalTeachers").then((response) => {
            setTotalTeacher(response.data.data)
        })
    }

    const getTotalStudent = () => {
        axios.get("http://localhost:3001/total").then((response) => {
            SetTotalStudent(response.data.data)
        })
    }

    const getTotalSalary = () => {
        axios.get("http://localhost:3001/teacher/salary").then((response) => {
            setTotalSalary(response.data.totalSalary[0].total)
        })
    }




    useEffect(() => {
        getTotalTaecher()
        getTotalStudent()
        getTotalSalary()
    }, [])






    return <div >

        <Dashboard />
        <div className="ba1">

            <div className="div1">
                <h1>Total Student</h1>
                <h1>{totalStudent}</h1>
            </div>
            <div className="div2">
                <h1>Total Teachers </h1>
                <h1>{totalteacher}</h1>
            </div>
            <div className="div1">
                <h1>Total Salary</h1>
                <h1>{totalSalary}</h1>

            </div>

        </div>

    </div>
}
export default Dash;

