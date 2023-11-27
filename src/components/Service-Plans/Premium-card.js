import React from 'react';
import { useTranslation } from 'react-i18next';

const Premium_card = (props) => {

    const {t} = useTranslation();

    const premium1 = [t('Service_Plans_Card3_List1'), t('Service_Plans_Card3_List2'), t('Service_Plans_Card3_List3')];

    const Resut1 = premium1.map((item, index) => (
        <li key={index} className="check">
            <i className="fa-regular fa-circle-check"></i> {item}
        </li>
    ));

    const premium2 = [t('Service_Plans_Card3_List4'), t('Service_Plans_Card3_List5'), t('Service_Plans_Card3_List6')];

    const Resut2 = premium2.map((item, index) => (
        <li key={index}>
            <i className="fa-regular fa-circle-xmark"></i> {item}
        </li>
    ));

    return (
        <>
            <div className="service-card">
                <h2>{t('Service_Plans_Card3_Heading')}</h2>
                <h5><i>{t('Service_Plans_Card3_Sub_heading')}</i></h5>
                <ul className="pl-0">
                    {Resut1}
                    {Resut2}
                </ul>
                <div className='service-btn'>
                    <button className='common-button1'>
                        <span>{props.button}</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Premium_card;
