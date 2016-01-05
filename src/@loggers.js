/**
* Debugging decorators
*
* @author  Avraam Mavridis      <avr.mav@gmail.com>
*
*/

export const log = function () {
  return function ( key, target, descriptor )
  {
    const func = descriptor.value;
    descriptor.value = function ( ...args )
    {
      const res = func.apply( this, args );
      console.log( '%c Passed Arguments: ', 'background: #222; color: #bada55', args );
      console.log( '%c Returned Value  : ', 'background: #bada55; color: #222', res );
      return res;
    };
    return descriptor;
  };
};
