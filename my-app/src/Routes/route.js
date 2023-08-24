import React, { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Navbaar from "../components/Navbar";
import Sidebar from '../components/sidebar';
import homePageStudent from '../components/Student/HomePageStudent';
import homepageProfessor from '../components/Profesor/HomePageProfessor';
import Payment from '../payment/AppPayment';
const Root = () => {
  return (
    <Fragment>
    <Sidebar />
    <main>
      <Outlet />
    </main>
  </Fragment>
  );
};
export default Root;