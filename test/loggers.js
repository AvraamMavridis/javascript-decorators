import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { log, loglocalstorage, donotlog, donotlogerrors, donotlogwarnings, donotlogmessages } from '../src/index.js';


chai.use( sinonChai );

class Person {
  @log()
  doSomething( a, b ) {
    return a + b;
  }

  @loglocalstorage()
  doSomethingElse( a, b ) {
    return a + b;
  }

  @donotlog()
  logSomething(){
    console.log('>>>>>>>>>>>');
    console.error('>>>>>>>>>>>');
    console.warn('>>>>>>>>>>>');
  }

  @donotlogmessages()
  logmessage(){
    console.log('>>>>>>>>>>>');
  }

  @donotlogwarnings()
  warnSomething(){
    console.warn('>>>>>>>>>>>');
  }

  @donotlogerrors()
  errorSomething(){
    console.error('>>>>>>>>>>>');
  }
};

describe( 'loggers tests', function () {
  let p;
  beforeEach( function () {
    p = new Person();
    sinon.spy( console, 'log' );
    sinon.spy( console, 'warn' );
    sinon.spy( console, 'error' );
  } );

  afterEach(function() {
    console.log.restore();
    console.warn.restore();
    console.error.restore();
  });

  // @log
  it( '@log: should not affect the function results', function () {
    expect( p.doSomething( 1, 2 ) ).to.equal( 3 );
  } );

  it( '@donotlog: should not call the console methods', function () {
    p.logSomething( 1, 2 )
    expect( console.log ).to.not.be.called;
  } );

  it( '@donotlogerrors: should not call the console.error', function () {
    p.errorSomething( 1, 2 )
    expect( console.error ).to.not.be.called;
  } );

  it( '@donotlogmessages: should not call the console.log', function () {
    p.logmessage( 1, 2 )
    expect( console.log ).to.not.be.called;
  } );

  it( '@donotlogmessages: should not call the console.warn', function () {
    p.warnSomething( 1, 2 )
    expect( console.warn ).to.not.be.called;
  } );

});
