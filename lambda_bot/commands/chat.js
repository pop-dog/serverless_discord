const awsHelper = require('../helpers/awsHelper.js');

module.exports = async function (body) {
    const data = body.data;

    // Validate the request
    if (!data || !data.options || data.options.length != 1 || data.options[0].name != 'message') return 'Invalid options for /chat command.';
    
    try {
        let sqsResponse =  await awsHelper.sqs.sendMessage(process.env.SQS_QUEUE_URL, { message: data.options[0].value });
        console.log(sqsResponse);
    }
    catch (ex) {
        console.log(ex);
        return 'Error sending chat message.';
    }
    return '';
}