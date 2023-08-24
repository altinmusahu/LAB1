import React, { useState } from 'react';
import Axios from "axios";
import { Link } from 'react-router-dom';
import '../css/partnerform.css';

function Partnerform() {

  const [name, setName] = useState('');
  const [isValidName, setIsValidName] = useState(true);
  const [company, setCompany] = useState('');
  const [isValidCompany, setIsValidCompaby] = useState(true);
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [coursecategory, setCourseCategory] = useState();
  const [isValidCourse, setIsValidCourse] = useState(true);


  const handleNameChange = (event) => {
    const name = event.target.value;
    setName(name);
    setIsValidEmail(validateName(name));
  };

  const handleCompanyChange = (event) => {
    const company = event.target.value;
    setCompany(company);
    setIsValidCompaby(validateCompany(company));
  };

  const handleEmailChange = (event) => {
    const email = event.target.value;
    setEmail(email);
    setIsValidEmail(validateEmail(email));
  };

  const handleCategoryChange = (event) => {
    const coursecategory = event.target.value;
    setCourseCategory(coursecategory);
    setIsValidCourse(validateCourse(coursecategory));
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      Axios.post("http://localhost:3001/insertPartners", {
        name,
        company,
        email,
        coursecategory
      });
    } catch (err) {
      console.log(err.message);
    }
  };
  const validateName=(name)=>{
    const regex=/^[A-Za-z\s]{1,50}$/;
    return regex.test(name);     
  }
  const validateCompany=(company)=>{
    const regex=/^[A-Za-z\s]{1,50}$/;
    return regex.test(company);     
  }

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };
  const validateCourse=(coursecategory)=>{
    const regex=/^[A-Za-z\s]{1,50}$/;
    return regex.test(coursecategory);     
  }


  return(

<div className="contact-partner">
          <form id="contact-form" onSubmit={handleSubmit}>
            <p>
              <label>Name</label>
              <input type="text" name="name" id="name" value={name}  onChange={handleNameChange}/>
            </p>

            <p>
              <label>Company</label>
              <input type="text" name="company" id="company" value={company}  onChange={handleCompanyChange}/>
            </p>

            <p>
              <label>E-mail Address</label>
              <input type="email" name="email" id="emaili" value={email} onChange={handleEmailChange}/>
            </p>

            <p>
              <label>Course category</label>
              <input type="text" name="courseCategory" id="category" value={coursecategory}  onChange={handleCategoryChange}/>
            </p>


            <p className="full">
            <button type="submit" onClick={() => {alert('Successful')}}
            disabled={ 
              !isValidName ||
              !isValidCompany ||  
              !isValidEmail || 
              !isValidCourse ||
              !name ||
              !company || 
              !email || 
              !coursecategory
              }
            >
              Submit
              </button>
            </p>
          </form> 
        </div>
        );
    }
    
    export default Partnerform;