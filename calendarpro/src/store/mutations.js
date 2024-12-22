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
  }
}