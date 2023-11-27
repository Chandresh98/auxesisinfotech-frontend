import Bicycle from "../images/bicycle-white.png"
import Account from "../images/account.png"
import Home from "../images/home.png"
import Stationary from "../images/stationary.png"
import Money from "../images/money.png"
import { useTranslation } from 'react-i18next';

const Wdata2 = () => {

    const { t } = useTranslation();

    const data2 = [
        {
            image: Bicycle,
            title: t('Home_Section2_box1_heading'),
            paragraph: t('Home_Section2_box1_paragraph'),
            number: '01',
        },
        {
            image: Stationary,
            title: t('Home_Section2_box2_heading'),
            paragraph: t('Home_Section2_box2_paragraph'),
            number: '02',
        },
        {
            image: Account,
            title: t('Home_Section2_box3_heading'),
            paragraph: t('Home_Section2_box3_paragraph'),
            number: '03',
        },
        {
            image: Money,
            title: t('Home_Section2_box4_heading'),
            paragraph: t('Home_Section2_box4_paragraph'),
            number: '04',
        },
        {
            image: Home,
            title: t('Home_Section2_box5_heading'),
            paragraph: t('Home_Section2_box5_paragraph'),
            number: '05',
        },
        
       
    ];
    return data2;
}

export default Wdata2;