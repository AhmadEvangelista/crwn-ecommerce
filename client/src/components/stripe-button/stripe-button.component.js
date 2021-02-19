import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51I1XXVL2eToMSvzMMojSein8Li7TmAoq3QRxf5Smzo7WCMDaaAZd14SQpyOtH5TuPUhlwCBo3PTLbcmKL31XXr2600xymo7ypS';
  const onToken = (token) => {
    axios({
      url: '/payment',
      method: 'post',
      data: { amount: priceForStripe, token },
    })
      .then((response) => {
        console.log(response);
        alert('Payment Successful');
      })
      .catch((error) => {
        console.log('Payment error: ', JSON.parse(error));
        alert(
          'There was an issue with your payment. Please sure you use the provided creditcard.'
        );
      });
  };
  return (
    <StripeCheckout
      label='Pay Now'
      name='CRWN CLothing Ltd.'
      billingAddress
      shippingAddress
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
