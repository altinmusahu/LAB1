import React,{useState,useEffect} from 'react';
import "../css/sidebar.css";
// import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from 'axios';
import { Button, Space, Table, Typography } from "antd";
import { NavLink,Link, useResolvedPath } from 'react-router-dom';
// import { Card, Metric, Text } from "@tremor/react";
import {GrView} from 'react-icons/gr';
import {AiOutlineDelete,AiOutlineEdit}
from 'react-icons/ai';
import { MDBBadge, MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit';
import harvard from "../img/harvard.png"
import "../css/KurseAdmin.css";



import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from 'cdbreact';

const Sidebar = () => {




  return (
    <><div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
                <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <Link to="/" className="text-decoration-none" style={{ color: 'inherit' }}>
            Dashboard
          </Link>
        </CDBSidebarHeader>
        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <NavLink exact to="/adminDashboard" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Admin Dashboard</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/adminKurs" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="book">Course</CDBSidebarMenuItem>
            </NavLink>


            <NavLink exact to="/adminProfesor" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Professors</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/adminStudent" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Students</CDBSidebarMenuItem>
            </NavLink>

            <NavLink exact to="/AdminContanctUs" activeClassName="activeClicked">
          <CDBSidebarMenuItem icon="user">ContactUs</CDBSidebarMenuItem>
        </NavLink>

        <NavLink exact to="/adminPartners" activeClassName="activeClicked">
          <CDBSidebarMenuItem icon="user">Partners</CDBSidebarMenuItem>
        </NavLink>

        <NavLink exact to="/adminBussines" activeClassName="activeClicked">
          <CDBSidebarMenuItem icon="book">Aplikimet</CDBSidebarMenuItem>
        </NavLink>
        <NavLink exact to="/ndertesat" activeClassName="activeClicked">
          <CDBSidebarMenuItem icon="book">Ndertesat</CDBSidebarMenuItem>
        </NavLink>
        <NavLink exact to="/apartamenti" activeClassName="activeClicked">
          <CDBSidebarMenuItem icon="book">Apartamenti</CDBSidebarMenuItem>
        </NavLink>

   

            <NavLink exact to="/" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="bi bi-box-arrow-left">Log out</CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>
      </CDBSidebar>
    </div>
    </>
  );
}

export default Sidebar;


