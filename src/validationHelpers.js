/**
* Validation helpers for simple use cases
*
* @author  Avraam Mavridis      <avr.mav@gmail.com>
*
*/

/**
 * Tests if the prop is an Object
 *
 * @method isObject
 *
 * @param  { any } prop
 *
 * @return { Boolean }
 */
export const isObject = function ( prop ) {
  return ( typeof prop === 'object' ) && ( prop !== null );
};

/**
 * Tests if something is an Array
 *
 * @type { Boolean }
 */
export const isArray = Array.isArray;

/**
 * Tests if the prop is a number
 *
 * @method isNumber
 *
 * @param  { any } prop
 *
 * @return { Boolean }
 */
export const isNumber = function ( prop ) {
  return typeof prop === 'number' && isFinite( prop );
};

/**
 * Tests if the prop is an integer
 *
 * @method inInteger
 *
 * @param  { any } prop
 *
 * @return { Boolean }
 */
export const isInteger = function ( prop ) {
  return isNumber( prop ) && prop % 1 == 0;
};
