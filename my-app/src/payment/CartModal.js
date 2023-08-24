import React, { useState } from 'react';
import axios from "axios";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import "./card.css";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCol,
    MDBContainer,
    MDBInput,
    MDBRow,
  } from "mdb-react-ui-kit";


function PaymentForm() {
    const [success, setSuccess] = useState(false);
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        });

        if (!error) {
            try {
                const { id } = paymentMethod;
                const response = await axios.post('http://localhost:3001/payment', {
                    amount: 1000,
                    id
                });

                if (response.data.success) {
                    console.log("Successful payment");
                    setSuccess(true);
                }
            } catch (error) {
                console.log("Error", error);
            }
        } else {
            console.log(error.message);
        }
    }

    return (
        <>
             {!success ?
                <form onSubmit={handleSubmit}>
                    <fieldset className='FormGroup'>
                        <div className='FormRow'>
                        <h1>wdadasd <CardElement/></h1> 

                            
                       
                        </div>
                    </fieldset>
                    <button type="submit">Pay</button>
                </form>
                :
                <div>
                    <h2>You just bought a sweet spatula</h2>
                </div>
            } 
        </>
    )
}

export default PaymentForm;