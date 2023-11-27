
import img1 from "../images/relax.png"
import img2 from "../images/your-bicycle.png"
import img3 from "../images/time-management.png"
import { useTranslation } from 'react-i18next';

const Why_ebikes_leftdata = () => {

    const {t} = useTranslation();

    const data = [
        {
            image: img1,
            title: t('Home_Section5_box1_heading'),
            description: t('Home_Section5_box1_paragraph')
        },
        {
            image: img2,
            title: t('Home_Section5_box2_heading'),
            description: t('Home_Section5_box2_paragraph')
        },
        {
            image: img3,
            title: t('Home_Section5_box3_heading'),
            description: t('Home_Section5_box3_paragraph')
        },
    
    ];
    return data;
}

export default Why_ebikes_leftdata;