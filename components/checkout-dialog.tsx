"use client";

import CheckoutPage from "./checkout-page";
import convertToSubcurrency from "@/lib/convertToSubcurrency";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const stripePromise = loadStripe(
  // @ts-expect-error bla
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY,
);

if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
  throw new Error("NEXT_PUBLIC_STRIPE_PUBLIC_KEY is not defined");
}

interface CheckoutDialogProps {
  title: string;
  amount: number;
}

export function CheckoutDialog({ title, amount }: CheckoutDialogProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Comprar por R${amount}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Checkout - {title}</DialogTitle>
          <DialogDescription>
            Complete suas informações de pagamento para adquirir o conteúdo.
          </DialogDescription>
        </DialogHeader>

        <Elements
          stripe={stripePromise}
          options={{
            mode: "payment",
            amount: convertToSubcurrency(amount),
            currency: "brl",
          }}
        >
          <CheckoutPage amount={amount} />
        </Elements>
      </DialogContent>
    </Dialog>
  );
}
