import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { log } from '../src/@loggers.js';

chai.use( sinonChai );

class Person {
  @log()
  doSomething( a, b ) {
    return a + b;
  }
};

describe( 'immutablors tests', function () {
  let p;
  beforeEach( function () {
    p = new Person();
    sinon.spy( console, 'log' );
  } );

  afterEach(function() {
    console.log.restore();
  });
  // @log
  it( '@log: should not affect the function results', function () {
    expect( p.doSomething( 1, 2 ) ).to.equal( 3 );
  } );

  it( '@log: call the console', function () {
    p.doSomething( 1, 2 )
    expect( console.log ).to.be.called;
  } );

});
