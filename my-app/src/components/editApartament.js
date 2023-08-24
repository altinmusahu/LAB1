import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';


const EditStudent = () => {
  const { id } = useParams();
  const [Pershkrimi58281, setPershkrimi] = useState({});
  const [NdertesaID, setNdertesa] = useState({});
  const [ndertesa,setNdertesa1]=useState([]);

  const [oldData, setOldData] = useState([{}]);
  const params = useParams();

  useEffect(() => {
    axios.post("http://localhost:3001/getApartament").then((response) => {
      setNdertesa1(response.data); 
      })
      .catch((error) => {
        console.error(error);
      });
  }, [setNdertesa1]);




  useEffect(() => {
    const LoadApartament = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/getApartamentin/${id}`);
        setOldData(response.data[0] || {});
        setPershkrimi(response.data?.Pershkrimi58281 || '');
        setNdertesa(response.data?.NdertesaID || '');
      } catch (error) {
        console.log(error);
      }
    };

    LoadApartament();
  }, [id]);

  const handlePershkrimiChange = async (event) => {
    setPershkrimi(event.target.value);
    const response = await axios.get(`http://localhost:3001/getApartamentin/${id}`);
    setOldData(response.data?.Pershkrimi58281 || '');
  };
  const handleNdertesaChange = async (event) => {
    setNdertesa(event.target.value);
    const response = await axios.get(`http://localhost:3001/getApartamentin/${id}`);
    setOldData(response.data?.NdertesaID || '');
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:3001/updateApartament/${id}`, {
        Pershkrimi58281: Pershkrimi58281,
        NdertesaID: NdertesaID
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
      .get(`http://localhost:3001/getApartamentin/${id}`)
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
        <h1 style={{ color: '#0d6efd' }}>Update Apartamentin</h1>
        <label htmlFor="Pershkrimi58281">Pershkrimi</label>
        <input
          type="text"
          id="Emri"
          placeholder="Pershkrimi i nderteses..."
          value={Pershkrimi58281}
          onChange={handlePershkrimiChange}
          name="Emri"
        />
       <select
              name="Ndertesa_type"
              placeholder="Select ndertesen:"
              onChange={(e) => {
                setNdertesa(e.target.value);
              }}
              value={NdertesaID}
            >
              {ndertesa.map((x) => {
                return (
                  <>
                    <option value={x.NdertesaID}>{x.NdertesaID} : {x.Pershkrimi58281}</option>
                  </>
                );
              })}
            </select>

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