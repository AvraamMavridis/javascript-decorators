import chai, { expect } from 'chai';
import sinon from 'sinon';
import sinonChai from 'sinon-chai';
import { trycatch } from '../src/index.js';

chai.use( sinonChai );

class Person {
  @trycatch( (e) => console.log(e) )
  doSomething() {
    return 42;
  }

  @trycatch( (e) => console.log(e) )
  doSomething2() {
    throw Error();
  }
};



describe( 'trycatch tests', function () {
  let p;
  beforeEach( function () {
    p = new Person();
    sinon.spy( console, 'log' );
  } );

  afterEach(function() {
    console.log.restore();
  });

  // @trycatch
  it( '@trycatch: should call the method correctly if there is no error', function () {
    expect( p.doSomething() ).to.equal( 42 );
  } );

  it( '@trycatch: should call the error handler if there is error', function () {
    p.doSomething2()
    expect( console.log ).to.be.called;
  } );

  it( '@trycatch: should throw an exception if the passed errorHandler is not a function', function () {
    expect( function(){
      class Person2{
        @trycatch( 'dosmething' )
        doSomething3() {}
      }
    } ).to.throw( Error );
  } );

});
