import React from 'react'
import app from '../../assets/app-store-badge.png'
import google from '../../assets/google-play-badge.png'


const AppDownload = () => {
  return (
    <div className='grid grid-cols-1 '>
      <div className=''>
        <p className='font-bold text-3xl text-center mb-6 '>For Better Experience Download BiteBuddy App</p>
        <div className='flex justify-center items-center '>
        <div className='grid grid-cols-2  '>
            <img src={app} alt="" className='w-auto mr-5 hover:scale-110 transition-transform duration-300' />
            <img src={google} alt="" className='w-auto hover:scale-110 transition-transform duration-300 ' />
        </div>
        </div>
      </div>
    </div>
  )
}

export default AppDownload
