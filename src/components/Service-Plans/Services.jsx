import React from 'react';
import '../../Css/new-style.css'
import Questions from '../Questions';
import Plans1 from "../images/Littium-Ibiza-Titanium.png"
import All_services from './All-service-plans'
import { useTranslation } from 'react-i18next';

const Services = () => {

  const {t} = useTranslation();

    return (
          <>
          <div className='body-inner pt'>
            <All_services/>
            <Questions heading={t('Question_Section_heading')} button1={t('Question_Section_button1')} button2={t('Question_Section_button2')} image={Plans1} />
            </div>
          </>
    )

 }

 export default Services;