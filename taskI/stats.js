const getAverage = (series, apd = false) => {
  let options = {
    weekday: 'long'
  };
  let sum = 0;
  let averageVisits = '';
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
    let mondays = {
      days: 0,
      dates: [],
    };
    let tuesdays = {
      days: 0,
      dates: [],
    };
    let wednesdays = {
      days: 0,
      dates: [],
    };
    let thursdays = {
      days: 0,
      dates: [],
    };
    let fridays = {
      days: 0,
      dates: [],
    };
    let saturdays = {
      days: 0,
      dates: [],
    };
    let sundays = {
      days: 0,
      dates: [],
    };

    for (let i = 0; i < series.length; i++) {

      switch (series[i].date.toLocaleDateString("en-US", options)) {
        case 'Monday':
          averagePerDay.Monday.averageVisits += series[i].visits;
          if (mondays.dates.includes(series[i].date.toDateString("en-US")) == false) {
            mondays.dates.push(series[i].date.toDateString("en-US"));
            mondays.days++;
          };
          break;
        case 'Tuesday':
          averagePerDay.Tuesday.averageVisits += series[i].visits;
          if (tuesdays.dates.includes(series[i].date.toDateString("en-US")) == false) {
            tuesdays.dates.push(series[i].date.toDateString("en-US"));
            tuesdays.days++;
          };
          break;
        case 'Wednesday':
          averagePerDay.Wednesday.averageVisits += series[i].visits;
          if (wednesdays.dates.includes(series[i].date.toDateString("en-US")) == false) {
            wednesdays.dates.push(series[i].date.toDateString("en-US"));
            wednesdays.days++;
          };
          break;
        case 'Thursday':
          averagePerDay.Thursday.averageVisits += series[i].visits;
          if (thursdays.dates.includes(series[i].date.toDateString("en-US")) == false) {
            thursdays.dates.push(series[i].date.toDateString("en-US"));
            thursdays.days++;
          };
          break;
        case 'Friday':
          averagePerDay.Friday.averageVisits += series[i].visits;
          if (fridays.dates.includes(series[i].date.toDateString("en-US")) == false) {
            fridays.dates.push(series[i].date.toDateString("en-US"));
            fridays.days++;
          };
          break;
        case 'Saturday':
          averagePerDay.Saturday.averageVisits += series[i].visits;
          if (saturdays.dates.includes(series[i].date.toDateString("en-US")) == false) {
            saturdays.dates.push(series[i].date.toDateString("en-US"));
            saturdays.days++;
          };
          break;
        case 'Sunday':
          averagePerDay.Sunday.averageVisits += series[i].visits;
          if (sundays.dates.includes(series[i].date.toDateString("en-US")) == false) {
            sundays.dates.push(series[i].date.toDateString("en-US"));
            sundays.days++;
          };
          break;
      }
    };

    Math.round(averagePerDay.Monday.averageVisits = averagePerDay.Monday.averageVisits / mondays.days);
    Math.round(averagePerDay.Tuesday.averageVisits = averagePerDay.Tuesday.averageVisits / tuesdays.days);
    Math.round(averagePerDay.Wednesday.averageVisits = averagePerDay.Wednesday.averageVisits / wednesdays.days);
    Math.round(averagePerDay.Thursday.averageVisits = averagePerDay.Thursday.averageVisits / thursdays.days);
    Math.round(averagePerDay.Friday.averageVisits = averagePerDay.Friday.averageVisits / fridays.days);
    Math.round(averagePerDay.Saturday.averageVisits = averagePerDay.Saturday.averageVisits / saturdays.days);
    Math.round(averagePerDay.Sunday.averageVisits = averagePerDay.Sunday.averageVisits / sundays.days);
    
    return averagePerDay

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
    return averageVisits = sum / serie.days;
  }
};

module.exports = getAverage;
