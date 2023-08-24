import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
// import {Link} from 'react-router-dom';
import "../css/KurseAdmin.css";
import Table from 'react-bootstrap/Table';
import {AiOutlineDelete,AiOutlineEdit}
from 'react-icons/ai';
import {GrView} from 'react-icons/gr';
import Axios from 'axios';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
var Link = require('react-router-dom').Link;


const Apartament58281 = () => {

    const [ndertesa,setNdertesa]=useState([]);

    const [apartamenti,setApartamenti]=useState([]);

  useEffect(() => {
    Axios.post("http://localhost:3001/getNdertesa").then((response) => {
        setNdertesa(response.data); 
      })
      .catch((error) => {
        console.error(error);
      });
  }, [setNdertesa]);

  const LoadNdertesat =async()=>{
    const response= await Axios.get('http://localhost:3001/getNdertesa');
    setNdertesa(response.data)
  }


  useEffect(()=>{
    LoadNdertesat();
  },[]);

  useEffect(() => {
    Axios.post("http://localhost:3001/getApartament").then((response) => {
        setApartamenti(response.data); 
      })
      .catch((error) => {
        console.error(error);
      });
  }, [setApartamenti]);

  const LoadApartament =async()=>{
    const response= await Axios.get('http://localhost:3001/getApartament');
    setApartamenti(response.data)
  }


  useEffect(()=>{
    LoadApartament();
  },[]);

  const [Pershkrimi58281, setPershkrimi] = useState('');
  const [isValidPershkrimi,setIsValidPershkrimi]=useState(true);

  const [ndertesa1,setNdertesa1]=useState(0);

  const handlePershkrimiChange = (event) => {
    const Pershkrimi58281=event.target.value;
    setPershkrimi(Pershkrimi58281);
  };

  const handleSubmit1 = async () => {
    try {
      await Axios.post("http://localhost:3001/insertApartament", {
        Pershkrimi58281: Pershkrimi58281,
        NdertesaID: ndertesa1
      });
      console.log("Inserted successfully");
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (ApartamentiID) => {
    try {
      if(window.confirm("Are you sure you want to delete?")){
      await Axios.delete(`http://localhost:3001/deleteApartament/${ApartamentiID}`);
      const apartamentUp = apartamenti.filter((event) => event.ApartamentiID !== ApartamentiID);
      setApartamenti(apartamentUp);}
    } catch (error) {
      console.log(error.message);
    }
  };

 
      return (
        <div>
        <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
        <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <Link to="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Dashboard
          </Link>
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/adminDashboard" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Admin Dashboard</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/adminKurs" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="book">Course</CDBSidebarMenuItem>
            </NavLink>


            <NavLink exact to="/adminProfesor" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Professors</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/adminStudent" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Students</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/AdminContanctUs" activeClassName="activeClicked">
          <CDBSidebarMenuItem icon="user">ContactUs</CDBSidebarMenuItem>
        </NavLink>

        <NavLink exact to="/adminPartners" activeClassName="activeClicked">
          <CDBSidebarMenuItem icon="user">Partners</CDBSidebarMenuItem>
        </NavLink>

        <NavLink exact to="/adminBussines" activeClassName="activeClicked">
          <CDBSidebarMenuItem icon="book">Aplikimet</CDBSidebarMenuItem>
        </NavLink>
        <NavLink exact to="/ndertesat" activeClassName="activeClicked">
          <CDBSidebarMenuItem icon="book">Ndertesat</CDBSidebarMenuItem>
        </NavLink>
        <NavLink exact to="/apartamenti" activeClassName="activeClicked">
          <CDBSidebarMenuItem icon="book">Apartamenti</CDBSidebarMenuItem>
        </NavLink>


            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="bi bi-box-arrow-left">Log out</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>

      <form onSubmit={handleSubmit1} className='form-signeups'>
      <h1 style={{ color: '#0e4c92' }}>Regjistrimi i Apartamentit</h1>
      <label htmlFor="Pershkrimi58281">Pershkrimi:</label>
      <input
        type="text"
        id="emri-signeup"
        name="Pershkrimi58281"
        value={Pershkrimi58281}
        onChange={handlePershkrimiChange}
      />
      {
      isValidPershkrimi ? null : 
      (
         <span style={{ color: 'red' }}>Please enter a valid First Name</span>
      )
      }
      <select
              name="Ndertesa_type"
              placeholder="Select ndertesen:"
              onChange={(e) => {
                setNdertesa1(e.target.value);
              }}
              value={ndertesa1}
            >
              {ndertesa.map((x) => {
                return (
                  <>
                    <option value={x.NdertesaID}>{x.Pershkrimi58281}</option>
                  </>
                );
              })}
            </select>
      
      <button type="submit" onClick={() => { alert('Successful Signup!') }}
      disabled={ 
      !isValidPershkrimi ||
      !Pershkrimi58281
      }
      >
        Register here
      </button>
    </form>

    <div class="tabela">
          <h1>Apartamentet</h1>
          <Table class="tabela-content" striped bordered hover >
            <thead style={{backgroundColor:'grey'}}>
              <tr className='TableRows'> 
                <th>Number</th>
                <th>Pershkrimi</th>
                <th>Ndertesa</th>
    
                <th>Delete</th>
                <th>Edit</th>
              </tr>
            </thead>
            <tbody>
              {apartamenti.map((apartament, index) => (
                <tr class="tabela-row" key={apartament.ApartamentiID}>
                  <td>{index+1}</td>
                  <td style={{color:'black'}}>{apartament.Pershkrimi58281}</td>
                  <td style={{color:'black'}}>{apartament.NdertesaID}</td>

         
                    <td>
                        <Link class="btn btn-danger" onClick={() => handleDelete(apartament.ApartamentiID)}>
                          <AiOutlineDelete/>                  </Link>
                    </td> 
                    <td>
                      <Link to={`/updateApartament/${apartament.ApartamentiID}`} class="btn btn-primary" ><AiOutlineEdit/></Link>
                    </td>
          
                </tr>
                ))}
            </tbody>
          </Table>
          </div>
      
       
        </div>
        </div>



        
        
        
        
    );

}
export default Apartament58281;