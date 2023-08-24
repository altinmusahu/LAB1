import React, { useState } from 'react';
import './login.css';
import  './SignUp';
import {Link, useNavigate} from "react-router-dom";
import Navbar from '../components/Navbar';
import Axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import Footer from '../components/Footer';
// const bcrypt=require('bcryptjs');
const Login = () => {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const navigate=useNavigate();

  const handleEmailChange = (event) => {
    const emailValue = event.target.value;
    setEmail(emailValue);
    setIsValidEmail(validateEmail(emailValue));
  };

  const handlePasswordChange = (event) => {
    const passwordValue = event.target.value;
    setPassword(passwordValue);
    setIsValidPassword(validatePassword(passwordValue));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log('Submitting...');
    const email = event.target.email.value;
    const password = event.target.password.value;
  
    try {
      const response = await Axios.post("http://localhost:3001/login", { email , password});
  
      const { token } = response.data;
      console.log('Token:', token); 
  
      const data = response.data;
      // console.log(response.data);/
      // console.log(data.token);
      localStorage.setItem('token', data.token);
  
      const decodedToken = decodeToken(token);
  
      if (decodedToken.role === 'Admin') {
        console.log(decodedToken.role);
        console.log("Logged in as admin");
        navigate('/adminAdmins');
      } 
      else if(decodedToken.role === 'AdminStudent'){
        console.log(decodedToken.role);
        console.log("Logged in as Student");
        navigate('/studentDashboard');
      }
      else if(decodedToken.role === 'AdminCourse'){
        console.log(decodedToken.role);
        console.log("Logged in as Admin of Course");
        navigate('/adminKurse');
      }
      else if(decodedToken.role === 'Student'){
        console.log(decodedToken.role);
        console.log("Logged in as Student");
        navigate('/homeStudent');
      }
      else if(decodedToken.role === 'Profesor'){
        console.log(decodedToken.role);
        console.log("Logged in as Profesor");
        navigate('/homeProff');
      }
      else {
        console.log('Invalid response:', response);
      }
    } catch (error) {
      toast.error('Invalid password or username!');
    }
  };
  


const decodeToken = (token) => {
  try {
    const decoded = JSON.parse(atob(token.split('.')[1]));
    return decoded;
  } catch (error) {
    console.log('Token decoding error:', error);
    return null;
    }
};

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\da-zA-Z]).{8,}$/;
    return regex.test(password);
  };

  return (
    <>
    <Navbar/>
    <ToastContainer position='top-center'></ToastContainer>
    <div className='login-container'>
    <form className='login-form'onSubmit={handleSubmit}>
        <h1 >Login</h1>
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
        name="email"
        placeholder='Your email'
        value={email}
        onChange={handleEmailChange}
      />
      {isValidEmail ? null : (
        <span>Please enter a valid email address</span>
      )}
      <br />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder='Your password'
        value={password}
        onChange={handlePasswordChange}
      />
      {isValidPassword ? null : (
        <span>
          Password must contain at least 8 characters, one uppercase letter, one lowercase letter,one number and one special character
        </span>
      )}
      <small className='forgot_password'>Forgot password? <Link to='/recovery' className='reset'>Reset</Link></small>
      <br />
      
      <p className='forgot_password'>Don't have an account? <Link to='/Signup' className='reset'>Sign Up</Link></p>
      <button type="submit" disabled={!isValidEmail || !isValidPassword || !email || !password} >
        Login
      </button>
    </form>
    </div>
    <Footer/>
    </>
  );
};

export default Login;
