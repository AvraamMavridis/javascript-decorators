/**
* Validation related decorators
*
* @author  Avraam Mavridis      <avr.mav@gmail.com>
*
*/

import deepcopy from "deepcopy";

/**
 * Base decorator function for validation
 *
 * @method _basefunc
 *
 *
 * @return { function }  decorator function
 */
export const immutable = function () {
  return function ( key, target, descriptor )
  {
    const func = descriptor.value;
    let newArgs;
    let that;
    descriptor.value = function ( ...args )
    {
      that = this;
      newArgs = args.reduce( function ( previousval, currentval ) {
        previousval.push( deepcopy( currentval ) );
        return previousval;
      }, [] );
      return func.apply( that, newArgs );
    };
  };
};
