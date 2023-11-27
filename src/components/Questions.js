import React from "react";
import Vector from "./images/vector-4.webp"

const Questions = (props) => {


    return (
        <>
          <div className="questions section-padding">
             <div className="container">
                <div className="questions-outer">
                    <div className="row">
                       <div className="col-lg-6 pl-0">
                          <div className="questions-content pt-5">
                             <h2 className="main-heading w-100 text-left"> {props.heading}</h2>
                             <div className="d-flex">
                                <a className="common-button2 mr-4" href="#"><span>{props.button1}</span></a>
                                <a className="common-button2" href="#"><span>{props.button2}</span></a>
                             </div>
                          </div>
                       </div>
                       <div className="col-lg-6 pr-0">
                          <div className="question-img">
                            <img src={props.image} alt="" loading="lazy"></img>
                          </div>
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

export default Questions;