# 🦆 Ducktales Platform

![Linguagem mais utilizada](https://img.shields.io/github/languages/top/lucasimonmendes/ducktales-platform)
![Último commit](https://img.shields.io/github/last-commit/lucasimonmendes/ducktales-platform)
![README bem legal](https://img.shields.io/badge/readme-bem_legal-8A2BE2)

## 📜 Sobre o Projeto

O **Ducktales Platform** é uma plataforma desenvolvida para venda de conteúdo exclusivo sobre patos (caso de estudo). Este projeto implementa autenticação via Google, proteção de rotas e checkout via popup, utilizando conteinerização com Docker para facilitar a distribuição e execução.

## 🎥 Demonstração Visual

Aqui você pode incluir prints ou um GIF demonstrando a interface e as funcionalidades principais do projeto.

### Temas

![Demonstração Temas](./docs/media/02_ducktales_theme_pick.mp4)

### Checkout popup via Stripe

![Demonstração Checkout](./docs/media/01_ducktales_checkout.mp4)

### Proteção de rotas

![Demonstração Proteção de rotas](./docs/media/03_ducktales_protected_route.mp4)

## 🚀 Tecnologias Utilizadas

O projeto foi desenvolvido com as seguintes tecnologias:

- 🔹 **Next.js**
- 🔹 **OAuth via Google (Authjs)**
- 🔹 **Docker & Docker Compose**
- 🔹 **PostgreSQL via PrismaORM**
- 🔹 **Authjs**

## 🛠 Como Rodar o Projeto

1. Clone este repositório:

   ```sh
   git clone https://github.com/lucasimonmendes/ducktales-platform.git
   cd ducktales-platform
   ```

2. Configure as variáveis de ambiente (use o `.env.example` como referência)
3. Execute com Docker:

   ```sh
   docker-compose up --build
   ```

4. Acesse `http://localhost:3000` no navegador.

## 📌 Roadmap e Funcionalidades

### ✅ Funcionalidades Implementadas

- [x] Configuração inicial
- [x] OAuth via Google
- [x] Proteção de rotas
- [x] Checkout popup
- [x] Container Docker
- [x] Resolver lógica da interface

### 🔜 Funcionalidades Futuras

- [ ] Integração com banco de dados
- [ ] Galeria de conteúdos
- [ ] Redesign da área de membros

Se você tiver sugestões ou quiser contribuir, fique à vontade para abrir uma issue!

## 🤝 Contribuição

Se deseja contribuir, siga estes passos:

1. Faça um fork do repositório
2. Crie uma branch (`git checkout -b minha-feature`)
3. Faça commit das suas alterações (`git commit -m 'Adiciona nova funcionalidade'`)
4. Envie para o repositório (`git push origin minha-feature`)
5. Abra um Pull Request

## 📫 Contato

Se tiver dúvidas ou sugestões, entre em contato:

- 📧 Email: [lucasimonmendes@gmail.com]
- 🔗 LinkedIn: [Lucas Simon](https://www.linkedin.com/in/lucasimonmendes)
