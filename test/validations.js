import { expect } from 'chai';
import { acceptsObject,
         acceptsArray,
         acceptsInteger,
         acceptsNumber,
         acceptsBoolean,
         validateSchema } from '../src/@validators';

class Person {
  @acceptsObject()
  getAnObject( obj ) { return true; }

  @acceptsArray()
  getAnArray( obj ) { return true; }

  @acceptsNumber()
  getANumber( obj ) { return true; }

  @acceptsInteger()
  getAnInteger( obj ) { return true; }

  @acceptsBoolean()
  getBoolean( obj ) { return true; }

  @validateSchema( { test1: 'number', test2: 'object', test3: 'array' } );
  getSchemaValidatedObject( obj ) { return true; }

  @validateSchema( { test1: 'lol', test2: 'object' } );
  getSchemaValidatedObject2( obj ) { return true; }
}

describe( 'validation tests', function () {
  let p;
  beforeEach( function () {
    p = new Person();
  } );

  // @acceptsObject
  it( '@acceptsObject: execute the function if an object is passed', function () {
    expect( p.getAnObject( {} ) ).to.equal( true );
  } );

  it( '@acceptsObject: throw an Error if a non object is passed', function () {
    expect( p.getAnObject.bind( {}, 42 ) ).to.throw( Error );
  } );

  // @acceptsArray
  it( '@acceptsArray: execute the function if an array is passed', function () {
    expect( p.getAnArray( [] ) ).to.equal( true );
  } );

  it( '@acceptsArray: throw an Error if a non array is passed', function () {
    expect( p.getAnObject.bind( {}, 42 ) ).to.throw( Error );
  } );

  // @acceptsNumber
  it( '@acceptsNumber: execute the function if a number is passed', function () {
    expect( p.getANumber( 42.23213 ) ).to.equal( true );
  } );

  it( '@acceptsNumber: throw an Error if a non number is passed', function () {
    expect( p.getANumber.bind( {}, "something" ) ).to.throw( Error );
  } );

  // @acceptsInteger
  it( '@acceptsInteger: execute the function if an integer is passed', function () {
    expect( p.getAnInteger( 42 ) ).to.equal( true );
  } );

  it( '@acceptsInteger: throw an Error if a non integer is passed', function () {
    expect( p.getAnInteger.bind( {}, 42.45 ) ).to.throw( Error );
  } );

  // @acceptsBoolean
  it( '@acceptsBoolean: execute the function if a boolean is passed', function () {
    expect( p.getBoolean( true ) ).to.equal( true );
  } );

  it( '@acceptsBoolean: throw an Error if a non boolean is passed', function () {
    expect( p.getBoolean.bind( {}, 42.45 ) ).to.throw( Error );
  } );

  // @validateSchema
  it( '@validateSchema: execute the function if the object is valid againts the schema', function () {
    expect( p.getSchemaValidatedObject( { test1: 2, test2: {}, test3: [1,2,3] } ) ).to.equal( true );
  } );

  it( '@validateSchema: throw an Error if a non object is passed', function () {
    expect( p.getSchemaValidatedObject.bind( {}, 42.45 ) ).to.throw( Error );
  } );

  it( '@validateSchema: throw an Error if a the object does not have a schema property', function () {
    expect( p.getSchemaValidatedObject.bind( {}, { test1: 'something', test3: 'something' } ) ).to.throw( Error );
  } );

  it( '@validateSchema: throw an Error if a their is an invalid type in the schema definition', function () {
    expect( p.getSchemaValidatedObject2.bind( {}, { test1: 'something', test2: 'something' } ) ).to.throw( Error );
  } );
} );
