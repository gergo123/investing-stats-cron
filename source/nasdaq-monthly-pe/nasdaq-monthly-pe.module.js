'use strict'

const NasdaqMonthlyPeModule = async (event, context) => {
    const time = new Date();
    console.log(`Your cron function "${context.functionName}" ran at ${time}`);
};

module.exports = NasdaqMonthlyPeModule;