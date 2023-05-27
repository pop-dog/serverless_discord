const axios = require('axios');

module.exports = async function (body) {
    const data = body.data;

    // Validate the request
    if (!data || !data.options || data.options.length != 1 || data.options[0].name != 'message') return 'Invalid options for /chat command.';

    console.log(`Sending chat message: "${data.options[0].value}" to ${process.env.CHAT_URL}`);
    axios.post(process.env.CHAT_URL, {
        message: data.options[0].value,
        chat_auth_id: process.env.CHAT_AUTH_ID,
    })
    .then(function (response) {
        console.log(response);
        return '';
      })
      .catch(function (error) {
        console.log(error);
        return 'Error sending message to chat bot.'
      });
}