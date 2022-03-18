const axios = require('axios').default;

'use strict'

const NasdaqMonthlyPeModule = () => {
    const loadData = async (apiKey) => await axios.get(
        `https://data.nasdaq.com/api/v3/datasets/MULTPL/SP500_PE_RATIO_MONTH.json?api_key=${apiKey}`,
        {

        }
    );

    const processData = (responseData) => {
        let { newest_available_date: lastDataUpdated } = responseData;
        console.log(lastDataUpdated)
    };

    return {
        loadData,
        processData
    };
};

module.exports = NasdaqMonthlyPeModule;
