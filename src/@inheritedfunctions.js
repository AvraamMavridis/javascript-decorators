/**
* Debugging decorators
*
* @author  Avraam Mavridis      <avr.mav@gmail.com>
*
*/
import { descriptorIsFunc } from './helpers';

/**
 * The method can be called from an instance of the base
 * class, but cannot be called from an instance of a derived class
 *
 * @method _overridden
 *
 */
export const _overridden = function () {
  return function (target, key, descriptor) {
    const func = descriptor.value;
    descriptorIsFunc(key, func);
    descriptor.value = function (...args) {
      const thisPrototype = Object.getPrototypeOf(this);
      if (target !== thisPrototype) {
        throw Error(`${ thisPrototype.constructor.name } should overridde method ${ key } of the base class ${ target.constructor.name }`);
      }
      return func.call(this, args);
    };
    return descriptor;
  };
};

/**
 * The method can not be called from an instance of the base or
 * derived class, it should be overridden
 *
 * @method _forceoverriden
 *
 */
export const _forceoverridden = function () {
  return function (target, key, descriptor) {
    descriptorIsFunc(key, descriptor.value);
    descriptor.value = function (...args) {
      throw Error(`method ${ key } of the base class ${ target.constructor.name } should be overridden`);
    };
    return descriptor;
  };
};
