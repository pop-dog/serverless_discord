const roll = require('../commands/roll.js');

module.exports = function(body) {
  const data = body.data;

  // Validate the request
  if (!data) throw 'Invalid request.';
  if (!data.name) throw 'Invalid request: Missing name.';

  switch(data.name) {
    case 'foo':
      return interactionResponse('bar');
    case 'roll':
      return interactionResponse(roll(body));
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
