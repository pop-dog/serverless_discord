const AWS = require('aws-sdk');

module.exports = {
    // SQS helper functions
    sqs: {
        // Send a message to the SQS queue
        sendMessage: async function (queueUrl, message) {
            console.log(`Sending message to SQS queue ${queueUrl}: ${JSON.stringify(message)}`);
            const sqs = new AWS.SQS();
            const params = {
                MessageBody: JSON.stringify(message),
                QueueUrl: queueUrl
            };
            sqs.sendMessage(params).promise();
        }
    }
}