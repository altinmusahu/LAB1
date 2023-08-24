import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import NavLink from 'react-bootstrap/esm/NavLink';

const EditPartners = () => {
  const { id } = useParams();
  const [name, setName] = useState({});
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [coursecategory, setCourseCategory] = useState('');


    const [oldData, setOldData] = useState({});

  const params = useParams();



  useEffect(() => {
    const loadStudent = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/getPartnerin/${id}`);
        setOldData(response.data[0] || {});
        setName(response.data?.name || '');
        setCompany(response.data?.company || '');
        setEmail(response.data?.email || '');
        setCourseCategory(response.data?.coursecategory || '');
      } catch (error) {
        console.log(error);
      }
    };
    loadStudent();
  }, [id]);

  const handleNameChange = async (event) => {
    setName(event.target.value);
    const response = await axios.get(`http://localhost:3001/getPartnerin/${id}`);
    setOldData(response.data?.name || '');
  };
  const handleCompanyChange = async (event) => {
    setCompany(event.target.value);
    const response = await axios.get(`http://localhost:3001/getPartnerin/${id}`);
    setOldData(response.data?.company || '');
  };

  const handleEmailChange = async (event) => {
    setEmail(event.target.value);
    const response = await axios.get(`http://localhost:3001/getPartnerin/${id}`);
    setOldData(response.data?.email || '');
  };

  const handleCoursecategoryChange = async (event) => {
    setCourseCategory(event.target.value);
    const response = await axios.get(`http://localhost:3001/getPartnerin/${id}`);
    setOldData(response.data?.coursecategory || '');
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:3001/updatePartner/${id}`, {
        name: name,
        company: company,
        email: email,
        coursecategory: coursecategory
      })
      .then((res) => {
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    axios
      .get(`http://localhost:3001/getPartnerin/${id}`)
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
        <h1 style={{ color: '#0d6efd' }}>Update Partner</h1>
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
        <label htmlFor="passwordi">Coursecategory</label>
        <input
          type="text"
          id="coursecategory"
          value={coursecategory}
          onChange={handleCoursecategoryChange}
          name="coursecategory"
        />

        <Link to="/adminPartners">
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

export default EditPartners;