const stripe = require('stripe')('sk_test_51IOsa2AHJo0HEBIM39Xc35HsjC7YFsPEOTcNiI25jrA510x8QHt4vCNjSeVjrAK9uOqnsCJb6zW7q794pAErxUdY009h080cOW');
const express = require('express');
const app = express();
app.use(express.static('.'));

const YOUR_DOMAIN = 'http://localhost:3000/checkout';

app.post('/create-checkout-session', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'gbp',
          product_data: {
            name: 'The Beatles Overnight Bag',
            images: [https://github.com/adj-91/test_data_backend/blob/main/img/image14.jpg?raw=true],
          },
          unit_amount: 2000,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${YOUR_DOMAIN}?success=true`,
    cancel_url: `${YOUR_DOMAIN}?canceled=true`,
  });

  res.json({ id: session.id });
});

app.listen(4242, () => console.log('Running on port 4242'));