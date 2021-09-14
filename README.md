# The Everdawn Discord App

## Getting started

Note: Node.JS 16 or later is required to run the app.

- `npm install`
- copy `.env.example` to `.env` and fill in the values (ask an admin if you don't know them)

To ensure all our code is formatted the same, make sure your editor supports/has plugins enabled for Editorconfig, Eslint and Prettier. If you're using VSCode, it should have suggested some based on the contents of our `.vscode/extensions.json` file. If not, take a look in that file for which ones to install.

## Running it

`node index.js`

To have the app restart as you make changes, instead run `npx nodemon index.js`.

The app will now be running locally and will respond to commands, events, etc that it cares about.

## Deployment

TODO!

For early development we can use a free host like [Glitch](https://glitch.me) - automated deploys would be nice. We can probably use Github actions to do that.

When we get to the point of alpha release we should find something more stable.
