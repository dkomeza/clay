FROM oven/bun:debian

WORKDIR /app

COPY package.json .
RUN bun install

COPY public ./public
COPY src ./src
COPY tsconfig.json .
COPY .env.development .

CMD ["bun", "dev"]