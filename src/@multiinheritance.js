/**
* Multinheritance decorator
*
* @author  Avraam Mavridis      <avr.mav@gmail.com>
*
*/
import { _isFunction } from './validationHelpers';


const __inherit = function ( _clas, _meths, _partially )
{
  const classes = [].concat( _clas ).reverse();
  const methods = [].concat( _meths );
  return function ( target )
  {
    classes.forEach( function ( _class ) {
      const keys = Object.getOwnPropertyNames( _class.prototype );
      keys.forEach( function ( key ) {
        if ( _partially )
        {
          if ( !target.prototype[ key ] && methods.indexOf( key ) > -1 && _isFunction( _class.prototype[ key ] ) )
          {
            target.prototype[ key ] = _class.prototype[ key ];
          }
        }
        else if ( !_partially )
        {
          if ( !target.prototype[ key ] && _isFunction( _class.prototype[ key ] ) )
          {
            target.prototype[ key ] = _class.prototype[ key ];
          }
        }

      } );
    } );
    return target;
  };
};

/**
 * Inherit all the methods of the passed classes
 * if two classes have method with the same name
 * the last one is inheritted.
 *
 * @method _multiInherit
 *
 * @param  { array of classes }
 *
 * @return { class }
 */
export const _multiInherit = function ( ...args ) {
  return __inherit( args, [], false );
};

/**
 * Inherit only the specified classes
 *
 * @method _partialyInherit
 *
 * @param  { array of classes or  a class }   _clas
 * @param  { array of strings or string }     _meths
 *
 * @return { class }
 */
export const _partialyInherit = function ( _clas, _meths ) {
  const classes = [].concat( _clas );
  const methods = [].concat( _meths );
  return __inherit( classes, methods, true );
};
