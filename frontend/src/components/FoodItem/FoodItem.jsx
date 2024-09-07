import React, { useContext} from 'react'
import add from '../../assets/add.png';
import circle from '../../assets/circle.png';
import minus from '../../assets/minu.png';
import { StoreContext } from '../context/StoreContext.jsx';


const FoodItem = ({id,name,image,price,description}) => {
  
  const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);

  return (
    <div className='m-2  shadow-lg rounded-lg  container h-full container relative hover:scale-105 transition-transform duration-300 '>
       <div>
        <img src={image} alt={add} className='rounded-lg w-full h-[300px] object-cover '/>
        <div className='absolute right-4 top-[260px]'>
        {(!cartItems[id]) ? <img src={add} onClick={()=>addToCart(id)} className='w-auto h-7' /> : 
        <div className='flex gap-2 bg-white rounded-full p-1'>
          <img src={circle} alt="" onClick={()=>addToCart(id)} className='w-auto h-7' />
          <p>{cartItems[id]}</p>
          <img src={minus} alt="" onClick={()=>removeFromCart(id)} className='w-auto h-7'/>
        </div> } 
        </div>      
       </div>
       <div>
        <p className='font-bold text-xl m-2'>{name}</p>
       </div>
       <div>
        <p className='m-3 '>{description}</p>
        <p className='absolute bottom-5 right-4 font-bold text-xl'>${price}</p>
       </div>
    </div>
  )
}

export default FoodItem
