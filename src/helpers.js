/**
* Helper function
*
* @author  Avraam Mavridis      <avr.mav@gmail.com>
*
*/

import { _isFunction } from './validationHelpers';

export const descriptorIsFunc = function ( key, func )
{
  if ( !_isFunction( func ) )
  {
    throw Error( `${key} is not a function!` );
  }
  return true;
};

export const noop = function () {};
