import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { before } from '../src/index.js';

chai.use( sinonChai );

const _bf = function(){ console.log('>>>>>>>>>>>'); }
const _bf2 = function(){ return Promise.resolve( 42 ) }

class Person {
  @before( _bf )
  doSomething( a, b ) {
    console.log( '42' );
    return a + b;
  }

  @before( _bf2 )
  doSomething2( a, b ) {
    return a + b;
  }
};

describe( 'loggers tests', function () {
  let p;
  beforeEach( function () {
    p = new Person();
    sinon.spy( console, 'log' );
  } );

  afterEach(function() {
    console.log.restore();
  });

  // @before
  it( '@before: should not affect the function results', function () {
    expect( p.doSomething( 1, 2 ) ).to.equal( 3 );
  } );

  it( '@before: should not call the console methods', function () {
    p.doSomething( 1, 2 )
    expect( console.log ).to.be.calledWith( '>>>>>>>>>>>' );
    expect( console.log ).to.be.calledWith( '42' );
  } );

  it( '@before: should return a promise if @before returns a promise, when the promise resolve returns the value of the actual method call', function ( done ) {
    p.doSomething2( 1, 2 ).then( function( result ){
      expect( result ).to.equal( 3 );
      done();
    } )

  } );

});
