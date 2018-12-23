/*
 * @Description: Some description here
 * @Author: Kevin
 * @Date: 2018-12-23 15:51:37
 * @LastEditTime: 2018-12-23 19:34:04
 */

module.exports = class Sort {
  /**
   * @description: constructor of Sort class
   * @param {Array} input
   * @return: Object
   */
  constructor() {
    this.sortType = '';
  }

  /**
   * @description: Bubble sort
   * @param {Array} input
   * @return: Array
   */
  bubbleSort(input) {
    this.sortType = 'bubble sort';
    const arr = input || [];
    const { length } = arr;
    let count = 0;
    while (length - count > 0) {
      for (let i = 0; i < length - 1 - count; i += 1) {
        if (arr[i] > arr[i + 1]) {
          const tmp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = tmp;
        }
      }
      count += 1;
    }
    return arr;
  }

  /**
   * @description: Selection sort
   * @param {Array} input
   * @return: Array
   */
  selectionSort(input) {
    this.sortType = 'selection sort';
    const arr = input || [];
    const { length } = arr;
    let count = 0;
    while (length - count > 0) {
      let index = 0;
      for (let i = 0; i < length - count; i += 1) {
        if (arr[i] > arr[index]) {
          index = i;
        }
      }
      const tmp = arr[index];
      arr[index] = arr[length - 1 - count];
      arr[length - 1 - count] = tmp;
      count += 1;
    }
    return arr;
  }
};
