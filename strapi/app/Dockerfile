FROM node:22-bookworm

WORKDIR /opt/app

COPY package*.json ./

RUN npm install --no-audit --no-fund

COPY . .

EXPOSE 1337

CMD ["npm", "run", "develop"]
