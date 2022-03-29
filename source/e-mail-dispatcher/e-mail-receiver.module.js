const mailService = require('./e-mail-receiver.service')();

'use strict'

const EmailDispatcher = async (event, context) => {
    const time = new Date();
    console.log(`Your cron function "${context.functionName}" ran at ${time}`);

    //mailService.sendMail();
};

module.exports = EmailDispatcher;
