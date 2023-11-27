import React from "react";
import { useTranslation } from 'react-i18next';

const Confirmation = ({ setActiveStep }) => {

    const { t } = useTranslation();

    return (

        <>
           <div>
           <a onClick={() => setActiveStep(7)} href="#" className="back-btn mb-5"><i className="fa-solid fa-chevron-left"></i>{t('Back_Button')}</a>
            <div className="step-4 form-box">
                    <div className="confirmation-div">
                        <h3>{t('Thank you for joining Wifly')}</h3>
                        <ul className="pl-3 mb-0">
                            <li>{t('Thankyou_List1')}.</li>
                            <li>{t('Thankyou_List2')}.</li>
                            <li>{t('Thankyou_List3')}.</li>
                        </ul>
                    </div>
                    <button className="common-button1 mt-5 mx-auto justify-content-center"><span>{t('Continue shopping')}</span></button>
                </div>
           </div>

            {/* <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Success Popup
            </button>

            <div className="modal fade success-popup" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body text-center">
                            <i className="fa-regular fa-circle-check"></i>
                            <h2>Successful</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc s aptent taciti .</p>
                        </div>
                    </div>
                </div>
            </div> */}
        </>

    )
}

export default Confirmation;