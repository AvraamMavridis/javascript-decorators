/**
* @before decorator
*
* @author  Avraam Mavridis      <avr.mav@gmail.com>
*
*/
import { _isPromise, _isFunction } from './validationHelpers';
import { descriptorIsFunc } from './helpers';

/**
 * Before function decorator
 *
 * @method _before
 * @param { function }
 *
 * @return { function }  decorator function
 */
export const _before = function (beforeFunc) {
  if (!_isFunction(beforeFunc)) {
    throw Error('a function should be passed to the @before decorator');
  }
  return function (key, target, descriptor) {
    const func = descriptor.value;
    descriptorIsFunc(key, func);
    descriptor.value = function (...args) {
      const beforeFuncRes = beforeFunc();
      const res = func.apply(this, args);
      if (_isPromise(beforeFuncRes)) {
        return beforeFuncRes.then(() => res);
      }

      return res;
    };
    return descriptor;
  };
};
