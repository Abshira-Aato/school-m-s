import { Link } from "react-router-dom";
import Dashboard from "../component/dashboard"
import axios from "axios";
import { useEffect, useState } from "react";


function Classes() {
    const [classes, setClass] = useState([]);
    const getAllClasses = () => {
        axios.get("http://localhost:3001/classes").then((response) => {
            setClass(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }


    useEffect(() => {
        getAllClasses()
    }, [])



    const deleteClass = (id) => {
        axios.delete(`http://localhost:3001/classes/delete/${id}`).then((respose) => {
            getAllClasses()
            alert("deleted class")
        }).catch((error) => {
            console.log(error)
        })
    }











    return <div>

        <Dashboard />

        <div className="classdiv">

            <Link to={"/classForm"}> <button className="te"  >Add class</button></Link>


            <div className="clasmain">


                <table>
                    <tr>


                        <th>
                            ClasName
                        </th>
                        <th>
                            ClassNum
                        </th>
                        <th>
                            classTime
                        </th>

                        <th>
                            Delete
                        </th>
                        <th>
                            update
                        </th>

                    </tr>
                    {
                        classes.map((data, index) => (
                            <tr key={index}>
                                <td>{data.className}</td>
                                <td>{data.classNum}</td>
                                <td>{data.classTime}</td>

                                <td><button className="bott1" onClick={() => deleteClass(data._id)}>Delete</button></td>
                                <td><Link to={`/classupdate/${data._id}`}><button className="bott2">update</button></Link></td>

                            </tr>
                        ))

                    }
                </table>


            </div>

        </div>
    </div>
}
export default Classes;