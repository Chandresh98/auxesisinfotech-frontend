import React from "react";

const Card = (props) => {
    return (
        <>
            <div className="col-lg-4 pl-0">
                <div className="steps-box" data-aos="zoom-in">
                    <div className="steps-img">
                        <img src={props.image} alt="" loading="lazy"></img>
                    </div>
                    <div className="steps-content">
                        <h5>{props.title}</h5>
                        <p>{props.paragraph}</p>
                    </div>
                </div>
                <div className="number">
                    <span>{props.number}</span>
                </div>
            </div>
        </>
    )
}

export default Card;