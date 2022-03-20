const processDataColumns = require('./process-data-columns')();

test('process data array to array of objects', () => {
    var res = processDataColumns.dataArrayToObject({
        column_names: ["Date", "Value"],
        data: [
            ["2022-03-01", 24.56], ["2022-02-28", 24.94], ["2022-02-01", 26.16]
        ]
    });

    expect(res.data[0].Date).toEqual("2022-03-01");
    expect(res.data[1].Date).toEqual("2022-02-28");
    expect(res.data[2].Date).toEqual("2022-02-01");
    expect(res.data[0].Value).toEqual(24.56);
    expect(res.data[1].Value).toEqual(24.94);
    expect(res.data[2].Value).toEqual(26.16);
    expect(res.data.length).toEqual(3);
});
