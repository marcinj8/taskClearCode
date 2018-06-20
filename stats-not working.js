const getAverage =  (series1, apw = false) => {
    if (apw == false) {
        return {
            'averageVisits': Math.round(series1.reduce((ret, serieItem) => {
                return ret + serieItem.visits;
            }, 0) / series1.length),
        }
    }

    const DAY_OF_WEEK = {
        0: 'Sunday',
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday',
    };

    let result = {};
    const count = {};

    for (let key of Object.keys(DAY_OF_WEEK)) {
        result[DAY_OF_WEEK[key]] = count[DAY_OF_WEEK[key]] = 0;
    }

    for (let serie of series1) {
        const weekDay = DAY_OF_WEEK[serie.date.getDay()];
        result[weekDay] += serie.visits;
        count[weekDay]++;
    }

    for (let key of Object.keys(result)) {
        result[key] = {
            averageVisits: Math.round(result[key] / count[key]),
        }
    }

    return result;
};

module.exports = getAverage;
