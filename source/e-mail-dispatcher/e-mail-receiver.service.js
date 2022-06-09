'use strict'

const EmailService = () => {
    const sendMail = (html, title) => {
        const {
            EMAIL_TO_ADDRESSES,
            SENDER_ADDRESS
        } = process.env;

        if (!EMAIL_TO_ADDRESSES) {
            throw new Error('No destination e-mail address given! Please provide `EMAIL_TO_ADDRESSES` environment variable!');
        }

        // Load the AWS SDK for Node.js
        var AWS = require('aws-sdk');
        // Set the region 
        AWS.config.update({ region: 'REGION' });

        // Create sendEmail params 
        var params = {
            Destination: {
                CcAddresses: [],
                ToAddresses: [EMAIL_TO_ADDRESSES]
            },
            Message: {
                Body: {
                    Html: {
                        Charset: "UTF-8",
                        Data: html
                    },
                },
                Subject: {
                    Charset: 'UTF-8',
                    Data: title
                }
            },
            Source: SENDER_ADDRESS,
            ReplyToAddresses: [],
        };

        // Create the promise and SES service object
        var sendPromise = new AWS.SES({ apiVersion: '2010-12-01' }).sendEmail(params).promise();

        // Handle promise's fulfilled/rejected states
        return sendPromise.then(
            function (data) {
                console.log(data.MessageId);
            }).catch(
                function (err) {
                    console.error(err, err.stack);
                });
    };

    return {
        sendMail
    };
};

module.exports = EmailService;
