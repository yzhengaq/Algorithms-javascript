/*
 * @Description: Some example of sort algorithm
 * @Author: Kevin
 * @Date: 2018-12-23 16:28:07
 * @LastEditTime: 2018-12-25 22:47:35
 */

const chalk = require('chalk');
const Sort = require('../lib/Sort');

const logger = console.log;


function runSort(func) {
  logger(chalk.blue(func));

  const line = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 500000));

  // logger('origin Array:', `[${line.join(',')}]`);

  const sortIns = new Sort();
  const t1 = Date.now();
  const result = sortIns[func](line);
  const t2 = Date.now();

  // logger(`${sortIns.sortType} result:`, `[${result.join(',')}]`);
  logger(chalk.cyan(`${sortIns.sortType} cost time:`), chalk.green(`${t2 - t1}ms`));
  return result;
}

runSort('bubbleSort');
runSort('selectionSort');
runSort('insertionSort');
runSort('shellSort');
runSort('quickSort');
