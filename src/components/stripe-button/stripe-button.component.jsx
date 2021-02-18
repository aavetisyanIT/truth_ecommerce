import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

export default function StripeButton({ price }) {
	const priceForStripe = price * 100;
	const publishableKey =
		'pk_test_51IM3cVFdLF5Hyor2bHWKpCFvwtVhlqQfHjY6exDrjBGnGwivpmb3K7TVSLCz1voiTxRCixYmZ44wYp7rblAIO84K00XApFkXuX';

	const onToken = token => {
		console.log(token);
		alert('Payment Successful');
	};

	return (
		<StripeCheckout
			label='Pay Now'
			name='Truth eCommerce'
			billingAddress
			shippingAddress
			image='https://sendeyo.com/en/f3eb2117da'
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel='Pay Now'
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
}
