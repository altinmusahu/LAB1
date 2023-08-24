import React, { useState } from 'react';
import './Login.css';
import './SignUp';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';

const Reset = () => {
    
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isValidPassword, setIsValidPassword] = useState(true);

  const handlePasswordChange = (event) => {
    const passwordValue = event.target.value;
    setPassword(passwordValue);
    setIsValidPassword(validatePassword(passwordValue));
  };

  const handleConfirmPasswordChange = (event) => {
    const confirmPasswordValue = event.target.value;
    setConfirmPassword(confirmPasswordValue);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitting...');
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      toast.error("Passwords don't match");
      return;
    }

    try {
      Axios.post('http://localhost:3001/login', {
        password,
      }).then((data) => {
        if (data.status === 'ok') {
          alert('Login Successful');
          console.log('Bravo');
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
      <Navbar />
      <ToastContainer position='top-center'></ToastContainer>
      <form onSubmit={handleSubmit}>
        <h2 style={{ color: '#0e4c92', paddingBottom: '1em' }}>Reset Password</h2>

        <label htmlFor="password">New Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="Your new password"
          value={password}
          onChange={handlePasswordChange}
        />
        {isValidPassword ? null : (
          <span style={{ color: 'red' }}>
            Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character
          </span>
        )}

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="Rewrite Password"
          value={confirmPassword}
          onChange={handleConfirmPasswordChange}
        />
        {password !== confirmPassword ? (
          <span style={{ color: 'red' }}>Passwords don't match</span>
        ) : null}

        <br />

        <button
          type="submit"
          onClick={() => {
            toast.success('Successfully Logged In!');
          }}
          disabled={!isValidPassword || !password || password !== confirmPassword}
        >
          Reset
        </button>
      </form>
    </>
  );
};

export default Reset;