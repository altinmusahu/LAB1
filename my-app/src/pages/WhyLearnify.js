import React from 'react';
import '../css/whyLearnfy.css';
import image from '../img/about-dec-v3.png'
import Contactus from '../pages/ContactUs';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const AboutSection = () => {
  return (
    <>
    <Navbar />
    <div id="about" className="about section">
          <div className="container">
              <div className="row">
                  <div className="col-lg-12">
                      <div className="row">
                          <div className="col-lg-6">
                              <div className="about-left-image wow fadeInLeft" data-wow-duration="1s" data-wow-delay="0.5s">
                                  <img src={image} />
                              </div>
                          </div>
                          <div className="col-lg-6 align-self-center wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                              <div className="about-right-content">
                                  <div className="section-heading">
                                      <h6>About Us</h6>
                                      <h4>Who is Learnfy <em>Platform</em></h4>
                                      <div className="line-dec"></div>
                                  </div>
                                  <p>At Learnfy, we believe in the power of knowledge and the potential for individuals to enhance their skills and achieve personal and professional success. For this reason, we offer a wide range of courses that encompass topics such as programming, graphic design, business and management, online marketing, foreign languages, personal development, and much more.</p>
                                  <p>Here are some statistics for our students:</p>
                                  <div className="row">
                                      <div className="col-lg-4 col-sm-4">
                                          <div className="skill-item first-skill-item wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">
                                              <div className="progress" data-percentage="90">
                                                  <span className="progress-left">
                                                      <span className="progress-bar"></span>
                                                  </span>
                                                  <span className="progress-right">
                                                      <span className="progress-bar"></span>
                                                  </span>
                                                  <div className="progress-value">
                                                      <div>
                                                          90%<br />
                                                          <span>Completed</span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-lg-4 col-sm-4">
                                          <div className="skill-item second-skill-item wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">
                                              <div className="progress" data-percentage="90">
                                                  <span className="progress-left">
                                                      <span className="progress-bar"></span>
                                                  </span>
                                                  <span className="progress-right">
                                                      <span className="progress-bar"></span>
                                                  </span>
                                                  <div className="progress-value">
                                                      <div>
                                                          90%<br />
                                                          <span>Retention</span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                      <div className="col-lg-4 col-sm-4">
                                          <div className="skill-item third-skill-item wow fadeIn" data-wow-duration="1s" data-wow-delay="0s">
                                              <div className="progress" data-percentage="80">
                                                  <span className="progress-left">
                                                      <span className="progress-bar"></span>
                                                  </span>
                                                  <span className="progress-right">
                                                      <span className="progress-bar"></span>
                                                  </span>
                                                  <div className="progress-value">
                                                      <div>
                                                          80%<br />
                                                          <span>Employed</span>
                                                      </div>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <div className="mesi-form">
              <h1 id='midtxt'>Contact Us </h1>
          </div>
          <div className="contactus-form-about">
              <Contactus />
          </div>
      </div>
      <Footer />
      </>
  );
}

export default AboutSection;