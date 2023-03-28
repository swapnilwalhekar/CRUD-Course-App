import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddCoursePage=()=> {
  const [course, setCourse] = useState({
    courseid: "",
    batchcode: "",
    subject: ""
  });
 
  const navigate = useNavigate();
  const { courseId,batchCode,subject } = course;      // courseId,batchCode,subject comes from backend
  
  const onInputChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:2000/courses", course);
    navigate("/");
  };

  return (
    <div className="container">
      <h2 className="text-center">Add New course</h2>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="mb-3">
          <h5 >Course Id:</h5>
          <input
            type="text"
            name="courseid"
            className="form-control"
            placeholder="Course id automatically generates..."
            readOnly
          />
        </div>    
        <div className="mb-3">
          <h5>Enter Batch Code </h5>
          <input
            type="text"
            name="batchCode"
            className="form-control"
            autoComplete="off"
            value={batchCode}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <div className="mb-3">
          <h5 >Subject</h5>
          <input
            type="text"
            name="subject"
            className="form-control"
            autoComplete="off"
            value={subject}
            onChange={(e) => onInputChange(e)}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Add Course
        </button>
      </form>
    </div>
  );
}

export default AddCoursePage;
