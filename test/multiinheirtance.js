import { expect } from 'chai';
import { multiInherit } from '../src/index.js';

class Manager{ render(){ return 42; } init(){ return 1; } t(){} };
class Employee{render(){ return 43; } mount(){ return 2; } t(){}};

@multiInherit( Manager, Employee )
class Person{ t(){ return 3; }};

describe( 'multiinheritance tests', function () {
  let p;
  beforeEach( function () {
    p = new Person();
  } );

  // @multiInherit
  it( '@multiInherit: should inherit all the methods from the base classes', function () {
    expect( p.render() ).to.equal( 43 );
    expect( p.init() ).to.equal( 1 );
    expect( p.mount() ).to.equal( 2 );
    expect( p.t() ).to.equal( 3 );
  } );

});
