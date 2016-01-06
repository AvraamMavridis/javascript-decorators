import { expect } from 'chai';
import { immutable, doesNotMutate } from '../src/index.js';

class Person {
  @immutable()
  mutateObject( obj ) {
    obj.something = 5;
    return obj;
  }

  @doesNotMutate()
  mutateObject2( obj ) {
    obj.something = 5;
    return obj;
  }
};

describe( 'immutablors tests', function () {
  let p;
  beforeEach( function () {
    p = new Person();
  } );

  // @immutable
  it( '@immutable: it should execute the function without mutating the passed values', function () {
    let c = { something: 10 };
    expect( p.mutateObject( c ) ).to.not.equal( c );
  } );

  // @doesNotMutate
  it( '@doesNotMutate: it should execute the function without mutating the passed values', function () {
    let d = { something: 10 };
    expect( p.mutateObject2.bind( this, d ) ).to.throw( Error );
  } );

});
