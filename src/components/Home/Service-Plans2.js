import React from "react";
import Plans1 from "../images/NCM-Moscow-Plus.png"
import Vector from "../images/vector2.webp"
import { useTranslation } from 'react-i18next';

const Service_Plans = () => {

   const {t} = useTranslation();

   const Basic = [t('Home_Section4_tab1_list1'), t('Home_Section4_tab1_list2'), t('Home_Section4_tab1_list3')]

   const Basic2 = [t('Home_Section4_tab1_list4'), t('Home_Section4_tab1_list5'), t('Home_Section4_tab1_list6'), t('Home_Section4_tab1_list7')]

   const Resut1 = Basic.map((basic, index) => <li key={index}><i className="fa-regular fa-circle-check"></i> {basic} </li>);

   const Resut2 = Basic2 .map((basic2 , index) => <li key={index}><i className="fa-regular fa-circle-xmark"></i> {basic2 } </li>);

   const Premium = [t('Home_Section4_tab2_list1'), t('Home_Section4_tab2_list2'), t('Home_Section4_tab2_list3')]

   const Premium2 = [t('Home_Section4_tab2_list4'), t('Home_Section4_tab2_list5'), t('Home_Section4_tab2_list6')]

   const Resut3 = Premium.map((premium, index) => <li key={index}><i className="fa-regular fa-circle-check"></i> {premium} </li>);

   const Resut4 = Premium2.map((premium2, index) => <li key={index}><i className="fa-regular fa-circle-xmark"></i> {premium2} </li>);

   const Professional = [t('Home_Section4_tab3_list1'), t('Home_Section4_tab3_list2'), t('Home_Section4_tab3_list3'), t('Home_Section4_tab3_list4'), t('Home_Section4_tab3_list5'), t('Home_Section4_tab3_list6')]

   const Resut5 = Professional.map((professional, index) => <li key={index}><i className="fa-regular fa-circle-check"></i> {professional} </li>);
//    const Resut6 = Professional.map((professional, index) => <li key={index}><i className="fa-regular fa-circle-check"></i> {professional} </li>);
   


    return (
        <>
            <div className="service-plans-section section-padding">
                <div className="container">
                    <div className="service-plans-inner">
                        <div className="row">
                            <div className="col-lg-6 col-md-6 pl-0">
                                <div className="plans-left">
                                    <h2 className="main-heading text-left w-100">{t('Home_Section4_heading')}</h2>
                                    <ul className="nav nav-tabs border-0" id="myTab" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="home-tab" data-toggle="tab" href="#basic" role="tab" aria-controls="basic" aria-selected="true">{t('Home_Section4_tab_button1')}</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="premium-tab" data-toggle="tab" href="#premium" role="tab" aria-controls="premium" aria-selected="false">{t('Home_Section4_tab_button2')}</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="professional-tab" data-toggle="tab" href="#professional" role="tab" aria-controls="professional" aria-selected="false">{t('Home_Section4_tab_button3')}</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content mt-5" id="myTabContent">
                                        <div className="tab-pane fade show active" id="basic" role="tabpanel" aria-labelledby="basic-tab">
                                            <ul className="pl-0">
                                                {Resut1}
                                                {Resut2}
                                            </ul>
                                        </div>
                                        <div className="tab-pane fade" id="premium" role="tabpanel" aria-labelledby="premium-tab">
                                            <ul className="pl-0">
                                                 {Resut3}
                                                 {Resut4}
                                            </ul>
                                        </div>
                                        <div className="tab-pane fade" id="professional" role="tabpanel" aria-labelledby="professional-tab">
                                            <ul className="pl-0">
                                                 {Resut5}
                                                 {/* {Resut6} */}
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="mt-5">
                                        <a href="/service-plans" className="common-button1"><span>{t('Home_Section4_button')}</span></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 pr-0">
                                <div className="plans-right text-right">
                                    <img src={Plans1} alt="" loading="lazy"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="vector-img">
                    <img src={Vector} alt="" className="" loading="lazy"></img>
                </div>
            </div>
        </>
    )
}


export default Service_Plans;