import React from "react";
import Banner1 from "../images/banner-1.png"
import Banner2 from "../images/Urban-D6.png"
import $ from 'jquery'
import 'jquery-ui-dist/jquery-ui'
import Vector from "../images/banner-vector.webp"
import { useEffect } from "react";
import { useTranslation } from 'react-i18next';



const HeroSection = (props) => {

  useEffect(() => {

    $(document).ready(function () {
      var banner = $('.banner-loading');
      setTimeout(function () {
        banner.css({ "filter": "blur(0px)", "transition": ".5s all" });
      }, 1000);
    });

    if (localStorage.getItem('i18nextLng') === null) {
      localStorage.setItem('i18nextLng', 'es')
    }

  }, [])

  const {t} = useTranslation();

  return (
    <>
      <div className="home-banner-section2">
        <div className="container">
          <div className="home-banner-inner2">
            <div className="row">
              <div className="col-lg-6 pl-0">
                <div className="text-center home-banner-left">
                  <h1>{t('Banner_title')} </h1>
                  <p>{t('Banner_Paragraph')} </p>
                  {/* <p>{t('Banner_Paragraph')} <br /> {t('Banner_Paragraph2')} </p> */}
                  <div className="banner-btns2">
                    <a href="#" className="common-button1"><span> {t('Banner_button1')} </span></a>
                    <a href="/timeline" className="common-button2"><span>{t('Banner_button2')}</span></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="home-banner-right banner-loading">
              <img src={Banner1} alt="" className="banner1" loading="lazy"></img>
              <img src={Banner2} alt="" className="banner2" loading="lazy"></img>
            </div>
          </div>
        </div>
        <div className="vector-img">
          <img src={Vector} alt="" className=""></img>
        </div>
        <div className="loading-text">
          0%
        </div>
      </div>
    </>
  )
}


export default HeroSection;