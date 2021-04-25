import React from 'react';
import'./course.style.css';


const Courses = (props) => {
    return (
       <div className="courses-container">
           {props.asCourses}
       </div> 
           
    );
}
export default Courses;          