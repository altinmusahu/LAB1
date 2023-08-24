import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import jwtDecode from 'jwt-decode';
import { toast } from 'react-toastify';

const PrivateRoute = ({ allowedRoles }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthentication = async () => {
      const token = localStorage.getItem('token');

      if (token) {
        try {
          // Decode the JWT token to extract user information
          const decodedToken = jwtDecode(token);
          const { role } = decodedToken;

          setIsAuthenticated(true);
          setUserRole(role);

          // Redirect based on the user's role
          if (role === 'Admin') {
            console.log('Logged in as admin');
            navigate('/adminAdmins');
          } else if (role === 'AdminStudent') {
            console.log('Logged in as Student');
            navigate('/studentDashboard');
          } else if (role === 'AdminCourse') {
            console.log('Logged in as Admin of Course');
            navigate('/adminKurse');
          } else if (role === 'Student') {
            console.log('Logged in as Student');
            navigate('/adminStudent');
          } else if (role === 'Profesor') {
            console.log('Logged in as Profesor');
          } else {
            console.log('Invalid response:');
          }
        } catch (error) {
          toast.error('Invalid password or username!');
          navigate('/login');
        }
      }
    };

    checkAuthentication();
  }, []);

  return (
    <Outlet>
      {isAuthenticated ? (
        allowedRoles.includes(userRole) ? (
          <Outlet />
        ) : (
          navigate('/login')
        )
      ) : (
        navigate('/login')
      )}
    </Outlet>
  );
};

export default PrivateRoute;