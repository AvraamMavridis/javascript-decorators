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
  isPromise,
  isValidSchema,
  _basefunc } from './validationHelpers';

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
 * @acceptsPromise Decorator
 *
 * @method acceptsObject
 *
 * @param  { integer }  position = 0 Position of the property to validate
 *
 * @return { function }  Decorator
 */
export const acceptsPromise = function ( position = 0 ) {
  return _basefunc( position, isPromise, ' is not a promise' );
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
