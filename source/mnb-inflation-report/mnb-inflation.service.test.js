const MnbInflationReportService = require('./mnb-inflation.service')();

test('mnb inflation tests', async () => {
    await MnbInflationReportService.ReadLastReport();
    await MnbInflationReportService.CompareWithPreviousData();
});
