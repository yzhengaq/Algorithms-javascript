/*
 * @Description: Some description here
 * @Author: Kevin
 * @Date: 2018-12-23 15:51:37
 * @LastEditTime: 2018-12-25 22:39:48
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

  /**
   * @description: Insertion sort
   * @param {Array} input
   * @return: Array
   */
  insertionSort(input) {
    this.sortType = 'insertion sort';
    const arr = input || [];
    const { length } = arr;
    for (let i = 1; i < length; i += 1) {
      for (let j = i; j >= 0; j -= 1) {
        if (arr[j + 1] < arr[j]) {
          const tmp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = tmp;
        } else {
          break;
        }
      }
    }
    return arr;
  }

  /**
   * @description: Shell sort, an optimization of insertion sort
   * @param {Array} input
   * @return: Array
   */
  shellSort(input) {
    this.sortType = 'shell sort';
    const arr = input || [];
    const { length } = arr;
    let inc = Math.floor(length / 2);
    while (inc > 0) {
      for (let i = 1; i < length; i += inc) {
        for (let j = i; j >= 0; j -= inc) {
          if (arr[j + inc] < arr[j]) {
            const tmp = arr[j];
            arr[j] = arr[j + inc];
            arr[j + inc] = tmp;
          } else {
            break;
          }
        }
      }
      inc = Math.floor(inc / 2);
    }
    return arr;
  }

  /**
   * @description: Quick sort
   * @param {Array} input
   * @param {Int} start
   * @param {Int} end
   * @return:
   */
  quickSort(input, start, end) {
    this.sortType = 'quick sort';
    const arr = input || [];
    const { length } = arr;
    const s = start || 0;
    const e = end || length - 1;
    let i = s;
    let j = e;
    const pivot = arr[i];
    while (i < j) {
      // the while condition must be '>=', or it will stick in a infinite loop
      // due to the equal numbers in array
      while (arr[j] >= pivot && j > i) {
        j -= 1;
      }
      if (j > i) {
        arr[i] = arr[j];
      }
      while (arr[i] < pivot && i < j) {
        i += 1;
      }
      if (i < j) {
        arr[j] = arr[i];
      }
    }
    arr[i] = pivot;

    if (s < i - 1) {
      this.quickSort(arr, s, i - 1);
    }
    if (e > j + 1) {
      this.quickSort(arr, j + 1, e);
    }
    return arr;
  }
};
