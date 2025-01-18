# Etapa 1: Construção
FROM node:18-alpine AS builder

WORKDIR /app

COPY package.json package-lock.json ./ 

RUN npm install

COPY . .

RUN npm run build 

RUN npm prune --production

# Etapa 2: Execução
FROM node:18-alpine

WORKDIR /app

COPY --from=builder /app/package.json ./ 
COPY --from=builder /app/package-lock.json ./ 
COPY --from=builder /app/node_modules ./node_modules/ 
COPY --from=builder /app/.next ./.next 
COPY --from=builder /app/next.config.mjs ./ 

RUN npm install --only=production

EXPOSE 3000

CMD [ "npm", "start" ]
