import React from 'react';
import { useTranslation } from 'react-i18next';

const Professional_card = (props) => {
    
    const { t } = useTranslation();

    const professional1 = [
        t('Service_Plans_Card4_List1'),
        t('Service_Plans_Card4_List2'),
        t('Service_Plans_Card4_List3'),
        t('Service_Plans_Card4_List4'),
        t('Service_Plans_Card4_List5'),
        t('Service_Plans_Card4_List6')
    ];

    const Resut1 = professional1.map((item, index) => (
        <li key={index} className="check">
            <i className="fa-regular fa-circle-check"></i> {item}
        </li>
    ));

    const professional2 = [];

    const Resut2 = professional2.map((item, index) => (
        <li key={index}>
            <i className="fa-regular fa-circle-xmark"></i> {item}
        </li>
    ));


    return (
        <>
            <div className="service-card">
                <h2>{t('Service_Plans_Card4_Heading')}</h2>
                <h5><i>{t('Service_Plans_Card4_Sub_heading')}</i></h5>
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

export default Professional_card;