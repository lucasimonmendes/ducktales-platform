"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface CheckoutDialogProps {
  title: string;
  price: number;
}

export function CheckoutDialog({ title, price }: CheckoutDialogProps) {
  const [open, setOpen] = useState(false);

  const handleCheckout = (event: React.FormEvent) => {
    event.preventDefault();
    // Aqui você implementaria a lógica real de checkout
    alert("Compra realizada com sucesso!");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>Comprar por R${price.toFixed(2)}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Checkout - {title}</DialogTitle>
          <DialogDescription>
            Complete suas informações de pagamento para adquirir o conteúdo.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleCheckout}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="name" className="text-right">
                Nome
              </Label>
              <Input id="name" className="col-span-3" required />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="card" className="text-right">
                Cartão
              </Label>
              <Input id="card" className="col-span-3" required />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">
              Confirmar compra de R${price.toFixed(2)}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
