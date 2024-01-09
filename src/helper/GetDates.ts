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
  const start_date = new Date(year, monthIndex - 1, 1);
  const start_date_offset =
    weeks.indexOf(weeks[start_date.getDay()]) - weeks.indexOf("SUN");
  const last_date = new Date(
    year,
    monthIndex - 1,
    new Date(year, monthIndex - 1, 0).getDate()
  );
  const last_date_offset =
    weeks.indexOf("SAT") - weeks.indexOf(weeks[last_date.getDay()]);

  let end_day_offset =
    42 -
    (start_date_offset +
      new Date(year, monthIndex - 1, 0).getDate() +
      last_date_offset);

  end_day_offset += last_date_offset + 1;
  const starting_day = new Date(year, monthIndex - 1, 1);
  starting_day.setDate(starting_day.getDate() - start_date_offset);

  const ending_day = new Date(
    year,
    monthIndex - 1,
    new Date(year, monthIndex - 1, 0).getDate()
  );
  ending_day.setDate(ending_day.getDate() + end_day_offset);

  const date = starting_day;

  let date_idx = 1;

  while (date.toDateString() !== ending_day.toDateString()) {
    const week_days = dates[date_idx];
    let week_counter = 0;
    while (week_counter < 7) {
      week_days.push({
        date: date.getDate(),
        month: months[date.getMonth()],
      });
      date.setDate(date.getDate() + 1);
      week_counter++;
    }

    date_idx++;
  }

  return dates;
}
