
import Step1 from "../images/step-1.png"
import Step2 from "../images/step-2.png"
import Step3 from "../images/step-3.png"
import Step4 from "../images/pay-method.png"
import Step5 from "../images/recieve.png"
import { useTranslation } from 'react-i18next';

const Tdata =()=>{

    const {t} = useTranslation();

    const data = [
        {
            Id: "act1",
            image: Step1,
            title: t('Timeline_Box1_Heading'),
            paragraph: t('Timeline_Box1_Paragraph')
        },
        {
            Id: "act2",
            image: Step2,
            title: t('Timeline_Box2_Heading'),
            paragraph: t('Timeline_Box2_Paragraph')
        },
        {
            Id: "act3",
            image: Step3,
            title: t('Timeline_Box3_Heading'),
            paragraph: t('Timeline_Box3_Paragraph')
        },
        {
            Id: "act4",
            image: Step4,
            title: t('Timeline_Box4_Heading'),
            paragraph: t('Timeline_Box4_Paragraph')
        },
        {
            Id: "act5",
            image: Step5,
            title: t('Timeline_Box5_Heading'),
            paragraph: t('Timeline_Box5_Paragraph')
        }
    ];
    return data;
}

export default Tdata;