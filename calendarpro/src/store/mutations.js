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
        state.setMaxLength = 8;
        break;
      case 'month':
        state.setMaxLength = 6;
        break;
      case 'year':
        state.setMaxLength = 6;
        break;
      default:
        state.setMaxLength = 8;
        break;
    }
  },
  setPlaceholder(state, routeName) {
    const date = new Date(),
          month = date.getMonth() + 1,
          day = date.getDate()
    month = month < 10 ? '0' + month : month
    day = day < 10 ? '0' + day : day
    
    switch(routeName) {
      case 'day': 
        state.setMaxLength = 8;
        break;
      case 'month':
        state.setMaxLength = 6;
        break;
      case 'year':
        state.setMaxLength = 6;
        break;
      default:
        state.setMaxLength = 8;
        break;
    }
  },

}