import React from 'react';
import { Container, Row, Col } from "reactstrap";
import heroImg from "../Home/carousel-2.jpg";
import "../Home/homePage.css";
import CountUp from "react-countup";
import aboutImg from "../Home/about-us.png";
import chooseImg from "../Home/why-choose-us.png";
import ReactPlayer from "react-player";
import { useState } from "react";
import Features from './Features';
import Testimonials from './Testimonials';
import Courses from "../Home/Courses";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer"



  const ChooseUs = () => {
    const [showVideo, setShowVideo] = useState(false);

    
  return (
    <>
    <Navbar />
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">LEARNING IS WHAT YOU MAKE OF IT</h2>
              <h2 className="mb-4 hero__title2">MAKE IT YOURS AT EDX</h2>
            </div>
       
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
    
      <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__content">
              {/* <h2>About Us</h2> */}
            

              <div className="about__counter">
                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={25} duration={2} suffix="K" />
                    </span>
                    <p className="counter__title">Completed Projects</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={12} duration={2} suffix="M" />
                    </span>

                    <p className="counter__title">Patient Around World</p>
                  </div>
                </div>

                <div className=" d-flex gap-5 align-items-center">
                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={95} duration={2} suffix="M" />
                    </span>

                    <p className="counter__title">Ideas Raised Funds</p>
                  </div>

                  <div className="single__counter">
                    <span className="counter">
                      <CountUp start={0} end={5} duration={2} suffix="K" />
                    </span>

                    <p className="counter__title">Categories Served</p>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
          <div class="moving-text1">Grow up with us</div>
          <div class="moving-text2">Transform Your Future</div>
          <div class="moving-text3">Empower Your Learning</div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=wYEeCICCmNk"
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={chooseImg} alt="" className="w-100" />
              )}

              {!showVideo && (
                <span className="play__icon">
                  <i
                    class="ri-play-circle-line"
                    onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
    <Features />
    <Courses />

    <Footer />
   

      </>
   
  
  );
}
export default ChooseUs;