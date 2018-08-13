/**
* Timing related decorators
*
* @author  Avraam Mavridis      <avr.mav@gmail.com>
*
*/
import { descriptorIsFunc } from './helpers';
/**
 * Timeout decorator
 *
 * @method _timeout
 *
 * @param  { number } wait = 300
 *
 */
const __timeout = function timeout(wait = 300) {
  const debounceKeys = {};

  return function timeoutTarget(key, target, descriptor) {
    const func = descriptor.value;
    descriptorIsFunc(key, func);
    const dkey = Symbol('dkey');
    descriptor.value = function descriptorValue(...args) {
      debounceKeys[dkey] = setTimeout(() => {
        delete debounceKeys[dkey];
        func.apply(this, args);
      }, wait);
    };
    return descriptor;
  };
};

export const _timeout = __timeout;
export const _debounce = __timeout;
export const _defer = __timeout.bind(this, 0);
