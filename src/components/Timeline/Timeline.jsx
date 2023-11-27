import React from 'react';
import Timeline_banner from './Timeline-banner'
import '../../Css/new-style.css'
import Timeline_plans from './Timeline-plan';
import Cycle from "../images/Movement.png"
import Plans1 from "../images/Littium-Ibiza-Titanium.png"
import Questions from '../Questions';
import { useTranslation } from 'react-i18next';

const Home = () => {

  const {t} = useTranslation();

    return (
          <>
          <div className='body-inner'>
            <Timeline_banner heading={t('Timeline_Banner_Heading')}  paragraph={t('Timeline_Banner_Paragraph')} image={Cycle} />
            <Timeline_plans/>
            <Questions heading={t('Question_Section_heading')} button1={t('Question_Section_button1')} button2={t('Question_Section_button2')} image={Plans1}/>

            </div>
          </>
    )

 }

 export default Home;