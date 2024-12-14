import { getDaydata, getMonthdata, getYeardata } from "./request";

export default async (feild, date) => {
  let data = null

  switch (feild) {
    case 'day':
      data = await getDaydata(date);
      break;
    case 'month':
      data = await getMonthdata(date);
      break;
    case 'year':
      data = await getYeardata(date);
      break
  }
  return data
}