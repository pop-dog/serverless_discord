const awsHelper = require('../helpers/awsHelper');

module.exports = async function (body) {
    const data = body.data;

    // Validate the request
    if (!data || !data.options || data.options.length != 1 || data.options[0].name != 'message') return 'Invalid options for /chat command.';

    try {
      // Send SQS message
      let sqsResponse = await awsHelper.sqs.sendMessage(process.env.CHATBOT_QUEUE_URL, {
          message: data.options[0].value,
      });
      console.log(sqsResponse);
      return '';
    } catch(ex) {
      console.log(ex);
      return 'Failed to send message to SQS queue.';
    }

}