/**
* Deprecated decorator
*
* @author  Avraam Mavridis      <avr.mav@gmail.com>
*
*/
import { descriptorIsFunc } from './helpers';
import { _isString } from './validationHelpers';

/**
 * Deprecated decorator
 *
 * @method _deprecated
 *
 *
 * @return { function }  decorator function
 */
export const _deprecated = function deprecated(msg) {
  if (!_isString(msg)) {
    throw Error('Warning message should be a string.');
  }
  return function deprecatedTarget(target, key, descriptor) {
    const func = descriptor.value;
    descriptorIsFunc(target, func);
    const { name } = target.constructor;
    descriptor.value = function decriptorValue(...args) {
      // eslint-disable-next-line
      console.warn(`${ name }#${ key } : ${ msg }`);
      return func.apply(this, args);
    };
    return descriptor;
  };
};
