/**
* Multinheritance decorator
*
* @author  Avraam Mavridis      <avr.mav@gmail.com>
*
*/
import { _isFunction } from './validationHelpers';

export const _multiInherit = function ( ...args ) {
  const classes = args.reverse();
  return function ( target )
  {
    classes.forEach( function ( _class ) {
      const keys = Object.getOwnPropertyNames( _class.prototype );
      keys.forEach( function ( key ) {
        if ( !target.prototype[ key ] )
        {
          if ( _isFunction( _class.prototype[ key ] ) ) {
            target.prototype[ key ] = _class.prototype[ key ];
          }
        }
      } );
    } );
    console.log( target.prototype );
    return target;
  };
};
