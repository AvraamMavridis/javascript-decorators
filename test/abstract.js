import { expect } from 'chai';
import { abstract } from '../src/index.js';


@abstract()
class Person { t() { return 3; }}


class Person2 extends Person { r(){ return 10;} }


describe( '@abstract tests', function () {
  let p, c;
  beforeEach( function () {
    c = new Person2();
  } );

  it( 'Abstract classes should not being able to instantiated directly', function () {
      const instantiateAbstract = () => {
          p = new Person();
      };
      expect( instantiateAbstract ).to.throw( Error );
  } );

  it( 'Dirived classes should be able to inherit from abstract classes', function () {
      expect( c.t() ).to.equal( 3 );
      expect( c.r() ).to.equal( 10 );
  } );
} );
