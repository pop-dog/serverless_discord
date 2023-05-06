# Serverless Discord Bot
## Intro
This is a simple Discord bot designed using AWS Lambda. The structure is based on a [tutorial](https://betterprogramming.pub/build-a-discord-bot-with-aws-lambda-api-gateway-cc1cff750292) I followed for the initial setup, but I have expanded on it for my own purposes.

## Overview
There are two parts to this implementation:
1. The AWS Lambda function that performs the requested actions
2. A script to register the list of actions to Discord

### Lambda Bot
This is the code for the Lambda function that performs the logic of the bot. Currently, it handles chat input commands. See the full Discord [documentation](https://discord.com/developers/docs/interactions/application-commands) for more info.

### Register Commands
This is the code to register the command list to a Discord server.

## TODO
- Implement a CI/CD pipeline to automate updaing the AWS Lambda function and register the commands whenever code is checked-in to Github
- Add more commands!