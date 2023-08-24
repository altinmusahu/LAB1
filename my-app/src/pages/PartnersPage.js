import React, { useState, useEffect } from 'react';
import axios from 'axios';

import "../css/PartnerPage.css";
import Card from 'react-bootstrap/Card';
import harvard from '../img/harvard.png';
import michigan from '../img/michigan.png';
import massachusetts from '../img/massachusetts.png';
import ohio from '../img/ohio.png';
import purdue from '../img/purdue.png';
import northwestern from '../img/northwestern.png';
import washington from '../img/washington.png';
import boston from '../img/boston.png';
import Carousel from 'react-bootstrap/Carousel';
import Navbar from '../components/Navbar';
import PartnerForm from '../components/partnerForm';
import Footer from '../components/Footer';

function Partners(){

    const [partners,setPartners]=useState([]);

      const[search, setSearch]=useState('');
      console.log(search);

      const LoadPartners=async()=>{
        const response= await axios.get('http://localhost:3001/getPartners');
        setPartners(response.data)
      }


      useEffect(()=>{
        LoadPartners();
      },[]);



    return(
        <>
        <Navbar/>
        <div class="text-container">
            <><h1>LEARNFY</h1><h2>PARTNER NETWORK</h2></>
        </div>

        <div class="showcase">
            <div class="txt1">
            <><h1>GET EVEN MORE FROM</h1><h2>LEARNFY'S DATA CLOUD</h2></>
            <h3>With their data in the cloud, they were able to easily scale up their processing power as needed, without having to worry about investing in expensive hardware. They also had the flexibility to experiment with different algorithms and models to find the best recommendations for their users.</h3>
            </div>
        </div>

        <div class="partners-showcase">
            <div class="partners-text">
                <><h1>Our</h1><h2>Partners</h2></>
            </div>
        </div>
        <div class="cards">

            {partners.map((partner, index) => (
            <div className='partnersCards'> 
             <Card
             style={{ width: '20rem' }}
             className="cards1 mb-2"
           >
             <Card.Header key={partner.PartnerId}>Partners</Card.Header>
             <Card.Body>
               <Card.Title>{partner.name}   {partner.company}</Card.Title>
               <Card.Text>
                 {partner.coursecategory}
               </Card.Text>
             </Card.Body>
           </Card>
           </div>
            ))}
                

               
        </div>


            <div class="slideshow-text">
                <><h1>Our</h1><h2>Contributers</h2></>
            </div>


            <div class="slideshow">
                <Carousel variant="dark">
                    <Carousel.Item>
                    <img src={harvard} alt="" className='slideshow-img'/>
                        <Carousel.Caption className='slideshow-txt1'>
                            <h5>Lawrence Seldon Bacow</h5>
                            <h6>President of Harvard University</h6>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                    <img src={michigan} alt="" className='slideshow-img'/>
                        <Carousel.Caption className='slideshow-txt1'>
                        <h5>Dr. Santa J. Ono</h5>
                            <h6>President of Michigan University</h6>
                        </Carousel.Caption>
                    </Carousel.Item>
                        <Carousel.Item>
                        <img src={ohio} alt="" className='slideshow-img'/>
                        <Carousel.Caption className='slideshow-txt1'>
                        <h5>Kristina M. Johnson</h5>
                            <h6>President of The Ohio State University</h6>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
              <div className='mesi-partner'>
                 <h1 id='midtxt-partner'>Applicate To Be Partner </h1>
               </div>
               <div className="partner-form">
                 <PartnerForm/>
                 </div>
             </div>
             <Footer />
        </>
    );
}

export default Partners;