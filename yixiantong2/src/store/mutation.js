export default {
  selectCity(state, cityInfo) {
    state.cityName = cityInfo.cityName
    state.cityId = cityInfo.cityId
  }
}