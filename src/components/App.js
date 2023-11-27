import React from 'react';
// import HashLoader from "react-spinners/HashLoader";
import { useState, useEffect } from 'react';
import Routing from './Routing';
import Navbar from './navbar'
import Footer from './footer';
import AppContext from '../utils/context';
// import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
// import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe('pk_test_51NkQJBSAa4HOTwdGAOJf4wCMxZWkfxZrG3Ff8pwPt8MsFhAQyawC8JABm6uCj74fW60dLPw9UmUw0cyP8SWcPvLA00Coo4JIsr');

const App = () => {
    console.log(stripePromise);
    // const [loading, setLoading] = useState(false);
    // useEffect(() => {
    //     setLoading(true);
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 5000);
    // }, [])

    return (
        <>
            <div>
                <AppContext>
                    {/* <Elements stripe={stripePromise}>
                                    <CheckoutForm />
                                </Elements> */}
                    <Navbar />
                    <Routing />
                    <Footer />
                </AppContext>
            </div>
        </>
    )
};

export default App;