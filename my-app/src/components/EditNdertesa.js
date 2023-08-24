import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';




const EditStudent = () => {
  const { id } = useParams();
  const [Pershkrimi58281, setPershkrimi] = useState({});
  const [oldData, setOldData] = useState([{}]);
  const params = useParams();






  useEffect(() => {
    const loadNdertesat = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/getNdertesen/${id}`);
        setOldData(response.data[0] || {});
        setPershkrimi(response.data?.Pershkrimi58281 || '');
      } catch (error) {
        console.log(error);
      }
    };

    loadNdertesat();
  }, [id]);

  const handlePershkrimiChange = async (event) => {
    setPershkrimi(event.target.value);
    const response = await axios.get(`http://localhost:3001/getNdertesen/${id}`);
    setOldData(response.data?.Pershkrimi58281 || '');
    
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`http://localhost:3001/updateNdertesa/${id}`, {
      Pershkrimi58281: Pershkrimi58281
    });
    setPershkrimi("");
  };
  useEffect(() => {
    axios
      .get(`http://localhost:3001/getNdertesen/${id}`)
      .then((res) => {
        setOldData(res.data[0]);
        console.log(oldData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [params.id, setOldData]);


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
        <h1 style={{ color: '#0d6efd' }}>Update Ndertesen</h1>
        <label htmlFor="Pershkrimi58281">Pershkrimi</label>
        <input
          type="text"
          id="Emri"
          value={Pershkrimi58281}
          onChange={handlePershkrimiChange}
          name="Emri"
        />

        <Link to="/ndertesat">
          <button type="submit" onClick={handleSubmit}>
            Save
          </button>
            <br />
          <button type="button">Back</button>
        </Link>
      </form>
    </div>
  );
};

export default EditStudent;