import React, { useState, useEffect } from "react";
import { useElements, useStripe, ElementsConsumer, CardElement } from "@stripe/react-stripe-js";

import CardSection from "./CardSection";

function CheckoutForm() {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    const result = await stripe.createToken(card);
    if (result.error) {
      console.log(result.error.message);
    } else {
      console.log(result.token);
    }

    // Send the token to your Node.js backend
    sendTokenToBackend(result.token);

  };

  
   const sendTokenToBackend = async (token) => {
    try {
      const response = await fetch('/stripe/charge', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: token.id }),
      });

      if (response.ok) {
        console.log('Payment successful!');
        // Handle success on the frontend
      } else {
        console.error('Payment failed.');
        // Handle failure on the frontend
      }
    } catch (error) {
      console.error('Error sending token to backend:', error);
    }
  };



  return (
    <div className="payment-stripe-outer">
      <div className="product-info">
        <h3 className="product-title">Apple MacBook Pro</h3>
        <h4 className="product-price">$999</h4>
      </div>
      <form onSubmit={handleSubmit} className="payment-stripe">
        <CardSection />
        <button disabled={!stripe} className="btn-pay">
          Buy Now
        </button>
      </form>
    </div>
  );
}

export default function InjectedCheckoutForm() {
  return (
    <ElementsConsumer>
      {({ stripe }) => (
        <CheckoutForm stripe={stripe} />
      )}
    </ElementsConsumer>
  );
}
