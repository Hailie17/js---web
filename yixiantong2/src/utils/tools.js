// 数据格式化
export default {
    formatJson(array, key) {
        return array.filter((item) => {
            if (item[key]) {
                item[key] = item[key].split(',')
            }
            return item
        })
    },
    /**
     * Json转数组
     * @param str
     * @returns {any}
     */
    jsonToArr(str) {
        return JSON.parse(str)
    },

    /**
     * 字符串转数组
     * @param str
     * @returns {*}
     */
    strToArr(str) {
        return str.split(',')
    },

    /**
     * 字符串替换空格
     * @param str
     * @returns {*}
     */
    replaceToSpace(str) {
        return str.replace(/,/g, ' ')
    },

    /**
     * 替换空格
     */
    trimSpace(str){
        return str.replace(/\s+/g, str)
    },
    /**
     * 节流函数
     */
    throttle(fn, delay){
        var t= null
        began = new Date().getTime() // 获取时间戳
    }
}
