import React from 'react';
import Slider from "react-slick";
import Why1 from "../../assets/why1.png";
import Why2 from "../../assets/why2.png";
import Why3 from "../../assets/why3.png";
import Why4 from "../../assets/why4.png";




const slideData = [
  {
    id:1,
    img: Why1,
    name:"Customizable Design",
    text:"Tailor your workspace with our versatile modular components. Our designs accommodate standing desks,Collaborative workspaces, additional storage and more.",
  },
  {
    id:2,
    img: Why2,
    name:"Modern Aesthetics",
    text:" Enhance your office with sleek. contemporary designs that blend seamlessly into any professional setting.",
  },{
    id:3,
    img: Why3,
    name:"Ergonomic Excellence",
    text:"Prioritize health and comfort with our ergonomically designed tables, promoting better posture and reducing strain.",
  },{
    id:4,
    img: Why4,
    name:"Durability & Quality",
    text:"crafted from premium materails, Smart desk products are built to last, ensuring a long-term investment in your productivity.",
  },
];

const Whyuse = () => {

  var settings = {
    arrows:false , 
    infinite: true,
    speed: 300,

    slideToScroll: 1,
    autoplay:true,
    autoplaySpeed:2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint:10000,
        settings: 
        {
          slidesToShow: 3,
          slidesToScroll:1,
          infiinte: true,
        },
      },
    {
      breakpoint: 1024,
      settings: {
        slideToShow: 2,
        slideToScroll:1,
        initialSLide:2,
      },
    },
    {
      breakpoint: 640,
      settings: 
      {
        slideToShow: 1,
        slideToScroll:1,
      },
    },
    ], 
  };
  
  return (
      <div className='py-8 mb-10'>
        <div className="continer py-8">

          <div className='text-center mb-30 py-10'>
          <h2 className='font-bold text-3xl text-center'>Why Choose <span className='text-primaryDark'>Smart Desk?</span></h2>
          </div>

          {/* cards */}
          <div className='py-10'>
            <Slider {...settings}>
              {slideData.map((data) => (
                  <div key={data.id} className={`card  to-red-600/40`}> 
                    <div>
                      <img src={data.img} alt='' className='logo'/>
                    </div>
                    <div>
                      <h1 className='text-2xl mt-2 font-bold'>{data.name}</h1>
                    </div>
                    <div>
                      <p className='para'>{data.text}</p>
                    </div>
                  </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
  )
}

export default Whyuse