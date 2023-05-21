require('dotenv').config()
const axios = require('axios').default;

let url = `https://discord.com/api/v8/applications/${process.env.APP_ID}/guilds/${process.env.GUILD_ID}/commands`

console.log('Registering commands to: ' + url)

const headers = {
  "Authorization": `Bot ${process.env.BOT_TOKEN}`,
  "Content-Type": "application/json"
}

let command_data = {
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
}

axios.post(url, JSON.stringify(command_data), {
  headers: headers,
})