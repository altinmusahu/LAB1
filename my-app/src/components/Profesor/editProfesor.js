import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import NavLink from 'react-bootstrap/esm/NavLink';

const EditStudent = () => {
  const { id } = useParams();
  const [emri, setEmri] = useState({});
  const [mbiemri, setMbiemri] = useState('');
  const [email, setEmail] = useState('');
  const [passwordi, setPasswordi] = useState('');
  const [subject, setSubject] = useState('');

  


  useEffect(() => {
    const LoadProfesori = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/getProff/${id}`);
        setEmri(response.data?.Emri || '');
        setMbiemri(response.data?.Mbiemri || '');
        setEmail(response.data?.Email || '');
        setPasswordi(response.data?.Passwordi || '');
        setSubject(response.data?.Subject || '');

 

      } catch (error) {
        console.log(error);
      }
    };

    LoadProfesori();
  }, [id]);

  const handleEmriChange = (event) => {
    setEmri(event.target.value);
  };
  const handleMbiemriChange = (event) => {
    setMbiemri(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordiChange = (event) => {
    setPasswordi(event.target.value);
  };
  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:3001/updateProff/${id}`, {
        Emri: emri,
        Mbiemri: mbiemri,
        Email: email,
        Passwordi: passwordi,
        Subject: subject,

      })
      .then((res) => {
        // Handle successful update if needed
      })
      .catch((error) => {
        console.log(error);
        // Handle error if needed
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
        <h1 style={{ color: '#0d6efd' }}>Update Proffessor</h1>
        <label htmlFor="Emri">Emri</label>
        <input
          type="text"
          id="Emri"
          placeholder="Emri i studentit..."
          value={emri}
          onChange={handleEmriChange}
          name="Emri"
        />
        <label htmlFor="mbiemri">Mbiemri</label>
        <input
          type="text"
          id="mbiemri"
          placeholder="Mbiemri i studentit..."
          value={mbiemri}
          onChange={handleMbiemriChange}
          name="mbiemri"
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          placeholder="Email i studentit..."
          value={email}
          onChange={handleEmailChange}
          name="email"
        />
        <label htmlFor="passwordi">Passwordi</label>
        <input
          type="text"
          id="passwordi"
          placeholder="Passwordi i studentit..."
          value={passwordi}
          onChange={handlePasswordiChange}
          name="passwordi"
        />
        <label htmlFor="subject">Subject</label>
        <input
          type="text"
          id="subject"
          placeholder="subject i proff..."
          value={subject}
          onChange={handleSubjectChange}
          name="subject"
        />

        <Link to="/adminStudent">
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

export default EditStudent;