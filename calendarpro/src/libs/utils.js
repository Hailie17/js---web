/**
 * 日月前补0
 */
function _addZero(value) {
  return value < 10 ? '0' + value : value
}

function getIconData(type) {
  const date = new Date()
  switch (type) {
    case 'day':
      return _addZero(date.getDate().toString());
    case 'month':
      return _addZero((date.getMonth() + 1).toString());
    case 'year':
      return date.getFullYear().toString().substring(2);
  }
}

function formatChsDate(date, type) {
  
  const _arr = date.split('-')
  switch(type) {
    case 'day':
      return `${_arr[0]}年${_arr[1]}月${_arr[2]}日`;
    case 'month':
      return `${_arr[0]}年${_arr[1]}月`;
    case 'year':
      return `${_arr[0]}年`;
    default:
      return `${_arr[0]}年${_arr[1]}月${_arr[2]}日`;
  }
}

function mapForChsDate(date, key) {  
  date.forEach((item) => {
    item[key] = formatChsDate(item[key])
  })
  return date
}

function getNowDate(field){
  const date = new Date()

  let year = date.getFullYear(),
      month = date.getMonth() + 1,
      day = date.getDate()
  switch(field) {
    case 'day':
      return `${year}-${month}-${day}`
    case 'month':
      return `${year}-${month}`
    case 'year':
      return `${year}`
    default: 
      return `${year}-${month}-${day}`
  }
}

/**
 * 20200102转为2020-1-2
 */
function formatUserDate(value) {
  const len = value.length
  if(len < 4) {
    return
  }

  if(len === 4) {
    return value
  }

  if(len > 4 && len < 6) {
    return value.substr(0,4)
  }

  let _arr = [],
      pattern
  if(len >= 6 && len < 8) {
    pattern = /(\d{4})(\d{2})/ // 正则：分为前面四个数后面两个数两组
    value = value.substr(0,6).replace(pattern, '$1-$2')  //截取前六位，替换正则，前四位走1，后两位走2

    _arr = Array.from(value).filter((item, index)=> {
      if(index===5 && item === '0'){
        return false
      }
      return true
    })
  }
}

export {
  getIconData, mapForChsDate, formatChsDate, getNowDate
}