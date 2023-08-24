import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import NavLink from 'react-bootstrap/esm/NavLink';

const EditContactUs = () => {
  const { id } = useParams();
  const [name, setName] = useState({});
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [details, setDetails] = useState('');

  const [oldData, setOldData] = useState({});

  const params = useParams();



  useEffect(() => {
    const loadStudent = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/getContact/${id}`);
        setOldData(response.data[0] || {});
        setName(response.data?.name || '');
        setCompany(response.data?.company || '');
        setEmail(response.data?.email || '');
        setPhoneNumber(response.data?.phoneNumber || '');
        setDetails(response.data?.details || '');
      } catch (error) {
        console.log(error);
      }
    };

    loadStudent();
  }, [id]);

  const handleNameChange = async (event) => {
    setName(event.target.value);
    const response = await axios.get(`http://localhost:3001/getContact/${id}`);
    setOldData(response.data?.name || '');
  };
  const handleCompanyChange = async (event) => {
    setCompany(event.target.value);
    const response = await axios.get(`http://localhost:3001/getContact/${id}`);
    setOldData(response.data?.company || '');
  };

  const handleEmailChange = async (event) => {
    setEmail(event.target.value);
    const response = await axios.get(`http://localhost:3001/getContact/${id}`);
    setOldData(response.data?.email || '');
  };

  const handlePhoneNumberChange = async (event) => {
    setPhoneNumber(event.target.value);
    const response = await axios.get(`http://localhost:3001/getContact/${id}`);
    setOldData(response.data?.phoneNumber || '');
  };

  const handleMessageChange = async (event) => {
    setDetails(event.target.value);
    const response = await axios.get(`http://localhost:3001/getContact/${id}`);
    setOldData(response.data?.details || '');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:3001/updateContact/${id}`, {
        name: name,
        company: company,
        email: email,
        phoneNumber: phoneNumber,
        details: details,
      })
      .then((res) => {
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    axios
      .get(`http://localhost:3001/getContact/${id}`)
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
        <h1 style={{ color: '#0d6efd' }}>Update Contact</h1>
        <label htmlFor="Emri">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Emri i studentit..."
          value={name}
          onChange={handleNameChange}
          name="name"
        />
        <label htmlFor="mbiemri">Company</label>
        <input
          type="text"
          id="company"
          placeholder="Mbiemri i studentit..."
          value={company}
          onChange={handleCompanyChange}
          name="company"
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={handleEmailChange}
          name="email"
        />
        <label htmlFor="passwordi">PhoneNumber</label>
        <input
          type="text"
          id="phoneNumber"
          value={phoneNumber}
          onChange={handlePhoneNumberChange}
          name="phoneNumber"
        />
        <label htmlFor="passwordi">Message</label>
        <input
          type="text"
          id="demessagetails"
          value={details}
          onChange={handleMessageChange}
          name="message"
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