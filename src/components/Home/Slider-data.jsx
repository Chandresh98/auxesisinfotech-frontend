
import User1 from "../images/avtaar.png"
import { useTranslation } from 'react-i18next';

const Slider_data = () => {

    const {t} = useTranslation();

    const data = [
        {
            image: User1,
            testimonial: t('Home_Testimonial1'),
            name: t('Home_Testimonial1_Name')
        },
        {
            image: User1,
            testimonial: t('Home_Testimonial2'),
            name: t('Home_Testimonial2_Name')
        },
        // {
        //     image: User1,
        //     testimonial: t('Home_Testimonial3'),
        //     name: t('Home_Testimonial3_Name')
        // },
    
    ];
   return data;
}

export default Slider_data;