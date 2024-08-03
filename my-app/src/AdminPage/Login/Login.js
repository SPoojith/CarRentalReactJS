import React, { useState } from 'react';
import {TextField,Button,CardContent,Card} from '@mui/material';
import '../Login/Login.css'
import { AdminLogin, objectToFormData } from '../../Services/service';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Login({displayAddCars}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async(event) => {
    event.preventDefault();
    setLoading(true);
    let Data = {
      "userName":username,
      "password":password
    }
    let FD = await objectToFormData(Data)
    try {
      let res = await AdminLogin('http://192.168.1.35:5656/AdminLogin',FD)
      if(res['ErrorCode'] === 5001){
        setLoading(false);
        toast.error("Wrong UserName");
        }else if(res['ErrorCode'] === 5002){
        setLoading(false);
        toast.error("Wrong Password");
        }else if(res['ErrorCode'] === 2002){
        setLoading(false);
        toast.success("Login Successful, Session Created");
        displayAddCars()
        localStorage.setItem("SessionId",res['sessionId'])
      }
    } catch (error) {
        setLoading(false);
        toast.error("Server gone rouge, Please Try Again Later");
    }
  };

  return (
    <>
    {loading ? 
        <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(255, 255, 255, 0.7)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999,
        }}
      >
        <p style={{ animation: 'blink 1s infinite' }}>Loading...</p>
      </div>
    :
    <div>
      <Card className="card">
        <CardContent>
          <form noValidate autoComplete="off" onSubmit={handleSubmit} className='form'>
            <div>
              <TextField
                id="username"
                label="Username"
                variant="outlined"
                value={username}
                onChange={handleUsernameChange}
                required
              />
            </div>
            <div>
              <TextField
                id="password"
                label="Password"
                type="password"
                variant="outlined"
                value={password}
                onChange={handlePasswordChange}
                required
              />
            </div>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
              <Button variant="contained" color="primary" type="submit" style={{width:'30px'}}>
                Login
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
      
    </div>
    }
    <ToastContainer/>
    </>
  );
}

export default Login;
