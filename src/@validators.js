/**
* Validation related decorators
*
* @author  Avraam Mavridis      <avr.mav@gmail.com>
*
*/
import {
  _isObject,
  _isArray,
  _isNumber,
  _isInteger,
  _isBoolean,
  _isFunction,
  _isPromise,
  _isValidSchema,
  _isString,
  _basefunc } from './validationHelpers';

/**
 * @acceptsObject Decorator
 *
 * @method acceptsObject
 *
 * @param  { integer|array }  position = 0 Position of the property to validate
 *
 * @return { function }  Decorator
 */
export const _acceptsObject = function ( position = 0, failSilent = false ) {
  return _basefunc( position, _isObject, ' is not an object' );
};

/**
 * @acceptsArray Decorator
 *
 * @method acceptsObject
 *
 * @param  { integer|array }  position = 0 Position of the property to validate
 *
 * @return { function }  Decorator
 */
export const _acceptsArray = function ( position = 0, failSilent = false ) {
  return _basefunc( position, _isArray, ' is not an array', failSilent );
};

/**
 * @acceptsNumber Decorator
 *
 * @method acceptsObject
 *
 * @param  { integer|array }  position = 0 Position of the property to validate
 *
 * @return { function }  Decorator
 */
export const _acceptsNumber = function ( position = 0, failSilent = false ) {
  return _basefunc( position, _isNumber, ' is not a number', failSilent );
};

/**
 * @acceptsInteger Decorator
 *
 * @method acceptsObject
 *
 * @param  { integer|array }  position = 0 Position of the property to validate
 *
 * @return { function }  Decorator
 */
export const _acceptsInteger = function ( position = 0, failSilent = false ) {
  return _basefunc( position, _isInteger, ' is not an integer', failSilent );
};

/**
 * @acceptsBoolean Decorator
 *
 * @method acceptsObject
 *
 * @param  { integer|array }  position = 0 Position of the property to validate
 *
 * @return { function }  Decorator
 */
export const _acceptsBoolean = function ( position = 0, failSilent = false ) {
  return _basefunc( position, _isBoolean, ' is not a boolean', failSilent );
};

/**
 * @acceptsFunction Decorator
 *
 * @method acceptsObject
 *
 * @param  { integer|array }  position = 0 Position of the property to validate
 *
 * @return { function }  Decorator
 */
export const _acceptsFunction = function ( position = 0, failSilent = false ) {
  return _basefunc( position, _isFunction, ' is not a function', failSilent );
};

/**
 * @acceptsPromise Decorator
 *
 * @method acceptsObject
 *
 * @param  { integer|array }  position = 0 Position of the property to validate
 *
 * @return { function }  Decorator
 */
export const _acceptsPromise = function ( position = 0, failSilent = false ) {
  return _basefunc( position, _isPromise, ' is not a promise', failSilent );
};

/**
 * @acceptsString Decorator
 *
 * @method acceptsString
 *
 * @param  { integer|array }  position = 0 Position of the property to validate
 *
 * @return { function }  Decorator
 */
export const _acceptsString = function ( position = 0, failSilent = false ) {
  return _basefunc( position, _isString, ' is not a string', failSilent );
};

/**
 * @validateSchema Decorator
 *
 * @method acceptsObject
 *
 * @param  { object }  validation schema
 * @param  { integer|array }  position = 0 Position of the property to validate
 *
 * @return { function }  Decorator
 */
export const _validateSchema = function ( schema, position = 0, failSilent = false ) {
  return _isValidSchema( schema, position, failSilent );
};
