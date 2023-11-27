import React from "react";
import Faqdata from "./Faq-data";
import Card from "./Faq-card"
import $ from 'jquery'
import 'jquery-ui-dist/jquery-ui'
import { useEffect } from "react";
import { useTranslation } from 'react-i18next';


const Faq = (props) => {

    const {t} = useTranslation();

    useEffect( ()=> {
        $(document).ready(function(){
            $("#collapseone").addClass('show');
        });
    }, [] )

    return (
        <>
            <div className="faq section-padding">
                <div className="container">
                    <div className="faq-outer">
                        <h2 className="main-heading2">{t('FAQ_Heading')}</h2>
                        <div id="accordion">
                            {
                                Faqdata().map((val, ind) => {
                            return <Card key={ind} question={val.question} answer={val.answer} aria_label_id={val.aria_label_id} id={val.id} data_target_id={val.data_target_id} />
                        })
                    }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Faq;