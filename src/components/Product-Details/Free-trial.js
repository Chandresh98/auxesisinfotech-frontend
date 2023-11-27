import React from "react";

const Trial = (props) => {
    return (
        <>
             <div className="free-trial section-padding">
                <div className="container">
                    <div className="free-trial-outer row">
                       <div className="col-lg-6">
                            <div className="free-trial-left">
                            <h2>{props.heading}</h2>
                            <p className="mb-0 mt-5">{props.paragraph}</p>
                            </div>
                       </div>
                        <div className="col-lg-6 d-flex align-items-center justify-content-center">
                           <div className="free-trial-right">
                              <div className="trial-right-img">
                                <img src={props.image} alt="" loading="lazy"></img>
                              </div>
                              <a className="common-button1"><span>{props.button}</span></a>
                           </div>
                        </div>
                        <div className="free-trial-img">
                           <img src={props.image2} alt="" loading="lazy"></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
     )
}

export default Trial;