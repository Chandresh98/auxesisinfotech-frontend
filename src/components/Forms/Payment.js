import React from "react";
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';

const Billing = ({ setActiveStep }) => {

    const [subTotal, setSubTotal] = useState(null);
    const deliveryFee = 100.00; // You can set this value as needed
    const oneTimeDeposit = 100.00; // You can set this value as needed

    useEffect(() => {
        const subTotalCookie = Cookies.get('subTotal');

        if (subTotalCookie) {
        setSubTotal(parseFloat(subTotalCookie)); // Parse the value as a float
        }
    }, []);

    const total = subTotal + deliveryFee + oneTimeDeposit;

    const formSubmitHandler = () => {
        setActiveStep(8)
    }


    const { t } = useTranslation();

    return (

        <>
            <div className="step-3">
                <a onClick={() => setActiveStep(6)} href="#" className="back-btn mb-5"><i className="fa-solid fa-chevron-left"></i>{t('Back_Button')}</a>
                <h2 className="main-heading2 mb-2">{t('Payment')}</h2>
                <div className="form-box">
                    <form onSubmit={formSubmitHandler} className="p-0">
                        <div className="payment p-0">
                            <div className="payment-top">
                                <h5 className="mb-0">{t('Deposite')}</h5>
                            </div>
                            <div className="payment-detail">
                                <ul className="pl-0 mb-0">
                                    <li><strong>Subtotal</strong> <span><strong>€ {subTotal ? subTotal.toFixed(2) : '0.00'}</strong></span></li>
                                    <li><strong>{t('Delivery fee')}</strong> <span><strong>€ 100.00</strong></span></li>
                                    <li><strong>{t('One time deposit')}</strong> <span><strong>€ 100.00</strong></span></li>
                                    <li><strong> Total</strong> <span><strong>€ {total.toFixed(2)}</strong></span></li>
                                </ul>
                                <div>
                                    <button className="common-button1 mt-5 mx-auto justify-content-center"><span>{t('Subscribe')}</span></button>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div className="mt-5">
                            <div className="payment">
                                <h5>{t('Terms & Conditions')}</h5>
                                <ul className="pl-4 mb-0 mt-4">
                                    <li>{t('Terms_&_Conditions_List1')}</li>
                                    <li>{t('Terms_&_Conditions_List2')}</li>
                                    <li>{t('Terms_&_Conditions_List3')}</li>
                                    <li>{t('Terms_&_Conditions_List4')}</li>
                                    <li>{t('Terms_&_Conditions_List5')}</li>
                                </ul>
                            </div>
                        </div>
                </div>
            </div>
        </>

    )
}

export default Billing;