import React, { useState } from 'react';
import Axios from 'axios';
import '../css/businessForm.css';
import { useNavigate } from 'react-router-dom';

const CombinedForm = () => {
  const [FirstName, setFirstName] = useState('');
  const [isValidFirstName,setIsValidFirstName]=useState(true);
  const [LastName, setLastName] = useState('');
  const [isValidLastName,setIsValidLastName]=useState(true);
  const [Email, setEmail] = useState('');
  const [isValidEmail,setIsValidEmail]=useState(true);
  const [LevelOfStudy, setLevelOfStudy] = useState('');
  const [isValidLevel,setIsValidLevel]=useState(true);
  const [PlaceOfStudy, setPlaceOfStudy] = useState('');
  const [isValidPlace,setIsValidPlace]=useState(true);
  const [SubjectCategory, setSubjectCategory] = useState('');
  const [isValidSubject,setIsValidSubject]=useState(true);

  

  const handleFirstNameChange = (event) => {
    const FirstName=event.target.value;
    setFirstName(FirstName);
    setIsValidFirstName(validateFirstName(FirstName))
  };

  const handleLastNameChange = (event) => {
    const LastName = event.target.value;
    setLastName(LastName);
    setIsValidLastName(validateLastName(LastName))

  };

  const handleEmailChange = (event) => {
    const Email = event.target.value;
    setEmail(Email);
    setIsValidEmail(validateEmail(Email))
  };

  const handleLevelOfStudyChange = (event) => {
    const LevelOfStudy=event.target.value;
    setLevelOfStudy(LevelOfStudy);
    setIsValidLevel(validateLevel(LevelOfStudy))

  };

  const handlePlaceOfStudyChange = (event) => {
    const PlaceOfStudy = event.target.value;
    setPlaceOfStudy(PlaceOfStudy);
    setIsValidPlace(validatePlace(PlaceOfStudy))

  };

  const handleSubjectCategoryChange = (event) => {
    const SubjectCategory = event.target.value;
    setSubjectCategory(SubjectCategory);
    setIsValidSubject(validateSubject(SubjectCategory))

  };

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      Axios.post("http://localhost:3001/createApplications", {
        FirstName,
        LastName,
        Email,
        LevelOfStudy,
        PlaceOfStudy,
        SubjectCategory,
      });
      navigate('/SignUpAsProff');
    } catch (error) {
      console.error('Error submitting form:', error.message);
    }
  };


  const validateFirstName=(FirstName)=>{
    const regex=/^[A-Za-z\s]{1,50}$/;
    return regex.test(FirstName);     
  }

  const validateLastName=(LastName)=>{
    const regex=/^[A-Za-z\s]{1,50}$/;
    return regex.test(LastName);     
  }

  
  const validateEmail = (Email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(Email);
  };

  const validateLevel = (LevelOfStudy) => {
    const regex=/^[A-Za-z\s]{1,50}$/;
    return regex.test(LevelOfStudy);
  };
  const validatePlace = (PlaceOfStudy) => {
    const regex=/^[A-Za-z\s]{1,50}$/;
    return regex.test(PlaceOfStudy);
  };
  const validateSubject = (SubjectCategory) => {
    const regex=/^[A-Za-z\s]{1,50}$/;
    return regex.test(SubjectCategory);
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h2>Sign Up For Professor</h2>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" id="firstName" name="firstName" value={FirstName} onChange={handleFirstNameChange} />

        <label htmlFor="lastName">Last Name:</label>
        <input type="text" id="lastName" name="lastName" value={LastName} onChange={handleLastNameChange} />

        <label htmlFor="email">Email Address:</label>
        <input type="email" id="email" name="email" value={Email} onChange={handleEmailChange} />

        <label htmlFor="levelOfStudy">Level of Study:</label>
        <input type="text" id="levelOfStudy" name="levelOfStudy" value={LevelOfStudy} onChange={handleLevelOfStudyChange} />

        <label htmlFor="placeOfStudy">Place of Study:</label>
        <input type="text" id="placeOfStudy" name="placeOfStudy" value={PlaceOfStudy} onChange={handlePlaceOfStudyChange} />

        <label htmlFor="subjectCategory">Subject Category:</label>
        <input
          type="text"
          id="subjectCategory"
          name="subjectCategory"
          value={SubjectCategory}
          onChange={handleSubjectCategoryChange}
        />
        <button type="submit" onClick={() => { alert('Successful Signup!') }}
          disabled={ 
          !isValidFirstName ||
          !isValidLastName ||  
          !isValidEmail || 
          !isValidLevel ||
          !isValidPlace ||
          !isValidSubject ||
          !FirstName || 
          !LastName || 
          !Email ||
          !LevelOfStudy ||
          !PlaceOfStudy ||
          !SubjectCategory
          }
      >
        Submit
      </button>
      </form>

    </div>
  );
};

export default CombinedForm;
