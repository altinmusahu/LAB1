import React, {useState,useEffect} from 'react';
import axios from 'axios';

import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "./homePageStudent.css";

import { Link, useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import NavAsStudent from '../Student/NavbarAsStudent';
import Footer from '../../components/Footer';
import Calendar from '../../components/calendar';




  
  const StudentProfile = () => {

    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');


  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const token = localStorage.getItem('token');
        const decodedToken = decodeToken(token);

        const response = await axios.get(`http://localhost:3001/getStudentNameByEmail?email=${decodedToken.username}`);
        const response1 = await axios.get(`http://localhost:3001/getStudentLastNameByEmail?email=${decodedToken.username}`);
        const response2 = await axios.get(`http://localhost:3001/getStudentIdByEmail?email=${decodedToken.username}`);

        const student = response.data;
        const student1 = response1.data;
        const student2 = response2.data;
      



        setName(student.name);
        setLastname(student1.lastname);
        setId(student2.id);
        
       
        
      } catch (error) {
        console.log(error);
      }
    };

    fetchStudent();
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


  
  
  return (
    <>
      <NavAsStudent />
      <div className="HeadText-student">
        <h1 id='HeadText-student-txt'>Learnfy Courses</h1>
      </div>
      <div className="content-wrapper-student">
        <div className="left-side-student">
          <div className="box-studet">
            <h1 id='left-side-student-txt1'>Statusi i sherbimeve online</h1>
            <p  id='left-side-student-txt2'>Sistemet per mesim dhe sherbime tjera online jane operacionale dhe nuk ka probleme.</p>
            <p id='left-side-student-txt3'>Per qdo pakenaqesi ose paqartesi na kontaktoni:</p>
            <p id='left-side-student-txt4'>ContactUs</p>
          </div>
        </div>
        <Table className='student-tabel'>
          <Card className="Card1-student text-center">
            <Card.Header>Yours Courses</Card.Header>
            <Card.Body className='BodyCard-student'>
              <Card.Title>CS50's Introduction to Computer Science</Card.Title>
              <Card.Text>
                HarvardX • CS50x • Course ends January 1, 2024
              </Card.Text>
              <Link to='/Kursi'>
                <Button className='ButtonCard-student' variant="primary">Begin Course</Button>
              </Link>
              <Button className='ButtonCard1-student' variant="outline-danger">Unenroll</Button>
            </Card.Body>
          </Card>
          <Card className="Card1-student text-center">
            <Card.Header>Yours Courses</Card.Header>
            <Card.Body className='BodyCard-student'>
              <Card.Title>CS50's Introduction to Computer Science</Card.Title>
              <Card.Text>
                HarvardX • CS50x • Course ends January 1, 2024
              </Card.Text>
              <Link to='/Kursi'>
                <Button className='ButtonCard-student' variant="primary">Begin Course</Button>
              </Link>
              <Button className='ButtonCard1-student' variant="outline-danger">Unenroll</Button>
            </Card.Body>
          </Card>
        </Table>
        <div>
        <div className="right-side-student">
    
          <div className="box">
          <p id='right-side-prof-txt1'>Student's Information: </p>
          <p>Student's name: {name} </p>
          <p>Student's surname: {lastname}</p>
          <p>Student's ID: {id}</p>

        </div>

        </div>
        <div className='calendar-student'>
          <Calendar />
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StudentProfile;
