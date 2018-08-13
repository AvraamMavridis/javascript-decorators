/**
* Stators decorators
*
* @author  Avraam Mavridis      <avr.mav@gmail.com>
*
*/

export const _enumerable = function enumerable() {
  return function enumerableTarget(key, target, descriptor) {
    descriptor.enumerable = true;
    return descriptor;
  };
};

export const _nonenumerable = function nonenumerable() {
  return function nonenumerableTarget(key, target, descriptor) {
    descriptor.enumerable = false;
    return descriptor;
  };
};

export const _readonly = function readonly() {
  return function readonlyTarget(key, target, descriptor) {
    descriptor.writable = false;
    return descriptor;
  };
};

export const _nonconfigurable = function nonconfigurable() {
  return function nonconfigurableTarget(key, target, descriptor) {
    descriptor.configurable = false;
    return descriptor;
  };
};
