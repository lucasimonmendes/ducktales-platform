import { NextRequest, NextResponse } from "next/server";
/* eslint-disable-next-line */
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export async function POST(request: NextRequest) {
  try {
    const { amount } = await request.json();

    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "brl",
      automatic_payment_methods: { enabled: true },
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error("Internal Error", error);

    return NextResponse.json(
      { error: `internal server error: ${error}` },
      { status: 500 },
    );
  }
}
