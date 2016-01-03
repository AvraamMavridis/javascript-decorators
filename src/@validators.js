/**
* Validation related decorators
*
* @author  Avraam Mavridis      <avr.mav@gmail.com>
*
*/
import {
  isObject,
  isArray,
  isNumber,
  isInteger,
  isBoolean,
  isFunction,
  isValidSchema } from './validationHelpers';

/**
 * Base decorator function for validation
 *
 * @method _basefunc
 *
 * @param  { integer }   position        Position of the property to validate
 * @param  { function }  validationFunc  Validation function
 * @param  { string }    errorMsg        Error message in case of invalid
 *
 * @return { function }  decorator function
 */
const _basefunc = function ( position = 0, validationFunc, errorMsg ) {
  return function ( key, target, descriptor )
  {
    const func = descriptor.value;
    descriptor.value = function ( ...args )
    {
      const prop = args[ position ];
      if ( !validationFunc( prop ) )
      {
        throw Error( `${ prop } ${ errorMsg }` );
      }
      return func.apply( this, args );
    };
  };
};

/**
 * @acceptsObject Decorator
 *
 * @method acceptsObject
 *
 * @param  { integer }  position = 0 Position of the property to validate
 *
 * @return { function }  Decorator
 */
export const acceptsObject = function ( position = 0 ) {
  return _basefunc( position, isObject, ' is not an object' );
};

/**
 * @acceptsArray Decorator
 *
 * @method acceptsObject
 *
 * @param  { integer }  position = 0 Position of the property to validate
 *
 * @return { function }  Decorator
 */
export const acceptsArray = function ( position = 0 ) {
  return _basefunc( position, isArray, ' is not an array' );
};

/**
 * @acceptsNumber Decorator
 *
 * @method acceptsObject
 *
 * @param  { integer }  position = 0 Position of the property to validate
 *
 * @return { function }  Decorator
 */
export const acceptsNumber = function ( position = 0 ) {
  return _basefunc( position, isNumber, ' is not a number' );
};

/**
 * @acceptsInteger Decorator
 *
 * @method acceptsObject
 *
 * @param  { integer }  position = 0 Position of the property to validate
 *
 * @return { function }  Decorator
 */
export const acceptsInteger = function ( position = 0 ) {
  return _basefunc( position, isInteger, ' is not an integer' );
};

/**
 * @acceptsBoolean Decorator
 *
 * @method acceptsObject
 *
 * @param  { integer }  position = 0 Position of the property to validate
 *
 * @return { function }  Decorator
 */
export const acceptsBoolean = function ( position = 0 ) {
  return _basefunc( position, isBoolean, ' is not a boolean' );
};

/**
 * @acceptsFunction Decorator
 *
 * @method acceptsObject
 *
 * @param  { integer }  position = 0 Position of the property to validate
 *
 * @return { function }  Decorator
 */
export const acceptsFunction = function ( position = 0 ) {
  return _basefunc( position, isFunction, ' is not a function' );
};

/**
 * @validateSchema Decorator
 *
 * @method acceptsObject
 *
 * @param  { object }  validation schema
 * @param  { integer }  position = 0 Position of the property to validate
 *
 * @return { function }  Decorator
 */
export const validateSchema = function ( schema, position = 0 ) {
  return isValidSchema( schema, position );
};
