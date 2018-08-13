/**
* Execution related decorators
*
* @author  Avraam Mavridis      <avr.mav@gmail.com>
*
*/

import { descriptorIsFunc } from './helpers';

/**
 * Executes a function n times, any repeat call returns
 * the value of the nth call
 *
 * @method __times
 *
 *
 * @return { function }  decorator function
 */
const __times = function (times = 1) {
  let timescalled = 0;
  let res;
  return function (target, key, descriptor) {
    const func = descriptor.value;
    descriptorIsFunc(key, func);
    descriptor.value = function (...args) {
      if (timescalled !== times) {
        timescalled++;
        res = func.apply(this, args);
      }

      return res;
    };
    return descriptor;
  };
};

/**
 * Attaches a property on the function indicating how many times
 * has been called
 *
 * @method __times
 *
 *
 * @return { function }  decorator function
 */
const __timesCalled = function () {
  return function (target, key, descriptor) {
    const func = descriptor.value;
    descriptorIsFunc(key, func);
    descriptor.value = function (...args) {
      descriptor.value.timesCalled = descriptor.value.timesCalled || 0;
      descriptor.value.timesCalled++;
      return func.apply(this, args);
    };
    return descriptor;
  };
};

export const _times = __times;
export const _once = __times.bind({}, 1);
export const _timesCalled = __timesCalled;
