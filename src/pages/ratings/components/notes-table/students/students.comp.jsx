import React from 'react';
import'./students.style.css';

const Students = (props) => {
    return (
        <div className="students-container">
            {props.product.name} {''}
            {
                 props.product.grade <3
                ?
                 <span className="students-without-stock"> {props.product.grade}</span>
                :
                < span>{props.product.grade}</span>
            }
               {' '} {props.product.gender}
        </div>
    
 );
}
export default Students ;  







