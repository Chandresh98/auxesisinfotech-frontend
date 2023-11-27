import React from "react";
import Bike from "../images/Berlin-black.png"
import AOS from "aos";
import 'aos/dist/aos.css'
import Why_ebikes_Card from "./Why-ebikes-left"
import Why_ebikes_leftdata from "./Why-ebikes-leftdata"
import Why_ebikes_Card2 from "./Why-ebikes-right";
import Why_ebikes_rightdata from "./Why-ebikes-rightdata";
import { useEffect } from "react";
import { useTranslation } from 'react-i18next';

const Why_ebikes = () => {
    
    useEffect( () => {
        AOS.init({duration:2000});
    }, []);

    const {t} = useTranslation();

    return (
        <>
            <div className="why-section section-padding">
                <div className="container">
                   <h2 className="main-heading">{t('Home_Section5_heading')}</h2>
                    <div className="why-inner">
                       <div className="row">
                          <div className="col-lg-3 pl-0 order-md-1 col-md-6 order-lg-1">
                          {
                        Why_ebikes_leftdata().map((val, ind) => {
                            return <Why_ebikes_Card key={ind} image={val.image} title={val.title} description={val.description} Id={val.Id} />
                        })
                    }
                          </div>
                          <div className="col-lg-6 d-flex aligns-item-center order-md-3 order-lg-2">
                             <div data-aos="fade-up">
                                <img src={Bike} alt="" loading=" lazy"></img>
                             </div>
                          </div>
                          <div className="col-lg-3 pr-0 order-md-2 col-md-6 order-lg-3">
                          {
                        Why_ebikes_rightdata().map((val, ind) => {
                            return <Why_ebikes_Card2 key={ind} image={val.image} title={val.title} description={val.description} Id={val.Id} />
                        })
                    }
                          </div>
                       </div>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Why_ebikes;