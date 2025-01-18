"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <div className="container mx-auto flex items-center justify-center min-h-screen">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Entre para acessar o conteúdo sobre patos.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            onClick={() => signIn("google", { redirectTo: "/dashboard" })}
            className="w-full"
          >
            Login com Google
          </Button>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-muted-foreground">
            Novo por aqui? Crie uma conta ao fazer login.
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}
