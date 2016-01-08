/**
* Helper function
*
* @author  Avraam Mavridis      <avr.mav@gmail.com>
*
*/

import { _isFunction } from './validationHelpers';

export const descriptorIsFunc = function ( target, func )
{
  if ( !_isFunction( func ) )
  {
    throw Error( `${target} is not a function!` );
  }
  return true;
};
