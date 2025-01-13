import { formatChsDate, mapForChsDate } from "@/libs/utils";
import { getDaydata, getMonthdata, getYeardata } from "./request";

/*** 请求和收发数据  */
export default async (store, field, date) => {
  let data = null

  switch (field) {
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
  
  if(data.error_code !== 0) {
    store.commit('setErrorCode', data.error_code);
    return
  }

  let res = null
  switch(field) {
    case 'day':
      res = data.result.data
      res.date = formatChsDate(res.date, 'day')
      res['year-month'] = formatChsDate(res['year-month'], 'month')
      break;
    case 'month':
      res = data.result.data.holiday_array      
      res = mapForChsDate(res, 'festival')
      break;
    case 'year':
      res = data.result.data.holiday_list
      res = mapForChsDate(res, 'startday')
  }
  store.commit('setDayData', {
    field, 
    data: res
  })
}