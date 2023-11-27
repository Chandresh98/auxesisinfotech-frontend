import React from "react";

const Card = (props) => {
    return (
        <>
            <div className="timeline-step" id={props.Id}>
                <div className="dataos">
                    <div className="timeline-step-img">
                        <img src={props.image} alt="" loading="lazy"></img>
                    </div>
                    <h3> {props.title} </h3>
                    <p> {props.paragraph} </p>
                </div>
            </div>
        </>
    )
}

export default Card;