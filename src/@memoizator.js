/**
* Memoization decorators
*
* @author  Avraam Mavridis      <avr.mav@gmail.com>
*
*/
import { descriptorIsFunc } from './helpers';

export const _memoization = function () {
  const cache = new Map();

  return function ( key, target, descriptor )
  {
    const func = descriptor.value;
    descriptorIsFunc( key, func );
    descriptor.value = function ( ...args )
    {
      const ckey = args.join( '' );
      if ( cache.has( ckey ) ) {
        return cache.get( ckey );
      }
      const res = func.apply( this, args );
      cache.set( ckey, res );
      return res;
    };
    return descriptor;
  };
};
