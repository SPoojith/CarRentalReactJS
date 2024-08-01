import '../mainBody/mainBody.css'
import { useState } from 'react';
import DisplayCars from './displayCars/displayCars.js'
import RentCar from './rentCar/rentCar.js';
function MainBodys({color}) {
  const [isShowDiisplayCars, setisShowDiisplayCars] = useState(true);
  const [SelectedCategory, setSelectedCategory] = useState(null);
  const displayBooking = (category) =>{
    setSelectedCategory(category);
    setisShowDiisplayCars(false);
  }
  const displayCategory = () =>{
    setisShowDiisplayCars(true);
  }
  return (
    <>
        <div className="mainBodyinside" style={{'--home-bg-color':color.home,'--text-color':color.colour}}>
          {isShowDiisplayCars ? 
          <DisplayCars displayBooking={displayBooking} /> 
          : 
          <RentCar SelectedCategory={SelectedCategory} displayCategory={displayCategory}/>
          }
          
        </div>
        </>
  );
}

export default MainBodys;
