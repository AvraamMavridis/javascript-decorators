/**
* Validates that the number of ...rest values
* is equal to the specified number.
*
* e.g. @restLengthEqualTo(2) expects 2 values as ...rest
*
* @author  Avraam Mavridis      <avr.mav@gmail.com>
*
*/
export default restLengthEqualTo = function( restLength ){  
  return function( key, target, descriptor ){
    const func = descriptor.value;
    descriptor.value = function(){
      if( (arguments.length - func.length) !== restLength ){
        throw Error(`Number of rest values is not equal to ${restLength}`)
      }
      func.call(this, arguments);
    }
    return descriptor;
  }
}
