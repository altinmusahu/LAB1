import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import NavLink from 'react-bootstrap/esm/NavLink';

const EditContactUs = () => {
  const { id } = useParams();
  const [FirstName, setFirstName] = useState({});
  const [LastName, setLastName] = useState('');
  const [Email, setEmail] = useState('');
  const [LevelOfStudy, setLevelOfStudy] = useState('');
  const [PlaceOfStudy, setPlaceOfStudy] = useState('');
  const [LanguageProficiency, setLanguageProficiency] = useState('');

    /* FirstName,
        LastName,
        Email,
        LevelOfStudy,
        PlaceOfStudy,
        LanguageProficiency,*/


  useEffect(() => {
    const loadStudent = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/getBusiness/${id}`);
        setFirstName(response.data?.FirstName || '');
        setLastName(response.data?.LastName || '');
        setEmail(response.data?.Email || '');
        setLevelOfStudy(response.data?.LevelOfStudy || '');
        setPlaceOfStudy(response.data?.PlaceOfStudy || '');
        setLanguageProficiency(response.data?.LanguageProficiency || '');


 

      } catch (error) {
        console.log(error);
      }
    };

    loadStudent();
  }, [id]);

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };
  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleLevelOfStudyChange = (event) => {
    setLevelOfStudy(event.target.value);
  };

  const handlePlaceOfStudyChange = (event) => {
    setPlaceOfStudy(event.target.value);
  };

  const handleLanguageProficiencyChange = (event) => {
    setLanguageProficiency(event.target.value);
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:3001/updatePartner/${id}`, {
        FirstName: FirstName,
        LastName: LastName,
        Email: Email,
        PlaceOfStudy: PlaceOfStudy,
        LanguageProficiency: LanguageProficiency,
      })
      .then((res) => {
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div style={{ marginTop: '100px' }}>
      <form
        style={{
          margin: 'auto',
          padding: '15px',
          maxWidth: '400px',
          alignContent: 'center',
        }}
      >
        <h1 style={{ color: '#0d6efd' }}>Update Business</h1>
        <label htmlFor="Emri">FirstName</label>
        <input
          type="text"
          id="FirstName"
          value={FirstName}
          onChange={handleFirstNameChange}
          name="FirstName"
        />
        <label htmlFor="mbiemri">LastName</label>
        <input
          type="text"
          id="LastName"
          placeholder="Mbiemri i studentit..."
          value={LastName}
          onChange={handleLastNameChange}
          name="LastName"
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="Email"
          value={Email}
          onChange={handleEmailChange}
          name="Email"
        />
        <label htmlFor="passwordi">LevelOfStudy</label>
        <input
          type="text"
          id="LevelOfStudy"
          value={LevelOfStudy}
          onChange={handleLevelOfStudyChange}
          name="LevelOfStudy"
        />
        <label htmlFor="passwordi">PlaceOfStudy</label>
        <input
          type="text"
          id="PlaceOfStudy"
          value={PlaceOfStudy}
          onChange={handlePlaceOfStudyChange}
          name="PlaceOfStudy"
        />
        <label htmlFor="passwordi">LanguageProficiency</label>
        <input
          type="text"
          id="LanguageProficiency"
          value={LanguageProficiency}
          onChange={handleLanguageProficiencyChange}
          name="LanguageProficiency"
        />

        <Link to="/adminContactUs">
          <button type="submit" onClick={handleSubmit}>
            Save
          </button>
        </Link>
        <br />

          <button type="button">Back</button>
      
      </form>
    </div>
  );
};

export default EditContactUs;