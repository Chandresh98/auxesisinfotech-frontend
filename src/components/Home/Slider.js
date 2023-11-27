import React, { Component } from "react";



const Testimonial_slider = (props) => {

    

    return(
        
          <div className="card text-center border-0">
            <h5> {props.testimonial} </h5>
            <div className="card-img">
               <img src={props.image} alt="" loading="lazy"></img>
            </div>
            <h4>{props.name} </h4>
          </div>
  
    )
}

export default Testimonial_slider;
