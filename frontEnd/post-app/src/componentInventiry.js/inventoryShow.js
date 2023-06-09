import React, { useEffect } from 'react';
import DataInventory from "./DataTable";
import { Button, Form, Table,Card } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import Sidebar from '../componentBilling.js/sideBar';
import MyNavbar from '../componentBilling.js/HomeNav';

function InventoryHome(){
    let token=localStorage.getItem("token")
    const navigate = useNavigate();
    useEffect(()=>{
      if(!token){
        navigate('/login')
      }
      return () => {};
    },[])
    return (
      <div> <div className='sidebar'>
      <Sidebar/>
    </div>
        <div className="main-content">
      <Card  style={{ height: "800px" }}>
      <MyNavbar/>
        <DataInventory/>
      </Card>
      </div>
      </div>
    )
}
export default InventoryHome;