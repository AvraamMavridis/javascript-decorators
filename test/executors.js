import { expect } from 'chai';
import { once, times } from '../src/index.js';

class Person {
  @once()
  doSomething( a, b ) {
    return a + b;
  }

  @times(2)
  doSomethingElse( a, b ) {
    return a + b;
  }
};

describe( 'executors tests', function () {
  let p;
  beforeEach( function () {
    p = new Person();
  } );

  // @once
  it( '@once: it should execute the function only once', function () {
    expect( p.doSomething( 1, 2 ) ).to.equal( 3 );
    expect( p.doSomething( 51, 2 ) ).to.equal( 3 );
    expect( p.doSomething( 1, 22 ) ).to.equal( 3 );
  } );

  // @times
  it( '@times: it should execute the function n times', function () {
    expect( p.doSomethingElse(1,2) ).to.equal( 3 );
    expect( p.doSomethingElse(3,2) ).to.equal( 5 );
    expect( p.doSomethingElse(33,12) ).to.equal( 5 );
  } );

});
