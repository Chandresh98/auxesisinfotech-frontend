import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import CheckoutForm from './Checkout-form';




// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe('pk_test_51NkQJBSAa4HOTwdGAOJf4wCMxZWkfxZrG3Ff8pwPt8MsFhAQyawC8JABm6uCj74fW60dLPw9UmUw0cyP8SWcPvLA00Coo4JIsr');

const Stripe_Payment = () =>{
    const options = {
        // passing the client secret obtained from the server
        clientSecret: 'sk_test_51NkQJBSAa4HOTwdGUDdndA6L1NtaoA7JqfZFRnqiQVmHXN2c98UOTf4NvJ6QKe4dOH2m6papJ57AWTMzxEKWb95z00SsgJBUZj',
      };
    
      return (
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm/>
        </Elements>
      );
}

export default Stripe_Payment;