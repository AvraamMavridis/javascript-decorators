import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { after } from '../src/index.js';


chai.use( sinonChai );

const _aft = function(){ console.log('>>>>>>>>>>>'); }
const _aft2 = function(){ return Promise.resolve( 42 ) }

class Person {
  @after( _aft )
  doSomething( a, b ) {
    return a + b;
  }

  @after( _aft2 )
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

  // @after
  it( '@after: should not affect the function results', function () {
    expect( p.doSomething( 1, 2 ) ).to.equal( 3 );
  } );

  it( '@after: should not call the console methods', function () {
    p.doSomething( 1, 2 )
    expect( console.log ).to.be.called;
  } );

  it( '@after: should return a promise if @after returns a promise, when the promise resolve returns the value of the actual method call', function ( done ) {
    p.doSomething2( 1, 2 ).then( function( result ){
      expect( result ).to.equal( 3 );
      done();
    } )

  } );

});
