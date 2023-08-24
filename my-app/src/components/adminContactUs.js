import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai';
import { GrView } from 'react-icons/gr';
import axios from 'axios';
import "../css/KurseAdmin.css";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';
import { NavLink, Link } from 'react-router-dom';

const AdminContactUs = () => {
  const [contactUs, setContactUs] = useState([]);

  const loadContactUs = async () => {
    try {
      const response = await axios.get('http://localhost:3001/getContactUs');
      setContactUs(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    loadContactUs();
  }, []);

  const handleDelete = async (contactID) => {
    try {
      if(window.confirm("Are you sure you want to delete?")){
      await axios.delete(`http://localhost:3001/deleteContact/${contactID}`);
      const contactUp = contactUs.filter((event) => event.contactID !== contactID);
      setContactUs(contactUp);}
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
          <h1>Contact us</h1>
          <Table class="tabela-content" striped bordered hover >
            <thead style={{backgroundColor:'grey'}}>
              <tr className='TableRows'> 
                <th>#</th>
                <th>Name</th>
                <th>Company</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Details</th>

                <th>Delete</th>
                <th>Edit</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {contactUs.map((contact, index) => (
                <tr class="tabela-row" key={contact.contactID}>
                  <td>{index+1}</td>
                  <td style={{color:'black'}}>{contact.name}</td>
                   <td>{contact.company}</td>
                   <td>{contact.email}</td>
                    <td>{contact.phoneNumber}</td>
                    <td>{contact.details}</td>

                    <td>
                        <Link class="btn btn-danger" onClick={() => handleDelete(contact.contactID)}>
                          <AiOutlineDelete/>                  </Link>
                    </td> 
                    <td>
                      <Link to={`/updateContact/${contact.contactID}`} class="btn btn-primary" ><AiOutlineEdit/></Link>
                    </td>
                    <td>
                        <Link to={`/addCourse/${contact.contactID}`} class="btn btn-secondary"><GrView/></Link>
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
export default AdminContactUs;
