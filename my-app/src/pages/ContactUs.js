import React, { useState } from 'react';
import axios from 'axios';
import '../css/ContactUs.css';

function ContactUs() {
  const [name, setName] = useState('');
  const [isValidName,setIsValidName]=useState(true);
  const [company, setCompany] = useState('');
  const [isValidCompany,setIsValidCompany]=useState(true);
  const [email, setEmail] = useState('');
  const [isValidEmail,setIsValidEmail]=useState(true);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isValidPhoneNumber,setIsValidPhoneNumber]=useState(true);
  const [details, setDetails] = useState('');
  const [isValidDetails,setIsValidDetails]=useState(true);

  const handleNameChange = (event) => {
    const name = event.target.value;
    setName(name);
    setIsValidName(validateName(name));

  };

  const handleCompanyChange = (event) => {
    const company = event.target.value;
    setCompany(company);
    setIsValidCompany(validateCompany(company));

  };

  const handleEmailChange = (event) => {
    const email = event.target.value;
    setEmail(email);
    setIsValidEmail(validateEmail(email));

  };

  const handlePhoneNumberChange = (event) => {
    const phoneNumber = event.target.value;
    setPhoneNumber(phoneNumber);
    setIsValidPhoneNumber(validatePhone(phoneNumber));

  };

  const handleDetailsChange = (event) => {
    const details = event.target.value;
    setDetails(details);
    setIsValidDetails(validateDetails(details));

  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post('http://localhost:3001/insertContact', {
        name,
        company,
        email,
        phoneNumber,
        details
      });
      alert('Successful');
    } catch (error) {
      console.log('Gabim gjatë dërgimit të formës:', error);
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

  const validatePhone = (phoneNumber) => {
    const regex = /^\d{10}$/;
    return regex.test(phoneNumber);
  };

  const validateDetails = (details) => {
    const regex=/^[A-Za-z\s]{1,50}$/;
    return regex.test(details);
  };

  return (
    <div className="container-contactus">
      <div className="wrapper">
        <div className="company-info">
          <h3>Learnfy</h3>
          <ul>
            <li>
              <i className="fas fa-road"></i> Prishtine, Kosovo
            </li>
            <li>
              <i className="fas fa-phone"></i> (555) 555-5555
            </li>
            <li>
              <i className="fas fa-envelope"></i> contactus@learnfy.com
            </li>
          </ul>
        </div>

        <div className="contact-contactus">
          <form id="contact-form" onSubmit={handleSubmit}>
            <p>
              <label>Name</label>
              <input type="text" name="name" id="name" required value={name} onChange={handleNameChange} />
            </p>

            <p>
              <label>Company</label>
              <input type="text" name="company" id="company" value={company} onChange={handleCompanyChange} />
            </p>

            <p>
              <label>E-mail Address</label>
              <input type="email" name="email" id="emaili" required value={email} onChange={handleEmailChange} />
            </p>

            <p>
              <label>Phone Number</label>
              <input type="text" name="phoneNumber" id="phone" value={phoneNumber} onChange={handlePhoneNumberChange} />
            </p>

            <p className="full">
              <label>Details</label>
              <textarea name="details" rows="5" id="details" value={details} onChange={handleDetailsChange}></textarea>
            </p>

            <p className="full">
            <button type="submit" onClick={() => { alert('Successful Signup!') }}
            disabled={ 
              !isValidName ||
              !isValidCompany ||  
              !isValidEmail || 
              !isValidPhoneNumber ||
              !isValidDetails ||
              !name ||
              !company || 
              !email || 
              !phoneNumber ||
              !details
            }
            >
              Submit
            </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
