import React from "react";

const Why_ebikes_Card2 = (props) => {


    return (
        <>
            <div data-aos="fade-left">
                <div className="single-ebike">
                    <div className="bike-img">
                        <img src={props.image} alt="" loading="lazy"></img>
                    </div>
                    <div className="bike-content">
                        <h6>
                        {props.title}
                        </h6>
                        <p>{props.description}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Why_ebikes_Card2;