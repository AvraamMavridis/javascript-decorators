/**
* Debugging decorators
*
* @author  Avraam Mavridis      <avr.mav@gmail.com>
*
*/

/**
 * Logs the passed arguments and the returned value
 *
 * @method log
 *
 */
export const log = function () {
  return function ( key, target, descriptor )
  {
    const func = descriptor.value;
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
export const getLocalStorage = function ()
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
  const _localStorage = getLocalStorage();
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
export const loglocalstorage = function () {

  return function ( key, target, descriptor )
  {
    const func = descriptor.value;
    descriptor.value = function ( ...args )
    {
      const sizeBefore = _getLocalStorageSize();
      console.log( '%c Local Storage Size Before Function Call: ', 'background: #222; color: #bada55', `${sizeBefore} MB` );
      const res = func.apply( this, args );
      const sizeAfter = _getLocalStorageSize();
      console.log( '%c Local Storage Size After Function Call : ', 'background: #222; color: #bada55', `${sizeAfter} MB` );
      return res;
    };
    return descriptor;
  };
};
