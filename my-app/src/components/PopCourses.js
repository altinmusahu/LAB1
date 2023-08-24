import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import foto from '../img/home.jpg';
import '../css/Courses.css';
import {home} from '../img/home.jpg';
// import 
// import CoursesCard from './CoursesCard';
import harvard from '../img/harvard.png';

import Carousel from 'react-bootstrap/Carousel';
import { useEffect, useState } from 'react';
import Axios  from 'axios';
const PopCourses=()=> {

  const [course,setCourse]=useState([]);

  const LoadCourse=async()=>{
    const response= await Axios.get('http://localhost:3001/getPopCourse');

    setCourse(response.data)
  }


  useEffect(()=>{
    LoadCourse();
  },[]);

  return (
    <div>
    <div>
      <h1 style={{color:'white', textAlign:'center', backgroundColor:'#4682B4',marginBottom:'0',padding:'0.5em '}}>Popular Courses</h1>
    </div>

    <div class="slideshow">
                <Carousel variant="dark">
                {course.map((kursi, index) => (
                    <Carousel.Item key={index+1}>
                    <img src={harvard} alt="" className='slideshow-img'/>
                        <Carousel.Caption className='slideshow-txt1'>
                            <h5>{kursi.Emri}</h5>
                            <h6>{kursi.Pershkrimi}</h6>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
                </Carousel>
            </div>




</div>
  );
}

export default PopCourses;