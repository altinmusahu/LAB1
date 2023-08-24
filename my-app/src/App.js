
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './Authentication/Login';
import Signup from './Authentication/SignUp';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import Courses from '../src/pages/Courses';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Add from './components/Kurse/addCourse';

import Home from './pages/Home/Home';
import Business from "./pages/Business";
import CoursesCard from './components/CoursesCard';
import PartnersPage from "./pages/PartnersPage";
import Root from "./Routes/route";
import Student from './components/adminStudent';
import Kurse from './components/adminKurse';
import AddEdit from './components/Kurse/addCourse';
import PopCourses from './components/PopCourses';
import Partners from './pages/PartnersPage';
import SearchFilter from './components/SearchFilter';
import Edit from './components/Kurse/EditCourse';
import Sidebar from './components/sidebar';
// import homePageProff from './Proff/homePage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <div><Home/></div>
      },
      // {
      //   path: "/",
      //   element: <div><Sidebar/></div>
      // },
      // {
      //   path: "/",
      //   element: <div><homePageProff/></div>
      // },
      {
        path: "/addCourse",
        element: <div><AddEdit/></div>
      },
      {
        path: "/Courses",
        element: <div><Courses/></div>
      },
      {
        path: "/PopCourses",
        element: <div><PopCourses/></div>
      },
      {
        path: "/Partners",
        element: <div><Partners/></div>
      },
      {
        path: "/Login",
        element: <div><Login/></div>
      },
      {
        path: "/Signup",
        element: <div><Signup/></div>
      },
      {
        path: "/business", 
        element: <div><Business/></div>
      },
      {
        path: "/adminStudent", 
        element: <div><Student/></div>
      },
      {
        path: "/SearchFilter", 
        element: <div><SearchFilter/></div>
      },
      {
        path: "/getCourse/:id", 
        element: <div><Edit/></div>
      },
      {
        path: "/updateCourse/:id", 
        element: <div><Edit/></div>
      },
      {
        path: "/course", 
        element: <div><Kurse/></div>
      },
    ]
  }
]);

function App(){
  return(

    <div>
      <RouterProvider router={router} />
      {/* <Appear /> */}
    </div>

  )
    
}
export default App;

