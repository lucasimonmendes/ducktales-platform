import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">
        Dashboard de Conteúdo sobre Patos
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Guia Completo sobre Patos</CardTitle>
            <CardDescription>Seu guia abrangente sobre patos</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Acesse aqui o conteúdo completo sobre diferentes espécies de
              patos, seus habitats e comportamentos.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Fotografia de Patos</CardTitle>
            <CardDescription>Técnicas avançadas de fotografia</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Explore dicas profissionais e técnicas para capturar as melhores
              fotos de patos em seus habitats naturais.
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Cuidados com Patos de Estimação</CardTitle>
            <CardDescription>Guia para proprietários de patos</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              Informações detalhadas sobre alimentação, saúde e treinamento para
              cuidar adequadamente de patos domésticos.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
