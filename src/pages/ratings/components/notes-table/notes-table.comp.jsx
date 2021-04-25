import React from 'react';
import Courses from './course/course.comp';
import Students from './students/students.comp';
import'./notes-table.style.css';


const NotesTable = () => {
    return (
       <div className="notes-table-container">
          <div className="Programación">Name     Grade     Gender </div>
            <Courses asCourses="Programación IV"/>
            <Students product={{
                name:"Luis",
                grade:3.5,
                gender:"M",
                
                
            }}/>
            <Students product={{
                name:"Joaquin",
                grade:2.0,
                gender:"M",
                
            }}/>
            <Students product={{
                name:"Laura",
                grade:4.7,
               
                
                
            }}/>
            <Students product={{
                name:"Camilo",
                grade:2.8,
                gender:"M",
               
            }}/>
            <Students product={{
                name:"Jhon",
                grade:3.6,
                gender:"M",
               
            }}/>
            <Students product={{
                name:"Andres",
                grade:3.0,
                gender:"M",
                
            }}/>
            <Students product={{
                name:"Luisa",
                grade:3.2,
                gender:"F",
                
            }}/>
<Courses asCourses="Practica Investigativa"/>
            <Students product={{
                name:"Carlos",
                grade:2.5,
                gender:"M",
               
            }}/>
            <Students product={{
                name:"Antonio",
                grade:3.5,
                gender:"M",
                
            }}/>
            <Students product={{
                name:"Felipe",
                grade:4.9,
               
            }}/>
            <Students product={{
                name:"Lorena",
                grade:2.2,
                gender:"F",
                
            }}/>
            <Students product={{
                name:"Leonardo",
                grade:5.0,
                gender:"M",
                
            }}/>
            <Students product={{
                name:"Luis",
                grade:3.6,
                gender:"M",
                
            }}/>
            <Students product={{
                name:"Arturo",
                grade:3.0,
                gender:"M",
               
            }}/>
            <Courses asCourses="Ingles V"/>
            <Students product={{
                name:"Alexandra",
                grade:3.5,
                gender:"F",
                img: 'public',
              
            }}/>
            <Students product={{
                name:"Valentina",
                grade:4.8,
                gender:"F",
                
            }}/>
            <Students product={{
                name:"Laura",
                grade:2.6,
                gender:"F",
               
            }}/>
            <Students product={{
                name:"Camilo",
                grade:4.0,
                gender:"M",
                
            }}/>
            <Students product={{
                name:"Juan",
                grade:4.9,
                gender:"M",
               
            }}/>
            <Students product={{
                name:"Eduardo",
                grade:3.0,
                gender:"M",
                
            }}/>
            <Students product={{
                name:"Miguel",
                grade:3.1,
                gender:"M",
                
            }}/>


               
       </div>
      
     );
}
export default NotesTable;          