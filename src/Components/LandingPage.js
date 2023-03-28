import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const [data,setData]=useState(null);

  useEffect(()=>{
    loadCourses();
  },[])

  const loadCourses=()=>{
    fetch("http://localhost:2000/courses")
    .then(res=>res.json())
    .then(data=>setData(data))
  }

  const handleDelete=async(id)=>{
    await axios.delete(`http://localhost:2000/courses/${id}`);
    loadCourses();
  }
 
  return (
    <>
      <div className='container'>
        <hr/>
        <Link className="btn btn-success" exact to="/courses">
            Add New Course
        </Link><hr/>
        <table >
          <tr>
            <th>Course ID</th>
            <th>Batch Code</th>
            <th>Subject</th>
            <th>Actions</th>
          </tr>
      {data && data.map(item=>
          <tr key={item.courseId}>
            <td>{item.courseId}</td>
            <td>{item.batchCode}</td>
            <td>{item.subject}</td>
            <td>
              <Link className="btn btn-primary" exact to={`/course/view/${item.courseId}`}>View</Link>{" "}
              <Link className="btn btn-warning" exact to={`/course/update/${item.courseId}`}>Update</Link>{" "}
              <button className='btn btn-danger' onClick={()=>handleDelete(item.courseId)}>Delete</button>{" "}
            </td>
          </tr>
      )}
      </table><hr/>
    </div>
  </> 
  )
}

export default LandingPage;
