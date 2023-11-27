import React from "react";
import CountryDropdown from 'country-dropdown-with-flags-for-react';
import { useState, useEffect } from "react";
import Cookies from 'js-cookie';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';
import 'react-calendar/dist/Calendar.css';
import { useTranslation } from 'react-i18next';

const Delivery_Address2 = ({ setActiveStep }) => {


    const initialValues = { country: "", address: "", zip_code: "" };
    const [newAddress, setNewAddress] = useState(initialValues);
    const [showNewAddress, setShowNewAddress] = useState(false);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTimeSlot, setSelectedTimeSlot] = useState(null);
    const [regselectedRadio, setregSelectedRadio] = useState('unregradioOption1');
    const [checkboxes2, setCheckboxes2] = useState({
        option1: false,
        option2: false,
    });
    const [addresses, setAddresses] = useState([]); // Maintain a list of addresses

    const handleAddNewAddress = () => {
        setShowNewAddress(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewAddress({ ...newAddress, [name]: value });
        console.log(newAddress);
    }

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;
        setCheckboxes2((prevCheckboxes2) => ({
            ...prevCheckboxes2,
            [name]: checked,
        }));
    };

    const handleRadioChange = (event) => {
        setregSelectedRadio(event.target.value);
    };

    const handleNewAddressSubmit = async (e) => {
        e.preventDefault();
    
        // // Add the new address to the list of addresses
        // const updatedAddresses = [...addresses, newAddress];
        // setAddresses(updatedAddresses);
    
        // // Reset the newAddress state to empty values
        // setNewAddress(initialValues);
    
        // Hide the new address form
        setShowNewAddress(false);
    
        const contactId = localStorage.getItem('contactId');
    
        try {
            const response = await fetch(`http://localhost:1337/api/contacts/${contactId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    data: {
                        delivery_address: [
                            {
                                address: newAddress.address,
                                zipcode: newAddress.zip_code,
                            }
                        ]
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


    const formSubmitHandler = async (e) => {

        e.preventDefault();
        Object.keys(newAddress).forEach((key) => {
            Cookies.set(key, newAddress[key]);
        });

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
                        Shipping_Method: regselectedRadio,
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

    const {t} = useTranslation();

    return (

        <>
            <div className="delivery-address d-2">
                <a onClick={() => setActiveStep(1)} href="#" className="back-btn mb-5"><i className="fa-solid fa-chevron-left"></i>{t('Back_Button')}</a>
                <h2 className="main-heading2 mb-2">{t('Delivery Address')}</h2>
                <div className="del-form2 form-box">
                    {showNewAddress && (
                        <div className="new-address address-form mb-5">
                            <form onSubmit={handleNewAddressSubmit} className="p-0">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <label htmlFor="number">{t('Country')}</label>
                                        <CountryDropdown
                                            id="country-select"
                                            className="country-dropdown"
                                            name="country"
                                            value={newAddress.country}
                                            onChange={(val) => handleChange({ target: { name: "country", value: val } })}
                                            required
                                        />
                                    </div>
                                    <div className="col-lg-12">
                                        <label htmlFor="number">{t('Address')}</label>
                                        <input type="text" name="address" required onChange={handleChange} value={newAddress.address} />
                                    </div>
                                    <div className="col-lg-12">
                                        <label htmlFor="number">{t('Zip Code')}</label>
                                        <input type="number" name="zip_code" required onChange={handleChange} value={newAddress.zip_code} />
                                    </div>
                                    <button type="submit" className="common-button2 mt-3 mx-auto justify-content-center"><span>{t('Save new address')}</span></button>
                                </div>
                            </form>
                        </div>
                    )}
                    <form className=" p-0" onSubmit={formSubmitHandler}>
                        <div className="address-form address mb-5">
                            <div className="row">
                                <div className="col-lg-12">
                                    <label>{t('Address')}</label>
                                    {/* <div className="form-check radio-input w-100">
                                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" />
                                        <label className="form-check-label" for="exampleRadios1">
                                            Crta. Cádiz-Málaga 39
                                            Torralba del Pinar, Castellón(CS), 12225
                                            684 956 932
                                        </label>
                                    </div> */}

                                    {addresses.map((address, index) => (
                                        <div className="form-check radio-input w-100">
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="exampleRadios"
                                            />
                                            <label className="form-check-label">
                                                
                                            </label>
                                        </div>
                                    ))}
                                    {/* Show "Add new address" button only if the new address form is not visible */}
                                    {!showNewAddress && (
                                        <button className="common-button2 mt-3 mx-auto justify-content-center" onClick={handleAddNewAddress}><span>{t('Add New Address')}</span></button>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className=" address-form">
                            <div className="row">
                                <div className="col-lg-12">
                                    <label>{t('Shipping Method')}</label>
                                    <div className="form-check radio-input">
                                        <input className="form-check-input" type="radio" name="shippingMethod1" id="exampleRadios1" value="regradioOption1" checked={regselectedRadio === 'regradioOption1'} onChange={handleRadioChange} />
                                        <label className="form-check-label" for="shippingMethod1">
                                            {t('Delivered')}
                                        </label>
                                    </div>
                                    {regselectedRadio === "regradioOption1" && (
                                        <div className="delivery-fee">
                                            <span>{t('Delivery_fee')}</span>
                                            <span>€ 10 </span>
                                        </div>
                                    )}
                                    <div className="form-check radio-input">
                                        <input className="form-check-input" type="radio" name="shippingMethod2" id="exampleRadios2" value="regradioOption2" checked={regselectedRadio === 'regradioOption2'} onChange={handleRadioChange} />
                                        <label className="form-check-label" for="shippingMethod2">
                                        {t('Pickup')}
                                        </label>
                                    </div>
                                    {regselectedRadio === "regradioOption2" && (
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
                                            <input className="form-check-input" name="option1" type="checkbox" checked={checkboxes2.option1}
                                                onChange={handleCheckboxChange} required />
                                            <label className="form-check-label" for="defaultCheck1">
                                               {t('Accept')} <a href="#">{t('Accept Terms & Conditions')}</a>
                                            </label>
                                        </div>
                                        <div className="form-check checkinput">
                                            <input className="form-check-input" name="option2" type="checkbox" checked={checkboxes2.option2}
                                                onChange={handleCheckboxChange} />
                                            <label className="form-check-label" for="defaultCheck1">
                                                {t('Accept to receive marketing communications')}
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button className="common-button1 mt-3 mx-auto justify-content-center"><span>{t('Next')}</span></button>
                        </div>
                    </form>
                </div>
            </div>
        </>

    )
}

export default Delivery_Address2;