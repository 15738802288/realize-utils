/**
 * 判断两个数组是否相等
 * @date 2022-02-18
 * @param {Array} array1 第一个需要对比的数组
 * @param {Array} array2 第二个需要对比的数组
 * @returns {Boolean}
 */
function equality(array1, array2) {
  // 直接判读，两个不相等，则不相等。
  if (array1 === array2) {
    return true
  }
  // 判断length，不相等，则不相等。
  if (array1.length !== array2.length) {
    return false
  }
  // 循环判断各项，如有一项不相等，则不相等。
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i] ) {
      return false
    }
  }
  // 否则，则是相等的。
  return true
}

export default equality