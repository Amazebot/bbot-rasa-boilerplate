const bot = require('bbot')

/** Add your bot logic here. Removing the examples. */
bot.global.NLU(
  { intent: { name: 'greet', operator: 'max' } },
  (b) => {
    return b.respond('```' + JSON.stringify(b.message.nlu.results) + '```')
  },
  { id: 'greeting' }
)

bot.start()
