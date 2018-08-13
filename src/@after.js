/**
* @after decorator
*
* @author  Avraam Mavridis      <avr.mav@gmail.com>
*
*/
import { _isPromise, _isFunction } from './validationHelpers';
import { descriptorIsFunc } from './helpers';

/**
 * Base decorator function for immutability
 *
 * @method _basefunc
 *
 *
 * @return { function }  decorator function
 */
export const _after = function after(afterFunc) {
  if (!_isFunction(afterFunc)) {
    throw Error('a function should be passed to the @after decorator');
  }
  return function afterTarget(target, key, descriptor) {
    const func = descriptor.value;
    descriptorIsFunc(key, func);
    descriptor.value = function descriptorValue(...args) {
      const res = func.apply(this, args);
      const afterFuncRes = afterFunc();
      if (_isPromise(afterFuncRes)) {
        return afterFuncRes.then(() => res);
      }

      return res;
    };
    return descriptor;
  };
};
