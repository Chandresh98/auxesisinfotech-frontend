import React from "react";
import Vector from "../images/vector3.webp"
import AOS from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";

const Banner = (props) => {

    useEffect( () => {
        AOS.init({duration:2000});
    }, []);

  return (
    <>
      <div className="timeline-banner-section pt">
        <div className="container">
          <div className="timeline-banner-inner row">
            <div className="col-lg-6 pl-0">
                 <div data-aos="fade-up-right">
                  <img src={props.image} alt="" loading="lazy"></img>
                 </div> 
            </div>
            <div className="col-lg-6 d-flex align-items-end pr-0">
                <div className="text-center timeline-conent">
                    <h1>{props.heading}</h1>
                    <p>{props.paragraph}</p>
                </div>
            </div>
          </div>
        </div>
        <div className="vector-img">
          <img src={Vector} alt="" className="" loading="lazy"></img>
        </div>
      </div>
    </>
  )
}


export default Banner;