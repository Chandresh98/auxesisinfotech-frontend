import React from "react";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { useState, useEffect } from "react";
import Cookies from 'js-cookie';
import { useTranslation } from 'react-i18next';

const Personal_details = ({ setActiveStep }) => {


  const initialValues = {firstname:"", lastname: ""};
  const [personalDetails, setPersonalDetails] = useState(initialValues);

  const [Country, setCountry] = useState('us');
  const [Number, setNumber] = useState('initialState');
  useEffect(() => {

  }, [Number]);
  console.log(Number);

  const handleChange = (e) =>{
    const {name, value} = e.target;
    setPersonalDetails ({ ...personalDetails, [name]: value });
    console.log(personalDetails);
 }


 const formSubmitHandler = async (e) => {
  e.preventDefault();
  setActiveStep(4);
  Object.keys(personalDetails).forEach((key) => {
    Cookies.set(key, personalDetails[key]);
  });
  const PhoneNumber = Number;
  Cookies.set('Phone_Number', PhoneNumber, { expires: 5 });

  const contactId = localStorage.getItem('contactId');

  try {
    const response = await fetch(`http://localhost:1337/api/contacts/${contactId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        data: {
          First_Name: personalDetails.firstname,
          Last_Name: personalDetails.lastname,
          Phone_Number: Number,
        },
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to update contact');
    }

    const data = await response.json();
    const newContactId = data.data.id;
    localStorage.setItem('contactId', newContactId);
    console.log('Contact ID:', newContactId);
  } catch (error) {
    console.error(error);
  }
};

const {t} = useTranslation();

  return (

    <>
      <div className="personal-details">
      <a onClick={() => setActiveStep(2)} href="#" className="back-btn mb-5"><i className="fa-solid fa-chevron-left"></i>{t('Back_Button')}</a>
      <h2 className="main-heading2 mb-3">{t('Personal_Details')}</h2>
        <div className="form-box">
          <form className=" address-form" onSubmit={formSubmitHandler}>
            <div className="row">
              <div className="col-lg-6 col-md-6">
                <label htmlFor="firstname">{t('First_Name')}</label>
                <input type="text" id="firstname" name="firstname" required value={personalDetails.firstname} onChange={handleChange} />
              </div>
              <div className="col-lg-6 col-md-6">
                <label htmlFor="lastname">{t('Last_Name')}</label>
                <input type="text" id="lastname" name="lastname" required value={personalDetails.lastname} onChange={handleChange} />
              </div>
              <div className="col-lg-12">
              <label htmlFor="lastname">{t('Phone_Number')}</label>
                <PhoneInput
                  country={Country}
                  onChange={(value) => { setNumber(value) }}
                  countryCodeEditable={false}
                  
                />
              </div>
              <div className="col-lg-12">
                <button className="common-button1 mt-4 justify-content-center mx-auto"><span>{t('Next')}</span></button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>

  )
}

export default Personal_details;