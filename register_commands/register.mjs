import {} from 'dotenv/config'
import axios from 'axios'
async function main() {
  const url = `https://discord.com/api/v8/applications/${process.env.APP_ID}/guilds/${process.env.GUILD_ID}/commands`

  console.log('Registering commands to: ' + url)

  const headers = {
    "Authorization": `Bot ${process.env.BOT_TOKEN}`,
    "Content-Type": "application/json"
  };

  const command_data = [
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
          "name": "honkai",
          "description": "Stickers from Honkai: Star Rail",
          "type": 2,
          "options": [
            {
              "name": "pom_pom",
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
                    {
                      "name": "Angry",
                      "value": "pom_pom_angry"
                    },
                    {
                      "name": "Confused",
                      "value": "pom_pom_confused"
                    },
                  ]
                }
              ]
            },
            {
              "name": "march_7th",
              "description": "March 7th stickers",
              "type": 1,
              "options": [
                {
                  "name": "name",
                  "description": "The name of the sticker.",
                  "type": 3,
                  "required": true,
                  "choices": [
                    {
                      "name": "Pleased",
                      "value": "march_7th_pleased"
                    },
                    {
                      "name": "Shopping",
                      "value": "march_7th_shopping"
                    },
                    {
                      "name": "Distressed",
                      "value": "march_7th_distressed"
                    },
                    {
                      "name": "Cross",
                      "value": "march_7th_cross"
                    },
                  ]
                }
              ]
            },
            {
              "name": "other",
              "description": "Other stickers",
              "type": 1,
              "options": [
                {
                  "name": "name",
                  "description": "The name of the sticker.",
                  "type": 3,
                  "required": true,
                  "choices": [
                    {
                      "name": "Gepard: Facepalm",
                      "value": "gepard_facepalm"
                    },
                    {
                      "name": "Dan Heng: Pensive",
                      "value": "dan_heng_pensive"
                    },
                    {
                      "name": "Mr. Yang: Singing",
                      "value": "mr_yang_singing"
                    },
                  ]
                }
              ]
            },
          ]
        },
        {
          "name": "genshin",
          "description": "Stickers from Genshin: Impact",
          "type": 1,
          "options": [
            {
              "name": "name",
              "description": "The name of the sticker.",
              "type": 3,
              "required": true,
              "choices": [
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
              ]
            }
          ]
        },
        {
          "name": "misc",
          "description": "Miscellaneous stickers",
          "type": 1,
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
              ]
            }
          ]
        },
        {
          "name": "meme",
          "description": "Meme stickers",
          "type": 1,
          "options": [
            {
              "name": "name",
              "description": "The name of the sticker.",
              "type": 3,
              "required": true,
              "choices": [
                {
                  "name": "Pizza Time",
                  "value": "pizza_time"
                },
                {
                  "name": "Surprised Pikachu",
                  "value": "surprised_pikachu"
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
                },
                {
                  "name": "Cringe Face",
                  "value": "cringe_face"
                },
                {
                  "name": "Mind Blown",
                  "value": "mind_blown"
                }
              ]
            }
          ]
        },
        {
          "name": "anime",
          "description": "Anime stickers",
          "type": 1,
          "options": [
            {
              "name": "name",
              "description": "The name of the sticker.",
              "type": 3,
              "required": true,
              "choices": [
                {
                  "name": "Smug Anya",
                  "value": "smug_anya"
                },
              ]
            }
          ]
        },
        {
          "name": "overwatch",
          "description": "Overwatch stickers",
          "type": 1,
          "options": [
            {
              "name": "name",
              "description": "The name of the sticker.",
              "type": 3,
              "required": true,
              "choices": [
                {
                  "name": "Logo",
                  "value": "overwatch_logo"
                },
                {
                  "name": "D.Va: Cute",
                  "value": "overwatch_dva_cute"
                },
                {
                  "name": "Hanzo: Cute",
                  "value": "overwatch_hanzo_cute"
                },
                {
                  "name": "Mercy: Cute",
                  "value": "overwatch_mercy_cute"
                },
                {
                  "name": "Junker Queen: Cute",
                  "value": "overwatch_junker_queen_cute"
                },
                {
                  "name": "Kiriko: Cute",
                  "value": "overwatch_kiriko_cute"
                }
              ]
            }
          ]
        },
        {
          "name": "valve",
          "description": "Valve game stickers",
          "type": 1,
          "options": [
            {
              "name": "name",
              "description": "The name of the sticker.",
              "type": 3,
              "required": true,
              "choices": [
                {
                  "name": "Gordon Glasses",
                  "value": "gordon_glasses"
                }
              ]
            }
          ]
        },
        {
          "name": "sunny",
          "description": "It's Always Sunny stickers",
          "type": 1,
          "options": [
            {
              "name": "name",
              "description": "The name of the sticker.",
              "type": 3,
              "required": true,
              "choices": [
                {
                  "name": "Restaurant Look",
                  "value": "sunny_restaurant_look"
                },
                {
                  "name": "Egg",
                  "value": "sunny_egg"
                }
              ]
            }
          ]
        }
      ]
    },
  ];
  for (let i = 0; i < command_data.length; i++) {
    let command = command_data[i]
    console.log('Registering command: ' + command.name)
    let x = await axios.post(url, JSON.stringify(command), {
      headers: headers,
    })
    console.log(x);
  }
}

await main();
