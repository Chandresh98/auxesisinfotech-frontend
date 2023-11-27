
import img3 from "../images/best-choice.png"
import img4 from "../images/price.png"
import img5 from "../images/low-prices.png"
import { useTranslation } from 'react-i18next';

const Why_ebikes_rightdata = () => {

    const {t} = useTranslation();

    const data = [
        {
            image: img3,
            title: t('Home_Section5_box4_heading'),
            description: t('Home_Section5_box4_paragraph')
        },
        {
            image: img4,
            title: t('Home_Section5_box5_heading'),
            description: t('Home_Section5_box5_paragraph')
        },
        {
            image: img5,
            title: t('Home_Section5_box6_heading'),
            description: t('Home_Section5_box6_paragraph')
        },
    
    ];
    return data;
}

export default Why_ebikes_rightdata;