import React, { useEffect, useState } from "react";
import Show from "../images/show.png"
import Hide from "../images/hide.png"
import Cookies from 'js-cookie';
import { useTranslation } from 'react-i18next';

const Email_Register = ({ setActiveStep }) => {

  const [show1, setShow1] = useState(false);
  const initialValues = {email:"", password: ""};
  const [formValues, setFormValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [submit, setSubmit] = useState(false);

  const handleShow1 = () => {
    setShow1(!show1)
  }

  const handleChange = (e) =>{
     const {name, value} = e.target;
     setFormValues ({ ...formValues, [name]: value });
     console.log(formValues);
  }

  useEffect(() => {
    const storedregEmail = Cookies.get('regEmail');
    if (storedregEmail && formValues.email === "") {
      setFormValues((prevData) => ({
        ...prevData,
        email: storedregEmail,
      }));
    }
  }, []);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setErrors(validate(formValues));
    setSubmit(true);

  }

  useEffect (() =>{
    console.log(errors);
     if (Object.keys(errors).length === 0 && submit){
      setActiveStep(6)
     }
  },[errors]);

  const validate = (values) =>{
    const errors = {};
    const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!values.email){
       errors.email = "Email is required!"
    } else if (!regex.test(values.email)){
      errors.email = "Please enter a valid email"
    }
    if(!values.password){
      errors.password = "Password is required!"
    }
    return errors;
  }


      const storedId = Cookies.get('id');
      const id = storedId;
      const {t} = useTranslation();

  return (

    <>
      <div className="email-register" >
        <a onClick={() => setActiveStep(0)} href="#" className="back-btn mb-5"><i className="fa-solid fa-chevron-left"></i>{t('Back_Button')}</a>
        <h2 className="main-heading2 mb-3">{t('Login Details')}</h2>
        <div className="form-box">
          <form onSubmit={formSubmitHandler} className="address-form">
            <div className="row">
              <div className="col-lg-12">
                <label htmlFor="email-address">{t('Email Address')}</label>
                <input type="mail" className={errors.email ? "error-box" : ""} id="email-address" name="email"  value={formValues.email} onChange={handleChange}
                />
                <p className="error">{errors.email} </p>
              </div>
              <div className="col-lg-12">
                <label htmlFor="password">{t('Password')}</label>
                <div className="password-outer">
                  <input type={show1 ? "text" : "password"} id="password" value={formValues.password} name="password" className={errors.password ? "error-box" : ""}  onChange={handleChange}/>
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
                <p className="error">{errors.password}</p>
              </div>
              <div className="col-lg-12 text-right">
                <a href="#">{t('Forgot Password')}</a>
              </div>
              <div className="col-lg-12">
                <button type="submit" className="common-button1 mt-4 justify-content-center mx-auto"><span>{t('Next')}</span></button>
              </div>
            </div>
          </form>
        </div>
      </div >
    </>

  )
}

export default Email_Register;