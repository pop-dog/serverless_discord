const awsHelper = require('../helpers/awsHelper.js');

module.exports = function (body) {
    const data = body.data;

    // Validate the request
    if (!data || !data.options || data.options.length != 1 || data.options[0].name != 'message') return 'Invalid options for /chat command.';
    
    try {
        awsHelper.sqs.sendMessage(process.env.CHATBOT_QUEUE_URL, { message: data.options[0].value });
    }
    catch (ex) {
        console.log(ex);
        return 'Error sending chat message.';
    }
    return '';
}