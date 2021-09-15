# The Everdawn

This is a monorepo using [npm workspaces](https://docs.npmjs.com/cli/v7/using-npm/workspaces) to share tooling and dependencies between the Discord app and backend API.

## Prerequisites

**For the apps:**

- Node.JS >= 16

**For the DB:**

- Docker and docker-compose
- OR your own Mongo server

## Setup

Note: Node.JS 16 or later is required to run the app.

**Install deps for both apps**
`npm install`

To ensure all our code is formatted the same, make sure your editor supports/has plugins enabled for Editorconfig, Eslint and Prettier. If you're using VSCode, it should have suggested some based on the contents of our `.vscode/extensions.json` file. If not, take a look in that file for which ones to install.

## Running it

**Start the Mongo database server**
`docker-compose up`

**Start both apps in watch mode (Discord client and backend API)**
`npm run dev`

The app will now be running locally and will respond to commands, events, etc that it cares about.

## Deployment

TODO!

For early development we can use a free host like [Glitch](https://glitch.me) - automated deploys would be nice. We can probably use Github actions to do that.

When we get to the point of alpha release we should find something more stable.
