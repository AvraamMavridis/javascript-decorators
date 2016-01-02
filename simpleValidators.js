import { isObject, isArray, isNumber, isInteger } from './src/validationHelpers';

const _basefunc = function ( position = 0, validationFunc, errorMsg ) {
  return function ( key, target, descriptor )
  {
    const func= descriptor.value;
    descriptor.value = function ( ...args )
    {
      const prop = args[ position ];
      if ( !validationFunc( prop ) )
      {
        throw Error( `${ prop } ${ errorMsg }` );
      }
      return func.apply( this, args );
    };
  };
};

export const acceptsObject = function ( position = 0 ) {
  return _basefunc( position, isObject, ' is not an object' );
};

export const acceptsArray = function ( position = 0 ) {
  return _basefunc( position, isArray, ' is not an array' );
};

export const acceptsNumber = function ( position = 0 ) {
  return _basefunc( position, isNumber, ' is not a number' );
};


export const acceptsInteger = function ( position = 0 ) {
  return _basefunc( position, isInteger, ' is not an integer' );
};
