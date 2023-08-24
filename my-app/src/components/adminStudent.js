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


const AdminStudent = () => {


    const [student,setStudent]=useState([]);

      const[search, setSearch]=useState('');
      console.log(search);

      const LoadStudent=async()=>{
        const response= await axios.get('http://localhost:3001/getStudent');
        setStudent(response.data)
      }


      useEffect(()=>{
        LoadStudent();
      },[]);

      const handleDelete = async (StudentId) => {
        try {
          if(window.confirm("Are you sure you want to delete?")){
          await Axios.delete(`http://localhost:3001/deleteStudent/${StudentId}`);
          const studentUp = student.filter((event) => event.StudentId !== StudentId);
          setStudent(studentUp);}
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
          <h1>Our Students</h1>
          <Table class="tabela-content" striped bordered hover >
            <thead style={{backgroundColor:'grey'}}>
              <tr className='TableRows'> 
                <th>Number</th>
                <th>Emri</th>
                <th>Mbiemri</th>
                <th>Email</th>
                {/* <th>Passwordi</th> */}
                <th>Delete</th>
                <th>Edit</th>
                <th>Details</th>
              </tr>
            </thead>
            <tbody>
              {student.map((studenti, index) => (
                <tr class="tabela-row" key={studenti.StudentId}>
                  <td>{index+1}</td>
                  <td style={{color:'black'}}>{studenti.Emri}</td>
                   <td>{studenti.Mbiemri}</td>
                   <td>{studenti.Email}</td>
                    {/* <td>{studenti.Passwordi}</td> */}
                    <td>
                        <Link class="btn btn-danger" onClick={() => handleDelete(studenti.StudentId)}>
                          <AiOutlineDelete/>                  </Link>
                    </td> 
                    <td>
                      <Link to={`/updateStudent/${studenti.StudentId}`} class="btn btn-primary" ><AiOutlineEdit/></Link>
                    </td>
                    <td>
                        <Link to={`/addCourse/${studenti.StudentId}`} class="btn btn-secondary"><GrView/></Link>
                    </td>
                </tr>
                ))}
            </tbody>
          </Table>
          </div>
        </div>
        </div>);

}
export default AdminStudent;