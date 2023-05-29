const awsHelper = require('../helpers/awsHelper');

module.exports = async function (body) {
    const data = body.data;

    // Validate the request
    if (!data || !data.options || data.options.length < 1 || data.options[0].name != 'message' || !data.options[0].value) return 'Invalid options for /chat command.';

    try {
      // Send SQS message
      const message = data.options[0].value;
      const username = body.member.user.username;
      const token = body.token;
      const applicationId = body.application_id;

      let sqsResponse = await awsHelper.sqs.sendMessageJson(process.env.CHATBOT_QUEUE_URL, { "message": message, "username": username, "token": token, "application_id": applicationId }, `Submitting message "${message}" to chatbot queue.`);
      console.log(sqsResponse);
      return '';
    } catch(ex) {
      console.log(ex);
      return 'Failed to send message to SQS queue.';
    }

}