import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import family from '../../Assests/family.jpg'
import luxary from '../../Assests/laxuary.jpg'
import premium from '../../Assests/premium.jpg'
import sports from '../../Assests/sports.jpg'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import './displayCars.css'
import { useEffect } from 'react';
import { getDefalutPath } from '../../Services/service';
function DisplayCars({displayBooking}) {

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      let response = await getDefalutPath();
      console.log(response);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  
  const cardData = [
      { 
        category: "sport",
        title: "Sport Adventure",
        description: "Experience the thrill of adrenaline with our exciting sports adventure package.",
        imageUrl: sports
      }, 
      { 
          category: "luxuarly",
          title: "Luxuarlu Experience",
          description: "The ultimate luxury experience for those who seek extravagance and opulence.",
          imageUrl: luxary
        },

        { 
          category: "premium",
          title: "Premium Package",
          description: "Indulge yourself with our premium package, designed for those who appreciate the finer things in life.",
          imageUrl: premium
        },
        { 
          category: "family",
          title: "Family Fun",
          description: "Create lasting memories with your family with our family fun package, suitable for all ages.",
          imageUrl: family
        }
      ];
    return(
        <div className='displayCars'>
          {cardData.map((card, index) => (
            <Card key={index} sx={{ maxWidth: 345 }} className='cards'>
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image={card.imageUrl}
                  alt={card.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small" color="primary" onClick={()=>{
                  displayBooking(card.category);
                }}>
                  Rent
                </Button>
              </CardActions>
            </Card>
          ))}
      </div>
    );
}

export default DisplayCars;