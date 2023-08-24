import React,{useState,useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Link} from 'react-router-dom';
import {toast} from 'react-toastify';
import "../css/KurseAdmin.css";
import Table from 'react-bootstrap/Table';
import {AiOutlineDelete,AiOutlineEdit}
from 'react-icons/ai';
import {GrView} from 'react-icons/gr';
import {BiBookAdd} from 'react-icons/bi';
import {ImBooks} from 'react-icons/im';
import  Container  from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup  from 'react-bootstrap/InputGroup';

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



 
  const AdminKurse = () => {

      const [course,setCourse]=useState([]);

      const[search, setSearch]=useState('');
      console.log(search);

      const LoadCourse=async()=>{
        const response= await axios.get('http://localhost:3001/getCourse');
        setCourse(response.data)
      }


      useEffect(()=>{
        LoadCourse();
      },[]);

    const handleDelete = async (KursiId) => {
      try {
        if(window.confirm("Are you sure you want to delete?")){
        await Axios.delete(`http://localhost:3001/deleteCourse/${KursiId}`);
        const kursetUp = course.filter((event) => event.KursiId !== KursiId);
        setCourse(kursetUp);}
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
    <div class="kutia">
      <h1>Our Courses</h1>
      <Link to='/addCourse'><button class='addGreen' type="submit"><BiBookAdd/></button></Link>
    </div>

    <Table class="tabela-content" striped bordered hover >
      <thead style={{backgroundColor:'grey'}}>
        <tr> 
        <th>Number</th>
        <th>Emri</th>
        <th>Pershkrimi</th>
        <th>Kategoria</th>
        <th>Foto</th>
        <th>Delete</th>
        <th>Edit</th>
        <th>Details</th>
        </tr>
      </thead>
      <tbody>
        {course.map((kursi, index) => (
          <tr class="tabela-row" key={kursi.KursiId}>
            <td>{index+1}</td>
            <td style={{color:'black'}}>{kursi.Emri}</td>
             <td>{kursi.Pershkrimi}</td>
             <td>{kursi.Kategori}</td>
              <td>{kursi.Foto}</td>
            <td>
                  <Link class="btn btn-danger" onClick={() => handleDelete(kursi.KursiId)}>
                    <AiOutlineDelete/>                  </Link>
                  </td> 
                  <td>
                  <Link to={`/updateCourse/${kursi.KursiId}`} class="btn btn-primary" ><AiOutlineEdit/></Link>
                </td>
                <td>
                  <Link to={`/addCourse/${kursi.KursiId}`} class="btn btn-secondary"><GrView/></Link>
                </td>
          </tr>
          ))}
      </tbody>
  
    </Table>
    </div>
  </div>
  </div>);
}

export default AdminKurse;