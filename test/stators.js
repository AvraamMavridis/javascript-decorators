import chai, { expect } from 'chai';
import { readonly, enumerable, nonenumerable, nonconfigurable, configurable } from '../src/index.js';

class Person {
  @readonly()
  prop1 = 10;

  @nonconfigurable()
  prop2 = {};
};

describe( 'stators tests', function () {
  let p;
  let p2;
  beforeEach( function () {
    p = new Person();
  } );

  // @readonly
  it( '@readonly: should not set a readonly property', function () {
    expect( () => p.prop1 = 15 ).to.throw( Error );
  } );

  // @nonconfigurable
  it( '@nonconfigurable: should not set a readonly property', function () {
    expect( () => delete p.prop2 ).to.throw( Error );
  } );


});
