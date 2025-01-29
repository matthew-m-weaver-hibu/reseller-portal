# From https://github.com/vercel/next.js/blob/a5e0aabfb850ec2e872b01b946521836aea9521d/examples/with-docker/Dockerfile

FROM node:22 AS base

WORKDIR /api

# Install dependencies based on the preferred package manager
COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 5000

ENV PORT=5000

CMD ["npm", "run", "start:dev"]