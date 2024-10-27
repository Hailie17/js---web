// 数据格式化
export default {
    formatJson(array, key) {
        return array.filter((item) => {
            if (item[key]) {
                item[key] = item[key].split(',')
            }
            return item
        })
    }
}
