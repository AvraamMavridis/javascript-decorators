/**
* Decorators
*
* @author  Avraam Mavridis      <avr.mav@gmail.com>
*
*/

export {
  _immutable as immutable,
  _doesNotMutate as doesNotMutate
} from './@immutablors';

export {
  _acceptsArray as acceptsArray,
  _acceptsObject as acceptsObject,
  _acceptsInteger as acceptsInteger,
  _acceptsNumber as acceptsNumber,
  _acceptsBoolean as acceptsBoolean,
  _acceptsFunction as acceptsFunction,
  _acceptsPromise as acceptsPromise,
  _acceptsString as acceptsString,
  _validateSchema as validateSchema
} from './@validators';

export { _memoization as memoization } from './@memoizator';

export {
  _debounce as debounce,
  _timeout as timeout,
  _defer as defer
} from './@timers';

export {
  _loglocalstorage as loglocalstorage,
  _log as log,
  _donotlog as donotlog,
  _donotlogmessages as donotlogmessages,
  _donotlogerrors as donotlogerrors,
  _donotlogwarnings as donotlogwarnings
} from './@loggers';

export {
  _once as once,
  _times as times,
  _timesCalled as timesCalled
} from './@executors';

export {
  _readonly as readonly,
  _enumerable as enumerable,
  _nonenumerable as nonenumerable,
  _nonconfigurable as nonconfigurable
} from './@stators';

export {
  _overridden as overridden,
  _forceoverridden as forceoverridden
} from './@inheritedfunctions';

export { _trycatch as trycatch } from './@trycatch';

export {
  _multiInherit as multiInherit,
  _multiInherit as multiExtend,
  _partialyInherit as partialyInherit,
  _partialyInherit as partialyExtend,
  _partialyInherit as partiallyInherit,
  _partialyInherit as partiallyExtend
} from './@multiinheritance';

export {
  _passedValuesEqualToNumberOfArguments as passedValuesEqualToNumberOfArguments,
  _passedValuesEqualToNumberOfArguments as valuesEqualToNumberOfArguments
} from './@passedValuesEqualToNumberOfArguments';

export { _after as after } from './@after';

export { _before as before } from './@before';

export {
  _deprecated as deprecated,
  _deprecated as deprecate
} from './@deprecated';

export {
  _compose as compose,
  _compose as rightCompose,
  _leftCompose as leftCompose
} from './@compose';

export { _autobind as autobind } from './@autobind';

export { _abstract as abstract } from './@abstract';
