My Interviews App

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Apply new migration

```bash
npx prisma migrate dev --name name
```

## Update Prisma Client on deploy

Because Prisma Client is tailored to your own schema, you need to update it every time your Prisma schema file is changing by running the following command:

```bash
npx prisma generate
```

## Create tables in DB

To actually create the tables in your database, you now can use the following command of the Prisma CLI:

```bash
npx prisma db push
```
