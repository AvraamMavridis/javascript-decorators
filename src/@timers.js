/**
* Timing related decorators
*
* @author  Avraam Mavridis      <avr.mav@gmail.com>
*
*/

/**
 * Timeout decorator
 *
 * @method _timeout
 *
 * @param  { number } wait = 300
 *
 */
const __timeout = function ( wait = 300 ) {
  const debounceKeys = {};

  return function ( key, target, descriptor )
  {
    const func = descriptor.value;
    const dkey = Symbol();
    descriptor.value = function ( ...args )
    {
      debounceKeys[ dkey ] = setTimeout( () => {
        delete debounceKeys[ dkey ];
        func.apply( this, args );
      }, wait );
    };
    return descriptor;
  };
};

export const _timeout = __timeout;
export const _debounce = __timeout;
