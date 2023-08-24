import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar';
import { home } from '../../img/home.jpg';
import FaqComponent from './Faq';
import AskAQuestion from './AskAQuestion';
import './Course.css';
import './Faq.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import './Content.css';
import Footer from '../Footer';




const EnrollmentButton = () => {

  const [course, setCourse] = useState([]);
  const { id } = useParams();
  const [emri, setEmri] = useState('');
  const [kategori, setKategori] = useState('');
  const [pershkrimi, setPershkrimi] = useState('');
  
  
  
  useEffect(() => {
    const loadCourse = async () => {
      try {
        const course = await axios.get(`http://localhost:3001/getKursin/${id}`);
        console.log(course.data);
        if (course) {
          setEmri(course.data.Emri || '');
          setKategori(course.data.Kategori || '');
          setPershkrimi(course.data.Pershkrimi || '');
          // setFoto(course.data.Foto || '');
        }
      } catch (error) {
        console.log(error);
      }
    };
    
    loadCourse();
  }, [id]);
  
  const token = localStorage.getItem('token');
  

  const decodedToken = token ? decodeToken(token) : null;

  const decodeToken = (token) => {
    try {
      const decoded = JSON.parse(atob(token.split('.')[1]));
      return decoded;
    } catch (error) {
      console.log('Token decoding error:', error);
      return null;
    }
  };

  const [id1, setId1] = useState('');

  useEffect(() => {
    const fetchStudentName = async () => {
      try {
        const token = localStorage.getItem('token');
        const decodedToken = decodeToken(token);

        const response = await axios.get(`http://localhost:3001/getStudentNameByEmail?email=${decodedToken.username}`);
        const student = response.data;

        setId1(student.id1);

      } catch (error) {
        console.log(error);
      }
    };

    fetchStudentName();
  }, []);

  return (
    <>
      <Navbar />
      <div className="heroCourse">
        <>
          <div className='heroContent'>
            <div className='heroText'>
          <h1>{emri}</h1>
          <i>{kategori}</i></div>
          <div className='heroFoto'>
            <div className='moto'>
                  <i>
                    ► Explore all your possibilities with us 
                  </i>
                <br/>
                  <i>
                    ► Achieve greatness with us 
                  </i>
                <br/>
                  <i>
                    ► It all starts here 
                  </i>
            </div>
            </div>
          </div>
          <br />
          <button className="btn btn-danger">Enroll Now</button>
        </>
      </div>
      <div className="courseDescription">
        <div className="h1Cd">
          <h1>Course Description {id1}</h1>
         </div>
         <div className='desH3'>
          <h3>{pershkrimi}</h3>
        </div>
      </div>
      {decodedToken && decodedToken.role !=='Profesor' && (
      <div className="profContent">            
        <div className='profText'>
          {/* <h1>{emri}</h1> */}
          {/* <i>{kategori}</i>/ */}
          <h1>Emri</h1>
          <i>Professor</i>
          </div>
          <div className='txtProf'>
            <p>This is the professor for this course. <br/>He has been qualified by our Learnfy Team</p>
          </div>
      </div>)}
      {/* <div className="showcase">
        <div className="txt1">
          <h1>Syllabus</h1>
          <h2>Description</h2>
          <h3>{pershkrimi}</h3>
        </div>
      </div> */}
      
      {decodedToken && (decodedToken.role === 'Student' || decodedToken.role === 'Profesor')&&(
        <div>
        <div className="Content">   
        <div className='ContentTitle'>
            <h1>Course Content</h1>
        </div>
       
        <div className='tabelaContent'>
       
          <div className='TopicContent'> 
                 <h1>Topic 1</h1>
                 <p>
                  Loremdfghjkliyujtrhgefsdxvc bnmj,kyujtrhgdesxfbc bvnbnkj.liu kbyjtfcngvbm,jkliubygc fbn
                 </p>
           </div>
           <div className='TopicContent'> 
          <h1>Topic 1</h1>
           <input
             type="file"
             name="cv"
             id="cv-business"
             accept="image/*,.pdf"

              className='uploadBtn'
            />

    </div>
          
           </div>
      </div>
      </div>
      )}
      

      {decodedToken && decodedToken.role === 'Student' && (
        <>
          <div className="FrequentQuestions">
            <FaqComponent courseId={id} />
          </div>
          <AskAQuestion courseId={id} />
        </>
      )}
      <Footer/>
    </>
  );
};

export default EnrollmentButton;