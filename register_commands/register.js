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
  {
    "name": "sticker",
    "type": 1,
    "description": "Send a sticker!",
    "options": [
      {
        "name": "name",
        "description": "The name of the sticker.",
        "type": 3,
        "required": true,
        "choices": [
          {
            "name": "Popdog",
            "value": "popdog"
          },
          {
            "name": "Pom Pom: Heart",
            "value": "pom_pom_heart"
          },
          {
            "name": "Pom Pom: Wow",
            "value": "pom_pom_wow"
          },
          {
            "name": "Pom Pom: Sad",
            "value": "pom_pom_sad"
          },
          {
            "name": "Pom Pom: O.K.",
            "value": "pom_pom_ok"
          },
          {
            "name": "Pom Pom: Flushed",
            "value": "pom_pom_flushed"
          },
          {
            "name": "Pom Pom: Thinking",
            "value": "pom_pom_thinking"
          },
          {
            "name": "Pom Pom: Gift",
            "value": "pom_pom_gift"
          },
          {
            "name": "Pom Pom: Typing",
            "value": "pom_pom_typing"
          },
          {
            "name": "Pom Pom: Scared",
            "value": "pom_pom_scared"
          },
          {
            "name": "Pom Pom: Kofe",
            "value": "pom_pom_kofe"
          },
          {
            "name": "Pom Pom: Happy",
            "value": "pom_pom_happy"
          },
          {
            "name": "Pom Pom: Sleepy",
            "value": "pom_pom_sleepy"
          },
          {
            "name": "Raiden: Boomer",
            "value": "raiden_boomer"
          },
          {
            "name": "Raiden: Reading",
            "value": "raiden_reading"
          },
          {
            "name": "Yae: Smug",
            "value": "yae_smug"
          },
          {
            "name": "Smug Anya",
            "value": "smug_anya"
          },
          {
            "name": "Dan Heng: Pensive",
            "value": "dan_heng_pensive"
          },
          {
            "name": "Mr. Yang: Singing",
            "value": "mr_yang_singing"
          },
          {
            "name": "Pom Pom: Angry",
            "value": "pom_pom_angry"
          },
          {
            "name": "Pom Pom: Confused",
            "value": "pom_pom_confused"
          },
          {
            "name": "March 7th: Pleased",
            "value": "march_7th_pleased"
          },
          {
            "name": "March 7th: Shopping",
            "value": "march_7th_shopping"
          },
          {
            "name": "March 7th: Distressed",
            "value": "march_7th_distressed"
          },
          {
            "name": "March 7th: Cross",
            "value": "march_7th_cross"
          }
        ]
      },
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