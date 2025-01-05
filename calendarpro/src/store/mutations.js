export default {
  setHeadTitle(state, routeName) {
    switch(routeName) {
      case 'day': 
        state.headTitle = '当天信息';
        break;
      case 'month':
        state.headTitle = '近期假期';
        break;
      case 'year':
        state.headTitle = '当年假期';
        break;
      default:
        state.headTitle = '当天信息';
        break;
    }
  },
  setMaxLength(state, routeName) {
    switch(routeName) {
      case 'day': 
        state.maxlength = 8;
        break;
      case 'month':
        state.maxlength = 6;
        break;
      case 'year':
        state.maxlength = 6;
        break;
      default:
        state.maxlength = 8;
        break;
    }
  },
  setPlaceholder(state, routeName) {
    const date = new Date()
    let year = date.getFullYear(),
          month = date.getMonth() + 1,
          day = date.getDate()
    month = month < 10 ? '0' + month : month
    day = day < 10 ? '0' + day : day
    
    switch(routeName) {
      case 'day': 
        state.placeholder = `${year}${month}${day}（${year}年${month}月${day}日）`;
        break;
      case 'month':
        state.placeholder = `${year}${month}（${year}年${month}月）`;
        break;
      case 'year':
        state.placeholder = `${year}（${year}年）`;
        break;
      default:
        state.placeholder = `${year}${month}${day}（${year}年${month}月${day}日）`;
        break;
    }
  },
  setErrorCode(state, errorCode){
    state.errorCode = errorCode
  },
  setDayData(state, payload) {
    const {field, data} = payload
    switch (field) {
      case 'day' :
        state.dayData = data
        break;
      case 'month':
        state.monthData = data
        break;
      case 'year':
        state.yearData = data
        break;
      default:
        break;
    }
  }
}