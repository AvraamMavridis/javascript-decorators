import { expect } from 'chai';
import { valuesEqualToNumberOfArguments } from '../src/index.js';

class Person {
  @valuesEqualToNumberOfArguments()
  doSomething( a, b ) {
    return a + b;
  }

  @valuesEqualToNumberOfArguments( true )
  doSomething2( a, b ) {
    return a + b;
  }
};

describe( 'executors tests', function () {
  let p;
  beforeEach( function () {
    p = new Person();
  } );

  // @valuesEqualToNumberOfArguments
  it( '@valuesEqualToNumberOfArguments: it should throw Error when the number of passed values are not equal with the number of arguments the function accepts', function () {
    expect( () => p.doSomething( 1 ) ).to.throw( Error );
    expect( () => p.doSomething( 1,2,3,4 ) ).to.throw( Error );
  } );

  it( '@valuesEqualToNumberOfArguments: it should be able to fail silently', function () {
    expect( p.doSomething2( 1 ) ).to.equal( undefined );
  } );

  it( '@valuesEqualToNumberOfArguments: it should execute the function when the passed values are equal with the number of arguments', function () {
    expect( p.doSomething2( 1, 2 ) ).to.equal( 3 );
  } );
});
