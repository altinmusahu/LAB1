import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './Authentication/Login';
import Signup from './Authentication/SignUp';
import reportWebVitals from './reportWebVitals';
import  Navbar from './components/Navbar';
import Courses from '../src/pages/Courses';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Add from './components/Kurse/addCourse';
import App from './App';
import Sidebar from './components/sidebar';
import Business from "./pages/Business";
import CoursesCard from './components/CoursesCard';
import PartnersPage from "./pages/PartnersPage";
import Root from "./Routes/route";
import Student from './components/adminStudent';
import AddKurs from './components/Kurse/addCourse';
import PopCourses from './components/PopCourses';
import Partners from './pages/PartnersPage';
import SearchFilter from './components/SearchFilter';
import EditKurs from './components/Kurse/EditCourse';
import Home from './pages/Home/Home'
import WhyLearnfy from './pages/WhyLearnify';
import AdminKurs from './components/adminKurse';
import EditStudent from './components/Student/editStudent'
import AdminPartners from './components/adminPartners'
import AdminContanctUs from './components/adminContactUs'
import AdminProfesori from './components/adminProfesor'
import SignUpAsProff from './Authentication/SignUpProff'
// import AdminPartners from './components/adminPartners'

import HomeProff from './components/Profesor/HomePageProfessor';
import HomeStudent from './components/Student/HomePageStudent';
import Kursi from './components/Kurse/Course';
import AdminBussines from './components/adminBussines';
import Payment from './payment/AppPayment';
import EditPartner from './components/Partners/editPartners';
import EditProff from './components/Profesor/editProfesor';
import Ndertesat from './components/Ndertesat58281';
import Apartamenti from './components/Apartament58281';
import EditNdertesa from './components/EditNdertesa';
import EditApartament from './components/editApartament';
import EditContact from './components/editContactUs';
const router = createBrowserRouter([
  {
    path: "/",
    element: <div><Home/></div>
  },
  {
    path: "/payment",
    element: <div><Payment/></div>
  },
  {
    path: "/addCourse",
    element: <div><AddKurs/></div>
  },
  {
    path: "/whyLearnfy",
    element: <div><WhyLearnfy/></div>
  },
  {
    path: "/homeProff",
    element: <div><HomeProff/></div>
  },
  {
    path: "/Course/:id", 
    element: <div><Kursi/></div>
  },
  
  {
    path: "/homeStudent",
    element: <div><HomeStudent/></div>
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
    path: "/adminDashboard", 
    element: <div><Sidebar/></div>
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
    path: "/adminKurs", 
    element: <div><AdminKurs/></div>
  },
  {
    path: "/SearchFilter", 
    element: <div><SearchFilter/></div>
  },
  {
    path: "/getCourse/:id", 
    element: <div><EditKurs/></div>
  },
  {
    path: "/updateCourse/:id", 
    element: <div><EditKurs/></div>
  },
  {
    path: "/getStudent/:id", 
    element: <div><EditStudent/></div>
  },
  {
    path: "/updateStudent/:id", 
    element: <div><EditStudent/></div>
  },
  {
    path: "/adminPartners", 
    element: <div><AdminPartners/></div>
  },
  {
    path: "/AdminContanctUs", 
    element: <div><AdminContanctUs/></div>
  },
  {
    path: "/adminBussines", 
    element: <div><AdminBussines/></div>
  },
  {
    path: "/adminProfesor", 
    element: <div><AdminProfesori/></div>
  },
  {
    path: "/SignUpAsProff", 
    element: <div><SignUpAsProff/></div>
  },
  {
    path: "/getPartnerin/:id", 
    element: <div><EditPartner/></div>
  },
  {
    path: "/updatePartners/:id", 
    element: <div><EditPartner/></div>
  },
  {
    path: "/getProff/:id", 
    element: <div><EditProff/></div>
  },
  {
    path: "/updateProff/:id", 
    element: <div><EditProff/></div>
  },
  {
    path: "/getNdertesen/:id", 
    element: <div><EditNdertesa/></div>
  },
  {
    path: "/updateNdertesa/:id", 
    element: <div><EditNdertesa/></div>
  },
  {
    path: "/getApartament/:id", 
    element: <div><EditApartament/></div>
  },
  {
    path: "/updateApartament/:id", 
    element: <div><EditApartament/></div>
  },
  {
    path: "/getContact/:id", 
    element: <div><EditContact/></div>
  },
  {
    path: "/updateContact/:id", 
    element: <div><EditContact/></div>
  },




  {
    path: "/ndertesat", 
    element: <div><Ndertesat/></div>
  },
  {
    path: "/apartamenti", 
    element: <div><Apartamenti/></div>
  },




]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
 <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();

