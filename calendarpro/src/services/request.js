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