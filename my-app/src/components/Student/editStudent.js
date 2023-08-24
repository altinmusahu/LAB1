import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import NavLink from 'react-bootstrap/esm/NavLink';

const EditStudent = () => {
  const { id } = useParams();
  const [Emri, setEmri] = useState({});
  const [Mbiemri, setMbiemri] = useState('');
  const [Email, setEmail] = useState('');
  const [Passwordi, setPasswordi] = useState('');

  const [oldData, setOldData] = useState({});

  const params = useParams();

  useEffect(() => {
    const loadNdertesat = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/getStudentin/${id}`);
        setOldData(response.data[0] || {});
        setEmri(response.data?.Emri || '');
        setMbiemri(response.data?.Mbiemri || '');
        setEmail(response.data?.Email || '');
        setPasswordi(response.data?.Passwordi || '');
      } catch (error) {
        console.log(error);
      }
    };
    loadNdertesat();
  }, [id]);

  const handleEmriChange = async (event) => {
    setEmri(event.target.value);
    const response = await axios.get(`http://localhost:3001/getStudentin/${id}`);
    setOldData(response.data?.Emri || '');
  };
  const handleMbiemriChange = async (event) => {
    setMbiemri(event.target.value);
    const response = await axios.get(`http://localhost:3001/getStudentin/${id}`);
    setOldData(response.data?.Mbiemri || '');
  };

  const handleEmailChange = async (event) => {
    setEmail(event.target.value);
    const response = await axios.get(`http://localhost:3001/getStudentin/${id}`);
    setOldData(response.data?.Email || '');
  };

  const handlePasswordiChange = async (event) => {
    setPasswordi(event.target.value);
    const response = await axios.get(`http://localhost:3001/getStudentin/${id}`);
    setOldData(response.data?.Passwordi || '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:3001/updateStudent/${id}`, {
        Emri: Emri,
        Mbiemri: Mbiemri,
        Email: Email,
        Passwordi: Passwordi,
      })
      .then((res) => {
        // Handle successful update if needed
      })
      .catch((error) => {
        console.log(error);
        // Handle error if needed
      });
  };
  useEffect(() => {
    axios
      .get(`http://localhost:3001/getStudentin/${id}`)
      .then((res) => {
        setOldData(res.data[0]);
        console.log(oldData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id, setOldData]);


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
        <h1 style={{ color: '#0d6efd' }}>Update Studenti</h1>
        <label htmlFor="Emri">Emri</label>
        <input
          type="text"
          id="Emri"
          placeholder="Emri i studentit..."
          value={Emri}
          onChange={handleEmriChange}
          name="Emri"
        />
        <label htmlFor="mbiemri">Mbiemri</label>
        <input
          type="text"
          id="mbiemri"
          placeholder="Mbiemri i studentit..."
          value={Mbiemri}
          onChange={handleMbiemriChange}
          name="mbiemri"
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          placeholder="Email i studentit..."
          value={Email}
          onChange={handleEmailChange}
          name="email"
        />
        <label htmlFor="passwordi">Passwordi</label>
        <input
          type="text"
          id="passwordi"
          placeholder="Passwordi i studentit..."
          value={Passwordi}
          onChange={handlePasswordiChange}
          name="passwordi"
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