/**
* Debugging decorators
*
* @author  Avraam Mavridis      <avr.mav@gmail.com>
*
*/
import { descriptorIsFunc, noop } from './helpers';

/**
 * Logs the passed arguments and the returned value
 *
 * @method log
 *
 */
export const _log = function () {
  return function ( target, key, descriptor )
  {
    const func = descriptor.value;
    descriptorIsFunc( target, func );
    descriptor.value = function ( ...args )
    {
      const res = func.apply( this, args );
      console.log( '%c Passed Arguments: ', 'background: #222; color: #bada55', args );
      console.log( '%c Returned Value  : ', 'background: #bada55; color: #222', res );
      return res;
    };
    return descriptor;
  };
};

/**
 * Returns the global localStorage
 *
 * @method getLocalStorage
 *
 * @return { object }
 */
export const _getLocalStorage = function ()
{
  return localStorage;
};

/**
 * Returns an array with the items on localStorage with their sizes
 *
 * @method _getLocalStorageItems
 *
 * @return {[type]}              [description]
 */
const _getLocalStorageItems = function ()
{
  const _localStorage = _getLocalStorage();
  let sizes = Object.keys( _localStorage );
  sizes = sizes.map( function ( key ) {
    const obj = {};
    obj.name = key;
    obj.size = localStorage[ key ].length * 2 / 1024 / 1024;
    return obj;
  } );
  return sizes;
};

/**
 * Returns the total size of the items in the localStorage
 *
 * @method _getLocalStorageSize
 *
 * @return { number }
 */
const _getLocalStorageSize = function ()
{
  const items = _getLocalStorageItems();
  const size = items.reduce( ( sum, next ) => sum + next.size, 0 );
  return size;
};

/**
 * Logs the localStorage before and after the function call
 *
 * @method loglocalstorage
 *
 */
export const _loglocalstorage = function () {

  return function ( target, key, descriptor )
  {
    const func = descriptor.value;
    descriptorIsFunc( target, func );
    descriptor.value = function ( ...args )
    {
      const sizeBefore = _getLocalStorageSize();
      console.log( '%c Local Storage Size Before Function Call: ', 'background: #222; color: #bada55', `${sizeBefore} MB` );
      const res = func.apply( this, args );
      const sizeAfter = _getLocalStorageSize();
      console.log( '%c Local Storage Size After Function Call : ', 'background: #bada55; color: #222', `${sizeAfter} MB` );
      return res;
    };
    return descriptor;
  };
};

/**
 * donotlog decorator, prevents log statements on the console
 *
 * @method _donotlog
 *
 * @return {[type]}  [description]
 */
export const _donotbase = function ( type ) {
  const nativeFuncs = {};
  const types = [].concat( type );

  return function ( key, target, descriptor )
  {
    const func = descriptor.value;
    descriptorIsFunc( key, func );
    descriptor.value = function ( ...args )
    {
      // nooping native console
      types.forEach( function ( _type ) {
        nativeFuncs[ _type ] = console[ _type ];
        console[ _type ] = noop;
      } );

      const res = func.apply( this, args );

      // restore native
      types.forEach( function ( _type ) {
        console[ _type ] = nativeFuncs[ _type ];
      } );

      return res;
    };
    return descriptor;
  };
};

export const _donotlogmessages = _donotbase.bind( {}, 'log' );
export const _donotlogwarnings = _donotbase.bind( {}, 'warn' );
export const _donotlogerrors = _donotbase.bind( {}, 'error' );
export const _donotlog = _donotbase.bind( {}, ['error', 'log', 'warn', 'table'] );
