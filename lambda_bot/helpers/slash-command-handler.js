const roll = require('../commands/roll.js');

module.exports = function(body) {
  try {
    const data = body.data;
    // Handle /foo Command
    if (data.name == 'foo') {
      return happyResponse('bar');
    }
  
    if (data.name == 'roll') {
      return happyResponse(roll(body));
    }

    console.log('[ERROR] User submitted unhandled slash command: ' + data.name);
    return sadResponse('Command not found.');
  }
  catch (ex) {
    console.log(ex)
    return sadResponse('Invalid request.');
  }
}

function happyResponse(content) {
  return {
    handled: true,
    message: JSON.stringify(
      {
        "type": 4,
        "data": { "content": content }
      }
    )
  };
}

function sadResponse(error) {
  return {
    handled: false,
    message: error
  }
}
