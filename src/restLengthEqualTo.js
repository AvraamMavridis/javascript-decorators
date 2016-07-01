/**
* Validates that the number of ...rest values
* is equal to the specified number.
*
* e.g. @restLengthEqualTo(2) expects 2 values as ...rest
*
* @author  Avraam Mavridis      <avr.mav@gmail.com>
*
*/
export default function ( restLength )
{
  return function ( key, target, descriptor )
  {
    const func = descriptor.value;
    descriptor.value = function ( ...rest )
    {
      if ( ( rest.length - func.length ) !== restLength )
      {
        throw Error( `Number of rest values is not equal to ${restLength}` );
      }
      func.call( this, rest );
    };
    return descriptor;
  };
}
