/**
* Validation helpers for simple use cases
*
* @author  Avraam Mavridis      <avr.mav@gmail.com>
*
*/

/**
 * Tests if the prop is an Object
 *
 * @method isObject
 *
 * @param  { any } prop
 *
 * @return { Boolean }
 */
export const isObject = function ( prop ) {
  return ( typeof prop === 'object' ) && ( prop !== null );
};

/**
 * Tests if something is an Array
 *
 * @type { Boolean }
 */
export const isArray = Array.isArray;

/**
 * Tests if the prop is a number
 *
 * @method isNumber
 *
 * @param  { any } prop
 *
 * @return { Boolean }
 */
export const isNumber = function ( prop ) {
  return typeof prop === 'number' && isFinite( prop );
};

/**
 * Tests if the prop is an integer
 *
 * @method inInteger
 *
 * @param  { any } prop
 *
 * @return { Boolean }
 */
export const isInteger = function ( prop ) {
  return isNumber( prop ) && prop % 1 == 0;
};

/**
 * Tests if the prop is Boolean
 *
 * @method isBoolean
 *
 * @param  { any }  prop
 *
 * @return { Boolean }
 */
export const isBoolean = function ( prop ) {
  return typeof prop === 'boolean';
};

/**
 * Tests if the prop is Function
 *
 * @method isBoolean
 *
 * @param  { any }  prop
 *
 * @return { Boolean }
 */
export const isFunction = function ( prop ) {
  return typeof prop === 'function';
};

/**
 * Tests if the prop is a Promise
 *
 * @method isPromise
 *
 * @param  { any }  prop
 *
 * @return { Boolean }
 */
export const isPromise = function ( prop ) {
  return prop !== null &&
   ( typeof prop === 'object' || typeof prop === 'function' ) &&
    typeof prop.then === 'function';
};

/**
 * validate a schema property
 *
 * @method _validateProperty
 *
 * @param  { any }          property
 * @param  { string }       type
 *
 * @return { boolean } or throws exception
 */
const _validateProperty = function ( property, type )
{
  let isValid = true;
  switch ( type )
  {
    case 'object':
      isValid = isObject( property );
      break;
    case 'number':
      isValid = isNumber( property );
      break;
    case 'integer':
      isValid = isInteger( property );
      break;
    case 'boolean':
      isValid = isBoolean( property );
      break;
    case 'array':
      isValid = isArray( property );
      break;
    case 'function':
      isValid = isFunction( property );
      break;
    case 'promise':
      isValid = isPromise( property );
      break;
    default:
      throw Error( `${ type } invalid type` );
  }
  if ( !isValid ) {
    throw Error( `${ property } is not ${ type }` );
  }
};

/**
 * validate against a schema
 *
 * @method isValidSchema
 *
 * @param  { object }      schema
 * @param  { number }      position = 0
 *
 * @return { Boolean }
 */
export const isValidSchema = function ( schema, position = 0 ) {
  const schemaKeys = Object.keys( schema );

  return function ( target, key, descriptor )
  {
    const func = descriptor.value;
    descriptor.value = function ( ...args )
    {
      const prop = args[ position ];
      if ( !isObject( prop ) )
      {
        throw Error( `${prop} is not an object` );
      }
      for ( const schemaKey of schemaKeys ) {
        if ( !prop.hasOwnProperty( schemaKey ) )
        {
          throw Error( `Object has not "${schemaKey}" property` );
        }
        _validateProperty( prop[ schemaKey ], schema[ schemaKey ] );
      }
      return func.apply( this, args );
    };
  };

};
