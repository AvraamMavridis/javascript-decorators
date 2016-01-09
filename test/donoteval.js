// import { expect } from 'chai';
// import { _donoteval as donoteval } from '../src/@donoteval.js';
//
// class Person {
//   @donoteval()
//   doSomething( a, b ) {
//     eval( a + '+' + b );
//   }
// 
// };
//
// describe( 'donoteval tests', function () {
//   let p;
//   beforeEach( function () {
//     p = new Person();
//   } );
//
//   // @donoteval
//   it( '@donoteval: it should execute the function only once', function () {
//     expect( p.doSomething( 1, 2 ) ).to.equal( 3 );
//   } );
//
//
// });
