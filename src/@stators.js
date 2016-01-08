/**
* Stators decorators
*
* @author  Avraam Mavridis      <avr.mav@gmail.com>
*
*/

export const _enumerable = function () {
  return function ( key, target, descriptor )
  {
    descriptor.enumerable = true;
    return descriptor;
  };
};

export const _nonenumerable = function () {
  return function ( key, target, descriptor )
  {
    descriptor.enumerable = false;
    return descriptor;
  };
};

export const _readonly = function () {
  return function ( key, target, descriptor )
  {
    descriptor.writable = false;
    return descriptor;
  };
};

export const _nonconfigurable = function () {
  return function ( key, target, descriptor )
  {
    descriptor.configurable = false;
    return descriptor;
  };
};
