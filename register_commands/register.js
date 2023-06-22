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
        "name": "Honkai: Star Rail",
        "description": "Stickers from Honkai: Star Rail",
        "type": 2,
        "options": [
          {
            "name": "Pom Pom",
            "description": "Pom Pom stickers",
            "type": 1,
            "options": [
              {
                "name": "name",
                "description": "The name of the sticker.",
                "type": 3,
                "required": true,
                "choices": [
                  {
                    "name": "Heart",
                    "value": "pom_pom_heart"
                  },
                  {
                    "name": "Wow",
                    "value": "pom_pom_wow"
                  },
                  {
                    "name": "Sad",
                    "value": "pom_pom_sad"
                  },
                  {
                    "name": "O.K.",
                    "value": "pom_pom_ok"
                  },
                  {
                    "name": "Flushed",
                    "value": "pom_pom_flushed"
                  },
                  {
                    "name": "Thinking",
                    "value": "pom_pom_thinking"
                  },
                  {
                    "name": "Gift",
                    "value": "pom_pom_gift"
                  },
                  {
                    "name": "Typing",
                    "value": "pom_pom_typing"
                  },
                  {
                    "name": "Scared",
                    "value": "pom_pom_scared"
                  },
                  {
                    "name": "Kofe",
                    "value": "pom_pom_kofe"
                  },
                  {
                    "name": "Happy",
                    "value": "pom_pom_happy"
                  },
                  {
                    "name": "Sleepy",
                    "value": "pom_pom_sleepy"
                  },
                ]
              }
            ]
          }
        ]
      },
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
          },
          {
            "name": "Pizza Time",
            "value": "pizza_time"
          },
          {
            "name": "Surprised Pikachu",
            "value": "surprised_pikachu"
          },
          {
            "name": "Gepard: Facepalm",
            "value": "gepard_facepalm"
          },
          {
            "name": "Lost Travolta",
            "value": "lost_travolta"
          },
          {
            "name": "Rubbing Hands",
            "value": "rubbing_hands"
          },
          {
            "name": "Brent Rambo",
            "value": "brent_rambo"
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