const AWS = require('aws-sdk');

module.exports = {
    // SQS helper functions
    sqs: {
        // Send a message to the SQS queue
        sendMessage: async function (queueUrl, message) {
            const sqs = new AWS.SQS();
            const params = {
                MessageBody: JSON.stringify(message),
                QueueUrl: queueUrl
            };
            return await sqs.sendMessage(params).promise();
        }
    }
}