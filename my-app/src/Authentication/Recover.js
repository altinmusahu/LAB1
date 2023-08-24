import React, { useState } from 'react';
import './Login.css';
import  './SignUp';
import {Link} from "react-router-dom";
import Navbar from '../components/Navbar';
import Axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
const Recover = () => {
 
  const [password, setPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(true);


  const handlePasswordChange = (event) => {
    const passwordValue = event.target.value;
    setPassword(passwordValue);
    setIsValidPassword(validatePassword(passwordValue));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitting...');
    const password = event.target.password.value;
    try{
    Axios.post("http://localhost:3001/login", {
        password
      }).then((data)=>{
        if(data.status=="ok"){
        alert("Login Successful");
        console.log("Bravo");
      }
    });
      
    } catch (err) {
      console.log(err.message);
    }
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
    return regex.test(password);
  };

  return (
    <>
    <Navbar/>
    <ToastContainer position='top-center'></ToastContainer>
    <form onSubmit={handleSubmit}>
        <h2 style={ {color: '#0e4c92', paddingBottom: '1em'} }>Recover Password</h2>
        <small className='forgot_password' style={{textAlign:'center'}}>Enter 6 digit OTP sent to your email address</small>

      {/* <label htmlFor="password">CODE:</label> */}
      <input
        type="password"
        id="password"
        name="password"
        placeholder='Your OTP code'
        value={password}
        onChange={handlePasswordChange}
      />
      {isValidPassword ? null : (
        <span style={{ color: 'red' }}>
          Password must contain at least 8 characters, one uppercase letter, one lowercase letter,one number and one special character
        </span>
      )}
      <small className='forgot_password'>Cant get OTP? <Link to='/recovery' className='reset'>Resend</Link></small>
      <br />
      
      {/* <p className='forgot_password'>Don't have an account? <Link to='/Signup' className='reset'>Sign Up</Link></p> */}
      <button type="submit" onClick={()=>{toast.success("Successfull Login!")}} disabled={ !isValidPassword  || !password} >
       Recover
      </button>
    </form>
    </>
  );
};

export default Recover;