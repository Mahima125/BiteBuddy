import React, { useState } from 'react'
import Photo from '../../components/Photo/Photo'

import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
import Footer from '../../components/Footer/Footer'
import AppDownload from '../../components/AppDownload/AppDownload'

const Home = () => {

  const [category, setCategory] = useState('all');

  return (
    <div>
      
      <Photo/>
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
      <AppDownload/>
      <Footer/>
    </div>
  )
}

export default Home
