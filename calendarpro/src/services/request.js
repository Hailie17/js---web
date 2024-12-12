import { axiosPost } from "@/libs/http";
import { reject, resolve } from "core-js/fn/promise";

function getDaydata(date){
  return new Promise((resolve, reject) => {
    axiosPost({
      url: '/api/calendar/day',
      data: {date},
      success(data) {
        resolve(data)
      },
      error(err) {
        reject(err)
      }
    })
  })
}

function getMonthdata(yearMonth){
  return new Promise((resolve, reject) => {
    axiosPost({
      url: '/api/calendar/month',
      data: {'year-month' : yearMonth},
      success(data) {
        resolve(data)
      },
      error(err) {
        reject(err)
      }
    })
  })
}

function getYeardata(year){
  return new Promise((resolve, reject) => {
    axiosPost({
      url: '/api/calendar/year',
      data: {year},
      success(data) {
        resolve(data)
      },
      error(err) {
        reject(err)
      }
    })
  })
}

export {
  getDaydata,
  getMonthdata,
  getYeardata
}
