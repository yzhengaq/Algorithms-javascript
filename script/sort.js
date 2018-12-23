/*
 * @Description: Some example of class sort
 * @Author: Kevin
 * @Date: 2018-12-23 16:28:07
 * @LastEditTime: 2018-12-23 19:48:02
 */

const Sort = require('../lib/Sort');
const chalk = require('chalk');
const logger = console.log;


function runSort(func) {
  logger(chalk.blue(func));

  const line = Array.from({ length: 200 }, () => Math.floor(Math.random() * 10000));

  logger('origin Array:', `[${line.join(',')}]`);

  const sortIns = new Sort();
  const t1 = Date.now();
  const result = sortIns[func](line);
  const t2 = Date.now();
  
  logger(`${sortIns.sortType} result:`, `[${result.join(',')}]`);
  logger(chalk.cyan(`${sortIns.sortType} cost time:`), chalk.green(`${t2 - t1}ms`));
  logger('\n')
}

runSort('bubbleSort');
runSort('selectionSort');
