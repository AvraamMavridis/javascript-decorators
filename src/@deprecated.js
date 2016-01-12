/**
* Deprecated decorator
*
* @author  Avraam Mavridis      <avr.mav@gmail.com>
*
*/
import { descriptorIsFunc } from './helpers';
import { _isString } from './validationHelpers';

/**
 * Deprecated decorator
 *
 * @method _deprecated
 *
 *
 * @return { function }  decorator function
 */
export const _deprecated = function ( msg ) {
  if ( !_isString( msg ) )
  {
    throw Error( `Warning message should be a string.` );
  }
  return function ( target, key, descriptor )
  {
    const func = descriptor.value;
    descriptorIsFunc( target, func );
    const name = target.constructor.name;
    descriptor.value = function ( ...args )
    {
      console.warn( `${name}#${key} : ${msg}` );
      return func.apply( this, args );
    };
    return descriptor;
  };
};
