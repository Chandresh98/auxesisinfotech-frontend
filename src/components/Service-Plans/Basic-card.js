import React from 'react';
import { useTranslation } from 'react-i18next';

const Basic_card = (props) => {

    const {t} = useTranslation();

    const basic1 = [t('Service_Plans_Card2_List1'), t('Service_Plans_Card2_List2'), t('Service_Plans_Card2_List3')]

   const Resut1 = basic1.map((item, index) => (
       <li key={index} className="check">
           <i className="fa-regular fa-circle-check"></i> {item}
       </li>
   ));

   const basic2 = [t('Service_Plans_Card2_List4'), t('Service_Plans_Card2_List5'), t('Service_Plans_Card2_List6'), t('Service_Plans_Card2_List7') ];

   const Resut2 = basic2.map((item, index) => (
       <li key={index}>
           <i className="fa-regular fa-circle-xmark"></i> {item}
       </li>
   ));

    return (
        <>
            <div className="service-card">
                <h2>{t('Service_Plans_Card2_Heading')}</h2>
                <h5><i>{t('Service_Plans_Card2_Sub_heading')}</i></h5>
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

export default Basic_card;
