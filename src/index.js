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

export { _debounce         as debounce,
         _timeout          as timeout,
         _defer            as defer } from './@timers';

export { _loglocalstorage  as loglocalstorage,
         _log              as log,
         _donotlog         as donotlog,
         _donotlogmessages as donotlogmessages,
         _donotlogerrors   as donotlogerrors,
         _donotlogwarnings as donotlogwarnings } from './@loggers';

export { _once             as once,
         _times            as times,
         _timesCalled      as timesCalled } from './@executors';

export { _readonly         as readonly,
         _enumerable       as enumerable,
         _nonenumerable    as nonenumerable,
         _configurable     as configurable,
         _nonconfigurable  as nonconfigurable } from './@stators';
