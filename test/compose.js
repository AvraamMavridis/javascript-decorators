import { expect } from 'chai';
import { compose, leftCompose } from '../src/index.js';

const r = (t) => t * 5;
const r2 = (t) => t + 3;

class Person {
  @compose([r, r2])
  doSomething( a, b ) {
    return 2;
  }

  @leftCompose([r, r2])
  doSomething2( a, b ) {
    return 2;
  }
};

describe( 'loggers tests', function () {
  let p;
  beforeEach( function () {
    p = new Person();
  } );

  // @compose
  it( '@compose: should right-compose the methods correctly', function () {
    expect( p.doSomething( ) ).to.equal( 13 );
  } );

  it( '@compose: should left-compose the methods correctly', function () {
    expect( p.doSomething2( ) ).to.equal( 25 );
  } );

});
