import React, { useState } from 'react';
import { Container, TextField, Button, Typography, MenuItem } from '@mui/material';
import Paper from '@mui/material/Paper';
import { objectToFormData,makeApiRequest,makeApiRequest2 } from '../../Services/service';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const carTypes = [
  { label: 'luxury', value: 'luxury' },
  { label: 'family', value: 'family' },
  { label: 'sports', value: 'sports' },
  { label: 'premium', value: 'premium' },
  // Add more car types as needed
];

function AddCars({displayLogin}) {
  const [loading, setLoading] = useState(false);
  const [car, setCar] = useState({
    type: '',
    model: '',
    color: '',
    number: '',
    rentCostPerKilometer:''
  });

  const handleChange = (event) => {
    setCar({ ...car, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true)
    let formData = await objectToFormData(car);
    let res = await makeApiRequest('http://192.168.1.35:5656/AddCars',formData);
    if(res['ErrorCode'] === 2001){
      toast.success("Cars added successfully!");
      setLoading(false);
      handleReset();
    }

  };
  const handleReset = () => {
    setCar({
      type: '',
      model: '',
      color: '',
      number: '',
      rentCostPerKilometer: ''
    });
  };
  const Logouts = () => {
    localStorage.removeItem('SessionId');
    displayLogin();
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
      <button onClick={Logouts}>Logout</button>
      <Paper elevation={8} style={{margin:'10px'}}>
        <Container component="main" maxWidth="xs">
          <Typography component="h1" variant="h5">
            Add Car Information
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              select
              label="Car Type"
              name="type"
              value={car.type}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="filled"
              required
            >
              {carTypes.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <TextField
              label="Model"
              name="model"
              value={car.model}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              required
            />
            <TextField
              label="Color"
              name="color"
              value={car.color}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="filled"
              required
            />
            <TextField
              label="Number"
              name="number"
              value={car.number}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              required
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            />
            <TextField
              label="Rent Cost Per Kilometer"
              name="rentCostPerKilometer"
              value={car.rentCostPerKilometer}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              required
              inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
            />
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              Submit
            </Button>
          </form>
        </Container>
      </Paper>
    </div>
}
      <ToastContainer />
    </>
  );
}

export default AddCars;
