import React, { useState, useEffect } from "react";
import Show from "../images/show.png"
import Hide from "../images/hide.png"
import Cookies from 'js-cookie';
import { useTranslation } from 'react-i18next';

const Unregister_User = ({ setActiveStep }) => {
  
  
  const initialValues = {email:"", createPassword: "", confirmPassword: ""};
  const [unregisterValues, setUnregisterValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [submit, setSubmit] = useState(false);
  const [show, setShow] = useState(false);

  

  const handleShow = () => {
    setShow(!show)
  }

  const [show1, setShow1] = useState(false);

  const handleShow1 = () => {
    setShow1(!show1)
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUnregisterValues({
      ...unregisterValues,
      [name]: value,
    });
  };

 useEffect(() => {
  const storedUnregEmail = Cookies.get('email');
  if (storedUnregEmail && unregisterValues.email === "") {
    setUnregisterValues((prevData) => ({
      ...prevData,
      email: storedUnregEmail,
    }));
  }
}, []);

 const formSubmitHandler = (e) => {
   e.preventDefault();
   setFormErrors(validate(unregisterValues));
   setSubmit(true);
   Object.keys(unregisterValues).forEach((key) => {
    Cookies.set(key, unregisterValues[key]);
  });
 }

 useEffect (() =>{
   console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && submit){
     setActiveStep(3)
    }
 },[formErrors]);


 const validate = (values) =>{
   const errors = {};
   const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
   if (!regex.test(values.email)){
     errors.email = "Please enter a valid email"
   }
   if (values.createPassword !== values.confirmPassword){
    errors.confirmPassword = "Create Password and Confirm Password should match"
  }
   return errors;
 }

 const { t } = useTranslation();

  return (

    <>
      <div className="" >
      <a onClick={() => setActiveStep(0)} href="#" className="back-btn mb-5"><i className="fa-solid fa-chevron-left"></i>{t('Back_Button')}</a>
        <h2 className="main-heading2 mb-3">{t('Login Details')}</h2>
        <div className="form-box">
          <form className="address-form" onSubmit={formSubmitHandler}>
            <div className="row">
              <div className="col-lg-12">
                <label htmlFor="email">{t('Email Address')}</label>
                <input type="text" id="email" name="email" className={formErrors.email ? "error-box" : ""} required value={unregisterValues.email}  onChange={handleChange}  />
                <p className="error"> {formErrors.email} </p>
              </div>
              <div className="col-lg-12">
                <label htmlFor="create-password">{t('Create_Password')}</label>
                <div className="password-outer">
                  <input type={show1 ? "text" : "password"} id="create-password" required name="createPassword" value={unregisterValues.createPassword}  onChange={handleChange}  />
                  <div className="show-hide">
                    <span onClick={handleShow1} >
                      {show1 ? (
                        <img src={Hide} alt="" loading="lazy"></img>
                      ) : (
                        <img src={Show} alt="" loading="lazy"></img>
                      )}
                    </span>
                  </div>
                </div>
                <p className="error"> {formErrors.createPassword} </p>
              </div>
              <div className="col-lg-12">
                <label htmlFor="confirm_password">{t('Confirm_Password')}</label>
                <div className="password-outer">
                  <input type={show ? "text" : "password"} className={formErrors.confirmPassword ? "error-box" : ""}  id="confirm_password" required name="confirmPassword" value={unregisterValues.confirmPassword}  onChange={handleChange}  />
                  <div className="show-hide">
                    <span onClick={handleShow} >
                      {show ? (
                        <img src={Hide} alt="" loading="lazy"></img>
                      ) : (
                        <img src={Show} alt="" loading="lazy"></img>
                      )}
                    </span>
                  </div>
                </div>
                  <p className="error"> {formErrors.confirmPassword} </p>
              </div>
              <div className="col-lg-12">
                <button type="submit"   className="common-button1 mt-4 justify-content-center mx-auto"><span>{t('Next')}</span></button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>

  )
}

export default Unregister_User;