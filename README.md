# bbot-boilerplate
A starter bot using the bBot engine, to make your own.

## 1. 🍴  Fork or clone this repo
  - `git clone amazebot/bbot-boilerplate MY_BOT`
  - to clone without git history, add `--depth 1` flag
  - or once cloned, start a fresh history `rm -rf .git && git init`
## 2. 💻  Setup your project
  - `npm install` get dependencies
  - `npm run setup` add your details
## 3. ✨  Test in shell
  - `npm start`
## 4. 👨‍💻  Start coding
  - customise **index.js**
  - look at **examples.js**
## 5. 💬  Run in a chat platform
  - choose a message adapter (install package or use one we include).
  - setting login credentials in .env file, environment or package settings.
  - e.g. start chatting live with `npm start -- -m rocketchat`

___

## Local Development

I would suggest cloning the adapter for local development, instead of installing from NPM.

- `git clone amazebot/bbot-rasa-nlu-adapter`
- `yarn install`
- `yarn link`

That will create a local link to the package, for the bot to use. This allows you to make any tweaks or attach a debugger to monitor the calls.
If you do find bugs (it's a draft module, so not unexpected), please let me know what changes are required or make a PR directly.

When making changes, use `yarn build` to compile source (to be loaded as a linked module).

### Training and Running Rasa

If you don't have a local Rasa.ai NLU instance for testing with, please see the instructions in the adapter readme, which bundles a basic local NLU starter.

Once installed and trained, run `yarn rasa:run` to make sure the instance is running before you try testing interactions with the bot.

### Running the Bot

Clone and setup the boilerplate bot.

- `git clone amazebot/bbot-rasa-boilerplate`
- `yarn install`
- `yarn link bbot-rasa-nlu-adapter`
- `yarn setup`

The last action allows you to customise the bot configs, but you should look at the `.env` to ensure your configs.

If the Rasa port is not `5000`, update the bot's `.env` config: `BOT_RASA_URL=<YOUR_URL:YOUR_PORT>`.

The boilerplate includes examples for setting up some basic branches with the Rasa starter intents.

- `yarn start` to run the bot in shell for testing interactions
- `yarn watch` to run while developing and reload on file changes

### Running in Rocket.Chat

Please see the [Rocket.Chat boilerplate instructions](https://github.com/Amazebot/bbot-rocketchat-boilerplate) and `it's config file` for details specific to running bBot in Rocket.Chat.

## Adding NLU criteria branches

The adapter converts the NLU provider result schema to a universal model, to match against criteria.

The example branch in `index.js` can be invoked by saying "hello" or "hi" to the bot. It will respond with the results object from Rasa NLU processing.

`bot.global.NLU` sets up a new NLU branch. NLU branches are only processed if all basic text pattern branches fail to match.

The first argument is the NLU criteria object: See docs https://amazebot.github.io/bbot/interfaces/inaturallanguagecriteria.html

The second is the callback for responding or taking some other action on matching. If the method returns a promise, it will wait before continuing / responding.

The third is optional configs for the branch. Setting an ID is useful to identify the branch in the logs.

### Criteria Operators

The example criteria as below: 

```{ intent: { name: 'greet', operator: 'max' } }```

Will match if NLU processing returns the intent named "greet" with the highest confidence (due to the `max` operator).

The results may include multiple intent matches, so if you want looser matching, you could `operator: 'in'`, to match if the named intent is included at all.

A `score` attribute can be added instead of the max operator, or in conjunction with other operators to define more exact confidence thresholds. e.g.

```{ intent: { name: 'greet', score: 0.2 } }```

Will match whenever the "greet" intent score is greater than or equal to "0.2"

---

Go to the [bbot repo](https://github.com/Amazebot/bbot/#clone-project) for
system requirements.

See [bbot.chat](http://bbot.chat) for get started guides.