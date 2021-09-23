# The Everdawn

The Discord bot for the Everdawn PBP.

## Prerequisites

- Node.JS >= 16
- For the DB:
  - Docker and docker-compose
  - OR your own Postgres server

## Setup

Note: Node.JS 16 or later is required to run the app. [nvm](https://github.com/nvm-sh/nvm) can be useful for managing node versions. Once installed, just run:

- `nvm install 16` (one-time only)
- `nvm use 16` (to switch to using node 16)

If you see the following error when starting the app:

```
(node:182964) UnhandledPromiseRejectionWarning: ReferenceError: AbortController is not defined
```

then you are not running Node 16..

**Install dependencies**
`npm install`

To ensure all our code is formatted the same, make sure your editor supports/has plugins enabled for Editorconfig, Eslint and Prettier.

If you're using VSCode, it should have suggested some based on the contents of our `.vscode/extensions.json` file, including a helper for Prisma schema files.

## Running it

**Start the Postgres database server**
`docker-compose up`

**Start the app in watch mode**
`npm run dev`

The app will now be running locally and will respond to commands, events, etc that it cares about.

## Changing the database schema

We're using [Prisma](https://prisma.io), "the type-safe ORM" to connect to, query, and manage our database.

To add/remove/modify a table, edit `prisma/schema.prisma` and then run `npx prisma db push`. This will make the relevant changes to the database structure, as well as regenerating the type definitions in `node_modules/@prisma/client` (so that you get nice autocompletion and type-checking for your models). Read more about:

- [Prisma's generated types](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases/install-prisma-client-typescript-postgres)
- [`prisma db push`](https://www.prisma.io/docs/concepts/components/prisma-migrate/db-push/)
- [`prisma migrate`](https://www.prisma.io/docs/concepts/components/prisma-migrate), which we will eventually use to manage migrating the database, when we're past the prototyping phase.

## Deployment

TODO!

No need to deploy when just playing around - the app connects itself to the Discord "gateway" and listens for events - unlike Slack, Discord bots don't need to listen on a URL for events.

When we want to properly playtest a mission we should find somewhere stable to host the bot and database.
