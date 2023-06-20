const roll = require('../commands/roll.js');
const chat = require('../commands/chat.js');

module.exports = async function(body, callback) {
  const data = body.data;

  // Validate the request
  if (!data) throw 'Invalid request.';
  if (!data.name) throw 'Invalid request: Missing name.';

  switch(data.name) {
    case 'foo':
      return interactionResponse('bar');
    case 'roll':
      return interactionResponse(roll(body));
    case 'chat':
      return interactionResponse('Temporarily disabled.');
      callback(null, interactionResponse('Message sent.', 5));
      let chatResponse = await chat(body);
      if (!chatResponse) return interactionResponse('Message sent.', 5);
      throw chatResponse; 
    default:
      throw 'Invalid request: Unknown command.';
  }
}

function interactionResponse(content, type = 4) {
  return JSON.stringify(
    {
      "type": type,
      "data": { "content": content }
    });
}
