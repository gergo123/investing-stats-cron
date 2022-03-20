const NasdaqMonthlyPeService = require('./nasdaq-monthly-pe.service')();

test('process data array to array of objects', () => {
    var res = NasdaqMonthlyPeService.processData({
        column_names: ["Date", "Value"],
        data: [
            { Date: "2022-03-01", Value: 24.56 },
            { Date: "2022-03-02", Value: 21.12 },
            { Date: "2022-03-03", Value: 25.51 },
        ]
    });

    console.log(res)
    expect(res).toBeTruthy();
});

test('processes http request response into a more convenient format', () => {
    var res = NasdaqMonthlyPeService.mapResponse({
        dataset: {
            column_names: ["Date", "Value"],
            data: [
                ["2022-03-01", 24.56]
            ]
        }
    });

    expect(res).toBeTruthy();
});
