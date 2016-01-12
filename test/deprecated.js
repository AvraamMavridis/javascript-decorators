import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { deprecated } from '../src/index.js';

chai.use( sinonChai );

class Person {
  @deprecated( 'Function is deprecated' )
  doSomething( a, b ) {
    return a + b;
  }

};

describe( 'Deprecation tests', function () {
  let p;
  beforeEach( function () {
    p = new Person();
    sinon.spy( console, 'warn' );
  } );

  afterEach(function() {
    console.warn.restore();
  });

  // @deprecated
  it( '@deprecated: should not affect the function results', function () {
    expect( p.doSomething( 1, 2 ) ).to.equal( 3 );
  } );

  it( '@deprecated: should call the console.warn methond', function () {
    p.doSomething( 1, 2 )
    expect( console.warn ).to.have.been.called;
  } );

});
