import React from "react";
import $ from 'jquery'
import 'jquery-ui-dist/jquery-ui'
import { useEffect } from "react";
import Card from "./Timeline-cards";
import Tdata from "./Tdata"
import { useTranslation } from 'react-i18next';

const Timeline_plans = () => {

    const {t} = useTranslation();

    useEffect( () => {
    
        const desktopScreenWidth = 1920; // Example mobile screen width in pixels

        const handleScroll2 = () => {
            if (window.innerWidth < desktopScreenWidth) {
                $('.timeline-step').removeClass("active");
                var scroll = $(window).scrollTop();
                console.log(scroll);
                if (scroll >= 564) {
                    $('#act1').addClass("active");
                }
                if (scroll >= 766) {
                    $('#act2').addClass("active");
                }
                if (scroll >= 968) {
                    $('#act3').addClass("active");
                }
                if (scroll >= 1164) {
                    $('#act4').addClass("active");
                }
                if (scroll >= 1339) {
                    $('#act5').addClass("active");
                }
            }
        };

         handleScroll2();

         window.addEventListener("scroll", handleScroll2);

         return () => {
             window.removeEventListener("scroll", handleScroll2);
         };
    
      }, []);

      useEffect(() => {
        const mobileScreenWidth = 575; 

        const handleScroll = () => {
            if (window.innerWidth < mobileScreenWidth) {
                $('.timeline-step').removeClass("active");
                var scroll = $(window).scrollTop();
                console.log(scroll);
                if (scroll >= 363) {
                    $('#act1').addClass("active");
                }
                if (scroll >= 749) {
                    $('#act2').addClass("active");
                }
                if (scroll >= 1089) {
                    $('#act3').addClass("active");
                }
                if (scroll >= 1418) {
                    $('#act4').addClass("active");
                }
                if (scroll >= 1798) {
                    $('#act5').addClass("active");
                }
            }
        };


        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
          <div className="timeline_plans section-padding">
             <div className="container">
                <div className="timeline_plans-outer">
                    {
                        Tdata().map((val, ind) => {
                            return <Card key={ind} image={val.image} title={val.title} paragraph={val.paragraph} Id={val.Id} />
                        })
                    }
                    <div className="mt-5">
                        <a href="/shop" className="common-button1 mx-auto "><span>{t('Timeline_Section_CTA')}</span></a>
                    </div>
                </div>
             </div>
          </div>
        </>
     )
}

export default Timeline_plans;