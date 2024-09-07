import React from 'react'
import logo from '../../assets/lo.png'
import twitter from '../../assets/twitter.png'
import facebook from '../../assets/facebook.png'
import instagram from '../../assets/instagram.png'

const Footer = () => {
  return (
    <div className='bg-black/50'>
      <div className='grid grid-cols-1 md:grid-cols-3 m-5  text-white border-b-[10px] border-black '>
        <div className='container m-4'>
            <img src={logo} alt="" className='h-[90px]'/>
            <p className='pt-3'>BiteBuddy offers a convenient platform for customers to order meals online from a variety of restaurants. It features menus, user reviews, secure payment options, and real-time tracking.</p>
            <div className='flex h-[30px] gap-3 mt-4 '>
            <img src={facebook} alt="" />
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
            </div>
        </div>
        <div className='m-4 font-lg'>
            
            <ul className=' pt-9 pl-9'>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className='m-4  m-9 pt-9'>
            <p className='font-bold'>GET IN TOUCH</p>
            <ul className='mt-3 '>
                <li>+91 123456789</li>
                <li>bitebuddy@gmail.com</li>
            </ul>
        </div>
      </div>
      <div className='pb-3'>
      <p className='text-center text-white'>Copyright 2024 | All rights reserved</p>
      </div>
      </div>
    
  )
}

export default Footer
