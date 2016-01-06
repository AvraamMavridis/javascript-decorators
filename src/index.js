import { _immutable, _doesNotMutate } from './@immutablors.js';
import { _acceptsObject,
         _acceptsArray,
         _acceptsInteger,
         _acceptsNumber,
         _acceptsBoolean,
         _acceptsFunction,
         _acceptsPromise,
         _acceptsString,
         _validateSchema } from './@validators';
import { _memoization } from './@memoizator';
import { _debounce } from './@timers';
import { _loglocalstorage, _log } from './@loggers';
import { _once, _times } from './@executors';


export const immutable = _immutable;
export const doesNotMutate = _doesNotMutate;
export const acceptsArray = _acceptsArray;
export const acceptsObject = _acceptsObject;
export const acceptsInteger = _acceptsInteger;
export const acceptsNumber = _acceptsNumber;
export const acceptsBoolean = _acceptsBoolean;
export const acceptsFunction = _acceptsFunction;
export const acceptsPromise = _acceptsPromise;
export const acceptsString = _acceptsString;
export const validateSchema = _validateSchema;
export const memoization = _memoization;
export const debounce = _debounce;
export const loglocalstorage = _loglocalstorage;
export const log = _log;
export const once = _once;
export const times = _times;
