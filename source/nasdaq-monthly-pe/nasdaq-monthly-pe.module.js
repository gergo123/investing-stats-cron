const axios = require('axios');
const service = require('./nasdaq-monthly-pe.service')();

'use strict'

const NasdaqMonthlyPeModule = async (event, context) => {
    const time = new Date();
    console.log(`Your cron function "${context.functionName}" ran at ${time}`);

    // TODO replace api key here from config file
    var data = await service.loadData('grbkFaNNuSzZ2zEbczjW');
    var results = service.processData(data.data.dataset);
};

module.exports = NasdaqMonthlyPeModule;
