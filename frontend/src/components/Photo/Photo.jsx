import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import one from '../../assets/1.jpg';
import two from '../../assets/2.jpg';
import three from '../../assets/3.jpg';
import four from '../../assets/4.jpg';


const photos = [
  { src: one, alt: "Image 1" },
  { src: two, alt: "Image 2" },
  { src: three, alt: "Image 3" },
  { src: four, alt: "Image 4" }
]

const Photo = () => {

    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive: [
            {
              breakpoint: 10000,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
              },
            },
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 2,
              },
            },
            {
              breakpoint: 640,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              },
            },
        ]
      };
    
  return (
    <div className='w-full flex justify-center'>
      <div className='w-full max-w-screen-lg '>
        <Slider {...settings}>
          {photos.map(({ src, alt }, index) => (
            <div key={index} className='flex justify-center relative'>
              <div className='text-white absolute p-4 md:p-8 bottom-9 md: bottom-6'>
                <h1 className='font-bold text-lg md:text-2xl lg:text-3xl mb-2 md:mb-4'>Order your <br /> favourite food here</h1>
                <p className='text-sm md:text-lg lg:text-xl'>Craving delicious meals?<br /> Satisfy your hunger with our fast food delivery service. </p>
              </div>
              <img 
                src={src} 
                alt={alt} 
                className='rounded-xl w-full aspect-[16/9] md:aspect-[21/9] object-cover  overflow-hidden  ' 
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  )
}

export default Photo
