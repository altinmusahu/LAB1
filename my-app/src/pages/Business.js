import React from 'react';
import '../css/Business.css';
import BusinessForm from '../components/businessForm';
import backbanner from '../img/banner-bk.jpg';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Business() {
  return (
    <>
    <Navbar />
      <div className="jumbotron jumbotron-fluid">
        <div className="slogan-container">
          <div className="slogan-left">
            <h1>
            Apply as a professor for online courses at Learnfy <br />
            nd bring your knowledge to a global audience.<br />
            Transform the way teaching is done <br />
            and impact the future of students.<br />
            </h1>
          </div>
          <div className="slogan-right">
            <h1>
            Be an inspiration and guide for future students.<br />
            Apply as a professor at Learnfy<br />
            and cultivate their knowledge<br />
            through world-changing online courses.<br />
            </h1>
          </div>
        </div>

        <img id="banner" src={backbanner} alt="Banner" style={{ width: '100%', height: '600px' }} />
      </div>
      <div>
        <h2 className="text-center font-weight-bold my-5">Why should you apply with us?</h2>
        <div className="row">
          <div
            data-aos="fade-up"
            data-aos-delay="0"
            data-aos-duration="1000"
            data-aos-once="true"
            className="col-md-4 text-center"
          >
            <h4>Global impact</h4>
            <p>
            Through our application, as a professor, you have the opportunity 
            to make a global impact on the future of students. With the online courses 
            offered on our platform, you can bring your expertise to a wide audience, 
            helping students from all around the world to grow and develop academically.
            </p>
            
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="1000"
            data-aos-once="true"
            className="col-md-4 text-center"
          >
            <h4>Flexibility and accessibility</h4>
            <p>
            Learnfy offers an excellent platform for online teaching. As a professor, 
            you will benefit from the flexibility and the opportunity to create courses 
            according to your preferences. This gives you the freedom to set your own work 
            schedule, access teaching materials, and communicate with students in a convenient 
            and efficient manner.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
            data-aos-once="true"
            className="col-md-4 text-center"
          >
            <h4>Bashkëpunimi dhe inovacioni</h4>
            <p>
            At Learnfy, you will collaborate with a diverse community of professors 
            and other experts in their respective fields. This collaboration fosters innovation, 
            idea exchange, and the development of teaching methods. Through our platform, 
            you can share your experiences and knowledge, drawing inspiration from other professors 
            and enriching your teaching practice.
            </p>
          </div>
        </div>
        <div className='mesi'>
          <h1 id='midtxt-business'>Applicate here </h1>
        </div>
        <div className="business-form">
          <BusinessForm />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Business;















