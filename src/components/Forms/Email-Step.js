import React from "react";
import { useState, useEffect } from "react";
import Cookies from 'js-cookie';
import { useTranslation } from 'react-i18next';
import axios from "axios";

const Email = ({ setActiveStep }) => {

  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState();
  const unregisteredEmail = email;


  const handleChange = (e) => {
    setEmail(e.target.value);
  }


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isValidEmail(email)) {
      setErrors('Email is invalid');
      console.log(email);
    } else {
      setErrors(null);

      const authData = {
        email: 'shivania@auxesisinfotech.com',
        password: 'Ambujacement@123',
      };

      fetch('https://api.wifly.app/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(authData),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('Authentication failed');
          }
          return response.json();
        })
        .then((data) => {
          // Step 2: Extract the access token from the response
          const accessToken = data.items[0].access_token;
          console.log(accessToken);

          // Now, make the second fetch request using accessToken
          fetch("https://api.wifly.app/api/user", {
            headers: {
              'Authorization': `Bearer ${accessToken}`,
            },
          })
            .then((res) => res.json())
            .then((data) => {
              checkEmail(data.items);
            })
            .catch((error) => {
              console.error('Second fetch request failed:', error);
            });
        })
        .catch((error) => {
          console.error('Authentication failed:', error);
        });

   
        axios

        .post('http://localhost:1337/api/contacts', {
        
            "data": {
              "Email_Address": email,
            }
          
        })
        
        .then((response) => {
        
          const contactId = response.data.data.id;
    
          localStorage.setItem('contactId', contactId);
          console.log("Contact ID:", contactId);
        
        })
        
        .catch((error) => {
        
        console.log(error);
        
        });


    }
  };


  let arr_obj = [{ id: '', email: '' }];

  const checkEmail = (getdata) => {
    console.log(email);
    {
      getdata.map(item => {

        arr_obj.push({ id: item.id, email: item.email })

      })
    };


    const found = arr_obj.find(obj => {
      return obj.email === email;
    });
    if (found) {
      console.log(found.id);
      setActiveStep(1)
      const id = found.id;
      const registerEmail = found.email
      Cookies.set('id', id, { expires: 5 });
      Cookies.set('regEmail', registerEmail, { expires: 5 });

    } else {
      setActiveStep(2)
      Cookies.set('email', unregisteredEmail, { expires: 30 });
    }

  };

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const { t } = useTranslation();

  return (

    <>
      <div className="email-step first-step">
      <a href="/shop" className="back-btn mb-5"><i className="fa-solid fa-chevron-left"></i>{t('Back_Button')}</a>
        <h2 className="main-heading2 mb-3"> {t('Login Details')} </h2>
        <div className="form-box">
          <form className="address-form" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-lg-12">
                <label htmlFor='email'>{t('Email Address')}</label>
                <input type="text" id="email" name="email" className={errors ? "error-box" : ""}  placeholder={t('Email Address')} required value={email} onChange={handleChange} />
                <p className="error">{errors}</p>
              </div>
              <div className="col-lg-12">
                <button className="common-button1 mt-4 justify-content-center mx-auto" type="submit"><span>{t('Continue')}</span></button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>

  )
}

export default Email;