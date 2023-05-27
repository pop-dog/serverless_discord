const AWS = require('aws-sdk');

module.exports = {
    // SQS helper functions
    sqs: {
        async sendMessageJson(queueUrl, jsonMessage, messageBody) {
            if (!messageBody) throw 'Missing message body';
            let messageAttributes = {};
            for (let key in jsonMessage) {
                // Check if the field is a number
                if (!isNaN(jsonMessage[key])) {
                    // If it is a number, set the DataType to Number
                    messageAttributes[key] = {
                        DataType: 'Number',
                        StringValue: jsonMessage[key].toString()
                    }
                }
                else if (typeof jsonMessage[key] === 'string' || jsonMessage[key] instanceof String) {
                    // If it is a string, set the DataType to String
                    messageAttributes[key] = {
                        DataType: 'String',
                        StringValue: jsonMessage[key]
                    }
                } else {
                    // Not a string and not a number, convert to string
                    messageAttributes[key] = {
                        DataType: 'String',
                        StringValue: JSON.stringify(jsonMessage[key])
                    }
                }
            }
            return this.sendMessage(queueUrl, messageAttributes, messageBody);
        },
        async sendMessage(queueUrl, messageAttributes, messageBody = '') {
            return await new Promise((resolve, reject) => {
                let sqs = new AWS.SQS();
                sqs.sendMessage({ QueueUrl: queueUrl, MessageAttributes: messageAttributes, MessageBody: messageBody }, (err, result) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(result);
                    }
                });
            });
        },
        async deleteMessage(queueUrl, receiptHandle) {
            return await new Promise((resolve, reject) => {
                let sqs = new AWS.SQS();
                sqs.deleteMessage({ QueueUrl: queueUrl, ReceiptHandle: receiptHandle }, (err, result) => {
                    if (err) {
                        reject(err);
                    }
                    else {
                        resolve(result);
                    }
                });
            });
        }
    },
}