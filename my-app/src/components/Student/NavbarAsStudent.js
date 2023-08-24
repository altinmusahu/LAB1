import React, {useState,useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "../Student/homePageStudent.css";
import axios from 'axios';

import { Link, useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function NavbarAsStudent() {

  const [name, setName] = useState('');

  useEffect(() => {
    const fetchStudentName = async () => {
      try {
        const token = localStorage.getItem('token');
        const decodedToken = decodeToken(token);

        const response = await axios.get(`http://localhost:3001/getStudentNameByEmail?email=${decodedToken.username}`);
        const student = response.data;

        setName(student.name);
      } catch (error) {
        console.log(error);
      }
    };

    fetchStudentName();
  }, []);

  const decodeToken = (token) => {
    try {
      const decoded = JSON.parse(atob(token.split('.')[1]));
      return decoded;
    } catch (error) {
      console.log('Token decoding error:', error);
      return null;
    }
  };
    


    return(
        <>
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Learnfy</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Link to="/">Home</Link>
                        <Link to="/homeStudent">Courses</Link>
                        <Link to="/courses">Discover New</Link>
                    </Nav>
                    <Navbar.Text>Welcome : {name}</Navbar.Text>

                </Navbar.Collapse>
            </Container>
        </Navbar>

            
            </>



    );
}
export default NavbarAsStudent;