# javascript-decorators

[![npm version](https://badge.fury.io/js/javascript-decorators.svg)](https://badge.fury.io/js/javascript-decorators)

[![Build Status](https://travis-ci.org/AvraamMavridis/javascript-decorators.svg?branch=master)](https://travis-ci.org/AvraamMavridis/javascript-decorators)

Common helpers using es7 decorators.

You can see the [Changelog](#Changelog) for the version specific changes.

This project adheres to [Semantic Versioning](http://semver.org/).

![Splitline](http://www.centrosanisidoro.es/wp-content/themes/simplegridtheme/images/banner.png "Splitline")

## How to use

[![NPM](https://nodei.co/npm/javascript-decorators.png?mini=true)](https://nodei.co/npm/javascript-decorators/)

`npm i --save javascript-decorators`

And then to use a decorator just import it:

```js
import { multiInherit } from 'javascript-decorators'

class Manager{
  render(){ return 42; }
  init(){ return 43; }
  t(){ return 44; }
};
class Employee{
  render(){ return 45; }
  mount(){ return 46; }
  t(){ return 47;}
};

@multiInherit( Manager, Employee )
class Person{
  t(){ return 3; }
};

const p = new Person();
p.render(); // 45
p.t(); // 3
p.init(); // 43
```

## Decorators

###Class decorators:

+ **@multiInherit( array of classes )** (alias: `@multiExtend()`)  :  Inherit all the methods of the passed classes. If two classes have method with the same name the last one is inheritted.

+ **@partiallyInherit( class or array of classes, methodName or array of methodNames )** (alias: `@partiallyExtend()`)  :  Inherit only the specified methods.

###Method decorators:

+ **@overridden()** The method can be called from an instance of the base class, but cannot be called from an instance of a derived class. The derived class has to define its own version.

+ **@forceoverridden()** This is a more strict version of the previous. The method cannot be called from an instance of the base class or derived class. The derived class has to define its own version. Not particularly useful, mostly as a signal that the method has to be implemented on the subclass.

+ **@once()** : Executes the function only once. Repeat calls return the value of the first call.

+ **@times(n)** : Executes the function at most `n` times. Repeat calls return the value of the **nth** call.
*n: number*

+ **@timesCalled()** : Attaches a `timesCalled` property to the function that indicates how many times the function has been called.

+ **@trycatch( errorHandler )** : Wraps the function around a try/catch, requires a passed errorHandler function

+ **@validateSchema( schema )** :  Executes the function only if the schema is valid,
*schema: object*

+ **@acceptsObject( positions, failSilent )**      :  Executes the function only if the passed arg is an object
*positions: number|array (optional, default 0), failSilent: boolean(optional, default false)*

+ **@acceptsArray( positions, failSilent )** :  Executes the function only if the passed arg is an array

+ **@acceptsInteger( positions, failSilent )**:   Executes the function only if the passed arg is an integer

+ **@acceptsNumber( positions, failSilent )**:  Executes the function only if the passed arg is a number

+ **@acceptsBoolean( positions, failSilent )**:  Executes the function only if the passed arg is a boolean

+ **@acceptsFunction( positions, failSilent )**:  Executes the function only if the passed arg is a function

+ **@acceptsString( positions, failSilent )**:  Executes the function only if the passed arg is a string

+ **@acceptsPromise( positions, failSilent )**:  Executes the function only if the passed arg is a promise

+ **@immutable()**:  Makes a deepcopy of the passed arguments and executes the method with the copy to ensure that the initial parameters are not mutated

+ **@doesNotMutate()** :  Executes the method only if it doesnt mutate the passed arguments. Useful when the class extends another class and/or calls methods from the parent.

+ **@memoization()** :  Use the [memoization](https://en.wikipedia.org/wiki/Memoization) technique to prevent expensive function calls.

+ **@log()**: Logs the passed values and the returned result.

+ **@loglocalstorage()** : Logs the size of the localstorage before and after the function call.

+ **@donotlog()** : Do not log messages, errors and warnings.

+ **@donotlogmessages()** : Do not log messages.

+ **@donotlogwarnings()** : Do not log warnings.

+ **@donotlogerrors()** : Do not log errors.

+ **@timeout( ms )** (alias: `@debounce( ms )`)  : Executes the function after the specified wait (default 300ms)
*ms: number*

+ **@defer()**  : Executes the function when the current call stack has cleared

+ **@enumerable()**

###Method & Property decorators:

+ **@readony()**

+ **@nonconfigurable()**

### Property decorators:

+ **@nonenumerable()**

![Splitline](http://www.centrosanisidoro.es/wp-content/themes/simplegridtheme/images/banner.png "Splitline")

## <a name="Changelog"></a>Changelog

2016-01-10 Version 0.5.0
==========

  * Started class decorators
  * @partialyInherit class decorator
  * @multiInherit class decorator


2016-01-09 Version 0.4.1
==========

  * @trycatch decorator

2016-01-08 Version 0.4.0
==========

  * Update readme
  * Remove @configurable decorator, it doesnt make much sense (**breaking change**)
  * Fix typo
  * @overriden, @forceoverriden decorators
  * Update eslint rules


2016-01-08 Version 0.3.2
==========

  * Update README
  * @donotlog, @donotlogerrors, @donotlogmessages, @donotlogwarnings decorators
  * Noop helper function


2016-01-08 Version 0.3.1
==========

  * Fix typo on package.json
  * Update Readme
  * Helper to validate that isFunction for method decorators
  * Fix export alias for @debounce
  * @defer decorator


2016-01-07 Version 0.3.0
==========

  * Update README
  * Update package.json
  * Eslintignore file
  * Accepts a parameter in validation decorators indicating if they will fail silently
  * @readonly, @configurable, @nonconfigurable, @enumerable, @nonenumerable decorators
  * Small refactor on export


2016-01-06 Version 0.2.2
==========

  * @timesCalled decorator
  * @once and @times decorators
  * Fix color on console.log of @loglocalstorage
  * Always return the descriptor to be able to chain decorators
  * Fix package.json
  * Update package.json
  * Update README
  * npmignore, index entry file, update package
  * Small refactor
  * @timeout, @debounce decorators

![Splitline](http://www.centrosanisidoro.es/wp-content/themes/simplegridtheme/images/banner.png "Splitline")

## Contributing
Feel free to open issues, make suggestions or send PRs.
This project adheres to the Contributor Covenant [code of conduct](http://contributor-covenant.org/). By participating, you are expected to uphold this code.

Contact:

Twitter: [@avraamakis](https://twitter.com/avraamakis)

## Examples

### <a name="@validateSchema"></a>@validateSchema

Executes the method only if the passed values are valid according to the provided **schema**. Example:

```js

class Person{
  @validateSchema( { age: 'number', childs: 'object', jobs: 'array', name: 'string' } );
  setPersonDetails( obj ) { ... }
}

  ```

### <a name="@acceptsObject"></a>@acceptsObject

Executes the method only if the passed value is an object otherwise throws an exception, accepts position (default=0) or array of positions. Example:

  ```js

class Person{
  @acceptsObject( [0,2], true );
  doSomething( obj, str, obj ) { ... }
}

  ```

### <a name="@immutable"></a>@immutable

Makes a deepcopy of the passed arguments and executes the method with the copy to ensure that the initial parameters are not mutated. Example:

  ```js

class Person{
  @immutable();
  doSomething( arg1 ) {
     arg1.test = 10;
  }
}

var obj = { test: 5 };
var p = new Person();
p.dosomething( obj );
console.log( obj.test ); // 5;
  ```

### <a name="@doesNotMutate"></a>@doesNotMutate

Executes the method only if it doesnt mutate the passed arguments. Useful when the class extends another class and/or calls methods from the parent. Example:

  ```js

class Person{
  @doesNotMutate();
  doSomething( arg1 ) {
     arg1.test = 10;
  }
}

var obj = { test: 5 };
var p = new Person();
p.dosomething( obj ); // throws an exception because doSomething mutates the passed object.
  ```

### <a name="@memoization"></a>@memoization

  ```js

class Person{
  @memoization();
  doSomethingTimeConsuming( arg1 ) {
     arg1.test = 10;
  }
}

var obj = { test: 5 };
var p = new Person();
p.doSomethingTimeConsuming( obj ); // calls the function
p.doSomethingTimeConsuming( obj ); // immediately returns the result without calling the function
  ```

### <a name="@log"></a>@log

  ```js

class Person{
  @log();
  doSomething(...args){
    return args.join('-');
  }
}

var p = new Person();
p.doSomething( 2 , 3 );
  ```
Will log in the console:

![Logged on console](http://oi64.tinypic.com/120ta1c.jpg "Logged on console")


### <a name="@loglocalstorage"></a>@loglocalstorage

  ```js

class Person{
  @loglocalstorage()
  doSomething(){
    localStorage.setItem('somethingonlocalstorage', "Lorem ipsum dol'or sit amet, consectetur adipiscing elit. Morbi congue urna id enim lobortis placerat. Integer commodo nulla in ipsum pharetra, ac malesuada tellus viverra. Integer aliquam semper nisi vehicula lobortis. Ut vel felis nec sem sollicitudin eleifend. Ut sem magna, vehicula in dui in, sodales ultrices arcu. Aliquam suscipit sagittis aliquet. Phasellus convallis faucibus massa, quis tincidunt nisl accumsan sed.")
  }
}

var p = new Person();
p.doSomething( );
  ```
Will log in the console something like:

![Logged on console](http://oi68.tinypic.com/n33tzo.jpg "Logged on console")


### <a name="@timeout"></a>@timeout (alias: @debounce)

  ```js

class Person{
  @timeout( 2000 );
  doSomething(){
    ...
  }
}

var p = new Person();
p.doSomething(); // Executed after 2secs
  ```


### <a name="@once()"></a>@once()

  ```js

class Person{
  @once();
  doSomething(a, b){
    return a + b;
  }
}

var p = new Person();
p.doSomething(1,2); // returns 3
p.doSomething(21,2); // keeps returning 3
p.doSomething(14,42); // keeps returning 3
  ```

### <a name="@times(n)"></a>@times(n)

  ```js

class Person{
  @times(2);
  doSomething(a, b){
    return a + b;
  }
}

var p = new Person();
p.doSomething(1,2); // returns 3
p.doSomething(21,2); // returns 23
p.doSomething(14,42); // keeps returning 23
p.doSomething(14,542); // keeps returning 23
  ```

### <a name="@timesCalled()"></a>@timesCalled()

  ```js

class Person{
  @timesCalled();
  doSomething(a, b){
    return a + b;
  }
}

var p = new Person();
p.doSomething(1,2); 
p.doSomething(21,2); 
p.doSomething(14,42); 
console.log( p.doSomething.timesCalled ); // 3
  ```
