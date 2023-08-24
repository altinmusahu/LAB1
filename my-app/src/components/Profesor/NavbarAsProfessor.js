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

    const [student,setStudent]=useState([]);

    useEffect (() => {
        const fetchStudent = async () => {
            try{
                const response = await fetch('http://localhost:3001/getEmriMbiemriStudent');

                if(response.ok) {
                    const student = await response.json();
                    setStudent(student);
                }
            } catch(error) {
                console.log('Error fetching user:', error);
            }
        };
        fetchStudent();
    }, []);

    return(
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Learnfy</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                        <Link to="/">Home</Link>
                        <Link to="/">Courses</Link>
                    </Nav>
                    {student && (
                        <Navbar.Text>
                            Welcome: {student.Emri}
                        </Navbar.Text>
                    )}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default NavbarAsStudent;