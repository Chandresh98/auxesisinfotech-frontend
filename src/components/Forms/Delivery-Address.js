import React from "react";
import CountryDropdown from 'country-dropdown-with-flags-for-react';
import { useState } from "react";
import Cookies from 'js-cookie';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { useTranslation } from 'react-i18next';

const Delivery_Address1 = ({ setActiveStep }) => {

  const initialValues = { country: "", address: "", zip_code: "", checkbox1: "", checkbox2: "" };
  const [deliveryValues, setDeliveryValues] = useState(initialValues);
  const [checkboxes, setCheckboxes] = useState({
    option1: false,
    option2: false,
  });
  const [selectedRadio, setSelectedRadio] = useState('radioOption1');

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDeliveryValues({ ...deliveryValues, [name]: value });
    console.log(deliveryValues);
  }

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [name]: checked,
    }));
  };

  const handleRadioChange = (event) => {
    setSelectedRadio(event.target.value);
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    Object.keys(deliveryValues).forEach((key) => {
      Cookies.set(key, deliveryValues[key]);
    });
    console.log('Form submitted with values:', checkboxes, selectedRadio);
    const Aceept_cookies = checkboxes.option1
    const marketing_communications = checkboxes.option2
    Cookies.set("Aceept_cookies", Aceept_cookies);
    Cookies.set("Marketing_Communications", marketing_communications);

    setActiveStep(7)

    const contactId = localStorage.getItem('contactId');

    try {
      const response = await fetch(`http://localhost:1337/api/contacts/${contactId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          data: {
            Address: deliveryValues.address,
            ZIP_Code: deliveryValues.zip_code,
            Shipping_Method: selectedRadio,
            Pickup_Date: selectedDate,
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


  }

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeSlotChange = (timeSlot) => {
    setSelectedTimeSlot(timeSlot);
  };

  const generateTimeSlots = () => {
    // Replace this with your logic to generate available time slots
    const availableTimeSlots = [
      '09:00 AM', '10:00 AM', '11:00 AM', '01:00 PM', '02:00 PM'
      // Add more time slots as needed
    ];

    return availableTimeSlots.map((timeSlot, index) => (
      <label key={index}>
        <input
          type="radio"
          name="timeSlot"
          value={timeSlot}
          checked={selectedTimeSlot === timeSlot}
          onChange={() => handleTimeSlotChange(timeSlot)}
        />
        <span>{timeSlot}</span>
      </label>
    ));
  };

  const { t } = useTranslation();

  return (

    <>
      <div className="delivery-address">
        <a onClick={() => setActiveStep(4)} href="#" className="back-btn mb-5"><i className="fa-solid fa-chevron-left"></i>{t('Back_Button')}</a>
        <h2 className="main-heading2 mb-2">{t('Delivery Address')}</h2>
        <div className="del-form1 form-box">
          <form className=" address-form" onSubmit={formSubmitHandler}>
            <div className="row">
              <div className="col-lg-12">
                <label htmlFor="number"> {t('Country')}</label>
                <CountryDropdown id="country-select" className='country-dropdown' preferredCountries={['gb', 'us']} value={deliveryValues.country} onChange={handleChange} required ></CountryDropdown>
              </div>
              <div className="col-lg-12">
                <label htmlFor="number"> {t('Address')}</label>
                <input type="text" id="number" name="address" required onChange={handleChange} value={deliveryValues.address} />
              </div>
              <div className="col-lg-12">
                <label htmlFor="number"> {t('Zip Code')}</label>
                <input type="number" id="number" name="zip_code" required onChange={handleChange} value={deliveryValues.zip_code} />
              </div>
              <div className="col-lg-12">
                <label>{t('Shipping Method')}</label>
                <div className="form-check radio-input">
                  <input className="form-check-input" type="radio" name="radioOptions" value="radioOption1" checked={selectedRadio === 'radioOption1'} onChange={handleRadioChange} />
                  <label className="form-check-label" htmlFor="exampleRadios1">
                    {t('Delivered')}
                  </label>
                </div>
                {selectedRadio === "radioOption1" && (
                  <div className="delivery-fee">
                    <span>{t('Delivery_fee')}</span>
                    <span>€ 10 </span>
                  </div>
                )}
                <div className="form-check radio-input">
                  <input className="form-check-input" type="radio" name="radioOptions" value="radioOption2" checked={selectedRadio === 'radioOption2'} onChange={handleRadioChange} />
                  <label className="form-check-label" htmlFor="exampleRadios2">
                    {t('Pickup')}
                  </label>
                </div>
                {selectedRadio === "radioOption2" && (
                  <div className="pickup-element mt-4">
                    <div className="col-lg-12 choose-address">
                      <div className="all-address">
                        <div className="single-address">
                          <div className="form-check radio-input">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios3" value="option3" />
                            <label className="form-check-label" for="exampleRadios3">
                              <h6>{t('Store name')}</h6>
                              <p>{t('Store Address')}</p>
                            </label>
                          </div>
                        </div>
                        <div className="single-address">
                          <div className="form-check radio-input">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios4" value="option4" />
                            <label className="form-check-label" for="exampleRadios4">
                              <h6>{t('Store name')}</h6>
                              <p>{t('Store Address')}</p>
                            </label>
                          </div>
                        </div>
                        <div className="single-address">
                          <div className="form-check radio-input">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios5" value="option5" />
                            <label className="form-check-label" for="exampleRadios5">
                              <h6>{t('Store name')}</h6>
                              <p>{t('Store Address')}</p>
                            </label>
                          </div>
                        </div>
                        <div className="single-address">
                          <div className="form-check radio-input">
                            <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios6" value="option6" />
                            <label className="form-check-label" for="exampleRadios6">
                              <h6>{t('Store name')}</h6>
                              <p>{t('Store Address')}</p>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <label htmlFor="date">{t('Choose pickup date')}</label>
                      <div className="datepicker">
                        <DatePicker value={selectedDate} onChange={handleDateChange} />
                        {selectedDate && (
                          <div className="timeslot">
                            {generateTimeSlots()}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
                <div className="terms">
                  <div className="form-check checkinput">
                    <input className="form-check-input" name="option1" type="checkbox" checked={checkboxes.option1}
                      onChange={handleCheckboxChange} required />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      {t('Accept')} <a href="#">{t('Accept Terms & Conditions')}</a>
                    </label>
                  </div>
                  <div className="form-check checkinput">
                    <input className="form-check-input" name="option2" type="checkbox" checked={checkboxes.option2}
                      onChange={handleCheckboxChange} />
                    <label className="form-check-label" htmlFor="defaultCheck1">
                      {t('Accept to receive marketing communications')}
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <button className="common-button1 mt-3 mx-auto justify-content-center"><span>{t('Next')}</span></button>
          </form>
        </div>
      </div>
    </>

  )
}

export default Delivery_Address1;