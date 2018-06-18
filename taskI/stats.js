const getAverage = (series, apd = false) => {
  let options = {
    weekday: 'long'
  };
  let sum = 0;
  let averageSerie = {
    averageVisits: 0,
  }
  let averagePerDay = {
    Monday: {
      averageVisits: 0,
    },
    Tuesday: {
      averageVisits: 0,
    },
    Wednesday: {
      averageVisits: 0,
    },
    Thursday: {
      averageVisits: 0,
    },
    Friday: {
      averageVisits: 0,
    },
    Saturday: {
      averageVisits: 0,
    },
    Sunday: {
      averageVisits: 0,
    },
  };

  if (apd) {
    let countDays = {
      mondays: {
        days: 0,
        dates: [],
      },
      tuesdays: {
        days: 0,
        dates: [],
      },
      wednesdays: {
        days: 0,
        dates: [],
      },
      thursdays: {
        days: 0,
        dates: [],
      },
      fridays: {
        days: 0,
        dates: [],
      },
      saturdays: {
        days: 0,
        dates: [],
      },
      sundays: {
        days: 0,
        dates: [],
      }
    }

    for (let i = 0; i < series.length; i++) {

      switch (series[i].date.toLocaleDateString("en-US", options)) {
        case 'Monday':
          averagePerDay.Monday.averageVisits += series[i].visits;
          if (countDays.mondays.dates.includes(series[i].date.toDateString("en-US")) == false) {
            countDays.mondays.dates.push(series[i].date.toDateString("en-US"));
            countDays.mondays.days++;
          };
          break;
        case 'Tuesday':
          averagePerDay.Tuesday.averageVisits += series[i].visits;
          if (countDays.tuesdays.dates.includes(series[i].date.toDateString("en-US")) == false) {
            countDays.tuesdays.dates.push(series[i].date.toDateString("en-US"));
            countDays.tuesdays.days++;
          };
          break;
        case 'Wednesday':
          averagePerDay.Wednesday.averageVisits += series[i].visits;
          if (countDays.wednesdays.dates.includes(series[i].date.toDateString("en-US")) == false) {
            countDays.wednesdays.dates.push(series[i].date.toDateString("en-US"));
            countDays.wednesdays.days++;
          };
          break;
        case 'Thursday':
          averagePerDay.Thursday.averageVisits += series[i].visits;
          if (countDays.thursdays.dates.includes(series[i].date.toDateString("en-US")) == false) {
            countDays.thursdays.dates.push(series[i].date.toDateString("en-US"));
            countDays.thursdays.days++;
          };
          break;
        case 'Friday':
          averagePerDay.Friday.averageVisits += series[i].visits;
          if (countDays.fridays.dates.includes(series[i].date.toDateString("en-US")) == false) {
            countDays.fridays.dates.push(series[i].date.toDateString("en-US"));
            countDays.fridays.days++;
          };
          break;
        case 'Saturday':
          averagePerDay.Saturday.averageVisits += series[i].visits;
          if (countDays.saturdays.dates.includes(series[i].date.toDateString("en-US")) == false) {
            countDays.saturdays.dates.push(series[i].date.toDateString("en-US"));
            countDays.saturdays.days++;
          };
          break;
        case 'Sunday':
          averagePerDay.Sunday.averageVisits += series[i].visits;
          if (countDays.sundays.dates.includes(series[i].date.toDateString("en-US")) == false) {
            countDays.sundays.dates.push(series[i].date.toDateString("en-US"));
            countDays.sundays.days++;
          };
          break;
      }
    };

    Math.round(averagePerDay.Monday.averageVisits = averagePerDay.Monday.averageVisits / countDays.mondays.days);
    Math.round(averagePerDay.Tuesday.averageVisits = averagePerDay.Tuesday.averageVisits / countDays.tuesdays.days);
    Math.round(averagePerDay.Wednesday.averageVisits = averagePerDay.Wednesday.averageVisits / countDays.wednesdays.days);
    Math.round(averagePerDay.Thursday.averageVisits = averagePerDay.Thursday.averageVisits / countDays.thursdays.days);
    Math.round(averagePerDay.Friday.averageVisits = averagePerDay.Friday.averageVisits / countDays.fridays.days);
    Math.round(averagePerDay.Saturday.averageVisits = averagePerDay.Saturday.averageVisits / countDays.saturdays.days);
    Math.round(averagePerDay.Sunday.averageVisits = averagePerDay.Sunday.averageVisits / countDays.sundays.days);

    return averagePerDay;

  } else {
    let serie = {
      days: 0,
      dates: [],
    };
    for (let i = 0; i < series.length; i++) {
      sum += series[i].visits;
      if (serie.dates.includes(series[i].date.toDateString("en-US")) == false) {
        serie.dates.push(series[i].date.toDateString("en-US"));
        serie.days++;
      }
    }
    averageSerie.averageVisits = sum / serie.days;
    return averageSerie;
  }
};

module.exports = getAverage;
