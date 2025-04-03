export default function PaymentSuccess({
  searchParams: { amount },
}: {
  searchParams: { amount: string };
}) {
  let product;
  if (amount == "29.99") {
    product = "Guia completo sobre Patos";
  } else if (amount == "39.99") {
    product = "Fotografia de Patos";
  } else {
    product = "Cuidados  com Patos de Estimação";
  }
  return (
    <main className="max-w-6xl mx-auto p-10 text-white text-center border m-10 rounded-md bg-gradient-to-tr from-green-500 to-yellow-500">
      <div className="mb-10">
        <h1 className="text-4xl font-extrabold mb-2">Muito obrigado!</h1>
        <h2 className="text-2xl">Você acaba de adquirir {product}</h2>

        <div className="bg-black p-2 rounded-md text-green-500 mt-5 text-4xl font-bold">
          R${amount}
        </div>
      </div>
    </main>
  );
}
