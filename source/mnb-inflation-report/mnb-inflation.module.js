const service = require('./mnb-inflation.service')();

'use strict'

const MnbInflationReportModule = async (event, context) => {
    const time = new Date();
    console.log(`Your cron function "${context.functionName}" ran at ${time}`);


    await service.ReadLastReport();
    await service.CompareWithPreviousData();
};

module.exports = MnbInflationReportModule;
