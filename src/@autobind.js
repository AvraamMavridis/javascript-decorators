/**
* @autobind decorator
*
* @author  Avraam Mavridis      <avr.mav@gmail.com>
*
*/
import { descriptorIsFunc } from './helpers';

/**
 * Autobind function decorator
 *
 * @method _autobind
 * @param { function }
 *
 * @return { function }  decorator function
 */
export const _autobind = function autobind() {
  return function autobindTarget(target, key, descriptor) {
    const func = descriptor.value;
    descriptorIsFunc(key, func);
    delete descriptor.writable;
    delete descriptor.value;

    return {
      ...descriptor,
      get() {
        if (this === target.prototype || this.hasOwnProperty(key)) {
          return func;
        }

        Object.defineProperty(this, key, {
          value: func,
          configurable: true,
          writable: true
        });
        return func;
      },
    };
  };
};
