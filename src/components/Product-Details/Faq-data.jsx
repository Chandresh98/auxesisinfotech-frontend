import { useTranslation } from 'react-i18next';

const Faqdata = () => {
    const { t } = useTranslation();

    const data = [
        {
            question: t('FAQ_Question1'),
            answer: t('FAQ_Answer1'),
            aria_label_id: "headingone",
            id: "collapseone",
            data_target_id: "#collapseone"
        },
        {
            question: t('FAQ_Question2'),
            answer: t('FAQ_Answer2'),
            aria_label_id: "headingtwo",
            id: "collapsetwo",
            data_target_id: "#collapsetwo"
        },
        {
            question: t('FAQ_Question3'),
            answer: t('FAQ_Answer3'),
            aria_label_id: "headingthree",
            id: "collapsethree",
            data_target_id: "#collapsethree"
        },
       
    ];

    return data;
};

export default Faqdata;
