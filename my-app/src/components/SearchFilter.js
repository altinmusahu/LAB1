import React,{useState,useEffect} from 'react';
import  Container  from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup  from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Search.css';
import foto from '../img/home.jpg';
import Navbar from  './Navbar';
import Axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import '../css/Courses.css';
import { useNavigate } from 'react-router-dom';


const SearchFilter = () => {
  const [course,setCourse]=useState([]);
  const navigate=useNavigate();

  const LoadCourse=async()=>{
    const response= await Axios.get('http://localhost:3001/getCourse');
    setCourse(response.data)
  }

  useEffect(()=>{
    LoadCourse();
  },[]);

  const[search, setSearch]=useState('');
  console.log(search);
  return (
    <>
    <Navbar/>
    <div className='HeroBody'>
      
      <div className='CoursesHero'>

        <Container id="SearchBox">
    <Form id='Searchform'>
    <h3 className='text-left mt-4' id='TextAS'>Discover Your Passion with Our Online Courses</h3>
    <InputGroup className='my-3'>
        <Form.Control onChange={(e)=>setSearch(e.target.value)} placeholder='Search Course'/>
    </InputGroup>
    {/* <Filter/> */}
    </Form>

        </Container>
      <div id='Foto'>
      <img src={foto}/>
      </div>
      </div>
      </div>

      
      <div><h1 style={{color:'white', textAlign:'center', backgroundColor:'#4682B4',marginBottom:'0',padding:'0.5em '}}>Our Courses</h1>
    <div className='CoursesMain'>
  <div className='kartat'>
      {course.filter((item)=>{
    return search.toLowerCase()==='' ? item : item.Emri.toLowerCase().includes(search) || item.Kategori.toLowerCase().includes(search);
  }).map((item)=>(
    <Card style={{ width: '18rem' }} className='KartaEkursit'>
      <Card.Img variant="top" src={foto} />
      <Card.Body>
        <Card.Title>{item.Emri}</Card.Title>
        <Card.Text>
        <div className='bodyKarta'>
        <small>{item.Kategori}</small><br/>
        <h3></h3>{item.Pershkrimi}<h3/>
       </div>
        </Card.Text>
        <Button variant='primary' key={item.KursiId} onClick={()=>navigate(`/Course/${item.KursiId}`)}>Get Started</Button>
      </Card.Body>
    </Card>
    ))}
      </div>
    </div>
    </div> 
    </>
  )
}

export default SearchFilter