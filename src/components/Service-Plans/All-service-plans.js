import React from 'react';
import '../../Css/new-style.css'
import Subscription from "../images/banner-1.png"
import Service_card from "./Service-plans-card"
import Basic_card from './Basic-card';
import Professional_card from './Professional-card';
import Premium_card from './Premium-card';
import { useTranslation } from 'react-i18next';

const All_services = () => {

    const {t} = useTranslation();

    return (
        <>
            <div className='all-services section-padding'>
                <div className='container'>
                    <div className='all-services-inner'>
                        <div className='row'>
                            <div className="col-lg-3">
                                <Service_card heading={t('Service_Plans_Card1_Heading')} paragraph={t('Service_Plans_Card1_Paragraph')} image={Subscription} />
                            </div>
                            <div className="col-lg-3">
                                <Basic_card heading={t('Service_Plans_Card2_Heading')} button={t('Service_Plans_Card2_CTA')} />
                            </div>
                            <div className="col-lg-3">
                                <Premium_card heading={t('Service_Plans_Card3_Heading')} sub_heading={t('Service_Plans_Card3_Sub_heading')} button={t('Service_Plans_Card3_CTA')} />
                            </div>
                            <div className="col-lg-3">
                                <Professional_card heading={t('Service_Plans_Card4_Heading')} sub_heading={t('Service_Plans_Card3_Sub_heading')} button={t('Service_Plans_Card4_CTA')} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default All_services;