
const NasdaqUtils = () => {
    const dataArrayToObject = (dataset) => {
        const {
            column_names: columnNames,
            data
        } = dataset;

        return {
            ...dataset,
            data: data.map(row => {
                let rowObject = {};
                for (let i = 0; i < columnNames.length; i++) {
                    const column = columnNames[i];
                    rowObject[column] = row[i];
                }
                return rowObject;
            })
        }
    }
    return {
        dataArrayToObject
    }
};

module.exports = NasdaqUtils;