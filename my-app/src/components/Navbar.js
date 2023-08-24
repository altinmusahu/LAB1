import React, { useEffect, useState } from 'react';
import '../css/Navbaar.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';


function Header() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setLoggedIn(false);
  };

  const decodeToken = (token) => {
    try {
      const decoded = JSON.parse(atob(token.split('.')[1]));
      return decoded;
    } catch (error) {
      console.log('Token decoding error:', error);
      return null;
      }
  };
  
  const isAdmin = () => {
    const token = localStorage.getItem('token');
    if (token) {
      const decodedToken = decodeToken(token);
      return decodedToken?.role === 'Admin';
    }
    return false;
  };

  const handleAdminClick = () => {
    if (isAdmin()) {
      navigate('/adminAdmins');
    }
  };


  return (
    <Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#">Learnfy</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
            <Link to="/">Home</Link>
            <Link to="/partners">Partners</Link>
            <Link to="/business">Business</Link>
            <Link to="/courses">Courses</Link>
            <Link to='/whyLearnfy'>Why Learnfy?</Link>
          </Nav>

          <Nav className="buttons">
            {!loggedIn ? (
              <>
                <Link to="/login" className="buttonA">
                  Sign in
                </Link>{' '}
                <Link to="/signup" className="buttonB">
                  Register for free
                </Link>{' '}



                {/* <DropdownButton className='dropdown' id="dropdown-item-button" title="Sign Up">
                  <Dropdown.ItemText className='texti-1'>E-Sherbimet</Dropdown.ItemText>
                  <Link to='/signupProff'>
                    <Dropdown.Item as="button">Professor</Dropdown.Item>
                  </Link>
                  <Link to=''>
                    <Dropdown.Item as="button">Student</Dropdown.Item>
                  </Link>
                </DropdownButton> */}
              </>
            ) : (
              <>
                <Link to="/login" className="buttonA" onClick={handleLogout}>
                  Log Out
                </Link>{' '}
              </>
            )}

            {loggedIn &&  isAdmin() && handleAdminClick() }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;