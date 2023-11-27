import React from 'react';

const Service_card = (props) => {
    return (
        <>
            <div className="service-card">
                <h2>{props.heading}</h2>
                <p>{props.paragraph}</p>
                <div className="service-img">
                    <img src={props.image} alt="" loading="lazy"></img>
                </div>
            </div>
        </>
    )

}

export default Service_card;