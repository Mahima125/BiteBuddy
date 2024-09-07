import React, { useContext } from 'react';
import { StoreContext } from '../context/StoreContext.jsx';
import FoodItem from '../FoodItem/FoodItem.jsx';

const FoodDisplay = ({category}) => {
    console.log("Current category in :", category);

    const {food} = useContext(StoreContext);

  return (
    <div className='border-t-4 border-black m-5 p-5 '>
       <h2 className='font-bold text-3xl p-5'>Top Dishes near you</h2>
       <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 '>
        {food.map((item,index)=>{
            if(category==='all' || category=== item.category){
            return( <FoodItem id={index} name={item.name} image={item.image} description={item.description} price={item.price}  /> )
            }
        })}
       </div>
    </div>
  )
}

export default FoodDisplay
