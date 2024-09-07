import React, { useContext } from 'react'
import { StoreContext } from '../../components/context/StoreContext'
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems = {}, food = [], removeFromCart, getTotal } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <div className='grid grid-cols-6 p-4 font-bold text-auto mt-4 text-center'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr className='ml-2 mr-2 border-b border-black '/>

        {food.length > 0 ? (
          food.map((item, index) => {
            if (cartItems[item.id] > 0) {
              return (
                <div key={item.id} className='grid grid-cols-6 p-4 border-b border-black text-center cursor-pointer'>
                  <img src={item.image} alt="" className='h-[80px] block mx-auto rounded-md' />
                  <p>{item.name}</p>
                  <p className=''>{item.price}</p>
                  <p>{cartItems[item.id]}</p>
                  <p>{item.price * cartItems[item.id]}</p>
                  <p onClick={() => removeFromCart(item.id)} className='font-bold'>X</p>
                </div>
              );
            }
            return null;
          })
        ) : (
          <p className="text-center">Your cart is empty.</p>
        )}
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 place-items-center'>
        <div className='p-4'>
          <p className='mb-4'>If you have a promo code, enter it here:</p>
          <input type="text" placeholder='promo code' className='bg-gray-300 mx-auto p-2' />
          <input type="button" value="submit" className='bg-black mx-auto text-white p-2' />
        </div>
        <div className='mt-9'>
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
            <p>${getTotal() + 30}</p>
          </div>
          <div className='bg-orange-500 p-4 font-bold mx-auto m-3 hover:cursor-pointer' onClick={() => navigate("/order")}>
            <h1>PROCEED TO CHECKOUT</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
