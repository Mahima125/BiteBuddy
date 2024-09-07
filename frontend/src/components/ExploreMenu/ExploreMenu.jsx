import React, { useState } from 'react';
import five from '../../assets/5.jpg';
import six from '../../assets/6.jpg';
import seven from '../../assets/7.jpg';
import eight from '../../assets/8.jpg';
import nine from '../../assets/9.jpg';
import ten from '../../assets/10.jpg';

const menu_list = [
    {id:1, name:'Salad' , image: five },
    {id:2, name:'Noodles' , image: six },
    {id:3, name:'Pasta' , image: seven },
    {id:4, name:'Pizza' , image: eight },
    {id:5, name:'Sandwiches' , image: nine },
    {id:6, name:'Biryani' , image: ten }
]

const ExploreMenu = ({category, setCategory}) => {
  
    console.log("Current category in ExploreMenu:", category);
 

  return (
    <div className=''>
      <div className='container'>
        <h1 className='font-bold text-2xl mt-9 ml-6'>Explore our menu</h1>
      </div>
      <div className='grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6'>
        {menu_list.map(({ id, name, image }) => (
          <div key={id} className='m-5' onClick={() => setCategory(name)}>
            <img
              src={image}
              alt={name}
              className={`rounded-full w-full h-[200px] shadow-lg ${
                category === name ? 'border border-orange-700 border-[3px] p-1 scale-110 ' : ''
              } hover:scale-110 transition-transform duration-300`}
            />
            <p className='font-bold text-center m-4'>{name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreMenu;
