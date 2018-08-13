/**
* Validates that the number of values passed to a function
* is equal to the number of arguments that the function accepts.
*
* @author  Avraam Mavridis      <avr.mav@gmail.com>
*
*/
export const _passedValuesEqualToNumberOfArguments = function (failSilent = false) {
  return function (target, key, descriptor) {
    const func = descriptor.value;
    descriptor.value = function (...args) {
      if (func.length !== args.length) {
        // eslint-disable-next-line
        if (failSilent) return;
        throw Error(`Only ${ func.length } values should be passed to the function`);
      }
      return func.apply(this, args);
    };
    return descriptor;
  };
};
