const service = require('./nasdaq-monthly-pe.service')();
const nasdaqUtil = require('./../nasdaq-utils/process-data-columns')();

'use strict'

const NasdaqMonthlyPeModule = async (event, context) => {
    const time = new Date();
    console.log(`Your cron function "${context.functionName}" ran at ${time}`);

    var apikey = process.env.NASDAQ_API_KEY;
    if (!apikey) {
        throw new Error('No nasdaq api key given! Please provide `NASDAQ_API_KEY` environment variable!');
    }

    var data = await service.loadData(apikey);
    var results = service.mapResponse(data.data);
    results = nasdaqUtil.dataArrayToObject(results);
    var htmlResults = service.processData(results);

};

module.exports = NasdaqMonthlyPeModule;
