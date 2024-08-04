// import { useEffect } from "react";
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import "../rentCar/rentCar.css"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import family from '../../Assests/family.jpg'
import { grey } from '@mui/material/colors';
import { useState ,useEffect} from 'react';
import { getCars, objectToFormData } from '../../Services/service';
import { GlobalState } from '../../store';


function RentCar({SelectedCategory,displayCategory}) {

    const [data,setData] = useState("hi")
    const [CarListData,setCarListData] = useState([])

    const count = GlobalState((state) => state.count);
    
    const increaseCount = GlobalState((state) => state.increaseCount);

    
    useEffect( ()=>{
        async function fetchData() {
            let data = {
                'Type':SelectedCategory
            }
            let formData = await objectToFormData(data);
            try {
                let res = await getCars('http://192.168.1.35:5656/getCars',formData);
                if(res['ErrorCode'] === 2001){
                    let carList = res['CarList']
                    if(carList.length === 0){
                        toast.error("No Cars");
                    }
                    setCarListData(carList)
                }else{
                    setCarListData([])
                }
            } catch (error) {
                setCarListData([])
                toast.error("server gone rogue2");
            }
        }
        fetchData()
    },[data,SelectedCategory])

    return(
        <div className='carListContainer' style={{ border: '1px solid rgba(0, 0, 0, 0.2)', borderRadius: '8px', boxShadow: '0px 3px 6px rgba(0, 0, 0, 0.1)',margin:'30px' }}>
            <div style={{ display:'flex',flexDirection:'row', textAlign: 'center', marginBottom: '20px' }}>
            <Button onClick={displayCategory} variant="outlined" style={{ marginRight: '10px',flex:'1' }}>
                Back
            </Button>
            <h1 style={{ color: 'blue', fontSize: '24px',flex:'9',display:'flex',alignItems:'center',justifyContent:'center' }}>Book a {SelectedCategory} car</h1>
            </div>
            <div className='displayCars'>
            {CarListData.map((card, index) => (
                    <Card key={index} sx={{ minWidth: 275 }} className='cards' style={{
                        border: `2px solid ${card.color}`,
                    }}>
                        <CardContent style={{
                            display:'flex',
                            flexDirection:'row',
                            alignContent:'space-around',
                            borderBottom: '1px solid grey',
                        }}>
                            <div style={{padding:'10px'}}>
                            <Typography variant="h5" color="text.primary" gutterBottom>
                                Model: {card.model}
                            </Typography>
                            <Typography variant="body1" color="text.primary">
                                Color: <span style={{ color: card.color }}>{card.color}</span>
                            </Typography>
                            <Typography variant="body1" color="text.primary">
                                Type: {card.type}
                            </Typography>
                            <Typography variant="body1" color="text.primary">
                                Number: {card.number}
                            </Typography>
                            <Typography variant="body1" color="text.primary">
                                Price: {card.price}
                            </Typography>
                            </div>
                            <div style={{display:'flex',justifyContent:'center'}}>
                            <CardMedia
                                component="img"
                                height="140"
                                image={family}
                                alt={card.title}
                                />
                            </div>
                        </CardContent>
                    <CardActions className='book'>
                    <Button size="small" onClick={
                        ()=>{
                            toast.success("Cars added successfully!");
                            increaseCount()    
                    }}>Book</Button>
                    </CardActions>
                </Card>
                
            ))}
            </div>
            <ToastContainer />
        </div>
    );
}
export default RentCar;