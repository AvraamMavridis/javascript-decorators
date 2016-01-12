/**
* @after decorator
*
* @author  Avraam Mavridis      <avr.mav@gmail.com>
*
*/
import { _isPromise, _isFunction } from './validationHelpers';
import { descriptorIsFunc } from './helpers';

/**
 * Base decorator function for immutability
 *
 * @method _basefunc
 *
 *
 * @return { function }  decorator function
 */
export const _after = function ( afterFunc ) {
  if ( !_isFunction( afterFunc ) )
  {
    throw Error( `a function should be passed to the @after decorator` );
  }
  return function ( target, key, descriptor )
  {
    const func = descriptor.value;
    descriptorIsFunc( key, func );
    descriptor.value = function ( ...args )
    {
      const res = func.apply( this, args );
      const afterFuncRes = afterFunc();
      if ( _isPromise( afterFuncRes ) )
      {
        return afterFuncRes.then( () => res );
      }
      else {
        return res;
      }

    };
    return descriptor;
  };
};
