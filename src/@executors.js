/**
* Execution related decorators
*
* @author  Avraam Mavridis      <avr.mav@gmail.com>
*
*/

/**
 * Base decorator function for immutability
 *
 * @method _basefunc
 *
 *
 * @return { function }  decorator function
 */
const __times = function ( times = 1 ) {
  let timescalled = 0;
  let res;
  return function ( target, key, descriptor ) {
    const func = descriptor.value;
    descriptor.value = function ( ...args )
    {
      if ( timescalled !== times ) {
        timescalled++;
        res = func.apply( this, args );
      }

      return res;
    };
    return descriptor;
  };
};

export const _times = __times;
export const _once = __times.bind( {}, 1 );
