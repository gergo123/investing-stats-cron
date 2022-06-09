const axios = require('axios').default;
const fs = require('fs');
const path = require('path');
const _ = require('underscore');
const parse = require('node-html-parser').default;

'use strict'

const MnbInflationReportService = () => {
    const state = {
        itemText: ''
    };

    const ReadLastReport = async () => {
        var resp = await axios.get('https://www.mnb.hu/kiadvanyok/jelentesek/inflacios-jelentes');
        const root = parse(resp.data);

        var arrayOfReports = root.querySelectorAll('.singlepart.flex_2.halfcolumn .block .cb-file');
        let firstItemText = arrayOfReports[0].text;
        firstItemText = firstItemText.replace(/[\u0000-\u001F\u007F-\u009F]/g, '');
        state.itemText = firstItemText;
    };

    const CompareWithPreviousData = async () => {
        // should compare given currentData with value stored in permanent storage
        console.log(state.itemText);
    };

    return {
        ReadLastReport,
        CompareWithPreviousData
    };
};

module.exports = MnbInflationReportService;
