import axios from "axios";
import qs from 'qs'

import {JUHE_APPKEY} from '@/configs/keys'

function axiosPost(configs) {
  axios({
    url: configs.url,
    method: 'post',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: qs.stringify({
      ...configs.data,
      key: JUHE_APPKEY
    })
  })
  .then(res => {
    configs.success(res.data)
  })
  .catch(res=> {
    configs.error(res)
  })
}

function axiosGet(configs) {
  axios.get(configs.url + '&key=' + JUHE_APPKEY)
  .then(res => {
    configs.success(res.data)
  })
  .catch(res=> {
    configs.error(res)
  })
}

export {
  axiosGet, axiosPost
}