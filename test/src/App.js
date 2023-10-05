import {Routes, Route} from "react-router-dom"
// import Dashboard from "./component/dashboard";
import Teachers from "./pages/teacheres";
import Classes from "./pages/classes";
import Student from "./pages/Students"
import Subjects from "./pages/subjects";
import Staf from "./pages/stafs";
import Log from "./pages/logout";
import StudentForm from "./pages/studentForm";
import StudenUPdate from "./pages/studentUPform";
import Dash from "./pages/dashboard";
import TeacherForm from "./pages/teacherForm";
import ClassForm from "./pages/classForm";
import ClassUpdate from "./pages/classupdate";
import TeacherUpdate from "./pages/teacherUpdate";
import SubjectForm from "./pages/sujectForm";
import SubUpdate from "./pages/subUpdate";
function App (){
    return <Routes>


{/* <Route path="/" element={<Dashboard/>}/> */}
<Route path="/Students" element ={<Student/>}/>
<Route path="/teacheres" element ={<Teachers/>}/>
<Route path="/classes" element ={<Classes />}/>
<Route path="/subjects" element ={<Subjects />}/>
<Route path="stafs" element={<Staf/>}/>
<Route path="/logout" element={<Log/>}/>
<Route path="/studentForm" element={<StudentForm/>}/>
<Route path="/studentUPform/:id" element={<StudenUPdate/>}/>
<Route path="/" element={<Dash/>}/>
<Route path="/teacherForm" element={<TeacherForm/>}/>
<Route path="/classForm" element={<ClassForm/>}/>
<Route path="/classupdate/:id" element={<ClassUpdate/>}/>
<Route path="/teacherUpdate/:id" element={<TeacherUpdate/>}/>
<Route path="/sujectForm" element={<SubjectForm/>}/>
<Route path="/subUpdate/:id" element={<SubUpdate/>}/>



    </Routes>
}
export default App;     




// function App (){

// const [item, setItem] =useState("")

// const [todos ,setTodos] =useState([])

// const handleItem =(event) =>{
//     event.preventDefault();
//     if(item){
//         setTodos([...todos,item])
//         setItem("")
//     }
// }

//     return <div className="container"> 
//         <div className="form">
// <h1>Our list of tools</h1>


// <form>
// <label>Enter Item</label><br/>
// <input type="text"  value={item} onChange={(event) =>{
//     setItem(event.target.value)
// }}/>
// <button onClick={handleItem}>Add</button>
// </form>

//     </div>
 
// {
// todos.map((newItem,index)=>(
//     <div className="item-parent">
//     <div className="item">
//         <p>{newItem}</p>
//     </div>
// </div>
// ))

// }
//     </div>
// }
// export default App;     

// import axios from "axios";
// import { useState } from "react";

// function App (){
//     const [photos,setPhotos] =useState([])

//     const getAllphotos = () =>{
//         axios.get("https://jsonplaceholder.typicode.com/posts").then((responsive) =>{
//             setPhotos(responsive.data)
//         })
//     }
//     return <div className="container">
//         <button onClick={getAllphotos}>Get data</button>

//         {
//             photos.map((title,index) =>(
//                 <div className="item-parent">
//                     <div className="item">
//                         <h5>{title.body}</h5>
//                         <p> {title.body}</p>
//                     </div>
//                 </div>
//             ))
//         }
//     </div>}
// export default App;  

// import axios from "axios";
// import { useState } from "react";

// function App (){
//     const [photos,setPhotos] =useState([])

//     const getAllphotos = () =>{
//         axios.get("https://fakestoreapi.com/products").then((responsive) =>{
//             setPhotos(responsive.data)
//         })
//     }
//     return <div className="container">
//         <button onClick={getAllphotos}>Get data</button>
// <div className="hooyo">
//         {
//             photos.map((title,index) =>(
//                 <div className="item-parent">
//                     <div className="item">
//                     <img src={title.image}/>
//                         <h5>{title.title}</h5>
//                         <h5>{title.price}</h5>
//                         <h5>{title.rating.rate}</h5>
//                         <p> {title.description}</p>
                      
//                     </div>
                    
//                 </div>
//             ))
//         }
//     </div></div>}
// export default App;


// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function App() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     async function fetchData() {
//       const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
//       setData(response.data);
     
//     }
    
//     fetchData();
    
//   }, []);

//   return (
//     <div>
//       <h1>Todo:</h1>
//       {data ? (
//         <p>{data.title}</p>
//       ) : (
//         <p>Loading...</p>
//       )}
//     </div>
// );}
// export default App;



// import React, { useState } from 'react';

// function App() {
//   const [personData, setPersonData] = useState({
//     name: 'Abshira',
//     age: 40,
//     address: 'km4'
//   });

//   return (
//     <div>
//       <h1>{personData.name}</h1>
//       <p>Age: {personData.age}</p>
//       <p>Address: {personData.address}</p>
//     </div>
//   );
// }

// export default App;