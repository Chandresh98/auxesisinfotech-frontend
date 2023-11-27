import React from "react";
import Bicycle from "../images/step-1.png"
import Ellipse from "../images/ellipse.png"
import { useTranslation } from 'react-i18next';

const Progress_Bar = ({activeStep}) => {
   
    const { t } = useTranslation();

    return (

        <>
            <div className="progress-bar">
                <h3>{t('Progress_Bar_Heading1')}</h3>
                
                <ul>

                    <li className={`${activeStep >= 0?"active":""} ${activeStep <= 4?"img-active":""}`}>

                        <div className="progress-img">

                            <img src={Bicycle} alt="" className="active-bicycle" loading="lazy"></img>
                            <img src={Ellipse} alt="" className="ellipse" loading="lazy"></img>
                        </div>

                        <span>{t('Progress_Bar_Heading1')}</span>

                    </li>

                    <li className={`${activeStep>4?"active":""} ${activeStep == 5 || activeStep == 6 || activeStep == 7 ?"img-active":""}`}>

                        <div className="progress-img">

                        <img src={Bicycle} alt="" className="active-bicycle" loading="lazy"></img>
                            <img src={Ellipse} alt="" className="ellipse" loading="lazy"></img>
                        </div>

                        <span>{t('Progress_Bar_Heading2')}</span>

                    </li>

                    <li className={`${activeStep>6?"active":""} ${activeStep == 7?"img-active":""}`}>

                        <div className="progress-img">

                           <img src={Bicycle} alt="" className="active-bicycle" loading="lazy"></img>
                            <img src={Ellipse} alt="" className="ellipse" loading="lazy"></img>

                        </div>

                        <span>{t('Progress_Bar_Heading3')}</span>

                    </li>

                    <li className={`${activeStep>7?"active":""} ${activeStep == 8?"img-active":""}`}>

                        <div className="progress-img">

                            <img src={Bicycle} alt="" className="active-bicycle" loading="lazy"></img>
                            <img src={Ellipse} alt="" className="ellipse" loading="lazy"></img>

                        </div>

                        <span>{t('Progress_Bar_Heading4')}</span>

                    </li>

                </ul>
            </div>
        </>

    )
}

export default Progress_Bar;