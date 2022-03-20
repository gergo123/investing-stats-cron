const axios = require('axios').default;
const fs = require('fs');
const path = require('path');
const _ = require('underscore');

'use strict'

const NasdaqMonthlyPeService = () => {
    const loadData = async (apiKey) => await axios.get(
        `https://data.nasdaq.com/api/v3/datasets/MULTPL/SP500_PE_RATIO_MONTH.json?api_key=${apiKey}`,
        {

        }
    );

    const mapResponse = (responseData) => {
        let {
            newest_available_date: lastDataUpdated,
            data,
        } = responseData.dataset;

        // TODO store lastDataUpdated value somewhere 
        console.log(lastDataUpdated)

        return {
            ...responseData.dataset,
            data: data.slice(0, 5)
        }
    };

    const processData = (statistics) => {
        // create html
        const htmlIndex = fs.readFileSync(path.resolve(__dirname, 'output/index.html'), 'utf8')
        const htmlRow = fs.readFileSync(path.resolve(__dirname, 'output/row.html'), 'utf8')
        const cssStyle = fs.readFileSync(path.resolve(__dirname, 'output/styles.css'), 'utf8')

        const bodyPart = `
    <table>
    <thead>
        <th>Date</th>
        <th>Value</th>
    </thead>
    <tbody>
${statistics.data.map(row => {
            var keys = _.keys(row);
            let rowResults = _.clone(htmlRow);
            keys.forEach(key => {
                const value = row[key];
                var regexp = new RegExp(`{${key}}`, 'g');
                rowResults = rowResults.replace(regexp, value);
            });
            return rowResults;
        }).join('\r\n')}
    </tbody>
    </table>
        `
        var output = htmlIndex.replace('{body}', bodyPart);
        output = output.replace('{css}', `<style>\r\n${cssStyle}\r\n</style>\r\n`);
        console.log(output);

        return output;
    };

    return {
        loadData,
        mapResponse,
        processData,
    };
};

module.exports = NasdaqMonthlyPeService;
