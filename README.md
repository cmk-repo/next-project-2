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

- give name
