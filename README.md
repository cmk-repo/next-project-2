This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Addons

React icons npm i react-icons@4.11.0
clasnames npm i classnames@2.3.2 - to replace `${link.href === currentPath ? 'text-red-900' : 'text-zinc-500'}  hover:text-zinc-800 transition-colors` in NavBar

mysql community engine https://dev.mysql.com/downloads/file/?id=520510
jetbrains datagrip https://www.jetbrains.com/datagrip/
alternate : https://dev.mysql.com/downloads/workbench/

database -sql
prisma - intract to database npm i prisma@5.3.1 , npx prisma init

set the schema to point to mysql
set the env file to have mysql connecitons DATABASE_URL="mysql://root:test@localhost:3306/issue-tracker?schema=public"

sql port is 3306,

npx prisma format
npx prisma migrate dev

Next steps:

1. Set the DATABASE_URL in the .env file to point to your existing database. If your database has no tables yet, read https://pris.ly/d/getting-started
2. Set the provider of the datasource block in schema.prisma to match your database: postgresql, mysql, sqlite, sqlserver, mongodb or cockroachdb.
3. Run prisma db pull to turn your database schema into a Prisma schema.
4. Run prisma generate to generate the Prisma Client. You can then start querying your database.

- give name

- data validation use zod
  npm i zod@3.22.2

- instantiating prisma client
  https://www.prisma.io/docs/guides/other/troubleshooting-orm/help-articles/nextjs-prisma-client-dev-practices

  add this to client.ts in migrations to make sure only 1 instance is running

  Now using radix

  - Radix primitives npm install @radix-ui/themes

  https://www.radix-ui.com/themes/docs/theme/typography
  to fix the font used by Next and radis ui

- react simple MDE edittor https://www.npmjs.com/package/react-simplemde-editor

- react hook form npm install react-hook-form@7.46.1
- setup register, control, handleSubmit, form , and now to send data to api we should install axios npm i axios@1.5.0
- to show error use radix call out
- npm i @hookform/resolvers@3.3.1
