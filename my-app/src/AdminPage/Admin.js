import React, { useState,useEffect } from 'react';
import AddCars from '../mainBody/AddCars/addCars';
import Login from './Login/Login';
import Header from '../header/header';
import Home from '../home/home';
function AdminPage() {
const [isShowDiisplayCars,setisShowDiisplayCars] = useState(true);

useEffect(() => {
  let sessionId = localStorage.getItem('SessionId');
  if (sessionId === null) {
    setisShowDiisplayCars(true);
  }else{
    setisShowDiisplayCars(false);
  }
},[isShowDiisplayCars]);

const displayAddCars = () => {
  setisShowDiisplayCars(false)
}
const displayLogin = () => {
  setisShowDiisplayCars(true)
}
  return (
    <div style={{display:'flex',flexDirection:'column'}}>
        <div style={{flex:'20',backgroundColor:'red',display:'flex',justifyContent:'center',alignItems:'center'}}>
                Car Rental
        </div>
        <div style={{flex:'80'}}>
            {isShowDiisplayCars ? 
                    <Login displayAddCars={displayAddCars}></Login>
                        : 
                    <AddCars displayLogin={displayLogin}></AddCars>
                }  
        </div>
    </div>
  );
}

export default AdminPage;
