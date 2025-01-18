import { CheckoutDialog } from "@/components/checkout-dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">
        Bem-vindo ao Mundo dos Patos!
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Guia Completo sobre Patos</CardTitle>
            <CardDescription>
              Tudo o que você precisa saber sobre patos em um único lugar.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Aprenda sobre diferentes espécies, habitats e comportamentos dos
              patos.
            </p>
            <CheckoutDialog title="Guia Completo sobre Patos" amount={29.99} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Fotografia de Patos</CardTitle>
            <CardDescription>
              Técnicas para capturar as melhores fotos de patos.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Dicas de profissionais para fotografar patos em seus habitats
              naturais.
            </p>
            <CheckoutDialog title="Fotografia de Patos" amount={39.99} />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Cuidados com Patos de Estimação</CardTitle>
            <CardDescription>
              Guia essencial para quem tem ou quer ter patos como pets.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="mb-4">
              Alimentação, saúde e dicas de treinamento para patos domésticos.
            </p>
            <CheckoutDialog
              title="Cuidados com Patos de Estimação"
              amount={49.99}
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
