# javascript-decorators

[![npm version](https://badge.fury.io/js/javascript-decorators.svg)](https://badge.fury.io/js/javascript-decorators)

[![Build Status](https://travis-ci.org/AvraamMavridis/javascript-decorators.svg?branch=master)](https://travis-ci.org/AvraamMavridis/javascript-decorators)

Common helpers using es7 decorators

![Splitline](http://www.centrosanisidoro.es/wp-content/themes/simplegridtheme/images/banner.png "Splitline")

## How to use

[![NPM](https://nodei.co/npm/javascript-decorators.png?compact=true)](https://nodei.co/npm/javascript-decorators/)

`npm i --save javascript-decorators`

And then to use a decorator just import it:

```js
import { log } from 'javascript-decorators'

class Person{
  @log()
  doSomething(){
    ...
  }
}
```

## Decorators

###Method decorators:

#### Validation related decorators

[@validateSchema](#@validateSchema) :  Executes the function only if the schema is valid

[@acceptsObject](#@acceptsObject)      :  Executes the function only if the passed arg is an object

[@acceptsArray](#@acceptsArray) :  Executes the function only if the passed arg is an array

[@acceptsInteger](#@acceptsInteger) :   Executes the function only if the passed arg is an integer

[@acceptsNumber](#@acceptsNumber):  Executes the function only if the passed arg is a number

[@acceptsBoolean](#@acceptsBoolean):  Executes the function only if the passed arg is a boolean

[@acceptsFunction](#@acceptsFunction):  Executes the function only if the passed arg is a function

[@acceptsString](#@acceptsString):  Executes the function only if the passed arg is a string

[@acceptsPromise](#@acceptsPromise):  Executes the function only if the passed arg is a promise

#### Immutability related decorators

[@immutable](#@immutable) :  Makes a deepcopy of the passed arguments and executes the method with the copy to ensure that the initial parameters are not mutated

[@doesNotMutate](#@doesNotMutate) :  Executes the method only if it doesnt mutate the passed arguments. Useful when the class extends another class and/or calls methods from the parent.

#### Performance related decorators

[@memoization](#@memoization) :  Use the [memoization](https://en.wikipedia.org/wiki/Memoization) technique to prevent expensive function calls.

#### Debugging & Developing decorators

[@log](#@log) : Logs the passed values and the returned result.

[@loglocalstorage](#@loglocalstorage) : Logs the size of the localstorage before and after the function call.

### Time related decorators

[@timeout](#@timeout) (alias: @debounce)  : Executes the function after the specified wait (default 300ms)

### Execution related decorators

[@once()](#@once()) : Executes the function only once. Repeat calls return the value of the first call.

[@times(n)](#@times(n)) : Executes the function at most `n` times. Repeat calls return the value of the **nth** call.

[@timesCalled()](#@timesCalled()) : Attaches a `timesCalled` property to the function that indicates how many times the function has been called.

![Splitline](http://www.centrosanisidoro.es/wp-content/themes/simplegridtheme/images/banner.png "Splitline")


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
  @acceptsObject( [0,2] );
  doSomething( obj, str, obj ) { ... }
}

  ``` 
  
### <a name="@acceptsArray"></a>@acceptsArray

Executes the method only if the passed value is an array otherwise throws an exception, accepts position (default=0) or array of positions. Example:
  
  ```js

class Person{
  @acceptsArray();
  doSomething( arr ) { ... }
}

  ``` 

### <a name="@acceptsString"></a>@acceptsString

Executes the method only if the passed value is a string otherwise throws an exception, accepts position (default=0) or array of positions. Example:
  
  ```js

class Person{
  @acceptsString();
  doSomething( str ) { ... }
}

  ``` 
  
### <a name="@acceptsInteger"></a>@acceptsInteger

Executes the method only if the passed value is an integer otherwise throws an exception, accepts position (default=0) or array of positions. Example:
  
  ```js

class Person{
  @acceptsInteger();
  doSomething( int ) { ... }
}

  ```
  
### <a name="@acceptsNumber"></a>@acceptsNumber

Executes the method only if the passed value is a number otherwise throws an exception, accepts position (default=0) or array of positions. Example:
  
  ```js

class Person{
  @acceptsNumber();
  doSomething( number ) { ... }
}

  ``` 
  
### <a name="@acceptsBoolean"></a>@acceptsBoolean

Executes the method only if the passed value is a boolean otherwise throws an exception, accepts position (default=0) or array of positions. Example:
  
  ```js

class Person{
  @acceptsBoolean();
  doSomething( bol ) { ... }
}

  ``` 
  
### <a name="@acceptsFunction"></a>@acceptsFunction

Executes the method only if the passed value is a function otherwise throws an exception, accepts position (default=0) or array of positions. Example:
  
  ```js

class Person{
  @acceptsFunction();
  doSomething( func ) { ... }
}

  ``` 
  
### <a name="@acceptsPromise"></a>@acceptsPromise

Executes the method only if the passed value is a promise otherwise throws an exception, accepts position (default=0) or array of positions. Example:
  
  ```js

class Person{
  @acceptsPromise();
  doSomething( prom ) { ... }
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
  
![Splitline](http://www.centrosanisidoro.es/wp-content/themes/simplegridtheme/images/banner.png "Splitline")

## Changelog

2016-01-06
==========

  * @timesCalled decorator
  * @once and @times decorators
  * Fix color on console.log of @loglocalstorage
  * Always return the descriptor to be able to chain decorators
  * Fix package.json
  * Update package.json
  * Update README.md
  * npmignore, index entry file, update package
  * Small refactor
  * @timeout, @debounce decorators
