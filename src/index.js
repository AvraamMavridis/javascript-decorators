/**
* Decorators
*
* @author  Avraam Mavridis      <avr.mav@gmail.com>
*
*/

export { _immutable        as immutable,
         _doesNotMutate    as doesNotMutate } from './@immutablors.js';

export { _acceptsArray     as acceptsArray,
         _acceptsObject    as acceptsObject,
         _acceptsInteger   as acceptsInteger,
         _acceptsNumber    as acceptsNumber,
         _acceptsBoolean   as acceptsBoolean,
         _acceptsFunction  as acceptsFunction,
         _acceptsPromise   as acceptsPromise,
         _acceptsString    as acceptsString,
         _validateSchema   as validateSchema } from './@validators.js';

export { _memoization      as memoization } from './@memoizator';

export { _debounce         as debounce    } from './@timers';

export { _loglocalstorage  as loglocalstorage,
         _log              as log } from './@loggers';

export { _once             as once,
         _times            as times,
         _timesCalled      as timesCalled } from './@executors';
