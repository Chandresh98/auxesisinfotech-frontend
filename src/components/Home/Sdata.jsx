
import Subscription1 from "../images/PURE-LR-PRO.png"
import Subscription3 from "../images/Urban-D80.png"
import Subscription2 from "../images/NCM-Milano-Plus.png"
import { useTranslation } from 'react-i18next';

const Sdata = () => {

    const { t } = useTranslation();

    const data = [
        {
            image: Subscription2,
            title_front: t('Home_Section3_box1_heading_front'),
            title_back: t('Home_Section3_box1_heading_back'),
            span: t('Home_Section3_box1_type')
        },
        {
            image: Subscription1,
            title_front: t('Home_Section3_box2_heading_front'),
            title_back:t('Home_Section3_box2_heading_back'),
            span: t('Home_Section3_box2_type')
        },
        {
            image: Subscription3,
            title_front: t('Home_Section3_box3_heading_front'),
            title_back: t('Home_Section3_box3_heading_back'),
            span: t('Home_Section3_box3_type')
        }
    ];
    return data;
}

export default Sdata;