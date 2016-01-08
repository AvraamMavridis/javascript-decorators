/**
* Mutability related decorators
*
* @author  Avraam Mavridis      <avr.mav@gmail.com>
*
*/

import deepcopy from 'deepcopy';
import deepEqual from 'deep-equal';
import { descriptorIsFunc } from './helpers';

/**
 * Base decorator function for immutability
 *
 * @method _basefunc
 *
 *
 * @return { function }  decorator function
 */
export const _immutable = function () {
  return function ( key, target, descriptor )
  {
    const func = descriptor.value;
    descriptorIsFunc( key, func );
    descriptor.value = function ( ...args )
    {
      const newArgs = args.reduce( function ( previousval, currentval ) {
        previousval.push( deepcopy( currentval ) );
        return previousval;
      }, [] );
      return func.apply( this, newArgs );
    };
    return descriptor;
  };
};

export const _doesNotMutate = function () {
  return function ( key, target, descriptor )
  {
    const func = descriptor.value;
    descriptorIsFunc( key, func );
    descriptor.value = function ( ...args )
    {
      const tempArgs = deepcopy( args );
      const returnValue = func.apply( this, args );
      if ( !deepEqual( args, tempArgs ) ) {
        throw Error( `${target} mutates the passed values` );
      }
      return returnValue;
    };
    return descriptor;
  };
};
