/**
* Validates that the value passed to the function is an object
*
* @author  Avraam Mavridis      <avr.mav@gmail.com>
*
*/

export default acceptsObject = function( position = 0, callit = false ){  
  return function( key, target, descriptor ){
    const func = descriptor.value;
    descriptor.value = function(){
      const prop = arguments[position];
      if( !(typeof prop === "object") && (prop !== null) ){
        throw Error(`${prop} is not an object`)
      }
      if( callit ){
        func.call(this, arguments)
      }
    }
    return descriptor;
  }
}
