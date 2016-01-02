import { expect } from 'chai';
import { acceptsObject, acceptsArray, acceptsInteger } from '../simpleValidators';

class Person {
  @acceptsObject()
  getAnObject( obj ) {
    return true;
  }

  @acceptsArray()
  getAnArray( obj ) {
    return true;
  }

  @acceptsInteger()
  getAnInteger( obj ) {
    return true;
  }
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

  // @acceptsInteger
  it( '@acceptsInteger: execute the function if an integer is passed', function () {
    expect( p.getAnInteger( 42 ) ).to.equal( true );
  } );

  it( '@acceptsInteger: throw an Error if a non integer is passed', function () {
    expect( p.getAnInteger.bind( {}, {} ) ).to.throw( Error );
  } );
} );
