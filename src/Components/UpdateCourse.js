import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const UpdateCourse = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [course, setCourse] = useState({
    courseid: "",
    batchcode: "",
    subject: "",
  });

  const { courseId, batchCode, subject } = course;     // courseId,batchCode,subject comes from backend  

  const onInputChange = (e) => {
    setCourse({ ...course, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadCourses();
  }, []);

  const loadCourses = async () => {
    const result = await axios.get(`http://localhost:2000/courses/${id}`);
    setCourse(result.data);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:2000/courses/`, course);
    navigate("/");
  };

  return (
    <>
      <div className="container">
        <h2 className="text-center">Update Course Details</h2>
        <form onSubmit={(e) => onSubmit(e)}>
          <div className="mb-3">
            <h5>Course Id:</h5>
            <input
              type="text"
              name="courseId"
              value={courseId}
              className="form-control"
              autoComplete="off"
              onChange={(e) => onInputChange(e)}
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
            <h5>Subject</h5>
            <input
              type="text"
              name="subject"
              className="form-control"
              autoComplete="off"
              value={subject}
              onChange={(e) => onInputChange(e)}
            />
          </div>
          <button type="submit" className="btn btn-warning">
            Update Details
          </button>
        </form>
      </div>
    </>
  );
};

export default UpdateCourse;
