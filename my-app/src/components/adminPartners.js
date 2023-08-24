import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Table } from 'react-bootstrap';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { GrView } from 'react-icons/gr';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "../css/KurseAdmin.css";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink, Link } from 'react-router-dom';

function Business() {

  const [partners,setPartners]=useState([]);

      const[search, setSearch]=useState('');
      console.log(search);

      const LoadPartners=async()=>{
        const response= await axios.get('http://localhost:3001/getPartners');
        setPartners(response.data)
      }
      useEffect(()=>{
        LoadPartners();
      },[]);

      const handleDelete = async (PartnerId) => {
        try {
          if(window.confirm("Are you sure you want to delete?")){
          await axios.delete(`http://localhost:3001/deletePartners/${PartnerId}`);
          const partnerUp = partners.filter((event) => event.PartnerId !== PartnerId);
          setPartners(partnerUp);}
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


            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="bi bi-box-arrow-left">Log out</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    <div class="tabela">
    <h1 className="text-center my-5">Our Partners</h1>
        <Table bordered hover responsive>
          <thead className="bg-secondary text-white">
            <tr>
              <th>#</th>
              <th>Emri</th>
              <th>Kompanija</th>
              <th>Email</th>
              <th>Kategoria</th>
      
              <th>Delete</th>
              <th>Edit</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
              {partners.map((partner, index) => (
                <tr class="tabela-row" key={partner.PartnerId}>
                  <td>{index+1}</td>
                  <td style={{color:'black'}}>{partner.name}</td>
                   <td>{partner.company}</td>
                   <td>{partner.email}</td>
                   <td>{partner.coursecategory}</td>
                    {/* <td>{studenti.Passwordi}</td> */}
                    <td>
                        <Link class="btn btn-danger" onClick={() => handleDelete(partner.PartnerId)}>
                          <AiOutlineDelete/>                  </Link>
                    </td> 
                    <td>
                      <Link to={`/updatePartners/${partner.PartnerId}`} class="btn btn-primary" ><AiOutlineEdit/></Link>
                    </td>
                    <td>
                        <Link to={`/addCourse/${partner.PartnerId}`} class="btn btn-secondary"><GrView/></Link>
                    </td>
                </tr>
                ))}
            </tbody>
     
        </Table>
      </div>
    </div>
    </div>);

}

export default Business;


/**/
