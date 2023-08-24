import React, {useState} from 'react';
import './Signup.css'
import Axios from "axios";
import { Link } from 'react-router-dom';


function RegistrationFormProfesori() {
    
  const [Emri, setEmri] = useState('');
  const [isValidName,setIsValidName]=useState(true);
  const [Mbiemri, setMbiemri] = useState('');
  const [isValidLastName,setIsValidLastName]=useState(true);
  const [Email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [Passwordi, setPasswordi] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [Subject, setSubject] = useState('');
  const [isValidSubject, setIsValidSubject] = useState(true);
  const [Roli, setRoli] = useState('Profesor');



    const handleSubmit = (event) => {
      event.preventDefault();
      try {
        Axios.post("http://localhost:3001/insertProfesor", {
          Emri,
          Mbiemri,
          Email,
          Passwordi,
          Subject,
          Roli
        });
      } catch (err) {
        console.log(err.message);
      }
    };
  
  
    const validateName=(Emri)=>{
      const regex=/^[A-Za-z\s]{1,50}$/;
      return regex.test(Emri);     
    }
   
    const validateLastName=(Mbiemri)=>{
      const regex=/^[A-Za-z\s]{1,50}$/;
      return regex.test(Mbiemri);     
    }
  
    
    const validateEmail = (Email) => {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(Email);
    };
  
    const validatePassword = (Passwordi) => {
      const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
      return regex.test(Passwordi);
    };
    const validateSubject=(Subject)=>{
      const regex=/^[A-Za-z\s]{1,50}$/;
      return regex.test(Subject);     
    }

    const handleFirstNameChange = (event) => {
      const Emri=event.target.value;
      setEmri(Emri);
      setIsValidName(validateName(Emri));
    };
  
    const handleLastNameChange = (event) => {
      const Mbiemri = event.target.value;
      setMbiemri(Mbiemri);
      setIsValidLastName(validateLastName(Mbiemri));
    };
  
    const handleEmailChange = (event) => {
      const Email = event.target.value;
      setEmail(Email);
      setIsValidEmail(validateEmail(Email));
    };
  
    const handlePasswordChange = (event) => {
      const Passwordi = event.target.value;
      setPasswordi(Passwordi);
      setIsValidPassword(validatePassword(Passwordi));
    };
    const handleSubjectChange = (event) => {
      const Subject = event.target.value;
      setSubject(Subject);
      setIsValidSubject(validateSubject(Subject));
    };

    return (
      <>
      <form onSubmit={handleSubmit} className='form-signeups'>
        <h1 style={{ color: '#0e4c92' }}>Signup</h1>
        <label htmlFor="emri">First Name:</label>
        <input
          type="text"
          id="emri-signeup"
          name="emri"
          value={Emri}
          onChange={handleFirstNameChange}
        />
        {
        isValidName ? null : 
        (
           <span style={{ color: 'red' }}>Please enter a valid First Name</span>
        )
        }
        <br />
  
        <label htmlFor="Mbiemri">Last Name:</label>
        <input
          type="text"
          id="mbiemri-signeup"
          name="mbiemri"
          value={Mbiemri}
          onChange={handleLastNameChange}
        />
        {
        isValidLastName ? null : 
        (
           <span style={{ color: 'red' }}>Please enter a valid LastName</span>
        )
        }
        <br />
  
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          id="email-signeup"
          name="email"
          value={Email}
          onChange={handleEmailChange}
        />
        {
        isValidEmail ? null : 
        (
          <span style={{ color: 'red' }}>Please enter a valid email address</span>
        )
        }
        <br />
  
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password-signeup"
          name="password"
          value={Passwordi}
          onChange={handlePasswordChange}
        />
        {
        isValidPassword ? null : 
        (
          <span style={{ color: 'red' }}>
            Password must contain at least 8 characters, one uppercase letter, one lowercase letter,one number and one special character
          </span>
        )
        }
        <label htmlFor="Subject">Subject:</label>
        <input
          type="Subject"
          id="Subject-signeup"
          name="Subject"
          value={Subject}
          onChange={handleSubjectChange}
        />
        <p>Already have an account? <Link to='/Login'>
          {/* <Link href="./Login"> */}
            Login
         </Link></p>
        <button type="submit" onClick={() => { alert('Successful Signup!') }}
        disabled={ 
        !isValidName ||
        !isValidLastName ||  
        !isValidEmail || 
        !isValidPassword ||
        // !isValidRoli ||
        !Emri ||
        !Mbiemri || 
        !Email || 
        !Passwordi
        }
        >
          Signup
        </button>
      </form>
      </>
    ); 
}

export default RegistrationFormProfesori;