import React from "react";
import flogo from "./images/flogo.png"
import twitter_icon from "./images/twitter-icon.png"
import { useTranslation } from 'react-i18next';

const Footer = () => {

    const {t} = useTranslation();

    const phoneNumber = '+34 910 053 536';
    const emailAddress = 'contacto@wiflymobility.com';

    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="footer-inner">
                        <div className="row">
                            <div className="col-lg-5 pl-0">
                                <div className="footer-left">
                                    <div className="footer-logo">
                                       <img src={flogo} alt="" loading="lazy"></img>
                                    </div>
                                    {/* <p>Wifly is an e-bike subscription for carefree e-bikers: Insured, with maintenance services and reparations, all 100% online and delivered at home.</p> */}
                                    <ul className="pl-0 mb-0 d-flex">
                                        <li>
                                            <a href="https://www.instagram.com/wiflymobility"><i className="fa-brands fa-instagram"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://www.facebook.com/wiflymobility"><i className="fa-brands fa-facebook-f"></i></a>
                                        </li>
                                        <li>
                                            <a href="https://x.com/wifly_mobility"><img src={twitter_icon} alt=""></img></a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/company/wifly-mobility"><i className="fa-brands fa-linkedin-in"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-7 pr-0">
                                <div className="footer-right row">
                                    <div className="col-lg-4 col-md-4 col-sm-4">
                                       <div className="footer-col">
                                            <h3>{t('Footer_Column1_heading')}</h3>
                                            <ul className="pl-0">
                                                <li><a href={`tel:${phoneNumber}`}><i className="fa-solid fa-phone"></i>+34 910 053 536</a></li>
                                                <li><a href={`tel:${phoneNumber}`}><i className="fa-brands fa-whatsapp"></i>{t('Footer_whatsapp')}</a></li>
                                                <li><a href={`mailto:${emailAddress}`}><i className="fa-solid fa-at"></i> {t('Footer_contact')}</a></li>
                                            </ul>
                                       </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4">
                                       <div className="footer-col">
                                            <h3>{t('Footer_Column2_heading')}</h3>
                                            <ul className="pl-0">
                                                <li><a href="#">{t('Footer_Column2_list1')}</a></li>
                                                <li><a href="#">{t('Footer_Column2_list2')}</a></li>
                                                <li><a href="#">{t('Footer_Column2_list3')}</a></li>
                                                {/* <li><a href="#">eBike + Coche</a></li> */}
                                            </ul>
                                       </div>
                                    </div>
                                    <div className="col-lg-4 col-md-4 col-sm-4">
                                       <div className="footer-col">
                                           <h3>{t('Footer_Column3_heading')}</h3>
                                            <ul className="pl-0">
                                                <li><a href="#">{t('Footer_Column3_list1')}</a></li>
                                                <li><a href="#">{t('Footer_Column3_list2')}</a></li>
                                                <li><a href="#">{t('Footer_Column3_list3')}</a></li>
                                                <li><a href="#">{t('Footer_Column3_list4')}</a></li>
                                            </ul>
                                       </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="copyright">
                                            <p className="mb-0">{t('Footer_Copyright')}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;