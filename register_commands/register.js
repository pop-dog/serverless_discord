require('dotenv').config()
const axios = require('axios').default;

let url = `https://discord.com/api/v8/applications/${process.env.APP_ID}/guilds/${process.env.GUILD_ID}/commands`

console.log('Registering commands to: ' + url)

const headers = {
  "Authorization": `Bot ${process.env.BOT_TOKEN}`,
  "Content-Type": "application/json"
}

let command_data = [
  {
    "name": "roll",
    "type": 1,
    "description": "Roll some dice!",
    "options": [
      {
        "name": "expression",
        "description": "The dice to roll. (e.g. 2d6 or 1d20+5)",
        "type": 3,
        "required": true
      }
    ]
  },
  {
    "name": "chat",
    "type": 1,
    "description": "Send a message to the chat bot.",
    "options": [
      {
        "name": "message",
        "description": "The message to send.",
        "type": 3,
        "required": true
      }
    ]
  },

]

for (let i = 0; i < command_data.length; i++) {
  let command = command_data[i]
  console.log('Registering command: ' + command.name)
  axios.post(url, JSON.stringify(command), {
    headers: headers,
  })
}