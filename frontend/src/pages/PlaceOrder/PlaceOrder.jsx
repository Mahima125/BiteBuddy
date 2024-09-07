import React, { useContext } from 'react'
import { StoreContext } from '../../components/context/StoreContext';

const PlaceOrder = () => {

  const { getTotal} = useContext(StoreContext);

  return (
    <div>
      <div className='grid grid-cols-1 md:grid-cols-2 m-8 place-items-center'>
        <div >
          <h1 className='text-3xl font-bold m-4'>Delivery Information</h1>
          <div className='m-6 '>
            <div className='flex gap-2'>
              <input type="text" placeholder='First name' className=' border border-black pl-3 mx-auto h-[40px] w-full'/> 
              <input type="text" placeholder='Last name' className=' border border-black  pl-3 mx-auto h-[40px]  w-full' />
            </div>
            <input type="email" placeholder='Email address' className=' border border-black  pl-3 mx-auto m-3 h-[40px] w-full' /><br />
            <input type="text" placeholder='Street' className=' border border-black  pl-3 w-full h-[40px]'/><br />
            <div className='flex gap-2'>
              <input type="text" placeholder='City'className=' border border-black  pl-3 mx-auto m-3 w-full h-[40px]' />  
              <input type="text" placeholder='State' className=' border border-black  pl-3 mx-auto m-3 w-full h-[40px]'/>
            </div>
            <div className='flex gap-2'>
              <input type="number" placeholder='Zip code' className=' border border-black  pl-3 mx-auto  w-full h-[40px]'/>  
              <input type="text" placeholder='Country'className=' border border-black  pl-3 mx-auto  w-full h-[40px]' />
            </div>
            <input type="number" placeholder='Phone' className=' border border-black  pl-3 mx-auto m-3  w-full h-[40px]'/>
          </div>
        </div>
        <div>
        <h1 className='font-bold text-3xl text-center'>Cart Total</h1>
          <div className='grid grid-cols-2 p-3 place-items-center'>
            <p>Subtotal</p>
            <p>${getTotal()}</p>
          </div>
          
          <div className='grid grid-cols-2 p-3 place-items-center'>
            <p>Delivery Fee</p>
            <p>${30}</p>
          </div>
          <div className='grid grid-cols-2 p-3 place-items-center'>
            <p>Total</p>
            <p>${getTotal()+30}</p>
          </div>
          <div className='bg-orange-500 p-4 font-bold w-full m-4 ' >
            <h1>PROCEED TO CHECKOUT</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PlaceOrder
