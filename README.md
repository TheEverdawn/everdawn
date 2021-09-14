# The Everdawn Discord App

## Getting started

Note: Node.JS 16 or later is required to run the app.

- `npm install`
- copy `.env.example` to `.env` and fill in the values (ask an admin if you don't know them)

To ensure all our code is formatted the same, make sure your editor supports/has plugins enabled for Editorconfig, Eslint and Prettier. If you're using VSCode, it should have suggested some based on the contents of our `.vscode/extensions.json` file. If not, take a look in that file for which ones to install.

## Running it

**In watch mode for local development:**
`npm run dev`

The app will now be running locally and will respond to commands, events, etc that it cares about.

**For production:**
`NODE_ENV=production npm start`

## Gotchas

The discord.js library seems to have a few quirks with typescript - even with code copied straight from [the guide](https://discordjs.guide). If you run into [any of these](https://github.com/discordjs/discord.js/issues/6638) then unless it's a quick fix, feel free to raise an issue on their Github and stick a `// @ts-ignore` before the offending line, preferably with an explanatory comment and/or link to the Github issue if appropriate.

## Deployment

TODO!

For early development we can use a free host like [Glitch](https://glitch.me) - automated deploys would be nice. We can probably use Github actions to do that.

When we get to the point of alpha release we should find something more stable.
