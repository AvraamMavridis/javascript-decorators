import { expect } from 'chai';
import { immutable } from '../src/@immutablors.js';

class Person {
  @immutable()
  mutateObject( obj ) {
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

});
