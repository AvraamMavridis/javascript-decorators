/**
* @compose decorator
*
* @author  Avraam Mavridis      <avr.mav@gmail.com>
*
*/
import { _isFunction } from './validationHelpers';
import { descriptorIsFunc } from './helpers';

/**
* Compose decorator
*
* @method _compose
*
*
* @return { function }  decorator function
*/
const __compose = function ( _meths, composeType ) {
  if ( composeType === 'LEFT_COMPOSE' )
  {
    _meths.reverse();
  }
  const meths = [].concat( _meths );
  meths.forEach( function ( meth ) {
    if ( !_isFunction( meth ) )
    {
      throw Error( `${meth.constructor.name} is not a function` );
    }
  } );

  return function ( target, key, descriptor )
  {
    const func = descriptor.value;
    descriptorIsFunc( key, func );
    descriptor.value = function ( ...args )
    {
      const initres = func.apply( this, args );
      const res = meths.reduce( function ( previousValue, currentMeth ) {
        return currentMeth( previousValue );
      }, initres );

      return res;
    };
  };
};

export const _compose = function ( _meths )
{
  return __compose( _meths, 'RIGHT_COMPOSE' );
};

export const _leftCompose = function ( _meths )
{
  return __compose( _meths, 'LEFT_COMPOSE' );
};
