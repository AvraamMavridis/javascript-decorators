/**
* Validates that the number of values passed to a function
* is equal to the number of arguments that the function accepts.
*
* @author  Avraam Mavridis      <avr.mav@gmail.com>
*
*/
export default numberofvaluesequaltoarguments = function(target, key, descriptor){
  const func = descriptor.value;

  descriptor.value = function(){
    const args = arguments;
    if( func.length !== args.length ){
      throw(`Only ${func.length} values should be passed to the function`);
    }
  }
  return descriptor;
}
