import { expect } from 'chai';
import { overridden, forceoverridden } from '../src/index.js';


class Person {
  @overridden()
  render() {
    return 42;
  }

  @forceoverridden()
  lol(){}
};

class Manager extends Person{}

class Developer extends Person{
  lol(){
    return 42;
  }
}

describe( 'immutablors tests', function () {
  let p,m,d;
  beforeEach( function () {
    p = new Person();
    m = new Manager();
    d = new Developer();
  } );

  // @overriden
  it( '@overridden: should not throw Error when the method is called from the base class', function () {
    expect( function(){ return p.render( ); } ).to.not.throw( Error );
    expect( p.render( ) ).to.equal( 42 );
  } );

  it( '@overridden: should  throw Error when the method is called from a subclass', function () {
    expect( function(){ return m.render( ); } ).to.throw( Error );
  } );

  // @forceoverridden
  it( '@forceoverridden: should throw an error if it is called from the base class', function () {
    expect( function(){ return p.lol( ); } ).to.throw( Error );
  } );

  it( '@forceoverridden: should throw an error if it is called from the subclass without being overriden', function () {
    expect( function(){ return m.lol( ); } ).to.throw( Error );
  } );

  it( '@forceoverridden: should not throw an error if it is called from the subclass and has being overriden', function () {
    expect( function(){ return d.lol( ); } ).to.not.throw( Error );
  } );
});
