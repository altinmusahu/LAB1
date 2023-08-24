import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import NavLink from 'react-bootstrap/esm/NavLink';

const EditPartners = () => {
    const { id } = useParams();
    const [name, setName] = useState();
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [coursecategory, setCoursecategory] = useState('');



  useEffect(() => {
    const loadPartners = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/getPartnerin/${id}`);
        setName(response.data?.name || '');
        setCompany(response.data?.company || '');
        setEmail(response.data?.email || '');
        setCoursecategory(response.data?.coursecategory || '');
 

      } catch (error) {
        console.log(error);
      }
    };

    loadPartners();
  }, [id]);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };
  const handleCompanyChange = (event) => {
    setCompany(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleoursecategoryChange = (event) => {
    setCoursecategory(event.target.value);
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  axios
    .put(`http://localhost:3001/updatePartners/${id}`, {
      name: name,
      company: company,
      email: email,
      coursecategory: coursecategory,
    })
    .then((res) => {
      // Handle successful update
      console.log(res.data); // Log the response from the server
      // Optionally, display a success message or redirect to another page
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
        <h1 style={{ color: '#0d6efd' }}>Update Partner</h1>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          placeholder="Partner name..."
          value={name}
          onChange={handleNameChange}
          name="name"
        />
        <label htmlFor="company">company</label>
        <input
          type="text"
          id="company"
          placeholder="Company..."
          value={company}
          onChange={handleCompanyChange}
          name="company"
        />
        <label htmlFor="email">Email</label>
        <input
          type="text"
          id="email"
          placeholder="Partner Email..."
          value={email}
          onChange={handleEmailChange}
          name="email"
        />
        <label htmlFor="coursecategory">coursecategory</label>
        <input
          type="text"
          id="coursecategory"
          placeholder="coursecategory..."
          value={coursecategory}
          onChange={handleoursecategoryChange}
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