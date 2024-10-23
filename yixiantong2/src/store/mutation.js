export default {
  selectCity(state, cityInfo) {
    state.cityName = cityInfo.cityName
    state.cityId = cityInfo.cityId
  },
  selectField(state, field) {
    state.field = field
  }
}