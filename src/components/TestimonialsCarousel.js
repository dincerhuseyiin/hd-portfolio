import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
// AVATARS IMPORTS
import avatar1 from "../images/avatars/avatar-1.png";
import avatar2 from "../images/avatars/avatar-2.png";
import avatar3 from "../images/avatars/avatar-3.png";
import avatar4 from "../images/avatars/avatar-4.png";


const TestimonialsCarousel = () => {
  return (
    <Carousel
      showArrows={true}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3000}
    >
      <>
        <img src={avatar1} alt="Ahmet" />
        <div className="myCarousel">
          <h3>Mr.Ahmet</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ratione sequi saepe dicta blanditiis, molestias eum excepturi quod fugiat veniam!</p>
        </div>
      </>
      <>
        <img src={avatar2} alt="Ayca" />
        <div className="myCarousel">
          <h3>Mrs. Ayca</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ratione sequi saepe dicta blanditiis, molestias eum excepturi quod fugiat veniam!</p>
        </div>
      </>
      <>
        <img src={avatar3} alt="Bekir" />
        <div className="myCarousel">
          <h3>Mr.Bekir</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ratione sequi saepe dicta blanditiis, molestias eum excepturi quod fugiat veniam!</p>
        </div>
      </>
      <>
        <img src={avatar4} alt="Alp" />
        <div className="myCarousel">
          <h3>Mr.Alp</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ratione sequi saepe dicta blanditiis, molestias eum excepturi quod fugiat veniam!</p>
        </div>
      </>
    </Carousel>
  )
}
export default TestimonialsCarousel;
