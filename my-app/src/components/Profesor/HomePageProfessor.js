import React, {useState,useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import "./homePageProfesor.css";

import { Link, useNavigate } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import NavAsProfessor from '../Profesor/NavbarAsProfessor';
import Footer from '../../components/Footer';
import Calendar from '../../components/calendar';


function StudentDashboard() {

  const [student,setStudent]=useState([]);

    useEffect (() => {
        const fetchStudent = async () => {
            try{
                const response = await fetch('http://localhost:3001/student');

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
  return (
    <>
      <NavAsProfessor />
      <div className="HeadText-prof">
        <h1 id='HeadText-prof-txt'>Learnfy Courses</h1>
      </div>
      <div className="content-wrapper-prof">
        <div className="left-side-prof">
          <div className="box-prof">
            <h1 id='left-side-prof-txt1'>Statusi i sherbimeve online</h1>
            <p  id='left-side-prof-txt2'>Sistemet per mesim dhe sherbime tjera online jane operacionale dhe nuk ka probleme.</p>
            <p id='left-side-prof-txt3'>Per qdo pakenaqesi ose paqartesi na kontaktoni:</p>
            <p id='left-side-prof-txt4'>ContactUs</p>
          </div>
        </div>
        <Table className='prof-tabel'>
          <Card className="Card1-prof text-center">
            <Card.Header>Yours Courses</Card.Header>
            <Card.Body className='BodyCard-prof'>
              <Card.Title>CS50's Introduction to Computer Science</Card.Title>
              <Card.Text>
                HarvardX • CS50x • Course ends January 1, 2024
              </Card.Text>
              <Link to='/Kursi'>
                <Button className='ButtonCard-prof' variant="primary">Begin Course</Button>
              </Link>
              <Button className='ButtonCard1-prof' variant="outline-danger">Unenroll</Button>
            </Card.Body>
          </Card>
          <Card className="Card1-prof text-center">
            <Card.Header>Yours Courses</Card.Header>
            <Card.Body className='BodyCard-prof'>
              <Card.Title>CS50's Introduction to Computer Science</Card.Title>
              <Card.Text>
                HarvardX • CS50x • Course ends January 1, 2024
              </Card.Text>
              <Link to='/Kursi'>
                <Button className='ButtonCard-prof' variant="primary">Begin Course</Button>
              </Link>
              <Button className='ButtonCard1-prof' variant="outline-danger">Unenroll</Button>
            </Card.Body>
          </Card>
        </Table>
        <div>
        <div className="right-side-prof">
        {student && (
          <div className="box">
          <p id='right-side-prof-txt1'>Professor's Information: </p>
          <p>Professor's name:{student.Emri} </p>
          <p>Professor's surname:{student.Mbiemri}</p>
          <p>Professor's ID:{student.StudentId}</p>
        </div>
        )}
          
        </div>
        <div className='calendar-prof'>
          <Calendar />
        </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default StudentDashboard;
