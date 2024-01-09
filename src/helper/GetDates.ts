import { months, weeks } from "../constants/Constant";
import { DateList } from "../types/DateTypes";

export default function GetDates(year: number, monthIndex: number) {
  const dates: DateList = {
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
  };

  //get the start date object
  const start_date = new Date(year, monthIndex - 1, 1);

  //if starting day does not start from sunday
  //we calculate the days needed by subtracting the index of sunday from
  // the index of the current day
  const start_date_offset =
    weeks.indexOf(weeks[start_date.getDay()]) - weeks.indexOf("SUN");

  //to get the last date we get all the dates of this month which i
  //get by placing 0 as the 3rd parameter
  //then getting the actual date by passing the date value
  const last_date = new Date(
    year,
    monthIndex - 1,
    new Date(year, monthIndex - 1, 0).getDate()
  );

  //if the date ends in monday or tuesday
  //get the rest of days of that weeks by subtracting the index of saturday
  //with the index of end date
  const last_date_offset =
    weeks.indexOf("SAT") - weeks.indexOf(weeks[last_date.getDay()]);

  //since i will be rendering total 42 grid box
  //get the rest of the days needed by getting the current total days
  //adding the offsets and subtracting it by 42
  let end_day_offset =
    42 -
    (start_date_offset +
      new Date(year, monthIndex - 1, 0).getDate() +
      last_date_offset);

  // to get the final ending offset we get the remaining offset from the
  // weeks that we got previously and add it to the final offset
  end_day_offset += last_date_offset + 1;

  //get the starting day and add or remove the offeset from it
  const starting_day = new Date(year, monthIndex - 1, 1);
  starting_day.setDate(starting_day.getDate() - start_date_offset);

  //get the ending day and add or remove the offset from it
  const ending_day = new Date(
    year,
    monthIndex - 1,
    new Date(year, monthIndex - 1, 0).getDate()
  );
  ending_day.setDate(ending_day.getDate() + end_day_offset);

  const date = starting_day;

  let date_idx = 1;

  //finally get the all the dates
  /*
    current structure = 

    {
        1 : [],
        2 : [],
        3 : [],
        4 : [],
        5 : [],
        6 : [],
    }
   since i need 6 rows and 7 columns
  */
  while (date.toDateString() !== ending_day.toDateString()) {
    const week_days = dates[date_idx]; //get the array to store the dates
    let week_counter = 0;

    //iterate 7 times since it is a week and add the days
    while (week_counter < 7) {
      week_days.push({
        date: date.getDate(),
        month: months[date.getMonth()],
        year: date.getFullYear(),
      });
      date.setDate(date.getDate() + 1);
      week_counter++;
    }

    date_idx++;
  }

  return dates;
}
