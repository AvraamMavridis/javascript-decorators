/**
* Try catch Decorator
*
* @author  Avraam Mavridis      <avr.mav@gmail.com>
*
*/
import { descriptorIsFunc } from './helpers';
import { _isFunction } from './validationHelpers';

/**
 * Try-catch decorator
 *
 * @method _timeout
 *
 * @param  { func } errorHandler
 *
 */
export const _trycatch = function (errorHandler) {
  if (!_isFunction(errorHandler)) {
    throw Error(`The ErrorHandler should be a function. ${ JSON.stringify(errorHandler) } is not a function`);
  }

  return function (key, target, descriptor) {
    const func = descriptor.value;
    descriptorIsFunc(key, func);
    descriptor.value = function (...args) {
      let res;
      try {
        res = func.apply(this, args);
      } catch (e) {
        errorHandler(e);
      }
      return res;
    };
    return descriptor;
  };
};
