/* eslint-disable indent */
/* eslint-disable max-len */
const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
// eslint-disable-next-line max-len
const stripe = require("stripe")(
  // eslint-disable-next-line indent
  "sk_test_51Ix383SGLAEqUxAUNMtoH2MTzFsmZv6A7P0jSQ8lRKW0hP57ZvLYyLtuxf54gb6X8X0XP0bDlKpvco33vg4SPQPJ00d5MB9jtQ"
);

// API

// - App config
const app = express();

// - Middlewares
// eslint-disable-next-line object-curly-spacing
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "inr",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/challenge-4b2b2/us-central1/api
