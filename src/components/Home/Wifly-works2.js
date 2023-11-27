import React from "react";
import AOS from "aos";
import 'aos/dist/aos.css'
import { useEffect } from "react";
import Card from "./Wifly-works-cards";
import Wdata2 from "./wdata-responsive"
import Wdata from "./Wdata"
import { useTranslation } from 'react-i18next';


const Works = () => {

   useEffect( () => {
      AOS.init({duration:2000});
  }, []);

  const {t} = useTranslation();

  return (
    <>
      <div className="how-wifly-section section-padding">
        <div className="container">
           <h2 className="main-heading">{t('Home_Section2_heading')}</h2>
           <div className="row justify-content-center w-desktop">
           {Wdata().map((dataItem, ind) => ( // Call Wdata to get the translated data
                        <Card key={ind} image={dataItem.image} title={dataItem.title} paragraph={dataItem.paragraph} number={dataItem.number} />
                    ))}
           </div>
           <div className="row justify-content-center w-responsive">
           {Wdata2().map((dataItem, ind) => ( // Call Wdata to get the translated data
                        <Card key={ind} image={dataItem.image} title={dataItem.title} paragraph={dataItem.paragraph} number={dataItem.number} />
                    ))}
           </div>
           <div>
              <a href="/shop" className="common-button1"><span>{t('Home_Section2_button')}</span></a>
           </div>
        </div>
      </div>
    </>
  )
}


export default Works;