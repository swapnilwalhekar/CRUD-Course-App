import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ViewCourse = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [course, setCourse] = useState('');

  const { courseId, batchCode, subject } = course;     // courseId,batchCode,subject comes from backend  

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    const result = await axios.get(`http://localhost:2000/courses/${id}`);
    setCourse(result.data);
  };

  const backToHome=()=>{
    navigate('/')
  }

  return (
    <>
      <div className="container">
        <h2 className="text-center">Course Details</h2>
        <button className="btn btn-primary" onClick={()=>backToHome()}>Back to Home</button>
        <form>
          <div className="mb-3">
            <h5>Course Id : </h5>
            <input
              value={courseId}
              className="form-control"
              readOnly
            />
          </div>
          <div className="mb-3">
            <h5>Batch Code : </h5>
            <input
              className="form-control"
              value={batchCode}
              readOnly
            />
          </div>
          <div className="mb-3">
            <h5>Subject : </h5>
            <input
              className="form-control"
              value={subject}
              readOnly
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default ViewCourse;
