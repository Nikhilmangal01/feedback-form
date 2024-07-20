import React, { useState } from "react";
import './App.css';

const AssignmentTwo = () => {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [rating, setRating] = useState("");
  const [data, setData] = useState([]);


  const handleChange = (e) => {

    const { name, value } = e.target;
    if (name === "fullname") {
      setName(value)
    }
    else if (name === "department") {
      setDepartment(value)
    }
    else if (name === "rating") {
      setRating(value)
    }
    // console.log(name,"name");
    // console.log(value,"value")
  };
  const handelClick = () => {
    const obj = {
      name: name,
      department: department,
      rating: rating
    }
    setData([...data, obj])
    setName("");
    setDepartment("")
    setRating("");
  }

  return (
    <div className="container">
      <h1>EMPLOYEE FEEDBACK FORM</h1>
      <div className="employee-form">
        <div className="box1">
       Name : <input type="text" name="fullname" value={name} onChange={handleChange} placeholder="Enter Name" /></div>
       <div className="box2">Department :  <input type="text" name="department" value={department} onChange={handleChange} placeholder="Enter Department" /></div> 
       <div className="box4"> Rating :   <input type="text" name="rating" value={rating} onChange={handleChange} placeholder="Enter Rating" /> </div>
      </div>
      <div className="box3">
        <button onClick={handelClick}>Submit</button>
      </div>
      <div className="main">
        {data.map((item, index) => (
          
            <h2 key={index}>NAME: {item.name} || DEPARTMENT: {item.department} || RATING: {item.rating}</h2>
          
        ))}
      </div>




    </div>


  );
};

export default AssignmentTwo;

