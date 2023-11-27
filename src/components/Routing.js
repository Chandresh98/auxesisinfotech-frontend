import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Timeline from './Timeline/Timeline'
import Home from './Home/New-Home'
import Services from './Service-Plans/Services';
import Shop from './Products/Shop'
import Form from './Forms/delivery-form'
import Single_Product from './Products/Single-product'
import Email from "./Forms/Email-Step";
import Unregister_User from "./Forms/Unregister-User";
import { useState, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';


const Routing = () => {

  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, [])
  

  return (
    <BrowserRouter>
      <I18nextProvider i18n={i18n}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/service-plans" element={<Services />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/product-page/:id" element={<Single_Product />} />
          <Route path='/delivery/:id' element={<Form />} />
          <Route path='/email-login/:id' element={<Email />} />
          <Route path='/user-login' element={<Unregister_User />} />
        </Routes>
      </I18nextProvider>
    </BrowserRouter>
  )
}

export default Routing;