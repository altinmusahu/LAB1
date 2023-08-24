import React from 'react';
import PaymentForm from './CartModal';
import { loadStripe } from '@stripe/stripe-js/pure';
import { Elements } from '@stripe/react-stripe-js';

const PUBLIC_KEY = "pk_test_51NG6ztILh5nwppOneFRB230OsgGMaHx9wVEBtRvQseQXs1fPn47HarkO725Q5eKJVJgWLPQIxHDxJpTvyTwGgXbl00eE5kGuJx";

// Remove extra semicolon at the end of the previous import statement
const stripeTestPromise = loadStripe(PUBLIC_KEY);

function StripeContainer() {
    return (
        <>
            <Elements stripe={stripeTestPromise}>
                <PaymentForm />
            </Elements>
        </>
    );
}

export default StripeContainer;